import { describe, expect, test } from "bun:test";
import { projects } from "./projects";

const bySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

describe("portfolio product URLs", () => {
  test("preserves approved external destinations", () => {
    expect(bySlug["blumebyte-hr"].externalUrl).toBe("https://hr.blumebyte.com");
    expect(bySlug.prosme.externalUrl).toBe("https://prosme.blumebyte.com");
    expect(bySlug.prosme.playStoreUrl).toBe("https://play.google.com/apps/testing/com.blumebyte.prosme");
    expect(bySlug["ghost-tears"].playStoreUrl).toBe("https://play.google.com/apps/testing/com.blumebyte.spacebob");
    expect(bySlug["space-bob"].playStoreUrl).toBe("https://play.google.com/store/apps/details?id=com.blumebyte.spacebob");
  });
});
