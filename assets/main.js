/* DentaBiome site scripts: mobile nav, reveal, 3D tilt, promo modal, info toast, sticky offer bar, order-page package highlight */
(function () {
  'use strict';
  var doc = document.documentElement;
  var ROOT = (document.currentScript && document.currentScript.src || '').replace(/assets\/main\.js.*$/, '');
  doc.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function store(get, key, val) {
    try {
      if (get) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, val);
    } catch (e) { return null; }
    return null;
  }

  /* Mobile navigation */
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); burger.focus();
      }
    });
  }

  /* Reveal on scroll */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  /* Pointer tilt on the hero bottle */
  var stage = document.querySelector('.stage');
  var bottle = document.querySelector('.bottle3d');
  if (stage && bottle && !reduce && window.matchMedia('(pointer:fine)').matches) {
    stage.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      bottle.style.setProperty('--ry', (x * 16).toFixed(2) + 'deg');
      bottle.style.setProperty('--rx', (-y * 10).toFixed(2) + 'deg');
    });
    stage.addEventListener('pointerleave', function () {
      bottle.style.setProperty('--ry', '0deg'); bottle.style.setProperty('--rx', '0deg');
    });
  }

  /* Outbound click hook (no personal data) */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-pkg]');
    if (a && window.dataLayer && window.dataLayer.push) window.dataLayer.push({ event: 'order_click', package: a.getAttribute('data-pkg') });
  });

  /* Order page: highlight requested package */
  var params = new URLSearchParams(window.location.search);
  var pk = params.get('package');
  if (pk && /^(2|3|6)$/.test(pk)) {
    var card = document.getElementById('pack-' + pk);
    if (card) { card.classList.add('sel'); setTimeout(function () { card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); }, 250); }
  }

  /* Sticky offer bar: shows after the hero */
  var sticky = document.querySelector('.sticky');
  if (sticky) {
    var onScroll = function () { sticky.classList.toggle('show', window.scrollY > 640); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* Promo modal: ~6.5s after load, 24h cooldown */
  var modal = document.getElementById('promo');
  var toast = document.getElementById('toast');
  var KEY = 'db_promo_closed';
  var lastFocus = null;
  var toastStarted = false;
  function canShowModal() {
    if (!modal || document.body.hasAttribute('data-no-promo')) return false;
    var t = parseInt(store(true, KEY) || '0', 10);
    return !(t && Date.now() - t < 24 * 3600 * 1000);
  }
  function focusables() { return modal.querySelectorAll('a[href],button:not([disabled])'); }
  function openModal() {
    if (toast) toast.classList.remove('show');
    lastFocus = document.activeElement;
    modal.hidden = false;
    requestAnimationFrame(function () { modal.classList.add('show'); });
    document.body.classList.add('modal-open');
    var f = focusables(); if (f.length) f[0].focus();
  }
  function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    store(false, KEY, String(Date.now()));
    setTimeout(function () { modal.hidden = true; }, 320);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    startToast(5000);
  }
  if (modal) {
    modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('[data-close]')) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('show')) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'Tab') {
        var f = focusables(); var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* Informational toast: first ~5s, visible ~6s, repeats every 18–26s, never while the modal is open */
  var msgs = [
    '<b>Compare packages</b> — DentaBiome comes in 2, 3 and 6 bottle options. <a href="' + ROOT + 'order.html?package=6" data-pkg="6">See options</a>',
    '<b>60-day money-back guarantee</b> is offered by the seller on DentaBiome orders.',
    '<b>Two bonus eBooks</b> are included with the 3- and 6-bottle packages.',
    '<b>Free US shipping</b> applies to the 3- and 6-bottle DentaBiome packages.',
    '<b>6 bottles at $49 each</b> — the lowest per-bottle price listed by the seller. <a href="' + ROOT + 'order.html?package=6" data-pkg="6">View offer</a>'
  ];
  var mi = 0, toastTimer = null, toastClosed = false;
  function showToast() {
    if (!toast || toastClosed) return;
    if (modal && modal.classList.contains('show')) { schedule(); return; }
    toast.querySelector('p').innerHTML = msgs[mi % msgs.length]; mi++;
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); schedule(); }, 6000);
  }
  function schedule() { clearTimeout(toastTimer); if (!toastClosed) toastTimer = setTimeout(showToast, 18000 + Math.random() * 8000); }
  function startToast(delay) { if (toastStarted || !toast) return; toastStarted = true; toastTimer = setTimeout(showToast, delay); }
  if (toast) {
    toast.querySelector('.tx').addEventListener('click', function () { toast.classList.remove('show'); toastClosed = true; clearTimeout(toastTimer); });
  }

  function boot() {
    if (canShowModal()) setTimeout(openModal, 6500);
    else startToast(5000);
  }
  if (document.readyState === 'complete') boot(); else window.addEventListener('load', boot);
})();
