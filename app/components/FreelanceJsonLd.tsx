export function FreelanceJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bridgen Project Works - 2D & 3D Design Services",
    description:
      "Professional 2D CAD drafting, 3D visualization, and interior design outsourcing services for architects, designers, and builders worldwide.",
    url: "https://bridgentraining.com/freelance-cad-jobs",
    telephone: "+91-9061002200",
    email: "hello@bridgentraining.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Thayyil Arcade, V Panoli Road, near Baby Memorial Hospital",
      addressLocality: "Thiruthiyad, Kozhikode",
      addressRegion: "Kerala",
      postalCode: "673004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.2588",
      longitude: "75.7804",
    },
    openingHours: "Mo-Sa 09:30-17:00",
    sameAs: [
      "https://www.facebook.com/DZcalicut/",
      "https://www.instagram.com/bridgentraining/",
      "https://www.youtube.com/@TheZee001",
    ],
    serviceType: [
      "2D CAD Drafting",
      "3D Modeling & Rendering",
      "Interior Design Outsourcing",
      "Architectural Documentation",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "Qatar",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "2D CAD Drafting",
            description:
              "Floor plans, elevations, sections, electrical, plumbing, furniture layout drawings, construction detail drawings, architectural documentation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "3D Modeling & Rendering",
            description:
              "Photorealistic interior and exterior renders, 3D walkthroughs and animation, SketchUp + V-Ray, 3ds Max, Lumion, conceptual and presentation-ready visuals",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Design Outsourcing",
            description:
              "Residential, commercial & hospitality design, mood boards, material boards & FF&E selection, complete drawing set for execution, custom design solutions",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
