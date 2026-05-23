import type { Metadata } from "next";
import "./globals.css";
import "./client-theme.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Redwood Roofing Pro",
  "description": "Full-service roofing contractor serving Redwood City and San Mateo County. Roof repair, replacement, storm damage, and free inspections.",
  "url": "https://redwoodroofingpro.com",
  "telephone": "+16508221222",
  "email": "info@redwoodroofingpro.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "51 Broadway",
    "addressLocality": "Redwood City",
    "addressRegion": "CA",
    "postalCode": "94063",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.4853,
    "longitude": -122.2364
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "14:00" }
  ],
  "areaServed": ["Redwood City","Menlo Park","Atherton","San Carlos","Belmont","Foster City","Woodside","Portola Valley"],
  "priceRange": "$$",
  "sameAs": []
};

export const metadata: Metadata = {
  title: "Redwood Roofing Pro — Licensed Roofers in Redwood City, CA",
  description:
    "Full-service roofing contractor serving Redwood City and San Mateo County. Roof repair, replacement, storm damage, and free inspections. Call (650) 822-1222.",
  openGraph: {
    type: "website",
    url: "https://redwoodroofingpro.com",
    siteName: "Redwood Roofing Pro",
    title: "Redwood Roofing Pro — Licensed Roofers in Redwood City, CA",
    description:
      "Full-service roofing contractor serving Redwood City and San Mateo County. Free inspections, written estimates, licensed crew. Call (650) 822-1222.",
    images: [{ url: "https://redwoodroofingpro.com/images/roofing-crew-installing-shingles-aerial-view.jpg", width: 1200, height: 630, alt: "Redwood Roofing Pro crew" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redwood Roofing Pro — Licensed Roofers in Redwood City, CA",
    description:
      "Full-service roofing contractor serving Redwood City and San Mateo County. Free inspections, written estimates, licensed crew.",
    images: ["https://redwoodroofingpro.com/images/roofing-crew-installing-shingles-aerial-view.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
