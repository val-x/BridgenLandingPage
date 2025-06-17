import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import FloatingButtons from "./components/FloatingButtons";

// Dynamically import client components to avoid SSR issues
const ClientWelcomePopup = dynamic(
  () => import("./components/ClientWelcomePopup"),
  {
    loading: () => null,
  }
);

// Optimized font loading with display swap
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// Use system fonts as fallback for better performance
const systemFont = {
  variable: "--font-system",
};

// Enhanced metadata for better SEO and performance
export const metadata: Metadata = {
  metadataBase: new URL("https://bridgentraining.com"),
  title: {
    default:
      "Bridgen Training - Best Interior Design & CAD Courses in Kozhikode | 99% Placement Rate",
    template: "%s | Bridgen Training Institute",
  },
  description:
    "Transform your creative potential with Bridgen's expert-led Interior Design & CAD courses. Established 2015 in Kozhikode, Kerala. 99% placement success rate with hands-on training and industry partnerships.",
  keywords: [
    "Interior Design Course",
    "CAD Training",
    "Kozhikode",
    "Kerala",
    "Placement Assistance",
    "Career Training",
    "Architectural Visualization",
    "3D Design",
    "AutoCAD",
    "SketchUp",
  ],
  authors: [{ name: "Bridgen Training Institute" }],
  creator: "Bridgen Training Institute",
  publisher: "Bridgen Training Institute",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
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
    google: process.env.GOOGLE_VERIFICATION_ID,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/images/homeHero.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/bridgen_logo_highres.png"
          as="image"
          type="image/png"
        />

        {/* Critical CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS for faster loading */
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              margin: 0;
              padding: 0;
              line-height: 1.6;
            }
            .hero-section { 
              min-height: 80vh; 
              position: relative;
              display: flex;
              align-items: center;
            }
            /* Prevent layout shift */
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 1rem;
            }
            /* Loading state styles */
            .animate-pulse {
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: .5; }
            }
          `,
          }}
        />

        {/* Optimize resource loading */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body
        className={`${inter.variable} ${systemFont.variable} antialiased min-h-screen bg-white text-gray-900`}
      >
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Client-side components */}
        <Suspense fallback={null}>
          <ClientWelcomePopup />
        </Suspense>

        <FloatingButtons />

        <main id="main-content">{children}</main>

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
