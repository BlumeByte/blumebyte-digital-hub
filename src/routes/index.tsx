import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Youtube } from "lucide-react";

import heroImage from "@/assets/hero-abstract.jpg";
import hrImage from "@/assets/hr-dashboard.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqList } from "@/components/site/FaqList";
import { PostCard } from "@/components/site/PostCard";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faqs";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

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

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-45" aria-hidden="true">
          <img src={heroImage} alt="" className="h-full w-full object-cover object-center mix-blend-luminosity" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_5%,rgba(0,0,0,.88)_42%,rgba(0,0,0,.25)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(124,90,26,.4),transparent_34%)]" />
        </div>

        <div className="container-page relative flex min-h-[78vh] items-end py-16 sm:min-h-[82vh] lg:py-24">
          <div className="grid w-full gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5b16b]">Digital products · Software · Technology</p>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.91] tracking-[-0.065em] text-white sm:text-7xl lg:text-[6.6rem]">
                Technology that feels simpler and works harder.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="max-w-lg text-base leading-8 text-white/66 sm:text-lg">
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

      <section className="container-page section-shell">
        <Reveal>
          <div className="grid gap-8 border-y border-black/10 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What Blumebyte does</p>
            <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-3xl lg:text-4xl">
              We turn business needs into clear digital experiences, useful software and technology people can actually operate.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-8 lg:pb-16">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Services</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Built around the work your business needs done.</h2>
              <Button asChild variant="outline" className="mt-7 rounded-full">
                <Link to="/services">View all services <ArrowRight /></Link>
              </Button>
            </div>

            <div className="border-t border-black/10">
              {services.map((service, index) => (
                <div key={service.slug} className="grid gap-3 border-b border-black/10 py-7 sm:grid-cols-[3.5rem_1fr]">
                  <span className="text-xs font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">{service.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell bg-[#f1f1f1]">
        <div className="container-page grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Featured product</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl">Blumebyte HR keeps people operations in one practical workspace.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              Employee records, leave, attendance and core HR workflows designed for growing organisations that want a simpler way to manage everyday people operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg" className="rounded-full">
                <Link to="/blumebyte-hr">Explore Blumebyte HR <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href={siteConfig.products.hr} target="_blank" rel="noreferrer">Visit platform <ArrowUpRight /></a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="media-mask" >
            <img
              src={hrImage}
              alt="Blumebyte HR dashboard interface"
              loading="lazy"
              width={1264}
              height={848}
              className="w-full rounded-3xl border border-black/10 shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page section-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Selected products</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Software, platforms and interactive products from Blumebyte.</h2>
          </Reveal>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/portfolio">Portfolio <ArrowRight /></Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
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

      <CtaBand title="Have something useful to build?" />
    </>
  );
}
