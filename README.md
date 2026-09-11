# Modern Developer Portfolio

A modern, responsive, high-performance portfolio website built with zero heavy framework overhead, adhering strictly to modern web standards, glassmorphic design systems, and responsive accessibility.

---

## Features
- **Design System**: Dark-mode-first aesthetic with calibrated HSL tokens, glassmorphic card backdrops, glowing gradient accents, and seamless light mode toggle.
- **Ambient 2D Canvas**: Hardware-accelerated particle network with mouse repulsion, line physics, and browser tab background throttling.
- **Interactive Role Typer**: Dynamic headline role switcher with smooth character typing and deleting loop.
- **Filterable Projects Showcase**: Instant client-side category filtering (Full-Stack, Frontend, Backend & Cloud, AI/ML) and accessible case study modal drawer with keyboard focus handling.
- **Experience Timeline**: Structured vertical career path with achievement bullet points and key metrics.
- **Contact Form & Toast System**: Client-side field validation, regex email checking, loading state indicators, and animated toast notifications.
- **Performance & SEO**: Fully populated JSON-LD Structured Data Schema, OpenGraph metadata, Twitter Cards, Semantic HTML5 hierarchy, and Lighthouse 95+ target optimizations.

---

## Project Structure
```text
portfolio/
├── PRD.md                     # Product Requirements Document
├── architecture.md            # System Architecture & Technical Design
├── rules.md                   # Code Quality, Accessibility & Git Rules
├── README.md                  # Project Documentation
├── index.html                 # Root semantic HTML entrypoint
├── css/
│   ├── variables.css          # Design tokens, color palette, typography
│   ├── base.css               # CSS reset, utilities, animations
│   ├── styles.css             # Main stylesheet orchestrator
│   └── components/
│       ├── navbar.css         # Header, active scroll-spy, mobile drawer
│       ├── hero.css           # Hero greeting, badges, dynamic typer, code preview
│       ├── cards.css          # Spotlight cards, stats grid, project cards, skill pills
│       ├── timeline.css       # Experience & milestone tree
│       ├── modal.css          # Project case study modal dialog
│       └── form.css           # Contact inputs, validation states, footer, toasts
└── js/
    ├── canvas.js              # Ambient 2D interactive particle network
    ├── typewriter.js          # Dynamic role text animation
    ├── scroll-spy.js          # IntersectionObserver active navigation & scroll reveals
    ├── project-filter.js      # Project catalog, category filtering & modal controller
    ├── contact.js             # Form validation & asynchronous dispatch pipeline
    └── app.js                 # App initialization, theme manager & mobile menu
```

---

## Local Development
To preview the website locally, open `index.html` directly in any modern web browser or run a lightweight local HTTP server:

```bash
# Using Python 3 built-in server:
python -m http.server 8080

# Using Node.js npx serve:
npx -y serve .
```
Then navigate to `http://localhost:8080` in your browser.

---

## Deployment Options
* **GitHub Pages**: Push this repository to GitHub and enable Pages in repository settings under the `main` branch.
* **Vercel**: Import the GitHub repository or run `vercel` in your CLI.
* **Netlify**: Drag and drop the portfolio directory or connect via Git.
