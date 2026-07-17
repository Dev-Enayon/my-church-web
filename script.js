// script.js — Gospel Of Truth Mission
document.addEventListener('DOMContentLoaded', function () {

  // --- Respect reduced motion preference ---
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Hamburger Menu ---
  var hamburger = document.querySelector('.hamburger');
  var navMenu = document.querySelector('.nav-menu');
  var navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Navbar scroll behavior ---
  var navbar = document.querySelector('.navbar');
  var sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    var scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link
    var current = scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (current >= top && current < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Smooth scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var navHeight = navbar.offsetHeight;
        var top = target.offsetTop - navHeight - 16;
        window.scrollTo({ top: top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  });

  // --- Scroll reveal (IntersectionObserver) ---
  if (!prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    // Add animation classes
    var selectors = [
      '.section-header',
      '.content-text',
      '.foundation-story',
      '.foundation-pillars',
      '.mission-points',
      '.beliefs-grid',
      '.leadership-grid',
      '.programmes-grid',
      '.social-media-section',
      '.videos-section',
      '.programme-notice'
    ].join(', ');

    document.querySelectorAll(selectors).forEach(function (el) {
      el.classList.add('animate-on-scroll');
      revealObserver.observe(el);
    });

    // Cards with staggered delay
    var cardSelectors = [
      '.belief-card',
      '.point',
      '.pillar',
      '.programme-card',
      '.leader-card'
    ].join(', ');

    document.querySelectorAll(cardSelectors).forEach(function (el, i) {
      el.classList.add('animate-on-scroll');
      el.classList.add('delay-' + ((i % 4) + 1));
      revealObserver.observe(el);
    });
  } else {
    // If reduced motion, show everything immediately
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
  }
});
