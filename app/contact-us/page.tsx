import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Redwood Roofing Pro — Redwood City, CA | (650) 822-1222",
  description:
    "Contact Redwood Roofing Pro for free roof inspections and written estimates in Redwood City and San Mateo County. Call (650) 822-1222 or fill out our form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Call (650) 822-1222 or fill out our form — we respond promptly to all inspection and repair requests."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="Redwood Roofing Pro Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5!2d-122.23640!3d37.48530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9fca3c3af8d7%3A0x5c3f09be71bcd8a8!2s51+Broadway%2C+Redwood+City%2C+CA+94063!5e0!3m2!1sen!2sus!4v1699999999999"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
