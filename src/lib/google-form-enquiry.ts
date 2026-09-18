export const GOOGLE_FORM_ENDPOINT =
  "https://docs.google.com/forms/d/e/1FAIpQLSdn1furyhYXDUpLF6T56oU7j8KPeD0CKiSO8SAqLLt_NNecqQ/formResponse";

export const PRIVACY_CONSENT_VALUE =
  "I agree that Blumebyte may use the information I submit to respond to this enquiry in accordance with the Privacy Policy.";

export type GoogleFormEnquiry = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  privacyAccepted: boolean;
};

const entryIds = {
  name: "entry.1429787837",
  email: "entry.2086077928",
  phone: "entry.1789184807",
  company: "entry.1870899631",
  service: "entry.975217014",
  message: "entry.1926531696",
  privacy: "entry.1907540901",
} as const;

export function buildGoogleFormPayload(fields: GoogleFormEnquiry) {
  const payload = new URLSearchParams({
    [entryIds.name]: fields.name.trim(),
    [entryIds.email]: fields.email.trim(),
    [entryIds.phone]: fields.phone.trim(),
    [entryIds.company]: fields.company.trim(),
    [entryIds.service]: fields.service.trim(),
    [entryIds.message]: fields.message.trim(),
  });

  if (fields.privacyAccepted) {
    payload.set(entryIds.privacy, PRIVACY_CONSENT_VALUE);
  }

  return payload;
}

export async function submitGoogleFormEnquiry(
  fields: GoogleFormEnquiry,
  fetchImpl: typeof fetch = fetch,
) {
  const payload = buildGoogleFormPayload(fields);

  await fetchImpl(GOOGLE_FORM_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: payload.toString(),
  });
}
