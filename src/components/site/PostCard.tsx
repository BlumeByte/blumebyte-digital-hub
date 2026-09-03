import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatDate, type Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-snug">
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="transition-colors hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <User className="size-3.5" /> {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" /> {formatDate(post.date)}
          </span>
        </div>
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          Read article <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
