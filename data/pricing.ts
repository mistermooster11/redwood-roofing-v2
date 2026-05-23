export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

export const pricingCards: PricingCard[] = [
  {
    price: 0,
    note: "No obligation. No pressure.",
    title: "Free Roof Inspection",
    features: [
      "Full visual inspection",
      "Detailed photo documentation",
      "Written assessment of findings",
      "Insurance-ready damage reports",
    ],
    description:
      "Every job starts here. We inspect your roof, document everything we find, and give you an honest assessment — free of charge.",
  },
  {
    price: 0,
    note: "Itemized. No hidden fees.",
    title: "Written Estimate",
    features: [
      "Material and labor breakdown",
      "Multiple material options",
      "Timeline estimate",
      "Warranty details",
    ],
    description:
      "We provide a full written estimate before any work begins. You know exactly what's being done, what it costs, and why.",
    highlight: true,
  },
  {
    price: 0,
    note: "Call (650) 822-1222",
    title: "Emergency Response",
    features: [
      "Active leak containment",
      "Storm damage tarping",
      "Same-day service",
      "Redwood City & Peninsula",
    ],
    description:
      "Storm damage and active leaks don't wait. Call us directly and we'll dispatch a crew to protect your home.",
  },
  {
    price: 0,
    note: "Scheduled. Documented.",
    title: "Annual Maintenance",
    features: [
      "Full roof inspection",
      "Gutter clearing & downspout flush",
      "Minor repairs included",
      "Priority scheduling year-round",
    ],
    description:
      "Catch small problems before they become big ones. Our annual plan keeps your roof in peak condition and extends its lifespan.",
  },
];
