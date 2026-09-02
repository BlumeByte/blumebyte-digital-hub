import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarCheck, Clock, FileText, ShieldCheck, Users, Wallet } from "lucide-react";

import hrImage from "@/assets/hr-dashboard.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig, whatsappLink } from "@/config/site";

const title = "Blumebyte HR — HR Software for Growing Organisations";
const description =
  "Blumebyte HR brings employee records, leave, attendance, documents and core HR workflows into one practical digital workspace.";

export const Route = createFileRoute("/blumebyte-hr")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BlumebyteHR,
});

const features = [
  { icon: Users, title: "Employee records", body: "Keep employee profiles, contacts, roles and key information together in one organised workspace." },
  { icon: CalendarCheck, title: "Leave management", body: "Handle leave requests, balances and approvals with a clearer workflow for staff and managers." },
  { icon: Clock, title: "Attendance", body: "Support day-to-day attendance tracking and visibility across the organisation." },
  { icon: Wallet, title: "Payroll workflows", body: "Bring payroll-related inputs and approvals into a more structured process." },
  { icon: FileText, title: "Documents", body: "Keep contracts, policies, certificates and employee documents easier to find and manage." },
  { icon: ShieldCheck, title: "Roles & permissions", body: "Give HR, managers and employees access appropriate to the work they need to do." },
];

function BlumebyteHR() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">A Blumebyte product</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              People management, simplified.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              Blumebyte HR is a practical HR platform for growing organisations that want employee records, leave, attendance and everyday people workflows in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg" className="rounded-full">
                <Link to="/contact">Request a demo <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-black">
                <a href={siteConfig.products.hr} target="_blank" rel="noreferrer">Visit platform <ArrowUpRight /></a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="media-mask">
            <img
              src={hrImage}
              alt="Blumebyte HR dashboard interface"
              width={1264}
              height={848}
              className="w-full rounded-3xl border border-white/12 shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page section-shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Core capabilities</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">The everyday HR work, made clearer.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-3xl border border-black/10 bg-white p-6">
                    <span className="grid size-11 place-items-center rounded-full bg-[#f1f1f1] text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{feature.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#f1f1f1]">
        <div className="container-page section-shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Who it helps</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">For organisations ready to move beyond scattered HR processes.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-xl text-base leading-8 text-muted-foreground">
              Blumebyte HR is designed for teams that want more structure around employee information and HR workflows without making the system itself difficult to operate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg" className="rounded-full">
                <Link to="/contact">Talk to Blumebyte <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href={whatsappLink} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Ready to simplify your HR operations?" />
    </>
  );
}
