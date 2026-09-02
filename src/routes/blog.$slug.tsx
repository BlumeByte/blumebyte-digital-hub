import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { formatDate, posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((item) => item.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Blumebyte` : "Insights — Blumebyte" },
      { name: "description", content: loaderData?.excerpt ?? "Blumebyte Insights" },
    ],
  }),
  component: BlogArticle,
});

function BlogArticle() {
  const post = Route.useLoaderData();

  return (
    <article>
      <header className="bg-black text-white">
        <div className="container-page section-shell max-w-5xl">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/58 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" /> Back to Insights
            </Link>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#d5b16b]">
              <span>{post.category}</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
              {post.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">{post.excerpt}</p>
          </Reveal>
        </div>
      </header>

      <div className="container-page section-shell">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="mb-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="space-y-7">
            {post.body.map((paragraph, index) => (
              <Reveal key={index} delay={Math.min(index * 45, 180)}>
                <p className="text-base leading-8 text-foreground/78 sm:text-lg sm:leading-9">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 border-t border-black/10 pt-8">
              <p className="text-sm text-muted-foreground">Published by {post.author}</p>
              <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <ArrowLeft className="size-4" aria-hidden="true" /> More insights
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
