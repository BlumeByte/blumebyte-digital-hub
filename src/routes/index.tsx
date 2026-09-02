import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Compass, Headphones, PenTool, Wrench } from "lucide-react";

import heroImage from "@/assets/hero-abstract.jpg";
import hrImage from "@/assets/hr-dashboard.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PostCard } from "@/components/site/PostCard";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const title = "Blumebyte — Technology & Digital Solutions for Growing Businesses";
const description =
  "Blumebyte helps businesses work smarter with websites, dashboards, hosting, apps, e-commerce and HR software. Ghana-based, serving clients across Africa and beyond.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const whyPoints = [
  {
    title: "Practical over trendy",
    body: "We recommend the simplest solution that solves your problem and can be maintained by your team.",
  },
  {
    title: "Clear scope and pricing",
    body: "Defined deliverables, timelines and costs agreed before work begins. No surprise invoices.",
  },
  {
    title: "Built for local realities",
    body: "Mobile-first, bandwidth-aware and payment options that work in Ghana and across the region.",
  },
  {
    title: "Support after launch",
    body: "Hosting, monitoring, updates and training so your systems keep working long after handover.",
  },
];

const processSteps = [
  { icon: Compass, title: "Discover", body: "We learn your operations, constraints and goals before proposing anything." },
  { icon: PenTool, title: "Design", body: "Clear plans, wireframes and scope so you know exactly what will be built." },
  { icon: Wrench, title: "Build", body: "Development in short, reviewable stages with progress you can see." },
  { icon: Headphones, title: "Support", body: "Training, monitoring and improvements after launch." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-mesh">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="animate-rise">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Technology & digital solutions · Ghana
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Helping businesses <span className="text-gradient">work smarter</span> with technology
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Blumebyte makes technology easy and accessible. From websites and dashboards to hosting,
              apps and HR software, we build the digital tools that improve your operations,
              communication and growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Get Started <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "7", v: "Service areas" },
                { k: "100%", v: "Project ownership" },
                { k: "GH", v: "Local + global reach" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-bold text-ink">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Abstract visual of connected digital dashboards and interfaces"
              width={1600}
              height={1200}
              className="w-full rounded-3xl border border-border shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Our services"
          title="Everything you need to run and grow digitally"
          description="Seven focused service areas, delivered by one accountable team."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Our product
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Blumebyte HR — people management without the paperwork
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A lightweight HR platform for small and growing organisations. Employee records, leave,
              attendance and payroll workflows in one place your HR team can actually run.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Employee records & documents",
                "Leave requests and approvals",
                "Attendance tracking",
                "Payroll & people workflows",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/blumebyte-hr">
                  Learn about Blumebyte HR <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Request a demo</Link>
              </Button>
            </div>
          </div>
          <img
            src={hrImage}
            alt="Blumebyte HR dashboard showing employees, leave calendar and attendance charts"
            loading="lazy"
            width={1264}
            height={848}
            className="w-full rounded-3xl border border-border shadow-lift"
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Why Blumebyte"
          title="A technology partner that keeps things clear"
          description="We measure success by whether your business runs better after we're done."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((p) => (
            <div
              key={p.title}
              className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="A simple, four-step process"
            description="Every engagement follows the same predictable path."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="absolute right-5 top-5 font-display text-3xl font-bold text-primary/15">
                    0{i + 1}
                  </span>
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Projects with measurable outcomes"
            description="A sample of the work we do for clients across sectors."
          />
          <Button asChild variant="outline">
            <Link to="/portfolio">
              View all projects <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Latest insights"
              title="Notes on business technology"
              description="Practical writing on tools, transformation and digital operations."
            />
            <Button asChild variant="outline">
              <Link to="/blog">
                Read the blog <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Placeholder quotes — replace with your own client feedback."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} item={t} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
