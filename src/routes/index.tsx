import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Youtube } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { FaqList } from "@/components/site/FaqList";
import { LiquidGlassPanel } from "@/components/site/LiquidGlassPanel";
import { PostCard } from "@/components/site/PostCard";
import { ProductUniverseSection } from "@/components/site/ProductUniverseSection";
import { Reveal } from "@/components/site/Reveal";
import { ThreeCtaBand } from "@/components/site/ThreeCtaBand";
import { ShaderField } from "@/components/three/ShaderField";
import { ThreeExperience } from "@/components/three/ThreeExperience";
import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faqs";
import { posts } from "@/data/posts";
import { services } from "@/data/services";

const HeroScene = lazy(() =>
  import("@/components/three/HeroScene").then((module) => ({ default: module.HeroScene })),
);

const title = "Blumebyte — Technology & Digital Solutions";
const description =
  "Blumebyte builds websites, dashboards, apps, hosting solutions, e-commerce experiences and business software from Accra for organisations in Ghana and beyond.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const serviceSpans = [
  "md:col-span-7 xl:col-span-7",
  "md:col-span-5 xl:col-span-5",
  "md:col-span-5 xl:col-span-5",
  "md:col-span-7 xl:col-span-7",
  "md:col-span-7 xl:col-span-7",
  "md:col-span-5 xl:col-span-5",
  "md:col-span-12 xl:col-span-12",
] as const;

function ImmersiveHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(rect.height, 1);
      const value = Math.min(1, Math.max(0, -rect.top / travel));
      setProgress(value);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const fallback = <div className="three-fallback absolute inset-0" aria-hidden="true" />;

  return (
    <section ref={sectionRef} className="relative isolate min-h-[88svh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <Suspense fallback={fallback}>
          <ThreeExperience fallback={fallback} className="absolute inset-0 h-full w-full" camera={{ position: [0, 0, 5], fov: 42 }}>
            <HeroScene progress={progress} />
          </ThreeExperience>
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#000_4%,rgba(0,0,0,.9)_38%,rgba(0,0,0,.28)_72%,rgba(0,0,0,.15)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#000_0%,transparent_34%,rgba(0,0,0,.18)_100%)]" />

      <div className="container-page relative z-10 flex min-h-[88svh] items-end py-16 lg:py-24">
        <div className="grid w-full gap-12 lg:grid-cols-[1.22fr_.78fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5b16b]">
              Digital systems · Software · Interactive products
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.91] tracking-[-0.065em] text-white sm:text-7xl lg:text-[6.6rem]">
              Technology that feels simpler and works harder.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-lg text-base leading-8 text-white/68 sm:text-lg">
              Blumebyte designs and builds practical digital systems—from websites and dashboards to apps, hosting, e-commerce and business software.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl" className="rounded-full">
                <Link to="/portfolio">View our work <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-black">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ShaderTransition({ light = false }: { light?: boolean }) {
  const fallback = <div className={`absolute inset-0 ${light ? "bg-[radial-gradient(circle_at_65%_34%,rgba(124,90,26,.24),transparent_28%),linear-gradient(135deg,#111,#f1f1f1)]" : "shader-static"}`} aria-hidden="true" />;

  return (
    <div className={`relative h-36 overflow-hidden sm:h-52 ${light ? "bg-[#f1f1f1]" : "bg-black"}`} aria-hidden="true">
      <ThreeExperience fallback={fallback} className="absolute inset-0 h-full w-full" camera={{ position: [0, 0, 3], fov: 40 }}>
        <ShaderField variant={light ? "light-gold" : "dark-gold"} progress={light ? 0.8 : 0.2} />
      </ThreeExperience>
    </div>
  );
}

function GlassSystems() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      <div className="spatial-grid pointer-events-none absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[60%] top-0 h-[34rem] w-[34rem] rounded-full bg-[#7C5A1A]/16 blur-[110px]" aria-hidden="true" />

      <div className="container-page section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">Glass systems</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Technology services arranged around the work that needs to move.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-2xl text-base leading-8 text-white/60 lg:ml-auto">
              Seven focused capabilities spanning software, infrastructure, operations and commerce. The visual layer is fluid; the service itself stays practical and clear.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const emphasized = index === 0 || index === 3 || index === 6;
            return (
              <Reveal key={service.slug} className={serviceSpans[index]} delay={(index % 3) * 60}>
                <LiquidGlassPanel emphasis={emphasized} className="h-full rounded-[1.8rem] p-6 sm:p-8">
                  <div className="relative z-10 flex h-full min-h-64 flex-col justify-between gap-10">
                    <div className="flex items-start justify-between gap-6">
                      <span className="grid size-11 place-items-center rounded-full border border-white/14 bg-black/20 text-[#d5b16b]">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold tracking-[0.18em] text-white/35">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h3 className="max-w-xl text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">{service.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">{service.description}</p>
                    </div>
                  </div>
                </LiquidGlassPanel>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black">
            <Link to="/services">Explore all services <ArrowRight /></Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <ImmersiveHero />

      <section className="container-page section-shell">
        <Reveal>
          <div className="grid gap-8 border-y border-black/10 py-12 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What Blumebyte does</p>
            <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-3xl lg:text-4xl">
              We turn business needs into clear digital experiences, useful software and technology people can actually operate.
            </p>
          </div>
        </Reveal>
      </section>

      <GlassSystems />
      <ShaderTransition />
      <ProductUniverseSection />
      <ShaderTransition light />

      <section className="bg-white">
        <div className="container-page section-shell">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Editorial reset</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Ideas stay easier to understand when the interface gets quieter.</h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:ml-auto">
                After the product experience, the site returns to a calmer reading rhythm for videos, insights and practical answers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <Reveal>
            <div className="grid aspect-video place-items-center overflow-hidden rounded-3xl border border-white/12 bg-[radial-gradient(circle_at_70%_20%,rgba(124,90,26,.65),transparent_35%),linear-gradient(135deg,#0b0b0b,#1d1d1d)]">
              <Youtube className="size-14 text-[#d5b16b]" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">Blumebyte on YouTube</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.055em] text-white sm:text-5xl">See what we are building and sharing.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
              Visit the official Blumebyte channel for videos, product updates and technology content. We link directly to the channel so only verified Blumebyte uploads are presented here.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8 rounded-full">
              <a href={siteConfig.youtube} target="_blank" rel="noreferrer">Watch on YouTube <ArrowUpRight /></a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Insights</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Notes on AI, software and digital business.</h2>
          </Reveal>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/blog">Read Insights <ArrowRight /></Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={index * 60}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f1f1f1]">
        <div className="container-page section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">FAQs</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Before you start a project.</h2>
            <Button asChild variant="outline" className="mt-7 rounded-full">
              <Link to="/faq">View all FAQs <ArrowRight /></Link>
            </Button>
          </Reveal>
          <Reveal delay={80}>
            <FaqList items={faqs} limit={4} />
          </Reveal>
        </div>
      </section>

      <ThreeCtaBand />
    </>
  );
}
