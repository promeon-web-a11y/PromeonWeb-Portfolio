/* =====================================================================
   株式会社北翠園 — サンプルサイト 共通スクリプト（全ページ）
   DESIGN.md §9 の方針に準拠：動きは1種類のフェードアップに統一。
   ・モバイルナビ開閉
   ・スクロール時のヘッダー境界
   ・トップFVのイントロ演出（.hero がある時のみ）
   ・スクロールインアニメーション（[data-animate]、初回1回）
   ・お問い合わせフォームの確認パネル（#contact-form がある時のみ）
   ===================================================================== */
(function () {
  "use strict";

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* --- mobile navigation --- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (header && toggle && nav) {
    var setNav = function (open) {
      header.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    };
    toggle.addEventListener('click', function () { setNav(!header.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1023) setNav(false); });
  }

  /* --- header shadow on scroll --- */
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 4);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- hero intro sequence (トップのみ / DESIGN.md §1 / §9) --- */
  var hero = document.querySelector('.hero');
  if (hero) {
    if (reduce.matches) {
      hero.classList.add('hero-in');
    } else {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { hero.classList.add('hero-in'); });
      });
    }
  }

  /* --- scroll-in animation: one motion, once (DESIGN.md §9) --- */
  var animated = Array.prototype.slice.call(document.querySelectorAll('[data-animate]'));
  if (reduce.matches || !('IntersectionObserver' in window)) {
    animated.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    animated.forEach(function (el) { io.observe(el); });
  }

  /* --- contact form (no backend wired / company.html) --- */
  var form = document.getElementById('contact-form');
  var done = document.getElementById('contact-done');
  var reset = document.getElementById('contact-reset');
  if (form && done) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.hidden = true;
      done.hidden = false;
      done.classList.add('is-visible');
      done.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' });
    });
  }
  if (reset && form && done) {
    reset.addEventListener('click', function () {
      form.reset();
      done.hidden = true;
      form.hidden = false;
      form.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' });
    });
  }
})();
