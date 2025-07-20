import { Suspense } from "react";

// Import components directly to avoid dynamic import issues
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import Footer from "./components/Footer";
import {
  OrganizationJsonLd,
  FaqJsonLd,
  LocalBusinessJsonLd,
} from "./components/JsonLd";

// Import non-critical components directly
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

// Static metadata for better SEO and performance
export const metadata = {
  title:
    "Bridgen Training - Best Interior Design & CAD Courses in Kozhikode | 99% Placement Rate",
  description:
    "Transform your creative potential with Bridgen's expert-led Interior Design & CAD courses. Established 2015 in Kozhikode, Kerala. 99% placement success rate.",
  keywords:
    "Interior Design Course, CAD Training, Kozhikode, Kerala, Placement, Career Training",
  openGraph: {
    title: "Bridgen Training - Interior Design & CAD Courses",
    description: "99% Placement Success Rate | Expert Training in Kozhikode",
    type: "website",
    locale: "en_IN",
  },
};

export default function Home() {
  // FAQ data - moved to server-side for better performance
  const faqData = [
    {
      question: "What courses does Bridgen offer?",
      answer:
        "Bridgen offers comprehensive courses in Interior Design, Architectural Visualization, and CAD drafting, designed for both beginners and professionals looking to enhance their skills.",
    },
    {
      question: "Does Bridgen provide job placement assistance?",
      answer:
        "Yes, Bridgen has a 99% placement rate and provides job placement assistance to our students through our network of industry partners in India and abroad, including the Gulf region.",
    },
    {
      question: "Where is Bridgen located?",
      answer:
        "Bridgen is located at Thayyil Arcade, V Panoli Road, near Baby Memorial Hospital, Thiruthiyad, Kozhikode, Kerala 673004.",
    },
    {
      question: "What are Bridgen's business hours?",
      answer:
        "Bridgen is open from 9:30 AM to 5:00 PM, Monday through Saturday.",
    },
    {
      question: "When was Bridgen established?",
      answer:
        "Bridgen was founded in 2015 as a premier training institute dedicated to nurturing creative minds and shaping them into industry-ready professionals.",
    },
    {
      question: "What makes Bridgen's teaching approach unique?",
      answer:
        "At Bridgen, we believe in a hands-on, experiential approach to learning. Our unique syllabus bridges the gap between academic knowledge and practical skills, preparing students for successful careers in the dynamic design industry.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* JSON-LD Structured Data */}
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <FaqJsonLd questions={faqData} />

      <Header />
      <main>
        {/* Critical sections loaded immediately */}
        <HeroSection />
        <AboutSection />
        <CoursesSection />

        {/* Non-critical sections */}
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
