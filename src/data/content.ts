/* Everything you may want to edit lives in src/data. Numbers below come from your resume. */

export type Stat = { ic: string; n: string; l: string };
export type Help = { q: string; a: string; proof: string };
export type Service = { ic: string; t: string; d: string; tags: string[] };
export type Step = { t: string; d: string };
export type SkillRow = [string, string[], boolean?];
export type Job = { when: string; title: string; org: string; points: string[] };
export type Faq = [string, string];

export const ICONS: Record<string, string> = {
  app: '<path d="M4 5h16v11H4zM8 20h8M12 16v4"/>',
  api: '<path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  ui: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h4"/>',
  db: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  live: '<path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z"/>',
  ai: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>',

  shield: '<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z"/><path d="m9.5 12 2 2 3.5-4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  chat: '<path d="M4 5h16v11H9l-5 4V5Z"/><path d="m9 10 2 2 4-4"/>',
  gauge: '<path d="M4 16a8 8 0 1 1 16 0"/><path d="m12 16 4-5"/><circle cx="12" cy="16" r="1.2"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>'
};

export const STATS: Stat[] = [
  { ic: "shield", n: "80", l: "secure REST APIs with JWT and role-based access" },
  { ic: "layers", n: "60+", l: "reusable React components built" },
  { ic: "chat", n: "70%", l: "of chatbot queries resolved without a human" },
  { ic: "gauge", n: "30%", l: "faster average response after query tuning" }
];

export const HELP: Help[] = [
  { q: "Your API is open to anyone.", a: "I add JWT authentication and role-based access so every user only reaches what their role allows.", proof: "80 secure APIs · 3 user roles" },
  { q: "The app feels slow.", a: "I split bundles, lazy load heavy parts and tune database queries until pages respond quickly.", proof: "30% faster average response" },
  { q: "Your team needs live updates.", a: "I build real-time features with Socket.io, so boards, lists and histories update the moment something changes.", proof: "400+ tasks synced live" },
  { q: "Support is overloaded.", a: "I connect the OpenAI API to your product so a chatbot answers the common questions and hands over the rest.", proof: "70% resolved without a human" }
];

export const SERVICES: Service[] = [
  { ic: "app", t: "Full stack web apps", d: "End-to-end products on the MERN and PERN stacks, from database to interface.", tags: ["React.js", "Next.js", "Node.js", "PostgreSQL"] },
  { ic: "api", t: "REST API design", d: "Secure, well-structured APIs with authentication, role-based access and Postman-tested endpoints.", tags: ["Express.js", "JWT", "RBAC", "Postman"] },
  { ic: "ui", t: "Frontend engineering", d: "Responsive, reusable component libraries from design files, with lazy loading and code-splitting.", tags: ["React.js", "TypeScript", "Redux Toolkit", "Bootstrap"] },
  { ic: "db", t: "Database design", d: "Relational and document schemas that stay fast as the data grows.", tags: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"] },
  { ic: "live", t: "Real-time features", d: "Live boards, notifications and histories that update without a page refresh.", tags: ["Socket.io", "Node.js", "React.js"] },
  { ic: "ai", t: "AI integration", d: "Chatbots and language features built on the OpenAI API, wired into your existing product.", tags: ["OpenAI API", "Next.js", "Node.js"] }
];

export const STEPS: Step[] = [
  { t: "Understand", d: "I read the brief, the UI/UX designs and wireframes, and agree what done looks like." },
  { t: "Design", d: "I plan the database schema, the API routes and the component structure before writing features." },
  { t: "Build", d: "I work in Agile sprints, shipping reusable components and secure endpoints in small, reviewable pieces." },
  { t: "Test and ship", d: "APIs are tested in Postman, pages are checked across browsers, and performance is tuned before release." }
];

export const SKILLS: SkillRow[] = [
  ["Frontend", ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "HTML5", "CSS3", "Bootstrap", "Responsive design"]],
  ["Backend", ["Node.js", "Express.js", "REST API design", "JWT authentication", "Role-based access control", "Socket.io"]],
  ["Databases", ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Relational design"]],
  ["AI", ["OpenAI API (LLM integration)"]],
  ["Tools", ["Git", "GitHub", "Postman", "Agile", "Vite"]],
  ["Working knowledge", ["Docker", "AWS", "CI/CD pipelines"], true],
  ["Fundamentals", ["OOP", "Data structures and algorithms", "Performance optimisation", "Cross-browser compatibility"]]
];

export const JOBS: Job[] = [
  {
    when: "Nov 2025 – Oct 2026", title: "Full Stack Developer", org: "TechCraft",
    points: [
      "Designed and integrated 80 secure REST APIs with JWT authentication and role-based access control for 3 user roles (admin, doctor, staff).",
      "Designed a relational schema handling 5,000+ patient records across 18 tables; optimised queries cut average response time by 30%.",
      "Tested APIs in Postman to verify endpoints, authentication and role-based access before release.",
      "Worked in a 16-person Agile team using React.js, Node.js, Express.js, PostgreSQL and Prisma ORM.",
      "Built responsive, reusable frontend components and tuned backend services for performance and maintainability."
    ]
  },
  {
    when: "Aug 2024 – Sep 2025", title: "Frontend Developer", org: "TriTech Solutions",
    points: [
      "Built 60+ reusable React components (navigation, forms, cards, modals) from UI/UX designs and wireframes.",
      "Improved load time with lazy loading and code-splitting; fixed cross-browser bugs and cut compatibility issues by 30%.",
      "Integrated REST APIs to show dynamic content and managed state for smooth data handling."
    ]
  }
];

export const FAQ: Faq[] = [
  ["Which stack do you work with?", "React.js, Next.js and TypeScript on the front end. Node.js and Express on the back end. PostgreSQL, MySQL or MongoDB for data, with Prisma ORM for relational work."],
  ["Can you add AI features to a product?", "Yes. I built a support chatbot on the OpenAI API that resolves about 70% of roughly 600 daily queries without a human."],
  ["How do you keep APIs secure?", "I use JWT authentication and role-based access control, and I test endpoints, authentication and roles in Postman before release."],
  ["Do you work well in a team?", "Yes. At TechCraft I worked in a 16-person Agile team on a React, Node.js and PostgreSQL product."],
  ["What roles are you looking for?", "Full stack, frontend and React roles, in Pakistan or remote."]
];

export const TICKER: string[] = ["React.js", "Next.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma", "MongoDB", "MySQL", "Socket.io", "OpenAI API", "Redux Toolkit", "JWT", "Git", "Postman"];

