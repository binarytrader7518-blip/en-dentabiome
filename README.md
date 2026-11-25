# DentaBiome — en-dentabiome.vercel.app

A static multi-page site (plain HTML/CSS/JS, no build step) for Vercel.

## Deploy
1. Upload this folder's contents to a Git repo, or run `vercel --prod` from this folder. Leave index.html and order.html at the root.
2. Attach the domain en-dentabiome.vercel.app to the project.
3. `vercel.json` sets up:
   - `/order` → serves order.html, with noindex,follow.
   - `/go/2`, `/go/3`, `/go/6` → server-side **302** to https://getdentabiome.me/?aff_id=11694. This is a fixed allowlist with no `?url=` parameter, so it can't be used as an open redirect. Any other `/go/*` path returns 404.
   - `no-store` caching on the redirects.
4. `.vercelignore` keeps `scripts/` and the `.md` reports from being deployed.

## Purchase flow
Every buy button on the site goes to the order page (order.html?package=2, 3 or 6; /order also works on Vercel). On order.html, the Buy Now buttons link straight to the exact affiliate URL, with rel="sponsored nofollow noopener".

## After deploying, check
- https://en-dentabiome.vercel.app/key.txt returns 200 with `387e5c05f8a5817c4f351ae0fd5bdb61`
- https://en-dentabiome.vercel.app/sitemap.xml and /robots.txt load
- /go/6 returns 302 to the affiliate URL, and /go/9 returns 404

## IndexNow
- Key: `387e5c05f8a5817c4f351ae0fd5bdb61`, file: /key.txt
- After each deploy run `node scripts/indexnow.mjs`. It submits only changed sitemap URLs. Use `--all` the first time.

## Bing Webmaster Tools checklist
1. Sign in at bing.com/webmasters and add https://en-dentabiome.vercel.app/. Verify it with the HTML meta tag (add it to the head of index.html) or the XML file option, or import the site from Google Search Console.
2. Sitemaps → submit https://en-dentabiome.vercel.app/sitemap.xml
3. URL Submission → paste the URL list from the chat summary.
4. URL Inspection → check the homepage, /price.html and /product-review.html.
5. IndexNow → confirm received URLs after running the script.
6. Watch the Crawl, Indexing and Search Performance reports (impressions, clicks, queries).
Do the same in Google Search Console with the same sitemap.
