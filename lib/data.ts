// =================================================================
// Portfolio content — single source of truth.
// Edit copy, links, and data here; components read from this file.
// =================================================================

export const personal = {
  name: "Oliver Leonor",
  fullName: "Norman Oliver A. Leonor",
  email: "oliver.leonor90@gmail.com",
  github: "https://github.com/Oliver-Leonor",
  githubHandle: "Oliver-Leonor",
  linkedin: "https://linkedin.com/in/oliver-leonor-582706228",
  location: "Philippines",
  availability: "Available · PH / AU timezone · Responds within 4h",
  education: "BS Computer Engineering",
} as const;

export const hero = {
  // Two-line role, deliberate line break between the two tracks
  role: ["Full-stack developer.", "AI engineer."],
  // The dual-track pitch — has to land in 10 seconds
  pitch:
    "I ship AI-native full-stack apps end to end with Claude Code. Fourteen years in IT, six shipping production software. I don't wait to get unblocked - I figure it out.",
  statusLine: personal.availability,
} as const;

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "docscope",
    title: "DocScope",
    tagline: "AI Document Intelligence",
    description:
      "Upload any PDF, extract content with AI vision and text parsing, then chat with it using RAG. Streamed responses, page-level citations, built to handle messy real-world documents.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL + pgvector",
      "OpenAI GPT-4o-mini",
      "Prisma",
      "Vercel",
    ],
    liveUrl: "https://electrical-pdf-qa.vercel.app",
    githubUrl: "https://github.com/Oliver-Leonor/docscope",
    featured: true,
  },
  {
    slug: "proto-community-hub",
    title: "Proto Community Hub",
    tagline: "Member platform",
    description:
      "Full member platform with tiered access, booking flow, and a referral system. Used as the primary demo in CTO-level technical interviews.",
    stack: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Zod",
    ],
    liveUrl: "https://proto-community-hub.vercel.app",
    githubUrl: "https://github.com/Oliver-Leonor/proto-community-hub",
  },
  {
    slug: "wallet-ledger-api",
    title: "Wallet Ledger API",
    tagline: "Production REST API",
    description:
      "Full REST wallet API using the ledger pattern for correctness under concurrency. Shipped on Cloudflare Workers with an interactive docs UI.",
    stack: [
      "TypeScript",
      "Cloudflare Workers",
      "REST",
      "Ledger pattern",
    ],
    liveUrl: "https://wallet-ledger-api.oliver-leonor.workers.dev/ui",
    githubUrl: "https://github.com/Oliver-Leonor/wallet-ledger-api",
  },
];

// Stack grouped for the 4-column plain-text listing
export const stack = {
  frontend: [
    "TypeScript",
    "React",
    "Next.js (App Router)",
    "TailwindCSS",
    "shadcn/ui",
    "Zustand",
    "React Query",
    "Zod",
    "React Hook Form",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "PostgreSQL",
    "Supabase",
    "Prisma",
    "Cloudflare Workers",
  ],
  ai: [
    "Claude API",
    "OpenAI API",
    "Claude Code (Max, daily)",
    "MindStudio",
    "pgvector (RAG)",
    "Prompt engineering",
  ],
  ops: [
    "Vercel",
    "Cloudflare Workers",
    "Railway",
    "AWS (S3, CloudFront, Lambda, DynamoDB, Route 53)",
    "Azure (DevOps, Pipelines)",
    "GCP (Cloud Run)",
    "GitHub Actions",
    "Sentry",
  ],
  automation: [
    "n8n",
    "GoHighLevel",
    "Zapier",
    "Salesforce (jsforce)",
    "ActiveCampaign",
    "Pipedrive",
    "Monday.com",
  ],
  analytics: [
    "VWO A/B testing",
    "Google Tag Manager (15+ containers)",
    "GA4",
  ],
} as const;

// Philosophy pull-quote, placed between Work and Stack
export const philosophy = {
  quote:
    "I don't promise perfection. I promise honesty and hard work. When I get blocked, I don't wait - I invest my own money and time to unblock myself.",
  subtext:
    "Bought my own GoHighLevel account to solve an OAuth flow. Pay for Claude Max out of pocket because shipping beats penny-pinching.",
};

// Timeline — doubles as origin story. Newest first.
export type TimelineEntry = {
  year: string;
  duration: string;
  title: string;
  org: string;
  details: string;
  tags: string[];
};

export const timeline: TimelineEntry[] = [
  {
    year: "2020",
    duration: "Present",
    title: "Freelance Full-Stack Developer & AI Engineer",
    org: "Independent",
    details:
      "Building AI-native full-stack apps end to end. Shipping n8n automations, CRM integrations (Salesforce, GoHighLevel, Pipedrive), and React landing pages for agency clients. Daily work with Claude Code on the Max plan.",
    tags: ["Next.js", "TypeScript", "Claude Code", "n8n", "AWS", "Cloudflare"],
  },
  {
    year: "2024",
    duration: "1 year",
    title: "Software Engineer",
    org: "Sansan - Meishi Creation Business",
    details:
      "Shipped TypeScript logic governing how business card elements behave in digital form - SVG rendering, layout rules, interaction states, all against strict spec compliance.",
    tags: ["TypeScript", "SVG", "Adobe Illustrator", "Internal tooling"],
  },
  {
    year: "2023",
    duration: "1 year",
    title: "Full-Stack Developer",
    org: "Bizbloqs Management Solutions",
    details:
      "Built and maintained internal business systems with React + TypeScript. Supported CI/CD pipelines and triaged production issues across the stack.",
    tags: ["React", "TypeScript", "Azure DevOps", "CI/CD"],
  },
  {
    year: "2023",
    duration: "4 months",
    title: "Full-Stack Developer",
    org: "Fincast",
    details:
      "Designed backend systems with clear PostgreSQL schemas, supporting reliable frontend features and reporting. Worked in an Agile environment with structured delivery cycles.",
    tags: ["PostgreSQL", "Node.js", "APIs", "Agile / Scrum", "Data Modeling"],
  },
  {
    year: "2022",
    duration: "10 months",
    title: "Technical Recruiter",
    org: "Turing",
    details:
      "Conducted 8+ technical interviews per day screening Python, ML, and QA engineers. Placed 20+ developers at OpenAI. Interviewing senior AI talent at that pay grade was the push I needed to go back to shipping code full-time.",
    tags: ["Technical screening", "Python", "ML", "QA"],
  },
  {
    year: "2015",
    duration: "7 years",
    title: "IT Generalist",
    org: "Uber",
    details:
      "Worked with backend systems handling real-time geolocation and weather data. Picked up Node.js, Express, and REST API patterns on the job. Learned API lifecycles, validation, error handling, and backend reliability at scale.",
    tags: ["Node.js", "Express", "REST APIs", "Geolocation", "Event-driven"],
  },
  {
    year: "2012",
    duration: "3 years",
    title: "Dealer Relations Officer",
    org: "General Motors - under IBM",
    details:
      "Started on IBM AS/400 green-screen terminals with zero training, no documentation, no AI assistance. Covered US, Mexico, and Canada dealer operations. This is where I learned to figure things out without a safety net.",
    tags: ["IBM AS/400", "Avaya", "Enterprise systems", "Cross-region ops"],
  },
];

export const nav = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
] as const;
