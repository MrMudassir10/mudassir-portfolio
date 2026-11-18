export type Project = {
  id: string;
  slug: string;
  title: string;
  cats: string[];
  tagline: string;
  stack: string[];
  stats: [string, string][];
  overview: string;
  highlights: string[];
  role: string;
  /** Dark image path. The light twin is the same path with /img/ replaced by /img/light/. */
  cover: string;
  /** Links on example.com or your-handle are placeholders and stay hidden until you replace them. */
  links: { live: string; code: string; case: string };
};

export const TABS = ["All", "AI-powered", "Real-time", "Role-based access"];

export const PROJECTS: Project[] = [
  {
    id: "leadradar", slug: "lead-radar", title: "Lead Radar", cats: [],
    tagline: "A personal project: a lead generation tool that finds local businesses, scores them against your ideal customer profile and shows who to contact first.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma ORM", "JWT", "Zod", "Vitest"],
    stats: [["21", "automated tests passing"], ["12", "industries to search"], ["5", "weighted scoring factors"], ["3", "email draft tones"]],
    overview: "A full stack lead generation app. You choose an industry and a city, or upload your own CSV, and it ranks every business from 0 to 100 based on your own profile. You can see exactly why each lead got its score, enrich it from the business's own website and send a ready-made email draft.",
    highlights: [
      "Search by industry and city across 12 industries, with businesses from OpenStreetMap.",
      "CSV import that detects columns automatically and skips duplicates.",
      "Lead scoring on 5 weighted factors, re-ranked instantly as you move the sliders. The score breakdown is visible for every lead.",
      "Enrichment reads the business's website for email, phone and signals like hiring or no online booking. A credit is charged only if the site is read successfully.",
      "Email drafts built from each lead's real signals, in 3 tones, for buyer or seller mode.",
      "Pipeline board (New, Contacted, Replied, Meeting, Won) and CSV export.",
      "Secure by design: JWT auth in an httpOnly cookie, rate limiting, protection against server-side request forgery, and CSV formula injection protection.",
      "21 automated tests covering scoring, website parsing, CSV import and security checks."
    ],
    role: "Personal project, built end to end with AI assistance (Claude). I set it up, ran it and debugged it myself.",
    cover: "/img/leadradar.jpg",
    links: { live: "https://example.com/lead-radar", code: "https://github.com/MrMudassir10/lead-radar", case: "https://example.com/case-study/lead-radar" }
  },
  {
    id: "chatbot", slug: "ai-support-chatbot", title: "AI Customer Support Chatbot", cats: ["AI-powered"],
    tagline: "A support assistant that answers customer questions and resolves most of them without a human.",
    stack: ["Next.js", "Node.js", "OpenAI API"],
    stats: [["~600", "queries per day"], ["<2s", "average response"], ["70%", "resolved automatically"]],
    overview: "Customers ask the same kinds of questions all day. I built a chatbot that understands natural-language queries through the OpenAI API and replies in under two seconds, so the support team only handles what really needs a person.",
    highlights: [
      "Handles about 600 customer queries a day.",
      "Resolves 70% of them automatically, which cuts the support team's workload.",
      "Next.js frontend talks to a Node.js backend that calls the OpenAI API for natural language processing.",
      "Average response time stays under 2 seconds."
    ],
    role: "Full stack: chat interface, backend API and the OpenAI integration.",
    cover: "/img/chatbot.jpg",
    links: { live: "https://example.com/ai-support-chatbot", code: "https://github.com/MrMudassir10/ai-support-chatbot", case: "https://example.com/case-study/ai-support-chatbot" }
  },
  {
    id: "collab", slug: "team-collaboration-tool", title: "Team Collaboration Tool", cats: ["Real-time", "Role-based access"],
    tagline: "A Trello and Linear style project board with drag-and-drop tasks and live updates.",
    stack: ["Next.js", "Express", "PostgreSQL", "Prisma", "Socket.io", "JWT"],
    stats: [["12+", "teams using it"], ["400+", "tasks tracked"]],
    overview: "A project management tool where teams plan work on boards, set deadlines and see changes from teammates the moment they happen.",
    highlights: [
      "Drag-and-drop task boards with deadlines.",
      "Real-time sync across users with Socket.io.",
      "Role-based task assignment and JWT authentication for secure multi-team access.",
      "Adopted by 12+ teams, tracking 400+ tasks."
    ],
    role: "Full stack: boards UI, REST API, database schema and real-time layer.",
    cover: "/img/collab.jpg",
    links: { live: "https://example.com/team-collaboration-tool", code: "https://github.com/MrMudassir10/team-collaboration-tool", case: "https://example.com/case-study/team-collaboration-tool" }
  },
  {
    id: "ledger", slug: "banking-ledger-module", title: "Banking Ledger Module", cats: ["Real-time"],
    tagline: "A personal project: a ledger that records debits and credits and keeps balances correct.",
    stack: ["Node.js", "Express.js", "MongoDB", "React"],
    stats: [["6,000+", "simulated transactions tested"]],
    overview: "A ledger module that records debit and credit transactions, updates balances automatically and produces monthly statements.",
    highlights: [
      "Debit and credit transactions with automatic balance updates.",
      "Monthly statements.",
      "Tested with 6,000+ simulated transactions.",
      "React frontend shows transaction history and statements in real time."
    ],
    role: "Personal project, built end to end.",
    cover: "/img/ledger.jpg",
    links: { live: "https://example.com/banking-ledger-module", code: "https://github.com/MrMudassir10/banking-ledger-module", case: "https://example.com/case-study/banking-ledger-module" }
  },
  {
    id: "hospital", slug: "hospital-management-system", title: "Hospital Management System", cats: ["Role-based access"],
    tagline: "Patient records and daily operations for admins, doctors and staff in one system.",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    stats: [["5,000+", "patient records"], ["18", "database tables"], ["30%", "faster average response"]],
    overview: "A role-based system where admins, doctors and staff each see and do only what their role allows, backed by a relational schema built for patient data.",
    highlights: [
      "80 REST APIs secured with JWT and role-based access for 3 roles: admin, doctor and staff.",
      "Relational schema with CRUD across 18 tables, holding 5,000+ patient records.",
      "Query optimisation cut average response time by 30%.",
      "APIs tested in Postman for endpoints, authentication and role access before release."
    ],
    role: "Full stack, in a 16-person Agile team.",
    cover: "/img/hospital.jpg",
    links: { live: "https://example.com/hospital-management-system", code: "https://github.com/MrMudassir10/hospital-management-system", case: "https://example.com/case-study/hospital-management-system" }
  },
  {
    id: "jobs", slug: "job-portal", title: "Job Portal", cats: [],
    tagline: "A place where candidates find jobs and employers post them.",
    stack: ["React.js", "Node.js"],
    stats: [],
    overview: "A job board connecting candidates and employers. Replace this text with your own description.",
    highlights: [
      "Job listings with filters.",
      "Separate flows for candidates and employers.",
      "Authentication and protected routes."
    ],
    role: "Full stack developer.",
    cover: "/img/jobs.jpg",
    links: { live: "https://example.com/job-portal", code: "https://github.com/MrMudassir10/job-portal", case: "https://example.com/case-study/job-portal" }
  }
];
