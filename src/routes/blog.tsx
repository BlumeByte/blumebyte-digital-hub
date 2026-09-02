import { createFileRoute } from "@tanstack/react-router";

import { PostCard } from "@/components/site/PostCard";
import { Reveal } from "@/components/site/Reveal";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Blumebyte" },
      {
        name: "description",
        content:
          "Blumebyte Insights: practical writing on AI, digital transformation, business technology, infrastructure, dashboards and software for growing organisations.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">Insights</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Practical thinking for digital work.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              Notes on AI, software, infrastructure and digital operations for teams that want technology to solve real business problems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 70}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
