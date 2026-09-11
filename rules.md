# Project Guidelines, Standards & Rules

**Project:** Modern Developer & Engineering Portfolio  
**Status:** Active  
**Version:** 1.0.0  

This document defines the strict design, code quality, accessibility, performance, and version control rules to maintain consistency, maintainability, and aesthetic excellence throughout the portfolio project lifecycle.

---

## 1. Design & UI/UX Principles

### 1.1. Visual Aesthetics & Polish
* **Dark Mode First:** Default theme is deep slate (`#0B0F17` / `#0F172A`) paired with electric cyan (`#38BDF8`) and vibrant indigo (`#6366F1`) accents.
* **Glassmorphism:** Use subtle translucent cards (`rgba(30, 41, 59, 0.65)` to `rgba(15, 23, 42, 0.8)`) with `backdrop-filter: blur(12px)` and 1px semi-transparent borders (`rgba(255, 255, 255, 0.08)`).
* **Avoid Generic Defaults:** Never use unstyled raw HTML elements or harsh, uncalibrated primary colors (e.g., pure `#FF0000` or `#0000FF`). Use calibrated HSL tokens defined in `css/variables.css`.
* **Micro-Interactions:** Interactive elements must have subtle hover states (e.g., elevation lift `-4px`, glowing radial gradient borders, or smooth color shifts with transitions between `150ms` and `250ms`).
* **Visual Continuity:** Maintain consistent border-radii (`8px`, `12px`, `16px`), padding scales, and font scales across all components.

### 1.2. Typography Rules
* **Font Stacks:**
  * **Headings / Display:** Modern geometric sans (e.g., *Space Grotesk*, *Outfit*, or *Inter*).
  * **Body Copy:** Clean legible sans (e.g., *Inter*, *Plus Jakarta Sans*).
  * **Code / Technical Badges:** Monospace font (e.g., *JetBrains Mono*, *Fira Code*).
* **Hierarchy:** One single `<h1>` tag per page. Maintain strict sequential heading order (`<h1>` &rarr; `<h2>` &rarr; `<h3>`).
* **Line Length & Spacing:** Max text column width of `65ch` to `75ch` for long-form paragraphs to optimize readability.

---

## 2. Code Quality & Architecture Standards

### 2.1. HTML Standards
* **Semantic Elements:** Always use semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) instead of generic nested `<div>`s.
* **SEO Metadata:** Every page must include complete metadata: title, description, canonical link, OpenGraph tags, Twitter cards, and JSON-LD structured schema.
* **Interactive Elements:** Buttons must use `<button type="button|submit">`, and navigation must use `<a href="...">`. Never attach click handlers to unstyled `<div>`s without proper `role` and `tabindex`.
* **Unique IDs:** All major interactive and target elements must have descriptive, kebab-case IDs (e.g., `id="contact-form"`, `id="project-filters"`).

### 2.2. CSS Standards
* **CSS Variables & Tokens:** All colors, spacing units, border-radii, transitions, and z-indices must be sourced from CSS variables defined in `:root`. No magic numbers or hardcoded hex colors inside component selectors.
* **Layouts:** Use CSS Grid for 2D card layouts and Flexbox for 1D navigation/toolbars. Avoid float-based positioning.
* **Responsive Breakpoints:** Mobile-first approach using standardized media queries:
  * Small / Mobile: `< 640px`
  * Medium / Tablet: `640px - 1024px`
  * Large / Desktop: `> 1024px`
  * Widescreen: `> 1280px`
* **Performance:** Avoid expensive layout thrashing properties during animation. Animate exclusively using `transform` and `opacity`.

### 2.3. JavaScript Standards
* **Modern ES6+ Syntax:** Use `const`/`let`, arrow functions, destructuring, template literals, and async/await syntax.
* **Modular Code:** Split logic into dedicated controllers (e.g., `canvas.js`, `scroll-spy.js`, `project-filter.js`, `contact.js`).
* **Event Optimization:** Use `IntersectionObserver` for scroll-triggered events rather than scroll listeners. When scroll or resize listeners are necessary, wrap them in `requestAnimationFrame` or `debounce`.
* **Error Handling:** Every `fetch()` or async promise must be wrapped in `try / catch` blocks with user-friendly error fallbacks.

---

## 3. Accessibility (a11y) & WCAG AA Compliance

* **Color Contrast:** All body text must achieve a minimum contrast ratio of `4.5:1` against its background (and `3:1` for large text/headings).
* **Keyboard Navigation:** Every interactive element (buttons, links, inputs, modal triggers) must be reachable via `Tab` and show a distinct, accessible `:focus-visible` outline.
* **Modal Accessibility:** Modals must trap focus while open, close on `Escape` press, and restore focus to the triggering element upon dismissal.
* **Alt Text:** Every `<img>` tag must include descriptive `alt` text. Decorative icons/graphics must have `aria-hidden="true"`.
* **Reduced Motion:** Honor user OS preferences with `@media (prefers-reduced-motion: reduce)` by disabling or simplifying intense canvas and transition animations.

---

## 4. Performance & Asset Guidelines

* **Lighthouse Targets:** 
  * Performance: **95+**
  * Accessibility: **98+**
  * Best Practices: **100**
  * SEO: **100**
* **Image Assets:**
  * Convert project screenshots to modern formats (`.webp` or `.avif`).
  * Always provide explicit `width` and `height` attributes to eliminate Cumulative Layout Shift (CLS).
  * Use `loading="lazy"` for all below-the-fold images.
* **Canvas Lifecycle:** Pause or throttle the 2D background canvas render loop when the browser tab is hidden using the `document.visibilitychange` API.

---

## 5. Security & Privacy Rules

* **Zero Committed Secrets:** Never commit API keys, service tokens, or private credentials to the repository.
* **Form Protection:** Sanitize all user inputs on the contact form to guard against XSS and inject `rel="noopener noreferrer"` into all external anchor links (`target="_blank"`).
* **Privacy:** If implementing analytics, use lightweight, cookie-less, GDPR-compliant solutions (e.g., Cloudflare Web Analytics, Plausible, or Umami).

---

## 6. Git & Contribution Workflow

### 6.1. Commit Message Convention (Conventional Commits)
Follow the standardized prefix format:
* `feat:` A new feature or section (e.g., `feat(projects): add interactive category filter`)
* `fix:` A bug fix (e.g., `fix(canvas): resolve memory leak on mobile resize`)
* `style:` UI styling, typography, or theme tweaks with no logic change
* `refactor:` Code restructuring without changing external behavior
* `docs:` Documentation updates (PRD, architecture, rules, README)
* `perf:` A code change that improves rendering or load performance

### 6.2. PR / Review Checklist Before Deployment
- [ ] Responsive layout validated on mobile (375px), tablet (768px), and desktop (1440px).
- [ ] Keyboard tab navigation and focus rings tested.
- [ ] Lighthouse audit executed with 95+ target across all categories.
- [ ] No browser console errors, warnings, or broken asset links.
- [ ] Dark / light mode contrast verified across all sections.
