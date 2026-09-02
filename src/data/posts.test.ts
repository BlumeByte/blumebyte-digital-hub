import { describe, expect, test } from "bun:test";
import { posts } from "./posts";

describe("posts", () => {
  test("includes the requested AI coding tools article", () => {
    expect(posts.some((post) => post.title.toLowerCase().includes("free ai coding tools"))).toBe(true);
  });

  test("has unique non-empty slugs", () => {
    const slugs = posts.map((post) => post.slug);
    expect(slugs.every(Boolean)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
