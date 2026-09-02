import { siteConfig } from "@/config/site";

export type EnquiryFields = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
};

export function buildEnquiryMailto(fields: EnquiryFields) {
  const lines = [
    `Name: ${fields.name?.trim() || "Not provided"}`,
    `Email: ${fields.email?.trim() || "Not provided"}`,
    `Phone: ${fields.phone?.trim() || "Not provided"}`,
    `Company / Organization: ${fields.company?.trim() || "Not provided"}`,
    `Service of interest: ${fields.service?.trim() || "Not specified"}`,
    "",
    "Project enquiry:",
    fields.message?.trim() || "Not provided",
  ];

  const query = new URLSearchParams({
    subject: "Enquiry",
    body: lines.join("\n"),
  });

  return `mailto:${siteConfig.email}?${query.toString()}`;
}
