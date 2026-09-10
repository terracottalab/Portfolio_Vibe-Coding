/* ============================================
   MAIN — Navigation & Scroll
   ============================================ */

(function () {
  'use strict';

  /* ── DOM Elements ── */

  const nav = document.getElementById('nav');
  const burger = document.getElementById('nav-burger');
  const overlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav__link');
  const overlayLinks = document.querySelectorAll('.nav-overlay__link');
  const sections = document.querySelectorAll('.section, .hero');

  /* ── Mobile Menu ── */

  function toggleMenu() {
    const isOpen = overlay.classList.contains('active');

    burger.classList.toggle('active');
    overlay.classList.toggle('active');
    burger.setAttribute('aria-expanded', !isOpen);
    overlay.setAttribute('aria-hidden', isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMenu() {
    burger.classList.remove('active');
    overlay.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', toggleMenu);

  overlayLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeMenu();
    }
  });

  /* ── Active Nav Link on Scroll ── */

  function updateActiveLink() {
    var scrollY = window.scrollY + nav.offsetHeight + 100;
    var current = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollY) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  /* ── Smooth Scroll for Nav Links ── */

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        var offset = nav.offsetHeight + 32;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── Scroll Listener (throttled) ── */

  var ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateActiveLink();

})();
