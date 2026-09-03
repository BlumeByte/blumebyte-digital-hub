import {
  Boxes,
  Gamepad2,
  Globe,
  Headset,
  LayoutDashboard,
  Printer,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "web-design-dashboards",
    title: "Web Design & Custom Dashboards",
    short: "Modern responsive websites and intelligent dashboards that streamline operations.",
    description:
      "We design and build websites and internal dashboards that are fast, clear and easy to maintain. Your team sees the right numbers at the right time, and your customers see a brand that looks the part.",
    icon: LayoutDashboard,
    highlights: [
      "Marketing sites and web apps",
      "Operations and reporting dashboards",
      "Responsive, accessible interfaces",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Analytics dashboard displayed on a laptop",
  },
  {
    slug: "hosting-domains",
    title: "Hosting & Domain Solutions",
    short: "Reliable domain registration and secure hosting that keeps you online.",
    description:
      "Domain registration, DNS, SSL and managed hosting handled for you. We monitor uptime, keep backups and handle renewals so your website and email stay available.",
    icon: Globe,
    highlights: ["Domain registration & DNS", "Managed, secure hosting", "Backups and monitoring"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Rows of servers in a secure data centre",
  },
  {
    slug: "mobile-apps-games",
    title: "Mobile App & Game Development",
    short: "Custom mobile apps and interactive game experiences that engage users.",
    description:
      "From customer-facing apps to internal tools and playable brand experiences, we build for Android and iOS with a focus on performance and retention.",
    icon: Gamepad2,
    highlights: [
      "Android & iOS apps",
      "Interactive game experiences",
      "Analytics and release support",
    ],
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Game controller in front of a colourful screen",
  },
  {
    slug: "virtual-assistance",
    title: "Virtual Assistance",
    short: "Professional remote support for admin, communication and workflows.",
    description:
      "Trained assistants handle inbox and calendar management, data entry, customer follow-ups and documentation, so your team spends time on work that grows the business.",
    icon: Headset,
    highlights: ["Admin & inbox management", "Customer follow-up", "Workflow coordination"],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Team collaborating around a work table",
  },
  {
    slug: "smartsuite-solutions",
    title: "SmartSuite Solutions",
    short: "Integrated productivity solutions for projects, documents and processes.",
    description:
      "We set up and configure the tools your team works in every day — projects, documents, approvals and internal communication — then train your staff to use them well.",
    icon: Boxes,
    highlights: [
      "Project & document management",
      "Process automation",
      "Team onboarding & training",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Team planning a connected digital workflow",
  },
  {
    slug: "printtech-supplies",
    title: "PrintTech Supplies",
    short: "Quality printer toners and cartridges for consistent office printing.",
    description:
      "Genuine and compatible toners, cartridges and printing consumables supplied on schedule, with advice on the right products for your printers and print volume.",
    icon: Printer,
    highlights: ["Toners & cartridges", "Scheduled resupply", "Office & business volumes"],
    image:
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Professional office printer and printed documents",
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    short: "Complete online store setup and management so you can sell online.",
    description:
      "Store design, product setup, payments, delivery options and ongoing management. We build stores that are simple for customers to buy from and simple for you to run.",
    icon: ShoppingCart,
    highlights: ["Store setup & design", "Payments & delivery", "Ongoing store management"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Customer completing a secure online payment",
  },
];
