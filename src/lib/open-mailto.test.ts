import { describe, expect, test } from "bun:test";
import { openMailtoFromUserGesture } from "./open-mailto";

describe("openMailtoFromUserGesture", () => {
  test("clicks a real anchor with the generated mailto URL", () => {
    let clicked = false;
    let appended = false;
    let removed = false;
    let href = "";

    const fakeDocument = {
      createElement: () => ({
        style: {} as Record<string, string>,
        set href(value: string) {
          href = value;
        },
        click: () => {
          clicked = true;
        },
        remove: () => {
          removed = true;
        },
      }),
      body: {
        appendChild: () => {
          appended = true;
        },
      },
    };

    openMailtoFromUserGesture("mailto:blumebyte@gmail.com?subject=Enquiry", fakeDocument);

    expect(href).toBe("mailto:blumebyte@gmail.com?subject=Enquiry");
    expect(appended).toBe(true);
    expect(clicked).toBe(true);
    expect(removed).toBe(true);
  });
});
