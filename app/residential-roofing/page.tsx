import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Residential Roofing Redwood City — Redwood Roofing Pro",
  description:
    "Professional residential roofing services in Redwood City, CA. Repair, replacement, and inspection for all roof types. Licensed crew, free estimates.",
};

export default function ResidentialRoofingPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Roofing"
        subtitle="Expert residential roofing services across Redwood City and San Mateo County — all materials, free inspections, written estimates before work begins."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Roofing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Roofing"
        sidebarImage="/images/roofing-crew-working-residential-roof-installation.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Residential Roofing Services in Redwood City"
        intro={[
          "Your home's roof is its first defense against the Bay Area's winter storms, coastal fog, and summer heat. Redwood Roofing Pro provides full residential roofing services — from single shingle repairs to complete tear-off and re-roof — for homeowners throughout Redwood City and San Mateo County.",
          "Every job starts with a free inspection and a written, itemized estimate. We work on all residential roofing materials and systems, and our crews treat your property with care from start to finish.",
        ]}
        whatWeDo={[
          "Asphalt shingle repair and replacement","Metal roofing installation and repair","Clay, slate, and tile roofing","Flat and low-slope roof systems","Gutter cleaning, repair, and replacement","Moss removal and preventive treatment","Soffit, fascia, and flashing repair"
        ]}
        whyChooseUs={[
          "Free inspection and written estimate before work begins","Licensed and insured — California contractor","All roofing materials and systems","Based in Redwood City — local Peninsula knowledge","Debris hauled away, full cleanup before we leave"
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
