export const BaseInfo = {
  name: "Rajesh Sawant",

  position: "Software Engineer",

  specialty: "AI Systems & Full Stack",

  tagline: "Building AI systems that ship to production",

  // Credibility strip under the hero headline
  proofPoints: ["55K+ manufacturer sites processed", "IEEE COMPSAC 2025 author", "3+ years in industry", "MS Software Engineering, ASU"],

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
    role: "Software Developer — Assistant Research Technologist",
    organization: "Arizona State University · SUDOKN",
    location: "Tempe, AZ",
    period: "Jun 2025 – Present",
    logo: "/images/orgs/asu.png",
    initials: "ASU",
    highlights: [
      "Built the manufacturer onboarding and validation system (Next.js/TypeScript, FastAPI, MongoDB) with role-based access and human-override workflows, providing reliable ground truth that improved the accuracy of the extraction pipeline",
      "Built responsive, accessible UI components with shadcn/ui and Tailwind CSS, improving usability across devices and reducing onboarding time and registration errors",
      "Implemented LLM-powered real-time and batch extraction workflows with asynchronous workers, retries, and controlled concurrency, increasing structured data coverage while keeping extraction latency within production limits",
      "Built a distributed, queue-driven ETL pipeline processing data from 55,000+ manufacturer websites, using AWS SQS to decouple ingestion, extraction, and reconciliation stages and improve fault tolerance",
      "Building an AI agent with Vercel's AI SDK that orchestrates multiple tool calls per turn through the Proto-OKN MCP server, plus a custom mapping tool that turns natural-language queries into filtered map views",
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
    slug: "sudokn",
    period: "Jun 2025 – Present",
    role: "Software Developer, Arizona State University",
    highlights: [
      "Queue-driven ETL pipeline over 55,000+ manufacturer websites (S3 → SQS → LLM extraction → MongoDB & GraphDB)",
      "Onboarding and validation system with role-based access and human overrides, supplying ground truth for extraction",
      "AI agent on Vercel's AI SDK over the Proto-OKN MCP server that answers questions as filtered map views",
    ],
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
      "FastAPI",
      "shadcn/ui",
      "Vercel AI SDK",
      "MCP",
      "Zustand",
      "Mapbox",
    ],
    description:
      "Built the AI data infrastructure behind the SUDOKN manufacturing knowledge graph. A queue-driven ETL pipeline processes data from 55,000+ manufacturer websites: it stages scraped content in AWS S3, decouples ingestion, extraction, and reconciliation via SQS, and runs LLM-powered real-time and batch extraction before mapping outputs to RDF/TTL ontologies in MongoDB and Ontotext GraphDB. A manufacturer onboarding and validation system with role-based access and human-override workflows supplies ground truth for extraction accuracy, and an AI agent built on Vercel's AI SDK queries the Proto-OKN MCP server to turn natural-language questions into filtered map views.",
    architecturePoints: [
      "Web Scraping → AWS S3 staging for 55,000+ manufacturer sites",
      "SQS-decoupled ingestion, extraction, and reconciliation stages",
      "Real-time + batch LLM extraction with async workers, retries, and concurrency control",
      "RDF/TTL ontology mapping with SPARQL validation",
      "MongoDB + GraphDB dual persistence",
      "Onboarding and validation system with RBAC and human overrides as ground truth",
      "Multi-tool AI agent over the Proto-OKN MCP server with natural-language map filtering",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "kg-itp",
    period: "2025",
    highlights: [
      "Accepted as a full paper at IEEE COMPSAC 2025",
      "Personalized itineraries from SPARQL queries over a custom travel ontology",
      "GeoSPARQL spatial reasoning plus structured LLM output for recommendations",
    ],
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
    paperUrl: "https://ieeexplore.ieee.org/document/11126548",
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
    slug: "sahana",
    period: "Jul 2024 – Present",
    highlights: [
      "FastAPI + React platform with Google SSO, JWT access control, and cursor pagination across 12+ endpoints",
      "Redis caching with tiered TTLs that cut redundant Firestore reads for paginated feeds",
      "Scheduled Ticketmaster ETL on GCP Cloud Run with GitHub Actions CI/CD for zero-downtime releases",
    ],
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
      "TypeScript",
      "FastAPI",
      "Redis",
      "Firestore",
      "GCP Cloud Run",
      "GitHub Actions",
      "Redux Toolkit",
      "Google Maps API",
    ],
    description:
      "Engineered a full-stack event platform with FastAPI and React/TypeScript: Google SSO, JWT-based access control, cursor-based pagination across 12+ API endpoints, and a Redis caching layer with tiered TTLs that reduced redundant Firestore reads. An automated ETL pipeline triggered by GCP Cloud Scheduler pulls events from the Ticketmaster API for every user city, deduplicates them with a Redis + Firestore strategy, and deploys to Cloud Run through GitHub Actions. A friend-recommendation engine scores users by interest similarity, geodistance decay, and shared event categories.",
    architecturePoints: [
      "Firebase Auth with Google SSO integration",
      "Async FastAPI with structured error handling",
      "Redux Toolkit with caching and optimistic updates",
      "Google Maps API for geolocation features",
      "Interest-based recommendation engine",
    ],
    featured: true,
  },
  {
    id: 4,
    slug: "hazelai",
    period: "Jan 2026 – May 2026",
    role: "Team Lead, 5-member team",
    highlights: [
      "Led a 5-member team, owning the agent workflow, backend integration, and evaluation design",
      "LangGraph agent that turns natural-language questions into executable SPARQL queries",
      "Read-only execution and forced result limits to contain unsafe LLM-generated queries",
    ],
    title: "HazelAI — Agentic Hazard Intelligence",
    subtitle: "LangGraph Agent over a Hazard Knowledge Graph",
    badge: "AGENTIC AI",
    images: [
      "/images/projects/hazelai/1.png",
      "/images/projects/hazelai/2.png",
      "/images/projects/hazelai/3.png",
      "/images/projects/hazelai/4.png",
    ],
    url: "",
    githubLink: "",
    techStack: ["LangGraph", "LLM APIs", "SPARQL", "Knowledge Graph", "FastAPI", "Python"],
    description:
      "Led a 5-member team delivering an AI-powered hazard intelligence platform for Arizona. A LangGraph agent converts natural-language questions into executable SPARQL queries through context retrieval, query generation, execution feedback, and answer synthesis, backed by FastAPI services that add validation, retries, read-only execution, and forced result limits to contain unsafe LLM-generated queries.",
    architecturePoints: [
      "LangGraph agent: context retrieval → SPARQL generation → execution feedback → answer synthesis",
      "FastAPI services for query orchestration, validation, retry handling, and response generation",
      "Read-only execution controls and forced result limits for LLM-generated queries",
      "Interactive county hazard map and insight dashboard over the knowledge graph",
    ],
    featured: true,
  },
];

// Only technologies backed by the resume / project work. Six per group so the grid stays even.
export const skillsGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: "/images/skills/python.svg" },
      { name: "TypeScript", icon: "/images/skills/ts.svg" },
      { name: "JavaScript", icon: "/images/skills/js.svg" },
      { name: "Java", icon: "/images/skills/java.svg" },
      { name: "SQL", icon: "/images/skills/postgresql.svg" },
      { name: "C++", icon: "/images/skills/cplusplus.svg" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "/images/skills/react.svg" },
      { name: "Next.js", icon: "/images/skills/nextjs.svg", darkIcon: true },
      { name: "Redux Toolkit", icon: "/images/skills/redux.svg" },
      { name: "Tailwind", icon: "/images/skills/tailwind.svg" },
      { name: "shadcn/ui", icon: "/images/skills/shadcnui.svg", darkIcon: true },
      { name: "HTML/CSS", icon: "/images/skills/html.svg" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI", icon: "/images/skills/fastapi.svg" },
      { name: "Node.js", icon: "/images/skills/node.svg" },
      { name: "Spring Boot", icon: "/images/skills/spring.svg" },
      { name: "Firebase", icon: "/images/skills/firebase.svg" },
      { name: "Postman", icon: "/images/skills/postman.svg" },
      { name: "n8n", icon: "/images/skills/n8n.svg", darkIcon: true },
    ],
  },
  {
    category: "AI & LLMs",
    skills: [
      { name: "OpenAI API", icon: "/images/skills/openai.svg", darkIcon: true },
      { name: "LangChain", icon: "/images/skills/langchain.svg", darkIcon: true },
      { name: "LangGraph", icon: "/images/skills/langgraph.svg" },
      { name: "MCP", icon: "/images/skills/mcp.svg", darkIcon: true },
      { name: "RAG", icon: "/images/skills/rag.svg" },
      { name: "Pinecone", icon: "/images/skills/pinecone.svg", darkIcon: true },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "scikit-learn", icon: "/images/skills/scikitlearn.svg" },
      { name: "TensorFlow", icon: "/images/skills/tensorflow.svg" },
      { name: "Pandas", icon: "/images/skills/pandas.svg" },
      { name: "NumPy", icon: "/images/skills/numpy.svg" },
      { name: "FAISS", icon: "/images/skills/faiss.svg" },
      { name: "Jupyter", icon: "/images/skills/jupyter.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
      { name: "MongoDB", icon: "/images/skills/mongo.svg" },
      { name: "MySQL", icon: "/images/skills/mysql.svg" },
      { name: "Redis", icon: "/images/skills/redis.svg" },
      { name: "Neo4j", icon: "/images/skills/neo4j.svg" },
      { name: "GraphDB", icon: "/images/skills/graphdb.svg" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "/images/skills/aws.svg" },
      { name: "Google Cloud", icon: "/images/skills/googlecloud.svg" },
      { name: "Azure", icon: "/images/skills/azure.svg" },
      { name: "Docker", icon: "/images/skills/docker.svg" },
      { name: "GitHub Actions", icon: "/images/skills/github.svg", darkIcon: true },
      { name: "Git", icon: "/images/skills/git.svg" },
    ],
  },
];

export const researchData = [
  {
    id: 1,
    title: "Knowledge Graph-Driven Intelligent Travel Planner",
    venue: "IEEE COMPSAC 2025",
    type: "Full Paper — Accepted",
    url: "https://ieeexplore.ieee.org/document/11126548",
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
