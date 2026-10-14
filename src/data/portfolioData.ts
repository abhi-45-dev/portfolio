export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & Agents' | 'Backend & DBMS' | 'Systems & Web';
  featured: boolean;
  problem: string;
  contribution: string;
  technologies: string[];
  keyFeatures: string[];
  plannedFeatures?: string[];
  githubUrl: string;
  demoUrl?: string;
  status: 'Production / Completed' | 'Active Development' | 'Internship Production';
  architectureSummary?: string;
  architectureDiagram?: string[];
  technicalHighlights?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Completed Project' | 'Currently Exploring';
    highlight?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "S. Abhiram",
    headline: "Building intelligent systems. Turning ideas into software.",
    subheadline: "Student developer exploring AI agents, backend systems, databases, and practical software engineering.",
    about: [
      "I am a student developer driven by an engineering mindset: understanding systems from first principles, designing structured architectures, and turning ideas into production-ready software.",
      "My core focus lies at the intersection of AI agents and robust backend systems. Through hands-on internship experience at Auriseg and independent projects like DisasterPulse TN and CourierX, I have developed asynchronous code review pipelines using LangGraph and LLMs, calibrated machine learning hazard models, and implemented relational database systems with strict integrity constraints.",
      "I believe in evidence-based software engineering—building transparent workflows, writing automated tests, and prioritizing real architectural soundness over superficial demos."
    ],
    github: "https://github.com/abhi-45-dev",
    linkedin: "https://www.linkedin.com/in/abhiram-s-990b823aa/",
    emailNotice: "Configurable contact link. Connect via LinkedIn or email directly.",
    targetRoles: [
      "AI Development & Agentic Systems",
      "Backend & API Engineering",
      "Database Systems & DBMS",
      "Software Engineering Internships"
    ]
  },

  education: {
    institution: "Vellore Institute of Technology (VIT)",
    degree: "Bachelor of Technology (B.Tech)",
    program: "Computer Science and Engineering",
    verifiedDetails: "Active undergraduate student with coursework in Database Systems, Embedded Systems, and Data Structures & Algorithms.",
    coursework: [
      "Database Management Systems & Physical Schema Design",
      "Data Structures & Algorithms",
      "Embedded Systems Architecture",
      "Object-Oriented Programming & Systems Design",
      "Software Engineering Methodologies"
    ]
  },

  credential: {
    title: "Building Agents with Agentic AI",
    issuer: "IBM Career Education Program",
    period: "April 2026 – June 2026",
    format: "Online / Hybrid",
    status: "Completed",
    skillsCovered: [
      "Agentic AI Architecture & Patterns",
      "Autonomous Tool Execution & Orchestration",
      "Multi-Agent Coordination & Communication",
      "LLM Workflow Engineering & Safety",
      "Prompt Optimization & Function Calling"
    ],
    note: "Professional certification program completed through IBM Career Education focusing on modern autonomous agentic workflows."
  },

  featuredExperience: {
    company: "Auriseg",
    role: "AI Development Intern",
    period: "June 2026 – July 2026",
    location: "Chennai, Tamil Nadu, India",
    arrangement: "Hybrid",
    summary: "Engineered an AI-powered automated code review agent using LangGraph, LangChain, and Large Language Models to evaluate multilingual source repositories against architectural hygiene and quality benchmarks.",
    responsibilities: [
      "Built an automated end-to-end pipeline for parsing, chunking, and analyzing multilingual source code (Python, JavaScript/TypeScript).",
      "Implemented an asynchronous map-reduce orchestration workflow in LangGraph to coordinate modular inspection passes across repository files.",
      "Integrated a vector database knowledge retrieval layer (ChromaDB / FAISS) referencing organizational coding standards and safety guidelines.",
      "Engineered automated checks targeting critical code hazards: dead variables, unreachable branches, bloated single-responsibility violations, $O(N^2)$ loop inefficiencies, and hazardous execution calls such as eval().",
      "Built FastAPI microservice endpoints with standardized JSON evaluation schemas for seamless developer integration."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Google Gemini LLMs",
      "ChromaDB / FAISS",
      "Prompt Engineering",
      "REST APIs"
    ],
    ragWorkflow: [
      { step: "01. Data Ingestion", desc: "Reads corporate style guides, security rules, and performance standards." },
      { step: "02. Markdown Chunking", desc: "Decomposes guidelines into semantic vectors with metadata tags." },
      { step: "03. Vector Embedding", desc: "Generates high-dimensional embeddings indexed in local vector storage." },
      { step: "04. Targeted Retrieval", desc: "Fetches contextually relevant rules matched to file language and AST patterns." },
      { step: "05. LLM Synthesis", desc: "Runs evaluation prompts using Gemini models with strict structured JSON constraints." },
      { step: "06. Report Generation", desc: "Outputs actionable, categorized feedback without synthetic hallucinated metrics." }
    ],
    verifiedRepo: "https://github.com/abhi-45-dev/code-review-agent"
  },

  projects: [
    {
      id: "code-review-agent",
      title: "AI Code Review Agent",
      tagline: "Autonomous multi-agent source code analysis and architectural quality pipeline",
      category: "AI & Agents",
      featured: true,
      problem: "Manual code reviews in fast-paced teams are time-consuming and often miss subtle structural hazards like redundant loops, bloated functions, and unsafe eval() executions.",
      contribution: "Designed and implemented the core LangGraph map-reduce pipeline, integrated vector knowledge retrieval for company guidelines, and created FastAPI endpoints for automated repository assessments.",
      technologies: ["Python", "LangGraph", "LangChain", "FastAPI", "Google Gemini", "ChromaDB", "Pydantic"],
      keyFeatures: [
        "Asynchronous map-reduce orchestration via LangGraph for scalable repository file parsing",
        "Dual-language analysis targeting Python and JavaScript / TypeScript codebases",
        "RAG-backed guideline enforcement fetching specialized coding standards",
        "Detection of dead code, bloated functions, $O(N^2)$ loop structures, and unsafe execution patterns",
        "Structured JSON reporting suitable for automated CI/CD and developer tooling"
      ],
      githubUrl: "https://github.com/abhi-45-dev/code-review-agent",
      status: "Internship Production",
      architectureSummary: "LangGraph Asynchronous Map-Reduce Workflow + ChromaDB RAG Knowledge Layer + Google Gemini LLM Engine",
      technicalHighlights: [
        { label: "Orchestrator", value: "LangGraph Async Graph" },
        { label: "Vector DB", value: "ChromaDB / FAISS" },
        { label: "LLM Layer", value: "Google Gemini Models" },
        { label: "Backend", value: "FastAPI / Uvicorn" }
      ]
    },
    {
      id: "crisis-os",
      title: "CrisisOS / DisasterPulse TN",
      tagline: "Evidence-backed flood intelligence and risk-aware evacuation decision support system for Tamil Nadu",
      category: "AI & Agents",
      featured: true,
      problem: "During catastrophic monsoon flooding in Tamil Nadu, survivors and emergency responders lack unified, evidence-based route hazard predictions, often encountering impassable roads or fictitious resource reports.",
      contribution: "Built the calibrated machine learning flood probability engine (FloodNow TN v1), integrated OpenStreetMap highway graphs with KD-tree spatial snapping, and implemented the Survivor Decision Engine with Tamil localization.",
      technologies: ["Python", "FastAPI", "Scikit-Learn", "OpenStreetMap", "GeoJSON", "React", "Vite", "Pytest"],
      keyFeatures: [
        "Calibrated ML Classifier (FloodNow TN v1) trained on India Flood Inventory v3 (HydroSense Lab, IIT Delhi) with Platt scaling",
        "Strict anti-slop architecture: zero handcrafted operational data, legacy mock data quarantined via automated AST tests",
        "OSM highway network routing comparing FASTEST vs BALANCED vs SAFEST evacuation trajectories",
        "Survivor Decision Engine returning verified safe havens or principled 'NO ROUTE CONFIDENTLY RECOMMENDED' with State Emergency 1070/112 contacts",
        "Full Tamil language localization for emergency directives and survivor guidance",
        "53 automated verification tests across 10 specialized test modules ensuring 100% test pass rate"
      ],
      plannedFeatures: [
        "Live river gauge hardware telemetry integration",
        "Multi-district automated road sensor feeds",
        "Crowdsourced photo verification via computer vision"
      ],
      githubUrl: "https://github.com/abhi-45-dev/CrisisOS",
      status: "Production / Completed",
      architectureSummary: "HydroSense IITD Dataset ➔ FloodNow TN v1 (Calibrated ML) ➔ GeoJSON Hazard Surface ➔ OSM KD-Tree Graph ➔ Survivor Decision Engine",
      technicalHighlights: [
        { label: "Test Coverage", value: "53 Tests (100% Pass)" },
        { label: "ML Calibration", value: "Platt Sigmoid Scaling" },
        { label: "Spatial Routing", value: "OSM KD-Tree Snapping" },
        { label: "Localization", value: "English & Tamil" }
      ]
    },
    {
      id: "courier-x",
      title: "CourierX",
      tagline: "Comprehensive courier management and parcel-tracking relational DBMS",
      category: "Backend & DBMS",
      featured: true,
      problem: "Logistics operations face data inconsistency, dispatch tracking errors, and uncoordinated vehicle allocation when managed without strict transactional constraints.",
      contribution: "Architected the relational MySQL schema with primary and foreign key constraints, built the Python/Flask backend API, and engineered the dynamic parcel tracking and branch management interface.",
      technologies: ["Python", "Flask", "MySQL", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      keyFeatures: [
        "Fully normalized relational database schema with entities for Customers, Branches, Employees, Vehicles, Parcels, and Tracking",
        "Strict primary and foreign key integrity constraints with ENUM status controls",
        "Debounced live search and status filtering for parcel dispatch workflows",
        "Branch management and fleet vehicle allocation modules",
        "Complete CRUD capabilities with parameterized SQL queries preventing injection vulnerabilities"
      ],
      githubUrl: "https://github.com/abhi-45-dev/CourierX",
      status: "Production / Completed",
      architectureSummary: "Normalized MySQL 8.0 Relational Core + Python Flask API Layer + Vanilla JavaScript Dynamic Frontend",
      technicalHighlights: [
        { label: "Database", value: "MySQL Relational Core" },
        { label: "Integrity", value: "Foreign Key Constraints & ENUMs" },
        { label: "Backend", value: "Python Flask REST" },
        { label: "Queries", value: "Parameterized SQL CRUD" }
      ]
    },
    {
      id: "ai-travel-planner",
      title: "AI Travel Planner",
      tagline: "Destination-aware dynamic travel itinerary generator built with Streamlit and Python",
      category: "AI & Agents",
      featured: false,
      problem: "Travelers waste hours researching generic itineraries that don't adapt to party size, duration, or pacing preferences.",
      contribution: "Developed the dynamic itinerary generation engine in Python, structured morning/afternoon/evening activity generation pools, and designed the responsive Streamlit dashboard.",
      technologies: ["Python", "Streamlit", "Pandas", "Prompt Engineering"],
      keyFeatures: [
        "Configurable trip parameters: starting country/city, destination country/city, trip duration (1-30 days)",
        "Party-size-based cost calculations and estimated budgeting breakdowns",
        "Categorized morning, afternoon, and evening activity distribution algorithms",
        "Modular expandable UI for day-by-day travel scheduling"
      ],
      githubUrl: "https://github.com/abhi-45-dev/AI-travel-planner",
      status: "Production / Completed",
      architectureSummary: "Python Procedural Engine + Curated Activity Knowledge Pools + Streamlit Reactive Frontend",
      technicalHighlights: [
        { label: "Framework", value: "Streamlit" },
        { label: "Data Engine", value: "Pandas & Python" },
        { label: "Planning Logic", value: "Time-Partitioned Activity Allocator" }
      ]
    },
    {
      id: "zenith-ai",
      title: "Zenith-AI",
      tagline: "Exploratory conversational AI assistant built with LangChain and Streamlit",
      category: "AI & Agents",
      featured: false,
      problem: "Exploring memory retention, conversational state management, and LLM orchestration inside interactive Python web interfaces.",
      contribution: "Configured LangChain chat memory buffers, integrated LLM API inference, and styled the chat interface.",
      technologies: ["Python", "LangChain", "Streamlit", "LLM APIs"],
      keyFeatures: [
        "Conversational memory buffer maintaining multi-turn context",
        "Interactive chat UI with streaming response simulation",
        "Modular prompt templates for customizable assistant personas"
      ],
      githubUrl: "https://github.com/abhi-45-dev/zenith-ai",
      status: "Active Development",
      technicalHighlights: [
        { label: "Focus", value: "Conversational State & Memory" },
        { label: "Orchestration", value: "LangChain" }
      ]
    },
    {
      id: "mockmate",
      title: "MockMate",
      tagline: "AI-assisted technical interview preparation and question assessment utility",
      category: "AI & Agents",
      featured: false,
      problem: "Candidates need structured, objective question evaluations and immediate technical feedback when practicing for coding and architecture interviews.",
      contribution: "Designed question prompting templates and response evaluation logic in Python.",
      technologies: ["Python", "REST APIs", "Prompt Engineering"],
      keyFeatures: [
        "Domain-specific interview topic generation",
        "Structured technical feedback on candidate responses",
        "Lightweight Python execution framework"
      ],
      githubUrl: "https://github.com/abhi-45-dev/mockmate",
      status: "Active Development",
      technicalHighlights: [
        { label: "Focus", value: "Evaluation Prompting" },
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Programming Languages",
      description: "Languages used across production projects, backend APIs, and systems engineering.",
      skills: [
        { name: "Python", level: "Completed Project", highlight: "Primary language for AI agents, FastAPI, Flask, ML pipelines" },
        { name: "JavaScript / TypeScript", level: "Completed Project", highlight: "Frontend development, Next.js, AST inspection target" },
        { name: "SQL", level: "Completed Project", highlight: "Relational queries, schema design, constraints, indexing in MySQL" },
        { name: "C / C++", level: "Completed Project", highlight: "Algorithms, low-level data structures, and academic coursework" },
        { name: "HTML5 / CSS3", level: "Completed Project", highlight: "Modern semantics, responsive layouts, Tailwind CSS" }
      ]
    },
    {
      title: "AI & Agent Frameworks",
      description: "Autonomous agent orchestration, RAG architectures, and LLM integrations.",
      skills: [
        { name: "LangGraph", level: "Completed Project", highlight: "Asynchronous map-reduce graph orchestration at Auriseg" },
        { name: "LangChain", level: "Completed Project", highlight: "Chains, memory management, prompt engineering workflows" },
        { name: "Google Gemini Models", level: "Completed Project", highlight: "Structured JSON code evaluations and reasoning" },
        { name: "RAG Architecture", level: "Completed Project", highlight: "Embedding, indexing, and contextual guideline retrieval" },
        { name: "ChromaDB / FAISS", level: "Completed Project", highlight: "Vector storage and cosine similarity retrieval layers" },
        { name: "Agentic AI Patterns", level: "Completed Project", highlight: "Verified through IBM Building Agents with Agentic AI program" }
      ]
    },
    {
      title: "Backend & Systems",
      description: "High-performance web backends, API design, and asynchronous execution.",
      skills: [
        { name: "FastAPI", level: "Completed Project", highlight: "Asynchronous REST endpoints, Pydantic data schemas" },
        { name: "Flask", level: "Completed Project", highlight: "CourierX backend, request routing, session handling" },
        { name: "RESTful API Design", level: "Completed Project", highlight: "Standardized request/response contracts and OpenAPI specs" },
        { name: "Uvicorn / ASGI", level: "Completed Project", highlight: "Production asynchronous server runtime" },
        { name: "Automated Testing (Pytest)", level: "Completed Project", highlight: "53 automated tests in CrisisOS, AST static verification" }
      ]
    },
    {
      title: "Databases & Storage",
      description: "Relational schema modeling, foreign key relationships, and data integrity.",
      skills: [
        { name: "MySQL", level: "Completed Project", highlight: "Relational schema design, normalization, triggers, constraints" },
        { name: "Relational Modeling", level: "Completed Project", highlight: "Entity-Relationship design, 1:N and N:M associations" },
        { name: "Data Integrity & Constraints", level: "Completed Project", highlight: "Foreign keys, ENUMs, unique constraints, transactional ACID" },
        { name: "Vector Indexing", level: "Completed Project", highlight: "High-dimensional vector embeddings in RAG systems" }
      ]
    },
    {
      title: "Developer Tools & Infrastructure",
      description: "Tools supporting version control, containerization, and developer velocity.",
      skills: [
        { name: "Git & GitHub", level: "Completed Project", highlight: "Branching, PR workflows, repository management" },
        { name: "Next.js & React", level: "Completed Project", highlight: "Modern App Router, SSR, TypeScript, interactive UI" },
        { name: "Tailwind CSS", level: "Completed Project", highlight: "Utility-first modern design systems and custom themes" },
        { name: "Three.js / WebGL", level: "Completed Project", highlight: "Interactive 3D geometry and computational visuals" },
        { name: "Streamlit", level: "Completed Project", highlight: "Rapid interactive data apps and prototype deployment" },
        { name: "Docker", level: "Currently Exploring", highlight: "Containerized deployment configurations" }
      ]
    }
  ]
};
