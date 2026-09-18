import { describe, expect, test } from "bun:test";
import {
  GOOGLE_FORM_ENDPOINT,
  GOOGLE_FORM_ENTRY_IDS,
  PRIVACY_CONSENT_VALUE,
  buildGoogleFormPayload,
} from "./google-form-enquiry";

describe("buildGoogleFormPayload", () => {
  test("maps every website contact field to the live Google Form DOM entry name", () => {
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
    expect(payload.get(GOOGLE_FORM_ENTRY_IDS.name)).toBe("Isaac Tetteh");
    expect(payload.get(GOOGLE_FORM_ENTRY_IDS.email)).toBe("isaac@example.com");
    expect(payload.get(GOOGLE_FORM_ENTRY_IDS.phone)).toBe("+233 25 612 2555");
    expect(payload.get(GOOGLE_FORM_ENTRY_IDS.company)).toBe("Blumebyte");
    expect(payload.get(GOOGLE_FORM_ENTRY_IDS.service)).toBe("Web Design & Custom Dashboards");
    expect(payload.get(GOOGLE_FORM_ENTRY_IDS.message)).toBe("I need a client dashboard.");
    expect(payload.get(GOOGLE_FORM_ENTRY_IDS.privacy)).toBe(PRIVACY_CONSENT_VALUE);
  });

  test("uses the current live entry IDs", () => {
    expect(GOOGLE_FORM_ENTRY_IDS).toEqual({
      name: "entry.1493348597",
      email: "entry.1809963150",
      phone: "entry.1054473153",
      company: "entry.1755849628",
      service: "entry.1109077466",
      message: "entry.758920729",
      privacy: "entry.1656160953",
    });
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

    expect(payload.has(GOOGLE_FORM_ENTRY_IDS.privacy)).toBe(false);
  });
});
