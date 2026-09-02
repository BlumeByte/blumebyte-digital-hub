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
      "AI coding assistants have moved from novelty to normal. For a five-person team, the gain is rarely about writing code faster — it is about reducing the small friction that slows delivery: boilerplate, test scaffolding, migrations and documentation.",
      "The teams that benefit most are the ones with clear standards. When your code conventions, review process and deployment steps are written down, an assistant produces work that fits. Without that, output is fast but inconsistent.",
      "Our recommendation is practical: use AI for drafts and repetitive work, keep humans on architecture, security and data decisions, and measure whether the change shortened your release cycle. If it did not, adjust the workflow rather than the tool.",
    ],
  },
  {
    slug: "digital-transformation-without-disruption",
    title: "Digital Transformation Without Disrupting Daily Operations",
    excerpt:
      "Most transformation projects fail on timing, not technology. A staged approach keeps the business running while systems change.",
    category: "Digital Transformation",
    tags: ["Strategy", "Operations", "Change Management"],
    date: "2026-08-04",
    author: "Blumebyte Team",
    readTime: "5 min read",
    body: [
      "Replacing a core system while serving customers is a scheduling problem before it is a technical one. We start by mapping the processes that cannot pause — invoicing, payroll, customer support — and design around them.",
      "A staged rollout gives you reversible steps: one department, one process, one month. Each stage produces measurable results and a decision point, so leadership is never asked to approve a change they cannot evaluate.",
      "Training is part of delivery, not an afterthought. Systems succeed when the people using them daily understand why the change was made and what it saves them.",
    ],
  },
  {
    slug: "ai-infrastructure-choices-african-businesses",
    title: "AI Infrastructure Choices for African Businesses",
    excerpt:
      "Cloud, hybrid or on-premise? A clear framework for choosing infrastructure that matches your bandwidth, budget and data rules.",
    category: "Infrastructure",
    tags: ["AI", "Cloud", "Ghana"],
    date: "2026-07-21",
    author: "Blumebyte Team",
    readTime: "7 min read",
    body: [
      "Infrastructure decisions should follow three questions: where does your data legally need to live, how reliable is your connectivity, and what does a month of downtime actually cost you?",
      "For most businesses in Ghana and across the region, a hybrid setup works well — managed cloud services for compute and storage, with local caching or offline-capable clients for teams working through unstable connections.",
      "Cost control matters more than raw capability. Start with the smallest configuration that meets your workload, monitor usage for a quarter, then scale on evidence.",
    ],
  },
  {
    slug: "business-technology-trends-2026",
    title: "Five Business Technology Trends Worth Your Budget in 2026",
    excerpt:
      "A short, honest list: which technology investments are paying off for mid-sized businesses this year, and which can wait.",
    category: "Business Technology",
    tags: ["Trends", "Strategy", "Investment"],
    date: "2026-07-02",
    author: "Blumebyte Team",
    readTime: "6 min read",
    body: [
      "Practical automation of back-office work is the clearest win this year. Approvals, reporting and reconciliation are repetitive, rule-based and expensive to do by hand.",
      "Consolidated productivity suites continue to beat collections of single-purpose tools on both cost and adoption. Fewer logins, fewer places for information to hide.",
      "Security basics — multi-factor authentication, managed backups, device policies — remain the highest return per cedi spent. Anything more advanced should come after these are in place.",
    ],
  },
  {
    slug: "dashboards-people-actually-use",
    title: "How to Build Dashboards People Actually Use",
    excerpt:
      "A dashboard that answers one question well beats one that displays forty metrics. Here is how we scope them.",
    category: "Product Design",
    tags: ["Dashboards", "Data", "UX"],
    date: "2026-06-16",
    author: "Blumebyte Team",
    readTime: "4 min read",
    body: [
      "We begin every dashboard project by asking which decision it supports. If nobody can name the decision, the dashboard becomes a report nobody opens.",
      "Then we limit the first version deliberately: one primary metric, a short trend, and the two or three breakdowns that explain movement. Extra views get added once we see what people click.",
      "Speed is a feature. A dashboard that loads in under two seconds gets checked daily; one that takes ten seconds gets checked before meetings only.",
    ],
  },
  {
    slug: "hr-software-small-organisations",
    title: "What Small Organisations Should Expect from HR Software",
    excerpt:
      "Employee records, leave and attendance should take minutes a week. A look at the features that matter at under 200 staff.",
    category: "Products",
    tags: ["HR", "Blumebyte HR", "Operations"],
    date: "2026-05-28",
    author: "Blumebyte Team",
    readTime: "5 min read",
    body: [
      "Below roughly 200 employees, HR software should do four things reliably: hold accurate records, handle leave requests, track attendance and support payroll preparation. Everything else is optional.",
      "Adoption depends on the employee experience. If requesting leave takes three clicks on a phone, people use the system. If it requires a laptop and a manual, they return to WhatsApp messages.",
      "We built Blumebyte HR around that principle — a small, fast core that a two-person HR team can run without training days.",
    ],
  },
];

export const postCategories = Array.from(new Set(posts.map((p) => p.category)));
export const postTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
