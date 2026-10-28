document.documentElement.classList.add("has-js");

const cases = {
  pixora: {
    title: "PIXORA",
    category: "Full-stack product · Trading & analytics",
    lede: "A trading journal built to turn trade history into useful feedback, from disciplined logging to performance analysis and backtesting.",
    role: "Designed, built, and deployed solo",
    status: "Live product · 3-part deployment",
    overview: "PIXORA is a subscription-based web app for forex and prop-firm traders. It brings trade logging, analytics, rule and psychology tracking, importing, and backtesting into one workflow. The plan is $9.99 per month with a 14-day free trial.",
    problem: "Traders can lose consistency when they do not record what they did, why they entered, or whether they followed their own rules. PIXORA combines structured journaling and analysis so traders can review those decisions over time.",
    features: [
      "Log trades with entry, stop loss, take profit, risk, notes, and before/after chart screenshots; calculate risk-to-reward automatically.",
      "Import generic CSV files and MetaTrader 4/5 HTML reports, map fields, preserve historical dates, and report invalid rows.",
      "Review P&L, win rate, profit factor, expectancy, drawdown, equity, calendar history, pairs, and sessions.",
      "Track weighted confluences, trading rules, and pre-trade psychology; compare rule-following and psychology with outcomes.",
      "Replay historical market bars, manage prop-firm and personal accounts, and use economic calendar and market-session views.",
      "Use onboarding, five color themes, and a built-in contact and bug-report flow with optional screenshots."
    ],
    architecture: "The product has three deployed parts: a React trading application on Vercel, a Java 17/Spring Boot REST API in Docker on Render, and a separate React/Vite marketing site. MySQL is hosted on Aiven. Payments use Lemon Squeezy; other integrations include Sentry, Firebase push notifications, SMTP email, and Yahoo Finance market data.",
    flow: [["React app", "Trading frontend"], ["Spring Boot", "REST API · Render"], ["MySQL", "Aiven database"], ["Marketing site", "React · Vercel"]],
    engineering: [
      "Migrated the API to stateless JWT authentication, added per-user ownership checks, prevented role self-promotion, and restricted admin endpoints.",
      "Verified Lemon Squeezy webhooks with HMAC-SHA256 over the raw request body, made status updates idempotent, and prevented repeat trials.",
      "Built a shared validation path for CSV and MetaTrader imports, including UTF-16 MT5 HTML, locale-aware numbers, and row-level error reporting.",
      "Fixed data-integrity issues around trade edits, initial-balance risk sizing, historical calendar dates, and uploaded-image DTO fields.",
      "Used additive nullable schema migrations and backfills for live database changes; diagnosed SMTP health-check and UI animation problems in production."
    ],
    outcome: "A deployed three-part SaaS product with trade journaling, analytics, subscription billing, and a separate marketing website. The public link below is the marketing site.",
    stack: ["Java 17", "Spring Boot 3.5", "Spring Security", "JWT", "JPA / Hibernate", "MySQL", "React 19", "Vite", "React Router", "Framer Motion", "Recharts", "Lightweight Charts", "Docker", "Render", "Vercel", "Aiven", "Lemon Squeezy", "Sentry", "Firebase"],
    images: [
      ["../assets/images/projects/pixora/pixora-trade-journal-feature.png", "PIXORA marketing page with a trade-journal product preview", "Trade journal preview"],
      ["../assets/images/projects/pixora/pixora-analytics-feature.png", "PIXORA marketing page with analytics and performance previews", "Analytics preview"],
      ["../assets/images/projects/pixora/pixora-pricing-plan-top.png", "PIXORA pricing page showing included product capabilities", "Plan feature list"]
    ],
    galleryNote: "Selected captures from the public marketing site. Promotional sample values shown inside the original site captures are not used as portfolio metrics.",
    links: [["Open PIXORA marketing site", "https://pixora-web-rosy.vercel.app/"]]
  },
  edupresence: {
    title: "EduPresence",
    category: "Final Year Project (PFE) · EST Meknès",
    lede: "An intelligent attendance system that recognizes students at classroom entry and connects the recognition pipeline to day-to-day attendance workflows.",
    role: "Final-year project",
    status: "PFE project · Source repository is private",
    overview: "EduPresence is a full-stack attendance-management system developed as a Final Year Project at École Supérieure de Technologie de Meknès. The system combines computer vision, web services, and attendance operations for students, professors, and administrators.",
    problem: "Roll calls and paper sheets take time, can be falsified, and leave attendance records scattered. The project targets automatic classroom check-in and centralized review workflows.",
    features: [
      "Run real-time face detection and recognition using YOLOv8, ArcFace, and pgvector similarity search.",
      "Provide role-based spaces for students, professors, and administrators.",
      "Apply arrival states: Present (0–10 minutes), Late (10–15 minutes), and Refused (15 minutes or more).",
      "Review absences through professor approval followed by an administrator decision.",
      "Enroll students with a guided five-angle biometric capture flow.",
      "Schedule sessions and manage their start, end, and cancellation lifecycle; send cancellation email notifications.",
      "Export PDF and Excel attendance reports with color-coded indicators.",
      "Accept absence justifications with medical certificates and camera-based appeals."
    ],
    architecture: "The React and TypeScript frontend consumes REST APIs from a Java 21 Spring Boot backend using JWT authentication. A separate Python FastAPI service runs recognition and communicates with Spring Boot over HTTP. Face embeddings are 512-dimensional vectors stored and searched in PostgreSQL with pgvector. WebSocket/STOMP/SockJS provides real-time updates, and Docker Compose coordinates four containers.",
    flow: [["React + TypeScript", "Web frontend"], ["Spring Boot", "REST API · JWT"], ["FastAPI", "YOLOv8 · ArcFace"], ["PostgreSQL", "pgvector · WebSocket"]],
    engineering: [
      "Optimized the recognition pipeline for CPU-only hardware using the YOLOv8 nano model.",
      "Added identity locking to avoid repeatedly processing the same person and reduce server load.",
      "The supplied project description reports 1.5–3 seconds of inference time."
    ],
    outcome: "The project connects biometric enrollment, live recognition, session rules, absence review, and reporting in one distributed attendance workflow. The visuals are generated UI concepts, not screenshots of the private app.",
    stack: ["React", "TypeScript", "Vite", "Java 21", "Spring Boot", "Spring Security", "JWT", "JPA", "Python", "FastAPI", "YOLOv8", "ArcFace / InsightFace", "PostgreSQL", "pgvector", "Docker Compose", "WebSocket", "STOMP", "SockJS"],
    images: [
      ["../assets/images/projects/edupresence/edupresence-dashboard-concept.png", "Generated concept illustration of an EduPresence dashboard; not a real screenshot", "Dashboard concept"],
      ["../assets/images/projects/edupresence/edupresence-enrollment-concept.png", "Generated concept illustration of guided five-angle enrollment; not a real screenshot", "Enrollment concept"]
    ],
    galleryNote: "Illustrative prototype visuals generated for the portfolio; these are not screenshots of the private application.",
    links: []
  },
  secureops: {
    title: "SecureOps",
    category: "Defensive security operations platform",
    lede: "A portfolio-focused monitoring and incident-response platform for exploring event detection, alert triage, and audit workflows with synthetic security data.",
    role: "Designed and built solo",
    status: "In progress · Synthetic demo data",
    overview: "SecureOps ingests synthetic security events, applies narrow defensive detection rules, raises alerts, and provides a workspace for triage, incident records, and audit review. A local H2 preview mode supports running the application without the full PostgreSQL setup.",
    problem: "The project explores how a monitoring interface can connect event intake and simple detection logic to the human workflows that follow: reviewing alerts, grouping related work into incidents, and keeping an audit trail.",
    features: [
      "Detect repeated failed logins followed by a successful login from the same source.",
      "Create alerts for synthetic privilege-change events.",
      "Review and triage alerts, create incident records, and inspect audit activity.",
      "Use role-based access for protected operations.",
      "View API-backed activity metrics in the dashboard.",
      "Run a local preview using H2."
    ],
    architecture: "A Spring Boot REST API handles event ingestion and detection, with PostgreSQL persistence and Flyway-managed schema changes. The React/TypeScript frontend uses Vite, Tailwind CSS, Recharts, TanStack Query, React Hook Form, and Zod. Docker Compose and GitHub Actions support local setup and automation.",
    flow: [["Synthetic events", "Input stream"], ["Spring Boot", "Detection + API"], ["PostgreSQL / H2", "Persistence"], ["React + TypeScript", "SOC workspace"]],
    engineering: [
      "Kept detection rules explicit and limited to the synthetic event patterns described for the demo.",
      "Separated alert triage, incident records, and audit review so the response workflow remains visible.",
      "Provided an H2 preview path for local evaluation."
    ],
    outcome: "An in-progress, solo-built defensive-security demo that demonstrates the path from synthetic events to detections, alert review, incident handling, and audit history. The overview capture is retained in the image folder but shows an API error state.",
    stack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway", "React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "TanStack Query", "React Hook Form", "Zod", "Docker Compose", "GitHub Actions"],
    images: [
      ["../assets/images/projects/secureops/secureops-detection-rules.png", "SecureOps detection rules screen", "Detection rules"],
      ["../assets/images/projects/secureops/secureops-incidents.png", "SecureOps incidents screen", "Incident management"]
    ],
    galleryNote: "Selected screenshots you provided. A third overview capture with an API error is kept in the project image folder but left out of this gallery.",
    links: []
  },
  devoria: {
    title: "Devoria",
    category: "Developer-to-client platform",
    lede: "A live platform for discovering developers, exploring projects, and connecting around the work people want to build.",
    role: "Built independently; friends joined later as contributors at their request",
    status: "Live on Firebase Hosting",
    overview: "Devoria connects developers and clients around project needs. The live platform includes developer discovery, project browsing, profiles, and community pages. You built the project independently and later added friends as contributors after they asked to join.",
    problem: "The project goal is to make it easier for clients to discover developers and for developers to show their work and services in one place.",
    features: [
      "Browse developers and filter by categories and skills.",
      "Explore project listings and developer portfolios.",
      "Open developer profiles, view services, and start contact flows.",
      "Use communities to connect around development interests.",
      "Register and sign in to access account features."
    ],
    architecture: "The frontend is built with React, TypeScript, Vite, and React Router. The repository includes Firebase dependencies, and the deployed site is hosted at a Firebase web.app address.",
    flow: [["React", "Interface"], ["TypeScript", "Application code"], ["React Router", "Page flows"], ["Firebase Hosting", "Live website"]],
    engineering: [
      "Built the platform independently before inviting friends to join as contributors.",
      "Organized the experience around separate browsing flows for developers, projects, profiles, and communities."
    ],
    outcome: "A live platform with public developer, project, and community browsing.",
    stack: ["React", "TypeScript", "Vite", "React Router", "Firebase"],
    images: [
      ["../assets/images/projects/devoria/devoria-home.jpg", "Devoria homepage screenshot", "Homepage"],
      ["../assets/images/projects/devoria/devoria-projects.jpg", "Devoria project browsing screenshot", "Project browsing"],
      ["../assets/images/projects/devoria/devoria-developers.jpg", "Devoria developer discovery screenshot", "Developer discovery"],
      ["../assets/images/projects/devoria/devoria-profile.jpg", "Devoria developer profile screenshot", "Developer profile"]
    ],
    galleryNote: "Four initial screenshots from the live site. Your remaining captures are saved in the Devoria project folder for you to choose from later.",
    links: [["Open the live platform", "https://devoria-2ce34.web.app/"], ["View the public repository", "https://github.com/Marindo-12/Devoria"]]
  },
  "portail-client": {
    title: "Portail Client",
    category: "Client task-management portal",
    lede: "A responsive full-stack portal for organizing task work and following updates in one place.",
    role: "Full-stack development",
    status: "Portfolio project",
    overview: "The portal helps users create, organize, filter, and track tasks, with priority levels, authentication, responsive interfaces, and real-time updates.",
    problem: "The project focuses on giving clients a single interface to follow tasks and their changing status.",
    features: ["Create and organize tasks.", "Filter tasks and review their priority.", "Track updates in the portal.", "Use authenticated, responsive application screens."],
    architecture: "The existing project summary describes a web stack built with PHP, MySQL, JavaScript, HTML, CSS, and Docker.",
    flow: [["HTML / CSS", "Responsive screens"], ["JavaScript", "Interface logic"], ["PHP", "Server features"], ["MySQL", "Relational data"]],
    engineering: ["Structured the application around task creation, organization, filtering, priority, and updates."],
    outcome: "A client-facing task portal with authentication and responsive UI.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Docker", "Git", "GitHub"], images: [], galleryNote: "", links: []
  },
  "user-management-system": {
    title: "User Management System",
    category: "CRUD web application",
    lede: "A focused interface for managing profiles with modular JavaScript and browser-side persistence.",
    role: "Frontend development",
    status: "Personal project",
    overview: "The application supports profile creation, editing, deletion, and search. It uses JavaScript ES modules and object-oriented structure, with LocalStorage for persistence.",
    problem: "The project explores a clear create/read/update/delete workflow without requiring a server-side database.",
    features: ["Create and edit user profiles.", "Search and delete existing profiles.", "Persist data in browser LocalStorage.", "Organize logic with JavaScript modules and object-oriented patterns."],
    architecture: "The app runs in the browser. The project description also notes optional Docker deployment with Nginx.",
    flow: [["JavaScript modules", "Application logic"], ["CRUD actions", "Profile workflows"], ["LocalStorage", "Browser persistence"], ["Nginx", "Optional container" ]],
    engineering: ["Kept the CRUD flows and persistence behavior client-side for a small, self-contained application."],
    outcome: "A compact profile-management application demonstrating CRUD flows, modular JavaScript, and browser persistence.",
    stack: ["JavaScript ES Modules", "OOP", "LocalStorage", "Docker", "Nginx"], images: [], galleryNote: "", links: []
  },
  "portfolio-website": {
    title: "Portfolio Website",
    category: "Personal website",
    lede: "A responsive portfolio designed to present projects, experience, and contact information through a custom visual style.",
    role: "Designed and built as a personal project",
    status: "Being refreshed",
    overview: "This portfolio presents selected software work, technical skills, experience, and contact links. The implementation uses semantic HTML, custom CSS, and vanilla JavaScript.",
    problem: "The site is the central place to explain project work and make it easy for recruiters and clients to explore more detail.",
    features: ["Responsive single-page portfolio layout.", "Scroll-reveal and navigation interactions.", "Project cards leading to dedicated case-study pages.", "Downloadable résumé and contact links."],
    architecture: "Static HTML, CSS, and JavaScript. A Docker/Nginx setup is included for serving the site.",
    flow: [["HTML", "Content structure"], ["CSS", "Visual system"], ["JavaScript", "Interactions"], ["Nginx", "Static hosting"]],
    engineering: ["Using lightweight native web technologies keeps the portfolio deployable as a static site."],
    outcome: "A static portfolio that can be deployed and served with Nginx, now being expanded into project-specific case studies.",
    stack: ["HTML", "CSS", "JavaScript", "SVG", "Docker", "Nginx"], images: [], galleryNote: "", links: []
  },
  "banking-cli": {
    title: "Banking CLI Application",
    category: "C programming project",
    lede: "A menu-driven banking application centered on core account and transaction operations.",
    role: "Software development",
    status: "Academic project",
    overview: "The command-line application manages bank accounts and common operations using a modular C structure.",
    problem: "The project applies programming fundamentals to a familiar domain: organizing account operations and tracking transactions through a text interface.",
    features: ["Create accounts.", "Deposit and withdraw funds.", "Track transactions.", "Navigate operations through a structured CLI menu."],
    architecture: "The existing project description identifies a modular C architecture and command-line interface.",
    flow: [["CLI menu", "User input"], ["C modules", "Program logic"], ["Account actions", "Deposits / withdrawals"], ["Transactions", "History"]],
    engineering: ["Separated application logic into modules to keep the program organized."],
    outcome: "A C programming project demonstrating modular design and core banking operations.",
    stack: ["C", "Modular architecture", "CLI"], images: [], galleryNote: "", links: []
  },
  "management-systems-suite": {
    title: "Management Systems Suite",
    category: "Java object-oriented projects",
    lede: "A collection of small management applications built to practice object modeling and CRUD workflows.",
    role: "Java development",
    status: "Academic project suite",
    overview: "The suite contains zoo, hotel, and cinema management systems. The project descriptions emphasize modular design, entity handling, persistence, and CRUD operations.",
    problem: "Each domain provides a practical way to model entities and organize common management tasks using Java object-oriented principles.",
    features: ["Manage entities for zoo, hotel, and cinema scenarios.", "Practice create, read, update, and delete workflows.", "Organize code around Java classes and domain objects.", "Work with data persistence."],
    architecture: "Java desktop-application logic and persistence are listed in the original project summary.",
    flow: [["Java classes", "Domain objects"], ["Management flows", "CRUD"], ["Persistence", "Saved data"], ["Desktop logic", "Application UI"]],
    engineering: ["Used object-oriented design to organize domain entities and their management operations."],
    outcome: "A set of Java OOP projects covering domain modeling and CRUD application logic.",
    stack: ["Java", "Object-oriented programming", "CRUD", "Data persistence"], images: [], galleryNote: "", links: []
  }
};

const currentCase = cases[document.body.dataset.project];
const main = document.querySelector("#case-content");
const esc = (value) => String(value).replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);
const list = (items) => items.map((item, index) => `<article class="case-feature case-reveal"><b>${String(index + 1).padStart(2, "0")} / PROJECT DETAIL</b><p>${esc(item)}</p></article>`).join("");

if (currentCase && main) {
  document.title = `${currentCase.title} | Yassine Chouyoukh`;
  const imageHero = currentCase.images?.[0];
  const visual = imageHero
    ? `<div class="case-visual case-reveal"><div class="case-visual-frame"><img src="${imageHero[0]}" alt="${esc(imageHero[1])}"><div class="case-visual-caption">${esc(imageHero[2])}</div></div></div>`
    : `<div class="case-visual case-reveal"><div class="case-visual--art"><div class="case-art-panel"><div class="case-art-title">${esc(currentCase.category)}</div>${currentCase.stack.slice(0, 3).map((tag) => `<div class="case-art-row"><span>${esc(tag)}</span><i></i></div>`).join("")}<div class="case-navchips">${currentCase.stack.slice(0, 3).map((tag) => `<span>${esc(tag)}</span>`).join("")}</div></div></div></div>`;
  const links = (currentCase.links || []).map(([label, href], index) => `<a class="case-action${index ? " case-action--secondary" : ""}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`).join("");
  const gallery = currentCase.images?.length ? `<section class="case-section" id="gallery"><div class="case-section-heading case-reveal"><div><span class="case-eyebrow">VISUALS</span><h2>Inside the project</h2></div><p>${esc(currentCase.galleryNote || "Project images")}</p></div><div class="case-gallery">${currentCase.images.map(([src, alt, caption]) => `<figure class="case-reveal"><button class="gallery-button" type="button" data-full-image="${src}" data-image-alt="${esc(alt)}" aria-label="Expand ${esc(caption)}"><img loading="lazy" src="${src}" alt="${esc(alt)}"></button><figcaption>${esc(caption)}</figcaption></figure>`).join("")}</div></section>` : "";
  const flow = currentCase.flow.map(([title, note]) => `<div class="arch-node case-reveal">${esc(title)}<small>${esc(note)}</small></div>`).join("");
  main.innerHTML = `
    <header class="case-hero">
      <div class="case-copy case-reveal"><span class="case-eyebrow">${esc(currentCase.category)}</span><h1>${esc(currentCase.title)}</h1><p class="case-lede">${esc(currentCase.lede)}</p><div class="case-meta"><span>${esc(currentCase.role)}</span><span>${esc(currentCase.status)}</span></div><div class="case-links">${links}</div></div>
      ${visual}
    </header>
    <div class="case-body">
      <section class="case-section" id="overview"><div class="case-section-heading case-reveal"><div><span class="case-eyebrow">OVERVIEW</span><h2>Why I built it</h2></div><p>${esc(currentCase.overview)}</p></div><div class="case-columns"><article class="case-panel case-reveal"><h3>Project goal</h3><p>${esc(currentCase.problem)}</p></article><article class="case-panel case-reveal"><h3>Outcome</h3><p>${esc(currentCase.outcome)}</p></article></div></section>
      <section class="case-section" id="features"><div class="case-section-heading case-reveal"><div><span class="case-eyebrow">CAPABILITIES</span><h2>What it does</h2></div><p>Core workflows and product decisions described for this project.</p></div><div class="case-feature-grid">${list(currentCase.features)}</div></section>
      <section class="case-section" id="architecture"><div class="case-section-heading case-reveal"><div><span class="case-eyebrow">SYSTEM DESIGN</span><h2>How it fits together</h2></div><p>${esc(currentCase.architecture)}</p></div><div class="case-architecture">${flow}</div></section>
      <section class="case-section" id="engineering"><div class="case-section-heading case-reveal"><div><span class="case-eyebrow">BUILD NOTES</span><h2>Engineering highlights</h2></div><p>Selected implementation details and constraints.</p></div><div class="case-feature-grid">${list(currentCase.engineering)}</div></section>
      <section class="case-section" id="stack"><div class="case-section-heading case-reveal"><div><span class="case-eyebrow">TOOLS & TECHNOLOGY</span><h2>Technology used</h2></div><p>Based on the project information and repository context available for this case study.</p></div><div class="case-stack case-tags case-reveal">${currentCase.stack.map((tag) => `<span>${esc(tag)}</span>`).join("")}</div></section>
      ${gallery}
      <div class="case-next case-reveal"><a href="${esc(currentCase.nextHref || "../index.html#work")}">${esc(currentCase.nextLabel || "← Back to all projects")}</a></div>
    </div>`;
  document.querySelectorAll(".case-reveal").forEach((item, index) => item.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`));
}

const revealItems = document.querySelectorAll(".case-reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, instance) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); instance.unobserve(entry.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
  revealItems.forEach((item) => observer.observe(item));
} else revealItems.forEach((item) => item.classList.add("is-visible"));

const dialog = document.querySelector(".case-dialog");
const dialogImage = dialog?.querySelector("img");
document.querySelectorAll(".gallery-button[data-full-image]").forEach((button) => button.addEventListener("click", () => {
  if (!dialog || !dialogImage) return;
  dialogImage.src = button.dataset.fullImage;
  dialogImage.alt = button.dataset.imageAlt || "Expanded project image";
  dialog.showModal();
}));
dialog?.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector(".case-dialog-close")?.addEventListener("click", () => dialog?.close());
