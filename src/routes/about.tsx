import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Globe2, HeartHandshake, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

const title = "About Blumebyte — Technology Partner Based in Ghana";
const description =
  "Blumebyte is a Ghana-based technology company making digital tools practical for businesses and organisations across Africa and beyond.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Clarity first", body: "Plain language, defined scope and honest timelines on every project." },
  { icon: HeartHandshake, title: "Partnership", body: "We work alongside your team, not around it, and we train as we deliver." },
  { icon: Building2, title: "Business focus", body: "Technology only matters if it improves how your organisation operates." },
  { icon: Globe2, title: "Local and global", body: "Rooted in Ghana, delivering to standards our international clients expect." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Making technology easy and accessible for businesses"
        description="Blumebyte is a Ghana-based technology and digital solutions company. We help businesses and organisations improve operations, communication, productivity and digital growth with tools that fit how they actually work."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">Work with us</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/services">Our services</Link>
        </Button>
      </PageHero>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold">Who we are</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We started Blumebyte because too many businesses were being sold complex technology
                they could not maintain. Our approach is the opposite: understand the operation
                first, then build the smallest solution that delivers a real improvement.
              </p>
              <p>
                Today we work across web design and dashboards, hosting and domains, mobile apps and
                games, virtual assistance, productivity solutions, printing supplies and e-commerce —
                plus our own HR platform, Blumebyte HR.
              </p>
              <p>
                Our clients range from small teams to established organisations in Ghana and abroad.
                What they share is a preference for practical results over technical noise.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-8">
            <h3 className="text-xl font-semibold">Our mission</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              To make technology easy and accessible for businesses and organisations, so they can
              operate better, communicate clearly and grow with confidence.
            </p>
            <h3 className="mt-8 text-xl font-semibold">How we're different</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li>One accountable team across strategy, build and support.</li>
              <li>Documentation and training included as standard.</li>
              <li>Solutions designed for real bandwidth, budgets and staffing.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our values"
            title="What guides our work"
            description="Four commitments we hold to on every engagement."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title="Let's talk about your operations" />
    </>
  );
}
