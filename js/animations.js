/* ============================================
   ANIMATIONS — Scroll Reveal
   ============================================ */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal, .reveal-line').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  /* ── Intersection Observer for Reveal ── */

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.dataset.delay || 0;

          setTimeout(function () {
            el.classList.add('visible');
          }, parseInt(delay, 10));

          revealObserver.unobserve(el);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  /* ── Observe all reveal elements ── */

  document.querySelectorAll('.reveal, .reveal-line').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── Staggered reveals within containers ── */

  document.querySelectorAll('.work__row, .process__steps, .toolkit__grid, .approach__list').forEach(function (container) {
    var children = container.querySelectorAll('.reveal');
    children.forEach(function (child, i) {
      child.dataset.delay = i * 120;
    });
  });

  /* ── Stagger exploring items ── */

  document.querySelectorAll('.exploring__list .reveal').forEach(function (item, i) {
    item.dataset.delay = i * 80;
  });

  /* ── Stagger approach list ── */

  document.querySelectorAll('.approach__list .reveal').forEach(function (item, i) {
    item.dataset.delay = i * 80;
  });

})();
