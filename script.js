/**
 * AMC Sweep – Single-page site behaviour
 * - Sticky header: transparent at top, solid on scroll
 * - Scroll-reveal: fade up / slide in with Intersection Observer
 * - Mobile nav toggle
 * - Contact form: open mailto with subject and body
 */

(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  var contactForm = document.querySelector('.contact-form');

  // ---------- Header: transparent at top, solid on scroll ----------
  function updateHeader() {
    if (!header) return;
    var scrolled = window.scrollY || window.pageYOffset;
    var threshold = 80;
    if (scrolled > threshold) {
      header.classList.add('is-solid');
    } else {
      header.classList.remove('is-solid');
    }
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(updateHeader);
  }, { passive: true });
  updateHeader(); // run once on load

  // ---------- Mobile nav toggle ----------
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close nav when clicking a link (for in-page anchors)
    mainNav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // ---------- Scroll-reveal: Intersection Observer ----------
  var revealEls = document.querySelectorAll('.scroll-reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px', // trigger when element is 40px from bottom of viewport
        threshold: 0.1
      }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ---------- Contact form: mailto with subject and body ----------
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameEl = contactForm.querySelector('#name');
      var phoneEl = contactForm.querySelector('#phone');
      var emailEl = contactForm.querySelector('#email');
      var messageEl = contactForm.querySelector('#message');
      var name = (nameEl && nameEl.value) || '';
      var phone = (phoneEl && phoneEl.value) || '';
      var email = (emailEl && emailEl.value) || '';
      var message = (messageEl && messageEl.value) || '';
      var subject = 'AMC Sweep – Website enquiry from ' + (name || 'Customer');
      var body = 'Name: ' + name + '\nPhone: ' + phone + '\nEmail: ' + email + '\n\nMessage:\n' + message;
      var mailto = 'mailto:aidan@amcsweep.ie?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
    });
  }
})();
