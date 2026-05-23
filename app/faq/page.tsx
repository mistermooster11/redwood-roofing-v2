import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import FAQSection from "@/components/custom/faq/FAQSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "FAQ — Redwood Roofing Pro | Redwood City Roofing Questions Answered",
  description:
    "Common questions about our roofing services in Redwood City, CA. Free inspections, emergency response, roof materials, warranties, and service areas.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeroSection
        title="Frequently Asked Questions"
        subtitle="Find clear answers about our roofing services, emergency response, and service areas throughout San Mateo County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FAQSection />
      {/* <NeedServicesSection /> */}
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
