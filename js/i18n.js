/* ============================================
   i18n — Language Switching (RU / EN)
   ============================================ */

(function () {
  'use strict';

  /* ── Translation Map ──
     Each entry: [selector, index, englishHTML]
     - selector: CSS selector for the element
     - index:    which match (0-based) when multiple elements match
     - en:       English translation (innerHTML)
  ──────────────────────── */

  var map = [

    /* ── Hero ── */
    ['.hero__role', 0,
      'AI & Digital Builder'],
    ['.hero__heading', 0,
      'I\u00a0bring ideas to\u00a0life and\u00a0optimize complex processes into working digital\u00a0solutions.'],
    ['.hero__subheading', 0,
      'Websites, AI\u2011tools, apps and automations\u00a0\u2014 from structure and logic to\u00a0a\u00a0working prototype.'],
    ['.hero__note', 0,
      'My approach combines systems thinking from finance, understanding of\u00a0business processes and the capabilities of\u00a0modern AI\u2011development.'],
    ['.hero__cta .btn__text', 0,
      'View Projects'],
    ['.hero__cta .btn__text', 1,
      'Discuss an Idea'],

    /* ── Project 01 ── */
    ['.project-card__desc', 0,
      'International bilingual website dedicated to\u00a0Norwich Terrier and\u00a0Bellami\u2011Elan Parelyada (Pari). Breed information, show career, photos, pedigree and communication with potential owners.'],

    /* ── Project 02 ── */
    ['.project-card__desc', 1,
      'Personal landing page for an\u00a0expert. A\u00a0website built around professional journey, expertise and trust in\u00a0personal brand.'],

    /* ── Project 03 ── */
    ['.project-card__desc', 2,
      'Web\u2011tool for analyzing and structuring construction estimates. User uploads an\u00a0estimate\u00a0\u2014 the system breaks down items by\u00a0work type and displays the budget structure.'],

    /* ── Project 04 ── */
    ['.project-card__desc', 3,
      'A\u00a0concept for a\u00a0personal system for managing university studies: disciplines, materials, lectures, assignments, deadlines, progress and AI\u2011assistant in\u00a0a\u00a0single workspace.'],

    /* ── Project 05 ── */
    ['.project-card__desc', 4,
      'A\u00a0concept for a\u00a0personal system for managing tasks, finances and administrative processes. Tasks, calendar, deadlines, income &\u00a0expenses, taxes, invoices, reminders\u00a0\u2014 all processes in\u00a0one system.'],

    /* ── About ── */
    ['.about__heading', 0,
      'Not just code.<br>First, I\u00a0figure out how the system should work.'],
    ['.about__text p', 0,
      'My core professional background is\u00a0finance, financial methodology and business process optimization.'],
    ['.about__text p', 1,
      'Working with complex operational systems, I\u2019ve learned to\u00a0see not just a\u00a0single task, but the entire process: data, connections, checkpoints, risks and the final outcome.'],
    ['.about__text p', 2,
      'AI and vibe coding gave me the ability to\u00a0bring the same approach to\u00a0digital products.'],
    ['.about__text p', 3,
      'Now an\u00a0idea can be\u00a0not only described\u00a0\u2014 it\u00a0can be\u00a0quickly turned into a\u00a0prototype, tested and gradually brought to\u00a0a\u00a0working solution.'],
    ['.about__text p', 4,
      'That\u2019s why my projects sit at\u00a0the intersection of:'],

    /* ── Services ── */
    ['.services__item-desc', 0,
      'Landing pages, personal websites, expert and specialized web\u2011projects.'],
    ['.services__item-desc', 1,
      'Product and interface prototypes where AI\u00a0becomes part of\u00a0the user scenario.'],
    ['.services__item-desc', 2,
      'Calculators, dashboards, internal tools and data processing systems.'],
    ['.services__item-desc', 3,
      'Solutions for processes where manual repetitive actions can be\u00a0replaced with logic, integrations and\u00a0AI.'],
    ['.services__item-desc', 4,
      'Fast transition from idea and requirements to\u00a0an\u00a0MVP that can already be\u00a0shown and tested.'],

    /* ── Process ── */
    ['.process__intro-heading', 0,
      'From complexity to\u00a0clarity.'],
    ['.process__step-desc', 0,
      'First, I\u00a0figure out what problem actually needs to\u00a0be\u00a0solved.'],
    ['.process__step-desc', 1,
      'I\u00a0define the information, logic, user flow and product architecture.'],
    ['.process__step-desc', 2,
      'I\u00a0use AI\u2011assisted development to\u00a0quickly create a\u00a0working first version.'],
    ['.process__step-desc', 3,
      'I\u00a0test scenarios, find weak spots, refine and then publish.'],

    /* ── Approach ── */
    ['.approach__heading', 0,
      'Technology moves fast.<br>Good judgement matters\u00a0more.'],
    ['.approach__text', 0,
      'Today AI\u00a0significantly accelerates digital product creation. That\u2019s why value lies less in\u00a0mechanically writing every line of\u00a0code and more\u00a0\u2014 in\u00a0the ability to:'],
    ['.approach-item > span:last-child', 0, 'Define the task'],
    ['.approach-item > span:last-child', 1, 'Determine the architecture'],
    ['.approach-item > span:last-child', 2, 'Understand the user'],
    ['.approach-item > span:last-child', 3, 'See the business process'],
    ['.approach-item > span:last-child', 4, 'Choose the right tools'],
    ['.approach-item > span:last-child', 5, 'Verify the result'],
    ['.approach-item > span:last-child', 6, 'Tell a\u00a0working product from a\u00a0beautiful demo'],
    ['.approach__statement', 0,
      'This is\u00a0my approach.'],

    /* ── Exploring ── */
    ['.exploring__heading', 0,
      'Directions<br>I\u2019m currently exploring'],

    /* ── Contact ── */
    ['.contact__heading', 0,
      'Have an\u00a0idea worth bringing to\u00a0life as\u00a0a\u00a0working product?'],
    ['.contact__text', 0,
      'If\u00a0you have a\u00a0task, process or idea that can be\u00a0brought to\u00a0life as\u00a0a\u00a0website, digital tool or AI\u00a0product\u00a0\u2014 let\u2019s talk.'],
    ['.contact__cta .btn__text', 0,
      'Discuss a Project'],
    ['.contact__cta .btn__text', 1,
      'Write to Me'],

    /* ── Case Study (if on that page) ── */
    ['.cs-hero__back', 0, '\u2190 All Projects'],
    ['.cs-hero__desc', 0,
      'International bilingual website dedicated to\u00a0Norwich Terrier and\u00a0Bellami\u2011Elan Parelyada (Pari).']
  ];


  /* ── State ── */

  var originalHTML = {};
  var currentLang = 'ru';

  /* ── Initialize: store original Russian HTML ── */

  function init() {
    map.forEach(function (entry, i) {
      var el = getElement(entry[0], entry[1]);
      if (el) {
        originalHTML[i] = el.innerHTML;
      }
    });

    var saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en') {
      setLanguage('en', false);
    }

    bindToggle();
  }

  /* ── Get element by selector + index ── */

  function getElement(selector, index) {
    var els = document.querySelectorAll(selector);
    return els[index] || null;
  }

  /* ── Set Language ── */

  function setLanguage(lang, save) {
    currentLang = lang;
    if (save !== false) {
      localStorage.setItem('portfolio-lang', lang);
    }

    map.forEach(function (entry, i) {
      var el = getElement(entry[0], entry[1]);
      if (!el) return;

      if (lang === 'en') {
        el.innerHTML = entry[2];
      } else {
        if (originalHTML[i] !== undefined) {
          el.innerHTML = originalHTML[i];
        }
      }
    });

    document.documentElement.setAttribute('lang', lang);
    updateToggleUI(lang);
  }

  /* ── Toggle UI ── */

  function updateToggleUI(lang) {
    document.querySelectorAll('.nav__lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  /* ── Bind Toggle Buttons ── */

  function bindToggle() {
    document.querySelectorAll('.nav__lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = this.dataset.lang;
        if (lang !== currentLang) {
          setLanguage(lang, true);
        }
      });
    });
  }

  /* ── Start ── */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
