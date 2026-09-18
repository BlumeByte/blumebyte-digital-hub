export const GOOGLE_FORM_ENDPOINT =
  "https://docs.google.com/forms/d/e/1FAIpQLSdn1furyhYXDUpLF6T56oU7j8KPeD0CKiSO8SAqLLt_NNecqQ/formResponse";

export const PRIVACY_CONSENT_VALUE =
  "I agree that Blumebyte may use the information I submit to respond to this enquiry in accordance with the Privacy Policy.";

export const GOOGLE_FORM_ENTRY_IDS = {
  name: "entry.1493348597",
  email: "entry.1809963150",
  phone: "entry.1054473153",
  company: "entry.1755849628",
  service: "entry.1109077466",
  message: "entry.758920729",
  privacy: "entry.1656160953",
} as const;

export type GoogleFormEnquiry = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  privacyAccepted: boolean;
};

export function buildGoogleFormPayload(fields: GoogleFormEnquiry) {
  const payload = new URLSearchParams({
    [GOOGLE_FORM_ENTRY_IDS.name]: fields.name.trim(),
    [GOOGLE_FORM_ENTRY_IDS.email]: fields.email.trim(),
    [GOOGLE_FORM_ENTRY_IDS.phone]: fields.phone.trim(),
    [GOOGLE_FORM_ENTRY_IDS.company]: fields.company.trim(),
    [GOOGLE_FORM_ENTRY_IDS.service]: fields.service.trim(),
    [GOOGLE_FORM_ENTRY_IDS.message]: fields.message.trim(),
  });

  if (fields.privacyAccepted) {
    payload.set(GOOGLE_FORM_ENTRY_IDS.privacy, PRIVACY_CONSENT_VALUE);
  }

  return payload;
}
