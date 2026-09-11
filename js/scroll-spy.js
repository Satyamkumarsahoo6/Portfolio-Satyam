/**
 * Scroll-Spy & Staggered Reveal Controller
 * Native IntersectionObserver implementation for optimal 60fps performance
 */

class ScrollManager {
  constructor() {
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section[id]');
    this.header = document.querySelector('.site-header');
    this.revealElements = document.querySelectorAll('[data-reveal]');

    this.init();
  }

  init() {
    this.initHeaderScroll();
    this.initScrollSpy();
    this.initRevealObserver();
  }

  initHeaderScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        this.header?.classList.add('is-scrolled');
      } else {
        this.header?.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  initScrollSpy() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    this.sections.forEach((section) => spyObserver.observe(section));
  }

  initRevealObserver() {
    const revealOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    this.revealElements.forEach((el, index) => {
      // Add subtle stagger delay
      el.style.transitionDelay = `${(index % 4) * 120}ms`;
      revealObserver.observe(el);
    });
  }
}
