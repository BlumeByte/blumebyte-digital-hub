export type Project = {
  title: string;
  client: string;
  category: string;
  summary: string;
  result: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Operations Dashboard for a Logistics Firm",
    client: "Regional logistics operator",
    category: "Dashboards",
    summary:
      "Replaced daily spreadsheet reporting with a live dashboard covering fleet status, deliveries and driver performance.",
    result: "Daily reporting time cut from 3 hours to under 15 minutes.",
    tags: ["Web App", "Data", "Operations"],
  },
  {
    title: "E-commerce Store for a Retail Brand",
    client: "Consumer goods retailer",
    category: "E-commerce",
    summary:
      "Built an online store with mobile money and card payments, delivery zones and stock management for two branches.",
    result: "Online orders grew to 28% of total sales in six months.",
    tags: ["E-commerce", "Payments", "Mobile"],
  },
  {
    title: "HR Platform Rollout for an NGO",
    client: "Non-profit organisation, 140 staff",
    category: "Blumebyte HR",
    summary:
      "Deployed Blumebyte HR for employee records, leave approvals and attendance across three field offices.",
    result: "Leave approval turnaround reduced from 5 days to same day.",
    tags: ["HR", "Workflow", "Rollout"],
  },
  {
    title: "Corporate Website & Hosting Migration",
    client: "Professional services firm",
    category: "Web Design",
    summary:
      "Redesigned a dated corporate site and migrated hosting and email to a managed, monitored environment.",
    result: "Page load improved by 62%; zero unplanned downtime since launch.",
    tags: ["Website", "Hosting", "SEO"],
  },
  {
    title: "Field Data Mobile App",
    client: "Agri-business cooperative",
    category: "Mobile Apps",
    summary:
      "Offline-first Android app for field officers to record farmer data and sync when connectivity returns.",
    result: "Data collection errors down 74% versus paper forms.",
    tags: ["Android", "Offline", "Data"],
  },
  {
    title: "Productivity Suite Setup for a School Group",
    client: "Private education group",
    category: "SmartSuite",
    summary:
      "Configured shared document management, staff communication and approval workflows across four campuses.",
    result: "Internal approvals standardised across all campuses in 8 weeks.",
    tags: ["SmartSuite", "Training", "Process"],
  },
];

export const projectCategories = Array.from(new Set(projects.map((p) => p.category)));
