import { describe, expect, test } from "bun:test";
import { siteConfig } from "./site";

describe("siteConfig", () => {
  test("uses Blumebyte public contact channels", () => {
    expect(siteConfig.email).toBe("blumebyte@gmail.com");
    expect(siteConfig.whatsappNumber).toBe("233256122555");
    expect(siteConfig.phone).toBe("+233 25 612 2555");
  });

  test("links to the official YouTube channel", () => {
    expect(siteConfig.youtube).toBe("https://www.youtube.com/@BLUMEBYTE/videos");
  });
});
