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
  title: "Roof Replacement Redwood City — Full Tear-Off & Re-Roof | Redwood Roofing Pro",
  description:
    "Complete roof replacement in Redwood City and San Mateo County. All materials, licensed crew, manufacturer warranties. Free inspection and written estimate.",
};

export default function RoofReplacementPage() {
  return (
    <>
      <PageHeroSection
        title="Full Roof Replacement"
        subtitle="Complete tear-off and re-roof for residential and commercial properties throughout Redwood City and San Mateo County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Roof Replacement" },
        ]}
      />
      <ServiceDetailSection
        activeService="Roof Replacement"
        sidebarImage="/images/roofing-crew-installing-shingles-aerial-view.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Full Roof Replacement in Redwood City"
        intro={[
          "When a roof has reached the end of its service life — whether through age, repeated repairs, or significant storm damage — full replacement is the most cost-effective long-term solution. Redwood Roofing Pro handles complete tear-off, deck inspection, and installation of a new roof system.",
          "We work with all residential roofing materials and can help you select the right system for Redwood City's climate. Every replacement includes a written estimate, manufacturer-warranty materials, and a workmanship guarantee.",
        ]}
        whatWeDo={[
          "Complete tear-off of old roofing material","Decking inspection and replacement where needed","Underlayment, ice and water barrier installation","Asphalt shingle, metal, tile, and flat roof systems","Manufacturer warranty — up to 50-year options available","Debris hauled away, full site cleanup","Final walkthrough and written workmanship guarantee"
        ]}
        whyChooseUs={[
          "Free inspection and written, itemized estimate","All major roofing materials and systems","Manufacturer warranties on materials","Licensed and insured California contractor","Clean worksites — debris hauled away before we leave"
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
