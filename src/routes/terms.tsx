import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Blumebyte" },
      {
        name: "description",
        content:
          "Terms and conditions governing use of Blumebyte websites, software, platforms, applications and services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="container-page max-w-4xl py-16 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Terms & Conditions</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 2 September 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
        <section><h2 className="text-2xl font-semibold text-foreground">1. Acceptance</h2><p>By accessing a Blumebyte website, platform, application, game, marketplace, software product or service, you agree to these Terms & Conditions and any product-specific terms presented to you.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">2. Services</h2><p>Blumebyte provides technology and digital solutions including websites, custom dashboards, hosting and domain services, mobile applications and games, virtual assistance, SmartSuite solutions, PrintTech supplies, e-commerce systems, Blumebyte HR, ProSME and related products. Features, availability and eligibility may vary by country, platform or plan.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">3. Accounts and acceptable use</h2><p>You are responsible for information submitted through your account and for maintaining the security of your credentials. You must not use Blumebyte services to violate law, infringe rights, distribute malware, disrupt infrastructure, gain unauthorized access, scrape restricted data, impersonate others or conduct fraudulent activity.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">4. Client projects and custom development</h2><p>Custom work is governed by the relevant proposal, statement of work, quotation, invoice or contract. Scope, deliverables, timelines, revisions, ownership, maintenance and payment obligations may differ by project and will prevail where they conflict with these general website terms.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">5. Intellectual property</h2><p>Unless otherwise agreed in writing, Blumebyte retains ownership of its pre-existing software, frameworks, tools, source libraries, trademarks, brand assets, designs, documentation, know-how, trade secrets, inventions, patents and patent applications where applicable. No license or ownership right is granted except as expressly stated in writing.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">6. User and client content</h2><p>You retain rights you lawfully hold in content you submit. You grant Blumebyte the limited rights reasonably necessary to host, process, display, transmit or otherwise use that content to provide the requested service. You are responsible for ensuring you have authority to provide such content.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">7. Third-party services and app stores</h2><p>Some services may integrate with third-party providers, payment processors, cloud platforms, app stores or external websites. Their terms and privacy policies may also apply. Blumebyte does not control every third-party service and is not responsible for changes made by those providers.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">8. Fees, subscriptions and payments</h2><p>Paid services must be paid according to the quotation, invoice, subscription plan or checkout terms presented at purchase. Taxes, currency conversion, transaction fees, renewal rules and cancellation terms may vary by market and provider.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">9. Availability and changes</h2><p>We may update, improve, suspend or discontinue features when reasonably necessary for product development, security, legal compliance or operational reasons. We aim to provide reliable services but do not guarantee uninterrupted or error-free availability.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">10. Disclaimers and limitation of liability</h2><p>To the maximum extent permitted by applicable law, Blumebyte provides services subject to the warranties expressly agreed in writing and disclaims implied warranties that cannot reasonably be guaranteed. Liability will be limited as permitted by applicable law and any governing client contract.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">11. Suspension and termination</h2><p>Access may be suspended or terminated for non-payment, material breach, unlawful use, security threats, abuse or where required by law. Rights and obligations intended to survive termination, including intellectual-property, confidentiality and accrued-payment obligations, will continue.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">12. Global use and local law</h2><p>Blumebyte serves users in multiple markets. Users are responsible for complying with laws applicable to their use of the services. Mandatory consumer, privacy and digital-service rights that cannot lawfully be excluded remain unaffected.</p></section>
        <section><h2 className="text-2xl font-semibold text-foreground">13. Contact</h2><p>Questions about these terms can be sent to <a className="font-medium text-primary" href="mailto:blumebyte@gmail.com">blumebyte@gmail.com</a>.</p></section>
      </div>
    </article>
  );
}
