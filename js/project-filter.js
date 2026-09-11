/**
 * Project Data Store, Tag Filtering & Modal Controller
 */

const PROJECTS_DATA = [
  {
    id: 'cloud-devops-platform',
    title: 'Distributed Cloud Orchestration Engine',
    category: 'fullstack',
    badge: 'Featured',
    description: 'A high-throughput distributed task scheduler and microservices deployment runner with real-time log streaming, health metrics, and automated canary rollouts.',
    longDescription: 'Engineered an end-to-end cloud orchestration platform capable of executing over 10,000 asynchronous task jobs per minute with sub-100ms dispatch latency. Integrated WebSocket-driven live metric dashboards, automated fault detection, and custom load-balancing algorithms.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tags: ['Go', 'TypeScript', 'Docker', 'Redis', 'Kubernetes', 'WebSockets'],
    architecture: 'Microservices architecture with Redis Pub/Sub event bus, Go worker clusters, and Next.js frontend.',
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'ai-analytics-dashboard',
    title: 'AI-Powered Business Intelligence Suite',
    category: 'ai',
    badge: 'AI / ML',
    description: 'Predictive analytics SaaS dashboard generating natural language query insights, anomaly alerts, and revenue forecasts from multi-million row datasets.',
    longDescription: 'Designed a responsive analytics workbench with custom SVG charting, LLM semantic search across enterprise SQL databases, and automated anomaly detection pipelines processing over 5M records daily.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'TailwindCSS', 'OpenAI'],
    architecture: 'FastAPI asynchronous inference server with pgvector embeddings cache and React client UI.',
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'realtime-collab-canvas',
    title: 'Real-Time Vector Canvas & Wireframing Tool',
    category: 'frontend',
    badge: 'Frontend',
    description: 'Browser-based 60fps multiplayer vector editing canvas with CRDT-based conflict-free data replication, infinite zoom, and smart layout snapping.',
    longDescription: 'Created a collaborative whiteboard application with custom WebGL & Canvas render engine, operational transformation algorithms for multiplayer sync, and SVG/PDF export capabilities.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['TypeScript', 'WebGL', 'HTML5 Canvas', 'WebRTC', 'Zustand'],
    architecture: 'Custom 2D scene graph engine with WebRTC peer mesh and Yjs CRDT synchronization.',
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'fintech-crypto-gateway',
    title: 'High-Frequency FinTech Payment Gateway',
    category: 'backend',
    badge: 'Backend',
    description: 'PCI-DSS compliant payment processing engine with idempotent transaction guarantees, webhook retry mechanisms, and sub-second settlement hooks.',
    longDescription: 'Constructed an institutional-grade payment gateway handling multi-currency settlements with ACID transactional safety, tokenized vaults, and automated reconciliation workflows.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Node.js', 'PostgreSQL', 'Stripe API', 'Redis', 'Jest', 'Docker'],
    architecture: 'Event-driven ledger with double-entry bookkeeping schemas and BullMQ distributed queues.',
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'mobile-health-tracker',
    title: 'Cross-Platform Vitality Health Tracker',
    category: 'fullstack',
    badge: 'Mobile / Web',
    description: 'Offline-first biometric analytics app synchronizing wearable IoT data, sleep stage scoring, and personalized nutrition recommendations.',
    longDescription: 'Developed an offline-first mobile and progressive web application syncing Bluetooth LE wearable sensors, with biometric graphing and background sync workers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'TypeScript', 'GraphQL', 'SQLite', 'Node.js'],
    architecture: 'GraphQL federated schema with local SQLite cache and background sync adapters.',
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'dev-cli-toolkit',
    title: 'Enterprise CLI Scaffolding & Linter Toolkit',
    category: 'backend',
    badge: 'Dev Tooling',
    description: 'Extensible command-line tool automating monorepo project initialization, Git hook enforcement, and AST code transformation routines.',
    longDescription: 'Published an open-source CLI suite downloaded over 50,000 times, featuring AST parsers, interactive inquirer prompts, and automated container generation.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Rust', 'Node.js', 'Babel AST', 'CI/CD', 'GitHub Actions'],
    architecture: 'Compiled native Rust binary with Node.js N-API bindings for cross-platform speed.',
    demoUrl: '#',
    githubUrl: 'https://github.com'
  }
];

class ProjectManager {
  constructor() {
    this.projects = PROJECTS_DATA;
    this.grid = document.getElementById('projects-grid');
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.modal = document.getElementById('project-modal');
    this.modalBody = document.getElementById('modal-body-content');
    this.modalCloseBtn = document.getElementById('modal-close-btn');

    this.init();
  }

  init() {
    this.renderProjects('all');
    this.bindFilters();
    this.bindModal();
  }

  renderProjects(category) {
    if (!this.grid) return;

    const filtered = category === 'all' 
      ? this.projects 
      : this.projects.filter(p => p.category === category);

    this.grid.innerHTML = filtered.map(p => `
      <article class="project-card" data-category="${p.category}" data-id="${p.id}" data-reveal>
        <div class="project-card-image">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <span class="project-badge">${p.badge}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          <div class="project-tags">
            ${p.tags.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="project-card-footer">
            <button class="project-link-btn view-details-btn" data-id="${p.id}" aria-label="View details of ${p.title}">
              <span>View Case Study</span>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
            <div class="project-links">
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" aria-label="GitHub repository">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Attach case study click events
    this.grid.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.openModal(id);
      });
    });
  }

  bindFilters() {
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        this.renderProjects(filter);
      });
    });
  }

  bindModal() {
    if (!this.modal) return;

    this.modalCloseBtn?.addEventListener('click', () => this.closeModal());

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('is-open')) {
        this.closeModal();
      }
    });
  }

  openModal(id) {
    const project = this.projects.find(p => p.id === id);
    if (!project || !this.modalBody) return;

    this.modalBody.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="modal-image" />
      <span class="section-tag">${project.badge}</span>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-overview">${project.longDescription}</p>
      
      <h3 class="modal-section-title">Architecture & System Design</h3>
      <p class="modal-overview">${project.architecture}</p>
      
      <h3 class="modal-section-title">Technologies Used</h3>
      <div class="modal-tech-stack">
        ${project.tags.map(t => `<span class="skill-pill">${t}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span>Source Code</span>
        </a>
      </div>
    `;

    this.modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    this.modalCloseBtn?.focus();
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}
