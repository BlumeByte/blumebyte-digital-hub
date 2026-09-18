import { describe, expect, test } from "bun:test";
import {
  GOOGLE_FORM_ENDPOINT,
  PRIVACY_CONSENT_VALUE,
  buildGoogleFormPayload,
} from "./google-form-enquiry";

describe("buildGoogleFormPayload", () => {
  test("maps every website contact field to the published Google Form entry ID", () => {
    const payload = buildGoogleFormPayload({
      name: "Isaac Tetteh",
      email: "isaac@example.com",
      phone: "+233 25 612 2555",
      company: "Blumebyte",
      service: "Web Design & Custom Dashboards",
      message: "I need a client dashboard.",
      privacyAccepted: true,
    });

    expect(GOOGLE_FORM_ENDPOINT).toBe(
      "https://docs.google.com/forms/d/e/1FAIpQLSdn1furyhYXDUpLF6T56oU7j8KPeD0CKiSO8SAqLLt_NNecqQ/formResponse",
    );
    expect(payload.get("entry.1429787837")).toBe("Isaac Tetteh");
    expect(payload.get("entry.2086077928")).toBe("isaac@example.com");
    expect(payload.get("entry.1789184807")).toBe("+233 25 612 2555");
    expect(payload.get("entry.1870899631")).toBe("Blumebyte");
    expect(payload.get("entry.975217014")).toBe("Web Design & Custom Dashboards");
    expect(payload.get("entry.1926531696")).toBe("I need a client dashboard.");
    expect(payload.get("entry.1907540901")).toBe(PRIVACY_CONSENT_VALUE);
  });

  test("omits privacy consent when it is not accepted", () => {
    const payload = buildGoogleFormPayload({
      name: "Isaac",
      email: "isaac@example.com",
      phone: "123",
      company: "Blumebyte",
      service: "Other",
      message: "Test",
      privacyAccepted: false,
    });

    expect(payload.has("entry.1907540901")).toBe(false);
  });
});
