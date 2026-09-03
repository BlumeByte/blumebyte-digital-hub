export type ChatSource = { label: string; href: string };
export type ChatAnswer = { text: string; source: ChatSource };
export type ChatMessage = { from: "bot" | "user"; text: string; source?: ChatSource };

type ChatContact = { address: string; hours: string; email: string; phone: string };
type KnowledgeEntry = {
  patterns: RegExp[];
  answer: (contact: ChatContact) => string;
  source: ChatSource;
};

const staticAnswer = (text: string) => () => text;

export const siteKnowledge: KnowledgeEntry[] = [
  {
    patterns: [/pro\s?smes?/, /prosmes?/, /small.*business/, /sme platform/],
    answer: staticAnswer(
      "ProSME is a Blumebyte-built platform focused on helping small and growing businesses strengthen their digital presence, discovery and access to practical business tools.",
    ),
    source: { label: "Learn more about ProSME", href: "/projects/prosme" },
  },
  {
    patterns: [/ghost tears?/, /ghost game/],
    answer: staticAnswer(
      "Ghost Tears is a Blumebyte mobile-game project focused on interactive Android experiences, with verified project artwork and its supplied Google Play testing link.",
    ),
    source: { label: "Explore Ghost Tears", href: "/projects/ghost-tears" },
  },
  {
    patterns: [/space bobs?/, /space game/],
    answer: staticAnswer(
      "Space Bob is a published Android game from Blumebyte and a public example of its mobile game-development work.",
    ),
    source: { label: "Explore Space Bob", href: "/projects/space-bob" },
  },
  {
    patterns: [/hr/, /employee/, /leave/, /attendance/, /payroll/],
    answer: staticAnswer(
      "Blumebyte HR brings employee records, leave, attendance, documents and core people workflows into one practical workspace.",
    ),
    source: { label: "Explore Blumebyte HR", href: "/blumebyte-hr" },
  },
  {
    patterns: [/e.?commerce/, /online shop/, /online store/, /sell online/, /payment/],
    answer: staticAnswer(
      "Blumebyte provides online-store design, product setup, payments, delivery options and ongoing store management.",
    ),
    source: { label: "View e-commerce services", href: "/services#ecommerce" },
  },
  {
    patterns: [/host/, /domain/, /dns/, /ssl/, /backup/],
    answer: staticAnswer(
      "Blumebyte handles domain registration, DNS, SSL, managed hosting, backups and monitoring.",
    ),
    source: { label: "View hosting services", href: "/services#hosting-domains" },
  },
  {
    patterns: [/web/, /website/, /dashboard/],
    answer: staticAnswer(
      "Blumebyte designs responsive websites, web applications and operations dashboards with accessible interfaces and clear reporting.",
    ),
    source: { label: "View web services", href: "/services#web-design-dashboards" },
  },
  {
    patterns: [/mobile/, /app/, /android/, /ios/, /game/],
    answer: staticAnswer(
      "Blumebyte builds Android and iOS applications, interactive game experiences, and supports analytics and releases.",
    ),
    source: { label: "View app and game services", href: "/services#mobile-apps-games" },
  },
  {
    patterns: [/virtual assist/, /admin/, /inbox/, /calendar/],
    answer: staticAnswer(
      "Blumebyte's virtual-assistance service supports inboxes, calendars, data entry, customer follow-up, documentation and workflow coordination.",
    ),
    source: { label: "View virtual-assistance services", href: "/services#virtual-assistance" },
  },
  {
    patterns: [/smartsuite/, /automation/, /productivity/, /workflow/],
    answer: staticAnswer(
      "Blumebyte configures connected tools for projects, documents, approvals and internal communication, then trains teams to use them.",
    ),
    source: { label: "View SmartSuite services", href: "/services#smartsuite-solutions" },
  },
  {
    patterns: [/print/, /toner/, /cartridge/],
    answer: staticAnswer(
      "Blumebyte supplies genuine and compatible toners, cartridges and other printing consumables, including scheduled resupply for business use.",
    ),
    source: { label: "View PrintTech services", href: "/services#printtech-supplies" },
  },
  {
    patterns: [/product/, /portfolio/, /project/, /work.*built/],
    answer: staticAnswer(
      "Blumebyte's public product portfolio includes Blumebyte HR, ProSME, Ghost Tears and Space Bob.",
    ),
    source: { label: "Explore the portfolio", href: "/portfolio" },
  },
  {
    patterns: [/price/, /cost/, /quote/, /budget/],
    answer: staticAnswer(
      "Blumebyte agrees scope, deliverables, timelines and costs before work begins. Contact the team for an accurate quote.",
    ),
    source: { label: "Request a quote", href: "/contact" },
  },
  {
    patterns: [/service/, /what.*do/, /offer/],
    answer: staticAnswer(
      "Blumebyte provides web design and dashboards, hosting and domains, mobile apps and games, virtual assistance, SmartSuite solutions, PrintTech supplies and e-commerce services.",
    ),
    source: { label: "Explore services", href: "/services" },
  },
  {
    patterns: [/where/, /ghana/, /location/, /hours/, /open/],
    answer: (contact) =>
      `Blumebyte is based in ${contact.address}. Working hours are ${contact.hours}.`,
    source: { label: "View contact details", href: "/contact" },
  },
  {
    patterns: [/email/, /phone/, /whatsapp/, /contact/, /human/],
    answer: (contact) =>
      `You can reach Blumebyte at ${contact.email}, ${contact.phone}, or continue through WhatsApp below.`,
    source: { label: "Contact Blumebyte", href: "/contact" },
  },
  {
    patterns: [/timeline/, /how long/, /process/],
    answer: staticAnswer(
      "Projects follow four clear stages: Discover, Design, Build and Support. The exact timeline depends on scope and is agreed before work begins.",
    ),
    source: { label: "Learn about Blumebyte", href: "/about" },
  },
];

const contactSource: ChatSource = { label: "Contact Blumebyte", href: "/contact" };

export function answerSiteQuestion(input: string, contact: ChatContact): ChatAnswer {
  const query = input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const match = siteKnowledge.find((entry) =>
    entry.patterns.some((pattern) => pattern.test(query)),
  );
  if (match) return { text: match.answer(contact), source: match.source };
  return {
    text: `I don't have a reliable answer for that yet. Please contact the Blumebyte team by email at ${contact.email}, call ${contact.phone}, or use the WhatsApp handoff below.`,
    source: contactSource,
  };
}
