export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  readTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "top-10-free-ai-coding-tools",
    title: "Top 10 Free AI Coding Tools for Developers and Small Teams",
    excerpt:
      "A practical starting list of AI-assisted development tools worth exploring when you want to code faster without immediately adding another paid subscription.",
    category: "AI & Automation",
    tags: ["AI", "Development", "Coding Tools"],
    date: "2026-08-26",
    author: "Blumebyte Team",
    readTime: "7 min read",
    body: [
      "AI coding tools can be useful for drafting functions, explaining unfamiliar code, generating tests, refactoring repetitive logic and reducing the time spent searching for syntax. The right choice depends on your editor, workflow and how much control you want over the generated output.",
      "A useful shortlist to explore includes GitHub Copilot's available free access options, Gemini Code Assist, Amazon Q Developer, Codeium/Windsurf's free tier, Continue, Tabby, Aider, Sourcegraph Cody's available entry tier, Replit's AI-assisted tools and editor-integrated open-source assistants. Product plans change, so always confirm current free-tier limits before adopting a tool for a team.",
      "Use these tools as assistants rather than automatic authorities. Review generated code, keep secrets out of prompts, test security-sensitive logic and maintain normal code review standards. The biggest productivity gain usually comes from combining a clear development process with AI rather than relying on the tool alone.",
    ],
  },
  {
    slug: "ai-coding-tools-small-teams",
    title: "AI Coding Tools: What They Actually Change for Small Teams",
    excerpt:
      "AI assistants are now part of everyday development. Here is where they genuinely save time, and where human judgement still decides the outcome.",
    category: "AI & Automation",
    tags: ["AI", "Development", "Productivity"],
    date: "2026-08-18",
    author: "Blumebyte Team",
    readTime: "6 min read",
    body: [
      "AI coding assistants have moved from novelty to normal. For a small team, the gain is rarely only about writing code faster — it is about reducing the small friction that slows delivery: boilerplate, test scaffolding, migrations and documentation.",
      "The teams that benefit most are the ones with clear standards. When code conventions, review processes and deployment steps are written down, an assistant is more likely to produce work that fits the project.",
      "Use AI for drafts and repetitive work, keep people responsible for architecture, security and data decisions, and measure whether the workflow actually improves delivery quality or speed.",
    ],
  },
  {
    slug: "digital-transformation-without-disruption",
    title: "Digital Transformation Without Disrupting Daily Operations",
    excerpt:
      "A staged approach can help a business modernise systems while protecting the processes that still have to run every day.",
    category: "Digital Transformation",
    tags: ["Strategy", "Operations", "Change Management"],
    date: "2026-08-04",
    author: "Blumebyte Team",
    readTime: "5 min read",
    body: [
      "Replacing a core system while serving customers is a scheduling problem before it is a technical one. Start by mapping the processes that cannot pause — such as invoicing, payroll and customer support — and design the rollout around them.",
      "A staged rollout creates reversible steps: one department, one process or one workflow at a time. Each stage produces feedback and a clear decision point before the next phase begins.",
      "Training should be part of delivery rather than an afterthought. Systems are more likely to succeed when the people using them understand what changes, why it changes and where to get support.",
    ],
  },
  {
    slug: "ai-infrastructure-choices-african-businesses",
    title: "AI Infrastructure Choices for African Businesses",
    excerpt:
      "Cloud, hybrid or on-premise? A practical framework for matching infrastructure choices to connectivity, budget and data requirements.",
    category: "Infrastructure",
    tags: ["AI", "Cloud", "Infrastructure"],
    date: "2026-07-21",
    author: "Blumebyte Team",
    readTime: "7 min read",
    body: [
      "Infrastructure decisions should start with a few practical questions: where your data should live, how reliable your connectivity is, what services need to stay available and what level of technical support your organisation can maintain.",
      "Cloud and hybrid approaches can reduce the amount of infrastructure a smaller organisation has to manage directly, while local caching or offline-capable experiences can still matter when connectivity is inconsistent.",
      "Cost control matters as much as raw capability. Start with the smallest configuration that meets the workload, monitor actual usage and scale when the evidence supports it.",
    ],
  },
  {
    slug: "business-technology-trends-2026",
    title: "Business Technology Trends Worth Watching in 2026",
    excerpt:
      "A practical look at automation, AI-assisted work, security basics and connected business systems shaping technology decisions this year.",
    category: "Business Technology",
    tags: ["Trends", "Strategy", "Technology"],
    date: "2026-07-02",
    author: "Blumebyte Team",
    readTime: "6 min read",
    body: [
      "Practical automation of repetitive back-office work remains one of the clearest uses of modern business technology. Approvals, reporting, document handling and routine communication are strong places to look for improvements.",
      "Connected productivity platforms can also reduce the number of places where information gets lost. The objective is not to collect more software; it is to make the tools already in use work together more clearly.",
      "Security fundamentals such as multi-factor authentication, managed backups and sensible device policies should remain part of any technology investment conversation.",
    ],
  },
  {
    slug: "dashboards-people-actually-use",
    title: "How to Build Dashboards People Actually Use",
    excerpt:
      "A dashboard that answers one important question well is often more useful than one crowded with dozens of metrics.",
    category: "Product Design",
    tags: ["Dashboards", "Data", "UX"],
    date: "2026-06-16",
    author: "Blumebyte Team",
    readTime: "4 min read",
    body: [
      "Begin a dashboard project by identifying the decision it should support. If no one can name the decision, the dashboard can easily become a report that looks busy without helping anyone act.",
      "Keep the first version focused: a primary metric, a useful trend and the few breakdowns that explain what changed. Additional views can be added after observing what users actually need.",
      "Performance and clarity are features. A dashboard should make important information easy to find on the devices and connections people really use.",
    ],
  },
  {
    slug: "hr-software-small-organisations",
    title: "What Small Organisations Should Expect from HR Software",
    excerpt:
      "Employee records, leave, attendance and core HR workflows should become easier to manage — not create another layer of administration.",
    category: "Products",
    tags: ["HR", "Blumebyte HR", "Operations"],
    date: "2026-05-28",
    author: "Blumebyte Team",
    readTime: "5 min read",
    body: [
      "For a small or growing organisation, HR software should first make core work easier: keeping employee records organised, handling leave requests, tracking attendance and supporting payroll or reporting workflows.",
      "Adoption depends on the employee experience. If common actions are clear and mobile-friendly, people are more likely to use the system consistently.",
      "Blumebyte HR is designed around a practical core so growing teams can manage people processes without turning the software itself into a full-time job.",
    ],
  },
];

export const postCategories = Array.from(new Set(posts.map((p) => p.category)));
export const postTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
