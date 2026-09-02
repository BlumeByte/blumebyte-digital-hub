import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
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
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">Services</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
              Digital capability, without unnecessary complexity.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              Blumebyte combines design, development, infrastructure and operational support across seven focused service areas.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8 rounded-full">
              <Link to="/contact">Start an enquiry <ArrowRight /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-shell">
        <Reveal>
          <nav aria-label="Service list" className="flex flex-wrap gap-2 border-b border-black/10 pb-8">
            {services.map((service, index) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                {String(index + 1).padStart(2, "0")} · {service.title}
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug}>
                <section
                  id={service.slug}
                  className="scroll-mt-28 border-b border-black/10 py-12 sm:py-16"
                >
                  <div className="grid gap-8 lg:grid-cols-[5rem_.9fr_1.1fr] lg:gap-10">
                    <div className="flex items-start gap-4 lg:block">
                      <span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                      <span className="ml-auto grid size-11 place-items-center rounded-full bg-[#f1f1f1] text-primary lg:mt-6 lg:ml-0">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                    </div>

                    <div>
                      <h2 className="max-w-xl text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                        {service.title}
                      </h2>
                      <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    <div className="lg:pl-10">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we can cover</p>
                      <ul className="mt-5 space-y-4">
                        {service.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-foreground/80">
                            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-black text-white">
                              <Check className="size-3" aria-hidden="true" />
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        Ask about this service <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Not sure which service fits?"
        description="Tell us what you are trying to improve and we can help shape the right starting point."
      />
    </>
  );
}
