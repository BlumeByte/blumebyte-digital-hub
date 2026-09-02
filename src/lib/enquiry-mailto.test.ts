import { describe, expect, test } from "bun:test";
import { buildEnquiryMailto } from "./enquiry-mailto";

describe("buildEnquiryMailto", () => {
  test("targets Blumebyte with the approved subject", () => {
    const url = buildEnquiryMailto({ name: "Isaac", message: "Website redesign" });
    expect(url.startsWith("mailto:blumebyte@gmail.com?")).toBe(true);
    expect(url).toContain("subject=Enquiry");
  });

  test("encodes supplied enquiry fields", () => {
    const url = buildEnquiryMailto({
      name: "Isaac Tetteh",
      email: "isaac@example.com",
      service: "Web Design & Custom Dashboards",
      message: "I need a new dashboard.",
    });
    const decoded = decodeURIComponent(url.replace(/\+/g, " "));
    expect(decoded).toContain("Isaac Tetteh");
    expect(decoded).toContain("Web Design & Custom Dashboards");
    expect(decoded).toContain("I need a new dashboard.");
  });
});
