export type Project = {
  slug: "blumebyte-hr" | "prosme" | "ghost-tears" | "space-bob";
  title: string;
  category: string;
  summary: string;
  tags: string[];
  internalPath: "/blumebyte-hr" | "/projects/prosme" | "/projects/ghost-tears" | "/projects/space-bob";
  externalUrl?: string;
  playStoreUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "blumebyte-hr",
    title: "Blumebyte HR",
    category: "HR Technology",
    summary:
      "A people-management platform designed to bring employee records, leave, attendance and core HR workflows into one practical digital workspace.",
    tags: ["HR", "Web Platform", "Workflow"],
    internalPath: "/blumebyte-hr",
    externalUrl: "https://hr.blumebyte.com",
  },
  {
    slug: "prosme",
    title: "ProSME",
    category: "SME Platform",
    summary:
      "A Blumebyte-built platform focused on helping small and growing businesses strengthen digital presence, discovery and access to practical business tools.",
    tags: ["SME", "Platform", "Android"],
    internalPath: "/projects/prosme",
    externalUrl: "https://prosme.blumebyte.com",
    playStoreUrl: "https://play.google.com/apps/testing/com.blumebyte.prosme",
  },
  {
    slug: "ghost-tears",
    title: "Ghost Tears",
    category: "Mobile Game",
    summary:
      "A Blumebyte game project developed as part of the company's experimentation with interactive mobile experiences and game development.",
    tags: ["Game", "Android", "Interactive"],
    internalPath: "/projects/ghost-tears",
    playStoreUrl: "https://play.google.com/apps/testing/com.blumebyte.spacebob",
  },
  {
    slug: "space-bob",
    title: "Space Bob",
    category: "Mobile Game",
    summary:
      "A published Android game from Blumebyte, representing the company's mobile game development and consumer-product work.",
    tags: ["Game", "Android", "Google Play"],
    internalPath: "/projects/space-bob",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.blumebyte.spacebob",
  },
];

export const projectCategories = Array.from(new Set(projects.map((project) => project.category)));
