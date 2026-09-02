import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Blumebyte" },
      {
        name: "description",
        content:
          "Blumebyte privacy policy covering its website, platforms, applications, products and global users.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="container-page max-w-4xl py-16 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 2 September 2026</p>

      <div className="prose prose-neutral mt-10 max-w-none space-y-8 text-sm leading-7 text-muted-foreground">
        <section><h2 className="text-2xl font-semibold text-foreground">1. Scope</h2><p>This Privacy Policy explains how Blumebyte collects, uses, stores, shares and protects personal information across blumebyte.com, Blumebyte HR, ProSME, mobile applications, games, marketplaces, client solutions and other Blumebyte-operated digital services.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">2. Information we may collect</h2><p>Depending on the service, we may process identification and contact details, account information, organization and employment details, messages and support requests, transaction or subscription information, device and browser information, usage logs, analytics data, uploaded content, and information users choose to provide.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">3. Why we use information</h2><p>We use personal information to provide and secure services, respond to enquiries, administer accounts, process transactions, support customers, improve products, prevent fraud and abuse, meet legal obligations, and communicate about services where permitted.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">4. Cookies and similar technologies</h2><p>Essential cookies may be used where necessary for site operation, security and preferences. Optional analytics or experience cookies are used only when permitted by applicable law and the visitor's consent choice. Visitors can choose “Essential only” or “Accept all” through the website consent banner.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">5. International and regional privacy laws</h2><p>Blumebyte aims to apply privacy practices appropriate to the markets in which its services are offered. Depending on the user, service and jurisdiction, this may include obligations under Ghana's Data Protection Act, 2012 (Act 843), the EU General Data Protection Regulation (GDPR), UK GDPR, California privacy laws such as the CCPA/CPRA, Brazil's LGPD, Canada's PIPEDA and South Africa's POPIA, together with other applicable privacy or consumer-protection rules.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">6. Legal bases and consent</h2><p>Where required, we rely on consent, performance of a contract, compliance with legal obligations, protection of vital or security interests, and legitimate interests that are not overridden by individual rights. Consent may be withdrawn where the law permits, without affecting processing already carried out lawfully.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">7. Sharing and service providers</h2><p>We may use vetted hosting, cloud, analytics, communications, payment, app-store, authentication and support providers. Information is shared only as reasonably necessary for the relevant service, legal requirement, transaction, security purpose or business operation.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">8. International transfers</h2><p>Because Blumebyte serves users across markets and uses global technology infrastructure, data may be processed in countries other than the user's own. Where required, we use contractual, organizational or other safeguards intended to provide appropriate protection.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">9. Data retention and security</h2><p>We retain information only for as long as reasonably necessary for the purpose collected, contractual obligations, dispute resolution, security, accounting and legal requirements. We use reasonable technical and organizational measures to protect information, but no digital system can be guaranteed completely secure.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">10. Your rights</h2><p>Depending on applicable law, individuals may have rights to access, correct, delete, restrict or object to processing, request portability, withdraw consent, appeal certain decisions, or lodge a complaint with a competent data-protection authority.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">11. Children</h2><p>Our general business services are not intentionally directed to children unless a specific product clearly states otherwise and appropriate parental or guardian permissions are implemented where required.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">12. Intellectual property and confidential submissions</h2><p>Submitting information through the website does not transfer ownership of Blumebyte intellectual property, software, trademarks, designs, patents, patent applications, trade secrets or other proprietary rights. Users should not submit confidential invention or patent information through general contact forms unless an appropriate confidentiality arrangement is in place.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">13. Contact</h2><p>Privacy questions and rights requests can be sent to <a className="font-medium text-primary" href="mailto:blumebyte@gmail.com">blumebyte@gmail.com</a>. For contractual website terms, see our <Link to="/terms" className="font-medium text-primary">Terms & Conditions</Link>.</p></section>
      </div>
    </article>
  );
}
