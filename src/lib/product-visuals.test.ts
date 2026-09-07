import { describe, expect, test } from "bun:test";
import { projects } from "@/data/projects";
import { getProductVisual } from "./product-visuals";

describe("getProductVisual", () => {
  test("returns each approved project image by active index", () => {
    expect(getProductVisual(projects, 0).src).toBe("/portfolio/blumebyte-hr-dashboard.jpg");
    expect(getProductVisual(projects, 1).src).toBe("/portfolio/prosme-logo.png");
    expect(getProductVisual(projects, 2).src).toBe("/portfolio/ghost-tears-game-bg.jpg");
    expect(getProductVisual(projects, 3).src).toBe("/portfolio/space-bob-cover.jpg");
  });

  test("clamps an out-of-range active index", () => {
    expect(getProductVisual(projects, 99).title).toBe("Space Bob");
    expect(getProductVisual(projects, -1).title).toBe("Blumebyte HR");
  });
});
