// script.js — Gospel Of Truth Mission
document.addEventListener('DOMContentLoaded', function () {

  // --- Hamburger Menu ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --- Active Nav Link on Scroll ---
  const sections = document.querySelectorAll('section[id]');

  function highlightNavLink() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink, { passive: true });
  highlightNavLink();

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 10;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Scroll Reveal Animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  function initScrollAnimations() {
    // Section headers
    document.querySelectorAll('.section-header').forEach(el => {
      el.classList.add('animate-on-scroll');
      scrollObserver.observe(el);
    });

    // Cards and content blocks
    document.querySelectorAll('.belief-card, .point, .pillar, .programme-card, .leader-card, .video-card').forEach((el, i) => {
      el.classList.add('animate-on-scroll');
      el.classList.add('delay-' + ((i % 4) + 1));
      scrollObserver.observe(el);
    });

    // Content sections
    document.querySelectorAll('.content-text, .foundation-story, .foundation-pillars, .mission-points, .beliefs-grid, .leadership-grid, .programmes-grid, .social-media-section, .videos-section, .programme-notice').forEach(el => {
      el.classList.add('animate-on-scroll');
      scrollObserver.observe(el);
    });
  }

  initScrollAnimations();

  // --- Social Button Click Feedback ---
  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      this.style.transform = 'translateY(-2px) scale(0.97)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });
});
