import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Globe2, Layers3, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";

const title = "About Blumebyte — Technology & Digital Solutions";
const description =
  "Blumebyte is a Ghana-based technology and digital solutions company focused on practical software, websites, apps, automation and digital infrastructure.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

const principles = [
  { icon: Target, title: "Practical by design", body: "We focus on technology that solves a clear business or operational need." },
  { icon: Layers3, title: "End-to-end thinking", body: "Strategy, design, development, hosting and support can be connected into one delivery path." },
  { icon: Building2, title: "Business focused", body: "Websites, dashboards, apps and platforms are shaped around how organisations actually work." },
  { icon: Globe2, title: "Ghana based, globally useful", body: "Blumebyte is rooted in Accra and can work with organisations in Ghana and other markets where the project is a fit." },
];

function About() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">About Blumebyte</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
              Making technology easier to use, build and grow with.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              Blumebyte is a Ghana-based technology and digital solutions company working across software, web, mobile, digital infrastructure and business technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg" className="rounded-full">
                <Link to="/contact">Work with us <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-black">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-shell">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we do</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Digital work that connects strategy with execution.</h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                Blumebyte works across web design and custom dashboards, hosting and domains, mobile app and game development, virtual assistance, SmartSuite solutions, PrintTech supplies and e-commerce.
              </p>
              <p>
                The company also develops its own products, including Blumebyte HR, ProSME and mobile game projects such as Ghost Tears and Space Bob.
              </p>
              <p>
                The focus is practical: build digital tools that are clear enough to operate, useful enough to keep using and flexible enough to support growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f1f1f1]">
        <div className="container-page section-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">How we think</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">A simple standard for every project.</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 4) * 60}>
                  <div className="h-full rounded-3xl border border-black/10 bg-white p-7">
                    <span className="grid size-11 place-items-center rounded-full bg-[#f1f1f1] text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.035em]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title="Have a challenge technology could simplify?" />
    </>
  );
}
