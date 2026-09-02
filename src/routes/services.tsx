import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { services } from "@/data/services";

const title = "Services — Web, Hosting, Apps, E-commerce & More | Blumebyte";
const description =
  "Explore Blumebyte services: web design and dashboards, hosting and domains, mobile apps and games, virtual assistance, SmartSuite solutions, PrintTech supplies and e-commerce.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital solutions built around your operations"
        description="Seven service areas covering the practical technology needs of growing businesses — delivered, documented and supported by one team."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">Request a quote</Link>
        </Button>
      </PageHero>

      <div className="container-page py-16 lg:py-20">
        <nav aria-label="Service list" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {s.title}
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <section
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24 rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Service 0{i + 1}
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl font-bold sm:text-3xl">{s.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button asChild variant="hero">
                        <Link to="/contact">
                          Get Started <ArrowRight />
                        </Link>
                      </Button>
                      <Button asChild variant="soft">
                        <Link to="/portfolio">See related work</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-surface p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      What's included
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <CtaBand title="Not sure which service you need?" description="Describe your situation and we'll tell you what we'd do first." />
    </>
  );
}
