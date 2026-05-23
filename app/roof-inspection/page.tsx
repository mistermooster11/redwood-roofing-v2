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
  title: "Roof Inspection Redwood City — Free Inspections | Redwood Roofing Pro",
  description:
    "Free roof inspections in Redwood City and San Mateo County. We document damage, provide written reports, and give honest assessments. Call (650) 822-1222.",
};

export default function RoofInspectionPage() {
  return (
    <>
      <PageHeroSection
        title="Roof Inspection"
        subtitle="Free roof inspections with photo documentation and written findings — serving Redwood City and San Mateo County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Roof Inspection" },
        ]}
      />
      <ServiceDetailSection
        activeService="Roof Inspection"
        sidebarImage="/images/roofer-inspecting-asphalt-shingles-closeup.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Professional Roof Inspections in Redwood City"
        intro={[
          "Most roofing problems start small — a displaced shingle, cracked flashing, or moss buildup — and stay invisible until a leak appears on your ceiling. A professional inspection catches issues before they become expensive emergencies.",
          "Our roof inspections are free, thorough, and come with a written summary of everything we find. No pressure, no upsell — just an honest assessment with photo documentation you can keep.",
        ]}
        whatWeDo={[
          "Full visual inspection of all roof surfaces","Flashing, ridge, and penetration inspection","Gutter and drainage assessment","Photo documentation of all findings","Written condition report you can reference","Insurance-ready damage documentation for storm claims"
        ]}
        whyChooseUs={[
          "Free — no charge, no obligation","Written report with photos of every finding","Honest assessment — we don't push repairs that aren't needed","Insurance documentation for storm and hail claims","Available throughout Redwood City and San Mateo County"
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
