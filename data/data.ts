export const BaseInfo = {
  name: "Rajesh Sawant",

  position: "Full-Stack Engineer",

  tagline: "Building Intelligent Applications with AI & Structured Data",

  roles: [
    "AI-Powered Systems",
    "Distributed Data Workflows",
    "Knowledge-Driven Applications",
  ],

  description:
    "I design and build production-grade full-stack systems that integrate AI into real products. My work spans distributed data pipelines, knowledge graph applications, and modern React/Next.js frontends. Combining clean architecture with practical AI workflows. IEEE COMPSAC 2025 published author · MS Software Engineering, ASU.",
  
  profilePic: "/images/hero.png",
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
    role: "Graduate Service Assistant",
    organization: "SUDOKN — Supply & Demand Open Knowledge Network",
    location: "Arizona State University",
    period: "June 2025 – Present",
    highlights: [
      "Architected AI-powered ETL pipeline: web scraping → S3 staging → SQS orchestration → OpenAI Batch API extraction → MongoDB + GraphDB persistence",
      "Designed chain-of-responsibility pattern for multi-stage document processing with fault isolation and retry logic",
      "Built ontology-backed extraction mapping raw LLM outputs to RDF/TTL triples with SPARQL validation against Ontotext GraphDB",
      "Engineered Next.js + TypeScript frontend with Mapbox visualization, Zustand state management, virtualized lists, and incremental geospatial clustering",
      "Implemented cost optimization strategies reducing OpenAI API spend through batching, caching, and concurrency control",
    ],
  },
  {
    id: 2,
    role: "Teaching Assistant — AI for Software Engineers",
    organization: "Arizona State University",
    location: "Tempe, AZ",
    period: "Jan 2026 – May 2026",
    highlights: [
      "Designed PCA tutorials and Random Forest grading pipelines for graduate-level AI coursework",
      "Built nbgrader automation workflows for consistent, scalable assignment evaluation",
      "Mentored 90+ graduate students on ML fundamentals, model evaluation, and applied AI concepts",
    ],
  },
  {
    id: 3,
    role: "Software Engineer",
    organization: "Intelizign Engineering Services",
    location: "Pune, India",
    period: "Aug 2021 – Jul 2024",
    highlights: [
      "Delivered enterprise Mendix applications for manufacturing clients, owning full development lifecycle from requirements to deployment",
      "Led onboarding and training initiatives for new team members, establishing documentation standards",
      "Integrated REST APIs and third-party services, building data pipelines between enterprise systems",
    ],
  },
];

export const projectData = [
  {
    id: 1,
    title: "SUDOKN ",
    subtitle: "Production AI Data Infrastructure",
    image: "/images/p1.png",
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
    image: "/images/p2.png",
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
    image: "/images/p1.png",
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
