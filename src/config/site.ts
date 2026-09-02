/**
 * Central site configuration.
 *
 * >>> CHANGE THE WHATSAPP NUMBER HERE <<<
 * Use full international format, digits only (no +, spaces or dashes).
 */
export const siteConfig = {
  name: "Blumebyte",
  domain: "blumebyte.com",
  tagline: "Technology made easy for growing businesses",
  description:
    "Blumebyte is a Ghana-based technology and digital solutions company helping businesses improve operations, communication and digital growth.",

  // WhatsApp contact — edit this single value to update every WhatsApp link.
  whatsappNumber: "233200000000",
  whatsappMessage: "Hello Blumebyte, I'd like to talk about a project.",

  email: "hello@blumebyte.com",
  phone: "+233 20 000 0000",
  address: "Accra, Ghana",
  hours: "Mon – Fri, 8:30am – 5:30pm GMT",

  socials: {
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
} as const;

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;
