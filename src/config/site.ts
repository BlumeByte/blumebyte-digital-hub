/**
 * Central Blumebyte site configuration.
 */
export const siteConfig = {
  name: "Blumebyte",
  domain: "blumebyte.com",
  tagline: "Technology made easy for growing businesses",
  description:
    "Blumebyte is a Ghana-based technology and digital solutions company helping businesses improve operations, communication and digital growth.",

  // WhatsApp contact — full international format, digits only.
  whatsappNumber: "233256122555",
  whatsappMessage: "Hello Blumebyte, I'd like to talk about a project.",

  // Public contact details.
  email: "blumebyte@gmail.com",
  phone: "+233 25 612 2555",
  address: "Accra, Ghana",
  hours: "Mon – Fri, 8:30am – 5:30pm GMT",

  socials: {
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },

  products: {
    hr: "https://hr.blumebyte.com",
    prosme: "https://prosme.blumebyte.com",
    prosmePlayStore: "https://play.google.com/apps/testing/com.blumebyte.prosme",
    ghostTearsPlayStore: "https://play.google.com/apps/testing/com.blumebyte.spacebob",
    spaceBobPlayStore: "https://play.google.com/store/apps/details?id=com.blumebyte.spacebob",
  },
} as const;

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;
