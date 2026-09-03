import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import hrImage from "@/assets/hr-dashboard.jpg";
import { Button } from "@/components/ui/button";
import { ThreeExperience } from "@/components/three/ThreeExperience";
import { projects } from "@/data/projects";

const ProductUniverse = lazy(() =>
  import("@/components/three/ProductUniverse").then((module) => ({
    default: module.ProductUniverse,
  })),
);

export function ProductUniverseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = Array.from(
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-product-index]") ?? [],
    );
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset["productIndex"] ?? 0);
        setActiveIndex(index);
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-12% 0px -12% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        const travel = Math.max(rect.height - window.innerHeight, 1);
        setScrollProgress(Math.max(0, Math.min(1, -rect.top / travel)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);

  const fallback = (
    <div className="three-fallback product-universe-fallback absolute inset-0" aria-hidden="true" />
  );

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="container-page section-shell">
        <div className="mb-14 grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">
            Product universe
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            Four products. One evolving Blumebyte ecosystem.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <div className="relative hidden min-h-[72vh] lg:block">
            <div className="sticky top-24 h-[70vh] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#060606]">
              <Suspense fallback={fallback}>
                <ThreeExperience
                  fallback={fallback}
                  className="absolute inset-0 h-full w-full"
                  camera={{ position: [0, 0, 5.4], fov: 40 }}
                >
                  <ProductUniverse activeIndex={activeIndex} progress={scrollProgress} />
                </ThreeExperience>
              </Suspense>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <div className="mb-3 h-px bg-white/15">
                  <span
                    className="block h-full origin-left bg-[#d5b16b]"
                    style={{ transform: `scaleX(${scrollProgress})` }}
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Scroll to move through the system · {Math.round(scrollProgress * 100)}%
                </p>
              </div>
            </div>
          </div>

          <div>
            {projects.map((project, index) => (
              <article
                key={project.slug}
                data-product-index={index}
                className="product-story min-h-[52vh] border-t border-white/12 py-12 first:border-t-0 lg:min-h-[62vh] lg:py-16"
              >
                <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] lg:hidden">
                  <img
                    src={project.slug === "blumebyte-hr" ? hrImage : project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-center opacity-90"
                  />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b]">
                  {String(index + 1).padStart(2, "0")} · {project.category}
                </p>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/62">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/14 px-3 py-1 text-xs text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="hero" className="rounded-full">
                    <Link to={project.internalPath}>
                      Explore product <ArrowRight />
                    </Link>
                  </Button>
                  {project.externalUrl ? (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black"
                    >
                      <a href={project.externalUrl} target="_blank" rel="noreferrer">
                        Visit platform <ArrowUpRight />
                      </a>
                    </Button>
                  ) : null}
                  {project.playStoreUrl ? (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black"
                    >
                      <a href={project.playStoreUrl} target="_blank" rel="noreferrer">
                        Google Play <ArrowUpRight />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
