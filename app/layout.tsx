import type { Metadata } from "next";
import "./globals.css";
import "./client-theme.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Redwood Roofing Pro — Licensed Roofers in Redwood City, CA",
  description:
    "Full-service roofing contractor serving Redwood City and San Mateo County. Roof repair, replacement, storm damage, and free inspections. Call (650) 822-1222.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
