import { describe, expect, test } from "bun:test";
import { businessTransitionImage } from "./home-visuals";

describe("businessTransitionImage", () => {
  test("uses a wide business collaboration image", () => {
    expect(businessTransitionImage.src).toContain("images.unsplash.com");
    expect(businessTransitionImage.alt.toLowerCase()).toContain("business");
  });
});
