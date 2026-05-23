import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Redwood Roofing Pro — Licensed Roofers in Redwood City, CA",
  description:
    "Learn about Redwood Roofing Pro — a full-service roofing contractor serving Redwood City and San Mateo County since day one. Licensed, insured, honest pricing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Redwood Roofing Pro"
        subtitle="Trusted roofing experts serving Redwood City, Menlo Park, Atherton, San Carlos, and surrounding San Mateo County communities."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
