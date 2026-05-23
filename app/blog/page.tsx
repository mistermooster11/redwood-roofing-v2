import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Roofing Blog — Redwood Roofing Pro | Tips & Insights",
  description:
    "Roofing tips, maintenance guides, and local insights from Redwood Roofing Pro. Serving homeowners in Redwood City and San Mateo County.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Roofing Tips & Insights"
        subtitle="Advice from local roofers on repair, replacement, storm damage, and keeping your roof in top shape."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
