import { describe, expect, test } from "bun:test";
import { getHeaderPositionClass, getHomeHeaderSurfaceClass } from "./header-layout";

describe("header layout policy", () => {
  test("keeps the homepage header fixed so it can overlay the hero", () => {
    expect(getHeaderPositionClass(true)).toBe("fixed");
  });

  test("keeps internal-page headers in document flow", () => {
    expect(getHeaderPositionClass(false)).toBe("sticky");
  });

  test("uses a truly transparent surface at the top of the homepage", () => {
    expect(getHomeHeaderSurfaceClass(false, true)).toContain("bg-transparent");
    expect(getHomeHeaderSurfaceClass(false, false)).toContain("bg-transparent");
  });
});
