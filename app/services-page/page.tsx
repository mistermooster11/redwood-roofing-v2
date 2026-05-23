import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Roofing Services — Redwood Roofing Pro | Redwood City, CA",
  description:
    "Full-service roofing for residential and commercial properties in Redwood City and San Mateo County. Repair, replacement, inspection, and storm damage.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Roofing Services"
        subtitle="Professional roofing services — residential and commercial — across Redwood City and San Mateo County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
