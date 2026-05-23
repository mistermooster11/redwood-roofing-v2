export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/how-to-spot-roof-damage-after-a-storm",
    image: "/images/roofing-crew-aerial-safety-harness-installation.jpg",
    date: "15",
    monthYear: "May '26",
    category: "Roof Repair",
    categoryHref: "/blog",
    title: "How to Spot Roof Damage After a Storm — Before It Becomes a Leak",
    excerpt:
      "High winds and hail can damage your roof without leaving obvious signs from the ground. Learn what to look for — and when to call a professional — before water gets inside.",
  },
  {
    slug: "/blog/roof-replacement-vs-repair-how-to-decide",
    image: "/images/roofing-crew-installing-shingles-aerial-view.jpg",
    date: "08",
    monthYear: "Apr '26",
    category: "Roof Replacement",
    categoryHref: "/blog",
    title: "Roof Replacement vs. Repair: How to Know Which One You Actually Need",
    excerpt:
      "A repair can extend your roof's life by years — or it can be a short-term fix that costs more in the long run. Here's how we assess which path makes sense for your home.",
  },
  {
    slug: "/blog/metal-roofing-vs-asphalt-shingles-bay-area",
    image: "/images/modern-metal-roof-dormers-wooden-accents.jpg",
    date: "22",
    monthYear: "Mar '26",
    category: "Roofing Materials",
    categoryHref: "/blog",
    title: "Metal Roofing vs. Asphalt Shingles: What Works Best in the Bay Area",
    excerpt:
      "Both materials are popular on the Peninsula — but they perform differently given our fog, wet winters, and wildfire risk. Here's an honest comparison from a local roofer.",
  },
];
