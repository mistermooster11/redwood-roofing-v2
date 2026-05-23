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
  title: "Commercial Roofing Redwood City — Redwood Roofing Pro",
  description:
    "Commercial roofing services in Redwood City and San Mateo County. Flat roofs, TPO, metal, and repairs for businesses and multi-unit properties.",
};

export default function CommercialRoofingPage() {
  return (
    <>
      <PageHeroSection
        title="Commercial Roofing"
        subtitle="Professional commercial roofing for businesses, HOAs, and multi-unit properties throughout Redwood City and San Mateo County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Commercial Roofing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Commercial Roofing"
        sidebarImage="/images/roofing-crew-installing-shingles-on-site.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Commercial Roofing Services in San Mateo County"
        intro={[
          "Redwood Roofing Pro handles commercial roofing projects for businesses, office buildings, HOAs, multi-unit residential, and light industrial properties throughout San Mateo County. We understand that commercial jobs demand minimal disruption to operations and reliable scheduling.",
          "We provide detailed written bids, work to schedule, and carry the insurance and licensing required for commercial work in California.",
        ]}
        whatWeDo={[
          "Flat roof systems (TPO, modified bitumen, built-up)","Metal roofing for commercial buildings","Commercial shingle and tile roofing","Roof inspections for property managers and HOAs","Preventive maintenance contracts","Emergency repair and storm damage response","Multi-unit residential roofing"
        ]}
        whyChooseUs={[
          "Experience with commercial and multi-unit properties","Detailed written bids with full scope","Licensed, insured, and compliant for commercial work","Minimal disruption scheduling","San Mateo County local crew — no out-of-area learning curve"
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
