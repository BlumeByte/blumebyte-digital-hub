import { describe, expect, test } from "bun:test";
import { shouldRenderLive3D } from "./visual-capability";

describe("shouldRenderLive3D", () => {
  test("enables live 3D only when WebGL exists and motion is allowed", () => {
    expect(shouldRenderLive3D({ webgl: true, reducedMotion: false })).toBe(true);
  });

  test("falls back without WebGL", () => {
    expect(shouldRenderLive3D({ webgl: false, reducedMotion: false })).toBe(false);
  });

  test("falls back for reduced-motion users", () => {
    expect(shouldRenderLive3D({ webgl: true, reducedMotion: true })).toBe(false);
  });
});
