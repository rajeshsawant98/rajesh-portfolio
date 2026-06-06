export const BaseInfo = {
  name: "Rajesh Sawant",

  position: "AI Systems Engineer",

  tagline: "Building AI systems that ship to production",

  availabilityBadge: "Available for opportunities",

  roles: [
    "AI-Powered Systems",
    "Distributed Data Workflows",
    "Knowledge-Driven Applications",
  ],

  description:
    "I'm an AI Systems Engineer who bridges the gap between LLM capabilities and production data infrastructure — the part most engineers skip. My work spans distributed pipelines, knowledge graph architecture, and full-stack applications.",

  profilePic: "/images/Hero.jpeg",

  heroImages: [
    "/images/stack/1a.jpg",
    "/images/stack/2a.jpg",
    "/images/stack/3.jpg",
    "/images/stack/4.jpg",
    "/images/stack/5.jpg",
  ],
};

export const aboutInfo = {
  title: "Engineering Scalable Systems Where AI Meets Real-World Data",

  description:
    "I specialize in building end-to-end data-driven systems that integrate AI into production workflows. At ASU’s SUDOKN project, I designed a distributed ETL pipeline that transforms unstructured manufacturing data into structured, ontology-backed knowledge. The system combines AWS S3 storage, SQS queue orchestration, OpenAI Batch API extraction, and persistence across MongoDB and Ontotext GraphDB.",

  highlights: [
    "Designed distributed pipeline: S3 → SQS → LLM extraction → MongoDB & GraphDB",
    "Built modern Next.js frontends with Mapbox, Zustand, and performance-focused state isolation",
    "Developed async FastAPI backends with authentication, caching, and modular service layers",
    "Published IEEE COMPSAC 2025 research on knowledge graph–driven personalization",
  ],
};

export const experienceData = [
  {
    id: 1,
    role: "Graduate Service Assistant — Software Developer",
    organization: "Arizona State University · SUDOKN",
    location: "Tempe, AZ",
    period: "Jun 2025 – Present",
    logo: "/images/orgs/asu.png",
    initials: "ASU",
    highlights: [
      "Designed and owned scalable backend and frontend workflows for manufacturer onboarding using Next.js, TypeScript, Prisma, FastAPI, and MongoDB",
      "Built a distributed, queue-driven ETL pipeline processing data from 40,000+ manufacturer websites using AWS SQS to decouple ingestion, extraction, and reconciliation stages",
      "Implemented LLM-powered real-time and batch extraction workflows with async workers, retries, and controlled concurrency",
      "Built responsive UI components with shadcn/ui and Tailwind CSS, reducing onboarding time and registration errors",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    organization: "Intelizign Lifecycle Services",
    location: "Pune, India",
    period: "Aug 2021 – Jul 2024",
    logo: "/images/orgs/intelizign.png",
    initials: "IL",
    highlights: [
      "Designed and delivered enterprise web applications for manufacturing and automotive clients, reducing onboarding time by 30%",
      "Developed data pipelines using REST APIs and service-oriented architecture across Mendix, Java services, and external systems, increasing operational efficiency by 30%",
      "Built reusable React UI components and led UI/UX workshops and onboarding sessions for new team members",
      "Led Agile execution contributing to sprint planning, code reviews, and CI/CD pipelines; deployed on AWS with Docker and Kubernetes",
    ],
  },
];

export const educationData = [
  {
    id: 1,
    degree: "Master of Science — Computer Software Engineering",
    institution: "Arizona State University",
    location: "Tempe, AZ",
    period: "Aug 2024 – May 2026",
    logo: "/images/orgs/asu.png",
    initials: "ASU",
    highlights: [
      "GPA: 3.76 / 4.0",
      "Teaching Assistant — AI for Software Engineers (Spring 2026)",
      "Published IEEE COMPSAC 2025 research on knowledge graph–driven personalization",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Engineering — Electronics & Telecommunications",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    period: "Aug 2016 – Dec 2020",
    logo: "/images/orgs/sppu.png",
    initials: "SPPU",
    highlights: [
      "Coursework in algorithms, operating systems, databases, and computer networks",
    ],
  },
];

export const projectData = [
  {
    id: 1,
    title: "SUDOKN",
    subtitle: "Production AI Data Infrastructure",
    badge: "PRODUCTION",
    images: [
      "/images/projects/sudokn/1.png",
      "/images/projects/sudokn/2.png",
      "/images/projects/sudokn/3.png",
      "/images/projects/sudokn/4.png",
      "/images/projects/sudokn/5.png",
    ],
    url: "https://www.sudokn.com",
    githubLink: "",
    techStack: [
      "AWS S3",
      "AWS SQS",
      "OpenAI Batch API",
      "MongoDB",
      "Ontotext GraphDB",
      "RDF/TTL",
      "SPARQL",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Mapbox",
    ],
    description:
      "Architected an end-to-end AI-powered ETL pipeline for the SUDOKN research project. The system ingests manufacturing capability data through web scraping, stages it in AWS S3, orchestrates processing via SQS queues, extracts structured data using OpenAI's Batch API with chain-of-responsibility patterns, maps outputs to RDF/TTL ontologies, and persists across MongoDB and Ontotext GraphDB with SPARQL validation.",
    architecturePoints: [
      "Web Scraping → AWS S3 staging",
      "SQS queue orchestration with dead-letter handling",
      "OpenAI Batch API with chain-of-responsibility extraction",
      "RDF/TTL ontology mapping and validation",
      "MongoDB + GraphDB dual persistence",
      "Cost optimization via batching and concurrency control",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "KG-ITP — Knowledge Graph Travel Planner",
    subtitle: "IEEE COMPSAC 2025 — Full Paper Accepted",
    badge: "IEEE COMPSAC 2025",
    images: [
      "/images/projects/kg-itp/1.jpeg",
      "/images/projects/kg-itp/2.jpeg",
      "/images/projects/kg-itp/3.jpeg",
      "/images/projects/kg-itp/4.jpeg",
    ],
    url: "https://github.com/rajeshsawant98/travel-path",
    githubLink: "https://github.com/rajeshsawant98/travel-path",
    techStack: [
      "React",
      "FastAPI",
      "SPARQL",
      "GeoSPARQL",
      "Protégé",
      "RDF",
      "Semantic Web",
      "LLM",
    ],
    description:
      "Built a knowledge graph-driven intelligent travel planner that generates personalized itineraries using SPARQL queries over custom ontologies, GeoSPARQL for spatial reasoning, and structured LLM output for natural language recommendations. Accepted as a full paper at IEEE COMPSAC 2025.",
    architecturePoints: [
      "Custom travel ontology designed in Protégé",
      "SPARQL + GeoSPARQL for spatial query reasoning",
      "Structured LLM output for personalized recommendations",
      "User profile-based personalization logic",
      "Evaluation metrics for recommendation quality",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Sahana — Real-Time Event Platform",
    subtitle: "Full-Stack Production Application",
    badge: "FULL-STACK",
    images: [
      "/images/projects/sahana/1.png",
      "/images/projects/sahana/2.png",
      "/images/projects/sahana/3.png",
      "/images/projects/sahana/4.png",
      "/images/projects/sahana/5.png",
    ],
    url: "https://sahana-drab.vercel.app/",
    githubLink: "https://github.com/rajeshsawant98/sahana-backend",
    techStack: [
      "React",
      "FastAPI",
      "Firebase",
      "Google SSO",
      "Redux Toolkit",
      "Google Maps API",
    ],
    description:
      "Designed and built a production event platform with Google SSO authentication via Firebase, async FastAPI backend, Redux Toolkit state management with caching strategies, real-time RSVP tracking, and Google Maps integration for location-based event discovery.",
    architecturePoints: [
      "Firebase Auth with Google SSO integration",
      "Async FastAPI with structured error handling",
      "Redux Toolkit with caching and optimistic updates",
      "Google Maps API for geolocation features",
      "Interest-based recommendation engine",
    ],
    featured: true,
  },
];

export const skillsGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: "/images/skills/java.svg" },
      { name: "Python", icon: "/images/skills/python.svg" },
      { name: "TypeScript", icon: "/images/skills/ts.svg" },
      { name: "JavaScript", icon: "/images/skills/js.svg" },
      { name: "SQL", icon: "/images/skills/postgresql.svg" },
      { name: "MATLAB", icon: "/images/skills/matlab.svg" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "/images/skills/react.svg" },
      { name: "Next.js", icon: "/images/skills/nextjs.svg", darkIcon: true },
      { name: "Redux Toolkit", icon: "/images/skills/redux.svg" },
      { name: "Tailwind", icon: "/images/skills/tailwind.svg" },
      { name: "Bootstrap", icon: "/images/skills/bootstrap.svg" },
      { name: "HTML/CSS", icon: "/images/skills/html.svg" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI", icon: "/images/skills/fastapi.svg" },
      { name: "Node.js", icon: "/images/skills/node.svg" },
      { name: "Spring Boot", icon: "/images/skills/spring.svg" },
      { name: "Prisma", icon: "/images/skills/prisma.svg", darkIcon: true },
      { name: "Firebase", icon: "/images/skills/firebase.svg" },
      { name: "n8n", icon: "/images/skills/n8n.svg", darkIcon: true },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "OpenAI", icon: "/images/skills/openai.svg", darkIcon: true },
      { name: "Jupyter", icon: "/images/skills/jupyter.svg" },
      { name: "Pandas", icon: "/images/skills/pandas.svg" },
      { name: "NumPy", icon: "/images/skills/numpy.svg" },
      { name: "scikit-learn", icon: "/images/skills/scikitlearn.svg" },
      { name: "MATLAB", icon: "/images/skills/matlab.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
      { name: "MongoDB", icon: "/images/skills/mongo.svg" },
      { name: "MySQL", icon: "/images/skills/mysql.svg" },
      { name: "DynamoDB", icon: "/images/skills/dynamodb.svg", darkIcon: true },
      { name: "Neo4j", icon: "/images/skills/neo4j.svg" },
      { name: "Firestore", icon: "/images/skills/firebase.svg" },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS", icon: "/images/skills/aws.svg" },
      { name: "Google Cloud", icon: "/images/skills/googlecloud.svg" },
      { name: "Azure", icon: "/images/skills/azure.svg" },
      { name: "Docker", icon: "/images/skills/docker.svg" },
      { name: "Kubernetes", icon: "/images/skills/kubernetes.svg" },
      { name: "Terraform", icon: "/images/skills/terraform.svg" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "/images/skills/git.svg" },
      { name: "GitHub Actions", icon: "/images/skills/github.svg", darkIcon: true },
      { name: "Postman", icon: "/images/skills/postman.svg" },
      { name: "Figma", icon: "/images/skills/figma.svg" },
      { name: "Jira", icon: "/images/skills/jira.svg" },
      { name: "Vercel", icon: "/images/skills/vercel.svg", darkIcon: true },
    ],
  },
];

export const researchData = [
  {
    id: 1,
    title: "Knowledge Graph-Driven Intelligent Travel Planner",
    venue: "IEEE COMPSAC 2025",
    type: "Full Paper — Accepted",
    description:
      "Presented a novel approach to personalized travel planning using knowledge graphs, SPARQL reasoning, GeoSPARQL spatial queries, and structured LLM outputs for generating context-aware itineraries.",
    topics: [
      "Knowledge Graphs",
      "SPARQL",
      "GeoSPARQL",
      "Semantic Web",
      "LLM Integration",
      "Personalization",
    ],
  },
];

export const architecturePhilosophy = [
  {
    title: "Separation of Concerns in AI Pipelines",
    description:
      "Each stage of my ETL pipelines — ingestion, extraction, transformation, persistence — operates as an isolated unit with clear contracts. This makes individual stages testable, replaceable, and independently scalable.",
  },
  {
    title: "Chain-of-Responsibility for LLM Extraction",
    description:
      "Rather than monolithic prompts, I decompose extraction into chained handlers where each processor handles a specific concern. Failed extractions don't cascade — they route to fallback handlers with progressively simpler extraction strategies.",
  },
  {
    title: "Async I/O as a First Principle",
    description:
      "When your pipeline talks to S3, SQS, OpenAI, MongoDB, and GraphDB, synchronous I/O is a bottleneck by design. I build with async/await from the start — FastAPI, aiohttp, motor — so concurrency is a feature, not an afterthought.",
  },
  {
    title: "State Isolation in React",
    description:
      "I use Zustand with atomic stores over monolithic Redux trees. Each domain — map state, filter state, entity state — gets its own store with its own selectors. This eliminates unnecessary re-renders and makes state transitions predictable across complex UIs.",
  },
];

export const contactData = {
  phone: "+1-480-685-0404",
  email: "rajeshsawant98@gmail.com",
  address: "Tempe, Arizona, USA",
};
