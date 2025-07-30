import { Suspense } from "react";

// Import components directly to avoid dynamic import issues
import Header from "../components/Header";
import Footer from "../components/Footer";
import FreelanceHeroSection from "../components/FreelanceHeroSection";
import FreelanceAboutSection from "../components/FreelanceAboutSection";
import FreelanceServicesSection from "../components/FreelanceServicesSection";
import GlobalReachSection from "../components/GlobalReachSection";
import FreelanceBenefitsSection from "../components/FreelanceBenefitsSection";
import FreelanceCTASection from "../components/FreelanceCTASection";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import { FreelanceJsonLd } from "../components/FreelanceJsonLd";

// Static metadata for better SEO and performance
export const metadata = {
  title:
    "Project Works – 2D & 3D Design Services | Local & International Outsourcing",
  description:
    "Professional 2D CAD drafting, 3D visualization, and interior design outsourcing services. Quality-driven design documentation for clients across India, UAE, Qatar, UK, and USA.",
  keywords: [
    "2D CAD drafting services",
    "3D rendering services",
    "interior design outsourcing",
    "architectural documentation",
    "CAD support UAE",
    "design services India",
    "3D visualization Qatar",
    "remote interior design team",
  ],
  openGraph: {
    title: "Project Works – 2D & 3D Design Services | Bridgen",
    description:
      "Your one-stop destination for professional 2D drafting, 3D visualization, and interior design outsourcing with over a decade of experience.",
    url: "https://bridgentraining.com/freelance-cad-jobs",
    siteName: "Bridgen Training",
    images: [
      {
        url: "/images/bridgen_logo_highres.png",
        width: 1200,
        height: 630,
        alt: "Bridgen Project Works - 2D & 3D Design Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Works – 2D & 3D Design Services | Bridgen",
    description:
      "Professional design outsourcing services for architects, designers, and builders worldwide.",
    images: ["/images/bridgen_logo_highres.png"],
  },
  alternates: {
    canonical: "https://bridgentraining.com/freelance-cad-jobs",
  },
};

export default function ProjectWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* JSON-LD Structured Data */}
      <FreelanceJsonLd />

      <Header />
      <main>
        {/* Critical sections loaded immediately */}
        <FreelanceHeroSection />
        <FreelanceAboutSection />
        <FreelanceServicesSection />
        <GlobalReachSection />
        <FreelanceBenefitsSection />
        <FreelanceCTASection />
      </main>
      <Footer />

    </div>
  );
}
