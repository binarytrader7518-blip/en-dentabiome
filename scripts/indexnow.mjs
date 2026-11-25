#!/usr/bin/env node
// IndexNow notifier for https://en-dentabiome.vercel.app
// Run after each deploy:  node scripts/indexnow.mjs        (only changed URLs)
//                         node scripts/indexnow.mjs --all  (every sitemap URL)
// It reads the LIVE sitemap, hashes each live page, and submits only new/changed
// canonical URLs (state kept in scripts/.indexnow-state.json). Deleted URLs that
// left the sitemap are also submitted so engines can recrawl them (they will 404).
import fs from 'node:fs';
import crypto from 'node:crypto';
const HOST = 'en-dentabiome.vercel.app';
const SITE = 'https://' + HOST;
const KEY = '387e5c05f8a5817c4f351ae0fd5bdb61';
const KEY_LOCATION = SITE + '/key.txt';
const STATE = new URL('./.indexnow-state.json', import.meta.url);
const all = process.argv.includes('--all');

async function get(url) { const r = await fetch(url, { redirect: 'manual' }); return { status: r.status, text: await r.text() }; }
async function main() {
  const k = await get(KEY_LOCATION);
  if (k.status !== 200 || k.text.trim() !== KEY) { console.error('key.txt check failed:', k.status); process.exit(1); }
  const sm = await get(SITE + '/sitemap.xml');
  const urls = [...sm.text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]).filter(u => u.startsWith(SITE));
  let state = {}; try { state = JSON.parse(fs.readFileSync(STATE, 'utf8')); } catch {}
  const next = {}, changed = [];
  for (const u of urls) {
    const r = await get(u);
    if (r.status !== 200) { console.warn('skip (status ' + r.status + '):', u); continue; }
    const body = r.text.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
    const h = crypto.createHash('sha256').update(body).digest('hex');
    next[u] = h; if (all || state[u] !== h) changed.push(u);
  }
  for (const u of Object.keys(state)) if (!(u in next)) changed.push(u); // removed pages
  if (!changed.length) { console.log('No changed URLs. Nothing submitted.'); return; }
  for (let i = 0; i < changed.length; i += 10000) {
    const batch = changed.slice(i, i + 10000);
    for (let attempt = 1; attempt <= 3; attempt++) {
      const r = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch }) });
      console.log('IndexNow response', r.status, '(' + batch.length + ' URLs)');
      if (r.status === 200 || r.status === 202) break;
      if (r.status === 429 || r.status >= 500) { await new Promise(s => setTimeout(s, 2000 * attempt)); continue; }
      console.error(await r.text()); process.exit(1);
    }
  }
  fs.writeFileSync(STATE, JSON.stringify(next, null, 2));
  console.log('Submitted:\n' + changed.join('\n'));
  console.log('Note: 200/202 means IndexNow received the URLs. It does not guarantee indexing.');
}
main().catch(e => { console.error(e); process.exit(1); });
