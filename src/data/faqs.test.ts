import { describe, expect, test } from "bun:test";
import { faqs } from "./faqs";

describe("faqs", () => {
  test("contains the approved core questions", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(6);
    expect(faqs.some((item) => item.question.includes("outside Ghana"))).toBe(true);
    expect(faqs.some((item) => item.question.includes("project quote"))).toBe(true);
  });
});
