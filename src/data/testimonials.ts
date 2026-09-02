export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Blumebyte understood our operations before proposing anything. The dashboard they built is now the first thing our managers open each morning.",
    name: "Client Name",
    role: "Operations Director, Logistics Company",
    initials: "CN",
  },
  {
    quote:
      "Clear timelines, no jargon, and the training meant our staff were confident from week one. Exactly the partner a growing business needs.",
    name: "Client Name",
    role: "General Manager, Retail Group",
    initials: "CN",
  },
  {
    quote:
      "Blumebyte HR replaced three spreadsheets and a lot of back-and-forth. Leave and attendance now take minutes each week.",
    name: "Client Name",
    role: "HR Lead, Non-profit Organisation",
    initials: "CN",
  },
];
