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
  title: "Roof Repair Redwood City — Storm Damage & Leaks | Redwood Roofing Pro",
  description:
    "Fast roof repair in Redwood City, CA. Storm damage, leaks, shingles, flashing — all materials. Free inspection, written estimate. Call (650) 822-1222.",
};

export default function RoofRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Roof Repair & Storm Damage"
        subtitle="Fast, professional roof repair across Redwood City and San Mateo County — storm damage, leaks, shingles, flashing, and more."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Roof Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Roof Repair"
        sidebarImage="/images/chimney-inspection-repair-rooftop-worker.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Roof Repair Services in Redwood City"
        intro={[
          "Whether you're dealing with an active leak, hail or wind damage, displaced shingles, or failed flashing, Redwood Roofing Pro responds fast and fixes the problem right. We work on all roofing materials and are experienced with the specific challenges of Bay Area weather.",
          "Every repair starts with a free inspection. We diagnose the actual source of the problem — not just the symptom — and provide a written estimate before any work begins.",
        ]}
        whatWeDo={[
          "Emergency leak containment and tarping","Storm and hail damage repair","Shingle replacement (all types)","Flashing repair and replacement","Chimney and skylight repair","Flat roof patching and re-coating","Soffit, fascia, and decking repair"
        ]}
        whyChooseUs={[
          "Emergency response for active leaks and storm damage","Free inspection and written estimate — no surprise charges","All roofing materials handled","Insurance documentation support for storm claims","Licensed and insured California contractor"
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
