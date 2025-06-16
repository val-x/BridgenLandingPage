import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWelcomePopup from "./components/ClientWelcomePopup";
import FloatingButtons from "./components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Bridgen Training - Best Interior Design & CAD Courses in Kozhikode, Kerala | 99% Placement Rate",
    template: "%s | Bridgen Training Institute",
  },
  description:
    "Join Bridgen Training Institute (Est. 2015) for professional Interior Design, Architectural Visualization & CAD courses in Kozhikode, Kerala. 99% placement success rate. Expert-led training with hands-on experience. Transform your creative potential into industry-ready skills.",
  keywords: [
    "interior design courses kozhikode",
    "CAD training kerala",
    "architectural visualization courses",
    "interior design institute kerala",
    "job oriented design courses",
    "3d visualization training",
    "autocad courses kozhikode",
    "placement assistance design courses",
    "professional design training",
    "computer aided design kerala",
    "interior design career",
    "architectural drafting courses",
  ].join(", "),
  authors: [
    { name: "Bridgen Training Institute", url: "https://bridgentraining.com" },
  ],
  creator: "Bridgen Training Institute",
  publisher: "Bridgen Training Institute",
  category: "Education & Training",
  classification: "Interior Design & CAD Training Institute",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://bridgentraining.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Bridgen Training - Best Interior Design & CAD Courses in Kozhikode | 99% Placement Rate",
    description:
      "Transform your creative potential with Bridgen's expert-led Interior Design & CAD courses. Established 2015 in Kozhikode, Kerala. 99% placement success rate with hands-on training and industry partnerships.",
    url: "https://bridgentraining.com",
    siteName: "Bridgen Training Institute",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/bridgen-og-image.png",
        width: 1200,
        height: 630,
        alt: "Bridgen Training Institute - Interior Design & CAD Courses in Kozhikode, Kerala",
      },
      {
        url: "/images/bridgen_logo_highres.png",
        width: 800,
        height: 600,
        alt: "Bridgen Training Institute Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BridgenTraining",
    creator: "@BridgenTraining",
    title:
      "Bridgen Training - Interior Design & CAD Courses in Kozhikode | 99% Placement",
    description:
      "Join Kerala's leading Interior Design & CAD training institute. 99% placement rate, expert faculty, hands-on learning. Est. 2015 in Kozhikode.",
    images: {
      url: "/images/bridgen-og-image.png",
      alt: "Bridgen Training Institute - Interior Design & CAD Courses",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#003366",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Bridgen Training",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#003366",
    "theme-color": "#003366",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://wa.me" />

        {/* DNS prefetch for faster external resource loading */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Critical CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS for faster loading */
            body { font-family: system-ui, -apple-system, sans-serif; }
            .hero-section { min-height: 80vh; }
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-gray-900`}
      >
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <ClientWelcomePopup />
        <FloatingButtons />

        <main id="main-content">{children}</main>

        {/* Analytics and tracking can be added here */}

        {/* Website schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bridgen Training Institute",
              url: "https://bridgentraining.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://bridgentraining.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
