const projects = [
  {
    name: "CentiHR",
    type: "Multi-tenant SaaS",
    summary: "An HR operations and UK sponsor-compliance platform spanning onboarding, Right to Work, recruitment, attendance, leave and evidence management.",
    stack: ["Laravel", "React", "TypeScript", "MySQL", "Stripe"],
    featured: true,
    href: "https://centihr.co.uk",
    proof: "Tenant isolation · MFA · role policies · audit trails · billing",
  },
  {
    name: "Real-Time Payments Ledger",
    type: "Fintech infrastructure",
    summary: "A production-shaped payments platform with idempotent APIs, an immutable double-entry ledger and event-driven settlement across three Go services.",
    stack: ["Go", "PostgreSQL", "Kafka", "MongoDB", "Kubernetes", "Terraform"],
    featured: true,
    href: "https://github.com/Samuel-DA/Payment_Ledger",
    proof: "Transactional outbox · DLQs · distributed tracing · AWS baseline",
  },
  {
    name: "Open Banking Financial Insights",
    type: "Open banking",
    summary: "A consent-gated service that ingests synthetic UK account data, categorises transactions asynchronously and produces monthly financial insights.",
    stack: ["Go", "PostgreSQL", "Kafka", "OpenTelemetry", "AWS"],
    featured: true,
    href: "https://github.com/Samuel-DA/Open-Banking-Financial-Insights-Service",
    proof: "Consent lifecycle · idempotent ingestion · audit trail · observability",
  },
  {
    name: "DRJA Clinical Reporting",
    type: "Health software",
    summary: "Private single-clinician software for endoscopy and medical reporting, prescriptions, patient records, signed QR verification and secure document delivery.",
    stack: ["Laravel", "React", "MySQL", "Inertia"],
  },
  {
    name: "Teamerly",
    type: "Education platform",
    summary: "A cloud-ready education platform designed around Go services, durable relational data, flexible document storage and infrastructure as code.",
    stack: ["Go", "PostgreSQL", "MongoDB", "Terraform", "Docker"],
  },
  {
    name: "Directing Voices",
    type: "Creative education",
    summary: "A voice-training platform for student curricula, voice checks and audition packs, with media workflows and permission-aware administration.",
    stack: ["Laravel", "React", "FFmpeg", "MySQL"],
    href: "https://directingvoices.co.uk/",
  },
  {
    name: "Rabo Inspection",
    type: "Industrial services",
    summary: "A content-managed website for asset integrity, QA/QC and non-destructive testing services across energy, manufacturing and construction.",
    stack: ["React", "Vite", "TinaCMS"],
    href: "https://raboinspection.co.uk/",
  },
  {
    name: "AGS Music",
    type: "Music mobile app",
    summary: "A Flutter music experience with library, playlist and player state, supported by a lightweight Node service for media discovery.",
    stack: ["Flutter", "Dart", "Node.js", "Express"],
  },
  {
    name: "Faithful Steps",
    type: "Wellbeing mobile app",
    summary: "A private-first gratitude journal that records blessings by category, tracks reflection streaks and stores entries locally on-device.",
    stack: ["Flutter", "Dart", "Local storage"],
  },
  {
    name: "Owambe Item 7",
    type: "Food operations",
    summary: "A meal and food management application with structured records, analysis views, report workflows and operational audit coverage.",
    stack: ["Laravel", "React", "TypeScript", "Tailwind"],
  },
  {
    name: "So Said Sommie",
    type: "Publishing platform",
    summary: "A responsive publishing platform with rich-text posts, comments, likes, moderation states and Google-assisted sign-in.",
    stack: ["Laravel", "React", "Inertia", "TipTap"],
  },
  {
    name: "Dominion Cooperative",
    type: "Cooperative operations",
    summary: "A cooperative management system that centralises member, finance and administrative workflows with reporting and account recovery.",
    stack: ["PHP", "MySQL", "Docker", "JavaScript"],
  },
  {
    name: "Event Made Easy",
    type: "Event CRM",
    summary: "An event operations platform designed with Go services, PostgreSQL transactions, MongoDB read models and repeatable cloud infrastructure.",
    stack: ["Go", "PostgreSQL", "MongoDB", "Terraform", "Docker"],
  },
  {
    name: "Bina Services Platform",
    type: "Business operations",
    summary: "A secure operations platform covering matters, tasks, consultations, billing, documents, compliance records and controlled team access.",
    stack: ["Laravel", "React", "TypeScript", "MySQL"],
  },
];

const experience = [
  ["2026 — now", "Software Engineer", "Bina Services Ltd", "Security and code reviews, backend API improvements and pragmatic engineering practices."],
  ["2024 — 2026", "Software Engineer", "Clearer.io", "Owned the ViralSweep transition, modernised a legacy SaaS platform and cut deployment time and errors by more than 50%."],
  ["2024", "PHP Developer", "WPGJ Software Solutions", "Delivered APIs, payment integrations and release automation for mobile and web products."],
  ["2023 — 2024", "PHP Developer", "Graceco UK Ltd", "Automated logistics workflows and improved delivery consistency through containerised deployments."],
  ["2020 — 2022", "Web Developer / IT Systems Analyst", "FMDQ Ltd", "Modernised legacy financial-market applications from Classic ASP to PHP, improved SQL reporting and supported internal tools for FMDQ Group’s integrated market infrastructure."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Samuel Adebiyi, home">SA<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href="mailto:Samueladebiyi.g@gmail.com">Let&apos;s talk <Arrow /></a>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> London · Open to backend opportunities</p>
          <h1>I build dependable systems for <em>money, data and people.</em></h1>
          <p className="hero-lede">Backend-focused software engineer with 6+ years of experience shipping secure APIs, cloud-hosted SaaS products and event-driven platforms.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <span>↓</span></a>
            <a className="button ghost" href="https://github.com/Samuel-DA" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Technical focus">
          <div className="signal-card">
            <p className="signal-label">CURRENT FOCUS</p>
            <p className="signal-title">Resilient backend platforms</p>
            <div className="signal-grid">
              <span>01</span><p>Golang & REST APIs</p>
              <span>02</span><p>Event-driven architecture</p>
              <span>03</span><p>Cloud & observability</p>
              <span>04</span><p>Secure SaaS delivery</p>
            </div>
          </div>
          <div className="availability"><span>Available for the right team</span><i /></div>
        </div>
      </header>

      <section className="cover-art shell" aria-label="Samuel Adebiyi portfolio artwork">
        <img src="./profile-cover.png" alt="Samuel Dolapo Adebiyi, backend software engineer — dependable systems for money, data and people" />
      </section>

      <section className="metrics-band" aria-label="Career highlights">
        <div className="shell metrics">
          <div><strong>6+</strong><span>years building software</span></div>
          <div><strong>Multi-sector</strong><span>e-commerce to financial markets</span></div>
          <div><strong>50%+</strong><span>fewer deployment errors</span></div>
          <div><strong>MSc</strong><span>Big Data · Distinction</span></div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div><p className="kicker">01 / SELECTED WORK</p><h2>Engineering with real-world constraints.</h2></div>
          <p>Systems designed around reliability, security, auditability and the people who operate them.</p>
        </div>
        <div className="featured-grid">
          {featured.map((project, index) => (
            <article className={`featured-card tone-${index + 1}`} key={project.name}>
              <div className="card-top"><span>{project.type}</span><b>0{index + 1}</b></div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="proof">{project.proof}</div>
              <div className="card-bottom">
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>View <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell project-index" aria-labelledby="project-index-title">
        <div className="index-head"><p className="kicker">PROJECT INDEX</p><p>{moreProjects.length} additional products</p></div>
        <div className="index-list">
          {moreProjects.map((project, index) => (
            <details className="project-row" key={project.name}>
              <summary>
                <span className="project-number">{String(index + 4).padStart(2, "0")}</span>
                <span className="project-name">{project.name}</span>
                <span className="project-type">{project.type}</span>
                <span className="plus" aria-hidden="true">+</span>
              </summary>
              <div className="project-detail">
                <p>{project.summary}</p>
                <div>
                  <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Visit project <Arrow /></a>}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section contrast" id="experience">
        <div className="shell">
          <div className="section-heading light">
            <div><p className="kicker">02 / EXPERIENCE</p><h2>Ownership from code to production.</h2></div>
            <p>I work across product delivery, platform reliability and the engineering practices that keep both healthy.</p>
          </div>
          <div className="timeline">
            {experience.map(([date, role, company, summary]) => (
              <article key={`${company}-${date}`}>
                <time>{date}</time><div><h3>{role}</h3><p className="company">{company}</p></div><p>{summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell about" id="about">
        <div>
          <p className="kicker">03 / ABOUT</p>
          <h2>Backend depth, product range.</h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">I enjoy turning complex operating rules into software that feels clear, dependable and maintainable.</p>
          <p>My work spans e-commerce, food manufacturing, fintech, legal services and clinical reporting. I pair backend engineering with practical DevOps: automated delivery, containerisation, infrastructure as code and production observability.</p>
          <div className="skill-columns">
            <div><h3>Backend</h3><p>Go · PHP · Laravel · Node.js · REST APIs</p></div>
            <div><h3>Cloud & delivery</h3><p>AWS · Kubernetes · Docker · Terraform · CI/CD</p></div>
            <div><h3>Data & events</h3><p>PostgreSQL · MySQL · MongoDB · Kafka · RabbitMQ</p></div>
            <div><h3>Frontend & mobile</h3><p>React · TypeScript · Inertia · Flutter · Tailwind</p></div>
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="shell contact-inner">
          <div><p className="kicker">START A CONVERSATION</p><h2>Building something that needs to work <em>properly?</em></h2></div>
          <a className="contact-link" href="mailto:Samueladebiyi.g@gmail.com">Samueladebiyi.g@gmail.com <Arrow /></a>
        </div>
      </section>

      <footer className="shell footer">
        <p>© 2026 Samuel Dolapo Adebiyi</p>
        <div><a href="https://github.com/Samuel-DA" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/samuel-adebiyi-81728b176" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:Samueladebiyi.g@gmail.com">Email</a></div>
      </footer>
    </main>
  );
}
