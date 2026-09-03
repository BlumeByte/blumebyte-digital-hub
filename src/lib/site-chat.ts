export type ChatMessage = { from: "bot" | "user"; text: string };

type ChatContact = { address: string; hours: string; email: string; phone: string };

export function answerSiteQuestion(input: string, contact: ChatContact) {
  const q = input.toLowerCase();
  if (/price|cost|quote|budget/.test(q))
    return "Blumebyte agrees scope, deliverables, timelines and costs before work begins. For an accurate quote, use the Contact page or the handoff below.";
  if (/service|what.*do|offer/.test(q))
    return "Blumebyte provides web design and dashboards, hosting and domains, mobile apps and games, virtual assistance, SmartSuite solutions, PrintTech supplies and e-commerce services.";
  if (/hr|employee|leave|attendance|payroll/.test(q))
    return "Blumebyte HR brings employee records, leave, attendance, documents and core people workflows into one practical workspace. You can request a demo from the Contact page.";
  if (/where|ghana|location|hours|open/.test(q))
    return `Blumebyte is based in ${contact.address}. Working hours are ${contact.hours}.`;
  if (/email|phone|whatsapp|contact|human/.test(q))
    return `You can reach Blumebyte at ${contact.email}, ${contact.phone}, or continue through WhatsApp below.`;
  if (/timeline|how long|process/.test(q))
    return "Projects follow four clear stages: Discover, Design, Build and Support. The exact timeline depends on scope and is agreed before work begins.";
  if (/host|domain/.test(q))
    return "Blumebyte handles domain registration, DNS, SSL, managed hosting, backups and monitoring.";
  return "I only answer from information published on this website. For a tailored answer, send your question to the Blumebyte team using the email or WhatsApp handoff below.";
}
