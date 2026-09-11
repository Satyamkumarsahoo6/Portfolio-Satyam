/**
 * Main Application Orchestrator
 * Controls themes, mobile drawer, and bootstraps all subsystems
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Ambient Canvas
  const canvas = new ParticleNetwork('bg-canvas');

  // 2. Initialize Dynamic Role Typewriter (Targeting SWE Internship)
  const typewriter = new Typewriter('typewriter-text', [
    'Aspiring Software Engineering Intern',
    'Full-Stack Developer & Problem Solver',
    'CS Undergrad • Available Summer/Fall 2026',
    'Distributed Systems & Cloud Builder'
  ]);

  // 3. Initialize Scroll Manager (Scroll-Spy & Reveal)
  const scrollManager = new ScrollManager();

  // 4. Initialize Projects Showcase & Modal
  const projectManager = new ProjectManager();

  // 5. Initialize Contact Form & Toast Feedback
  const contactManager = new ContactManager();

  // 6. Theme Switcher Controller
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', storedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });

  // 7. Mobile Navigation Drawer
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');

  mobileToggleBtn?.addEventListener('click', () => {
    mobileToggleBtn.classList.toggle('is-active');
    navMenu?.classList.toggle('is-open');
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileToggleBtn?.classList.remove('is-active');
      navMenu?.classList.remove('is-open');
    });
  });

  // 8. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
