import React from "react";

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization structured data
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Bridgen",
    description:
      "Founded in 2015, Bridgen is a leading training institute specializing in interior design, architectural visualization, and CAD drafting. Our hands-on, job-oriented courses are designed to bridge the gap between academic knowledge and real-world skills, preparing students for successful careers both in India and abroad, including the Gulf region.",
    url: "https://bridgentraining.com",
    logo: "https://bridgentraining.com/images/bridgen_logo_highres.png",
    sameAs: [
      "https://www.facebook.com/DZcalicut/",
      "https://www.instagram.com/bridgentraining/",
      "https://www.youtube.com/@TheZee001",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Thayyil Arcade, V Panoli Road, near Baby Memorial Hospital",
      addressLocality: "Thiruthiyad, Kozhikode",
      addressRegion: "Kerala",
      postalCode: "673004",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919061002200",
      contactType: "customer service",
    },
    slogan: "Bridge to next Generation",
    foundingDate: "2015",
  };

  return <JsonLd data={data} />;
}

// Course structured data
export function CourseJsonLd({
  name,
  description,
  provider = "Bridgen",
  url,
}: {
  name: string;
  description: string;
  provider?: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: "https://bridgentraining.com",
    },
    url,
  };

  return <JsonLd data={data} />;
}

// FAQ structured data
export function FaqJsonLd({
  questions,
}: {
  questions: Array<{ question: string; answer: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

// Local Business structured data
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bridgen",
    image: "https://bridgentraining.com/images/bridgen_logo_highres.png",
    "@id": "https://bridgentraining.com",
    url: "https://bridgentraining.com",
    telephone: "+919061002200",
    priceRange: "$$",
    description:
      "Founded in 2015, Bridgen is a leading training institute specializing in interior design, architectural visualization, and CAD drafting with a 99% placement rate.",
    slogan: "Bridge to next Generation",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Thayyil Arcade, V Panoli Road, near Baby Memorial Hospital",
      addressLocality: "Thiruthiyad, Kozhikode",
      addressRegion: "Kerala",
      postalCode: "673004",
      addressCountry: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.2611714",
      longitude: "75.7914805",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return <JsonLd data={data} />;
}
