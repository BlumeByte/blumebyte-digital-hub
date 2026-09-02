import { describe, expect, test } from "bun:test";
import { projects } from "./projects";

describe("project links", () => {
  test("preserves approved external URLs", () => {
    const prosme = projects.find((project) => project.slug === "prosme");
    const ghostTears = projects.find((project) => project.slug === "ghost-tears");
    const spaceBob = projects.find((project) => project.slug === "space-bob");

    expect(prosme?.externalUrl).toBe("https://prosme.blumebyte.com");
    expect(prosme?.playStoreUrl).toBe("https://play.google.com/apps/testing/com.blumebyte.prosme");
    expect(ghostTears?.playStoreUrl).toBe("https://play.google.com/apps/testing/com.blumebyte.spacebob");
    expect(spaceBob?.playStoreUrl).toBe("https://play.google.com/store/apps/details?id=com.blumebyte.spacebob");
  });
});
