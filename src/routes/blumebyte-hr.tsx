import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

import hrImage from "@/assets/hr-dashboard.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/SectionHeading";
import { whatsappLink } from "@/config/site";

const title = "Blumebyte HR — Simple HR Software for Growing Organisations";
const description =
  "Blumebyte HR is a lightweight HR management platform for employee records, leave, attendance and payroll workflows. Request a demo today.";

export const Route = createFileRoute("/blumebyte-hr")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/blumebyte-hr" },
    ],
    links: [{ rel: "canonical", href: "/blumebyte-hr" }],
  }),
  component: BlumebyteHR;
});

const features = [
  { icon: Users, title: "Employee records", body: "One accurate profile per employee: roles, contracts, contacts and history." },
  { icon: CalendarCheck, title: "Leave management", body: "Requests, balances and approvals with a clear audit trail." },
  { icon: Clock, title: "Attendance", body: "Daily attendance tracking with summaries by team and period." },
  { icon: Wallet, title: "Payroll workflows", body: "Prepare payroll inputs and approvals without rebuilding spreadsheets." },
  { icon: FileText, title: "Documents", body: "Store contracts, policies and certificates against each employee." },
  { icon: ShieldCheck, title: "Roles & permissions", body: "HR, managers and staff each see only what they should." },
];

function BlumebyteHR() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-mesh">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-rise">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              A Blumebyte product
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Blumebyte HR — <span className="text-gradient">people management, simplified</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A lightweight HR management platform for small and growing organisations. Employee
              records, leave, attendance and payroll workflows in one place — fast enough for a
              two-person HR team to run without training days.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Request a demo <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Ask a question
                </a>
              </Button>
            </div>
          </div>
          <img
            src={hrImage}
            alt="Blumebyte HR dashboard with employee list, leave calendar and attendance overview"
            width={1264}
            height={848}
            className="w-full rounded-3xl border border-border shadow-lift"
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Features"
          title="Everything a small HR team needs"
          description="A focused core, without the modules you'll never open."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold">Who it's for</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Organisations with 10–200 employees",
                "HR teams working across spreadsheets and chat",
                "NGOs and schools with multiple sites",
                "Growing businesses formalising HR processes",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-base text-foreground">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-2xl font-bold">Getting started</h2>
            <ol className="mt-6 space-y-5">
              {[
                { t: "Demo", b: "A 30-minute walkthrough using examples from your organisation." },
                { t: "Setup", b: "We import your employee data and configure leave policies." },
                { t: "Rollout", b: "Staff onboarding, manager training and go-live support." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold">{s.t}</span>
                    <span className="block text-sm text-muted-foreground">{s.b}</span>
                  </span>
                </li>
              ))}
            </ol>
            <Button asChild variant="hero" size="lg" className="mt-8 w-full">
              <Link to="/contact">Request a demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="See Blumebyte HR in action"
        description="Book a short demo and we'll show you how leave, attendance and records work with your own team structure."
      />
    </>
  );
}
