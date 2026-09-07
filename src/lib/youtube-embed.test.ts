import { describe, expect, test } from "bun:test";
import { getYoutubeCommandOrigin } from "./youtube-embed";

describe("getYoutubeCommandOrigin", () => {
  test("targets the actual youtube-nocookie iframe origin", () => {
    expect(
      getYoutubeCommandOrigin(
        "https://www.youtube-nocookie.com/embed/qMwDUHC8iNk?autoplay=1&enablejsapi=1",
      ),
    ).toBe("https://www.youtube-nocookie.com");
  });

  test("falls back safely when an iframe URL cannot be parsed", () => {
    expect(getYoutubeCommandOrigin("not-a-url")).toBe("*");
  });
});
