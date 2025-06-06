import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWelcomePopup from "./components/ClientWelcomePopup";
import FloatingButtons from "./components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bridgen - Interior Design & Computer Aided Designs Training",
  description:
    "Founded in 2015, Bridgen is a leading training institute specializing in interior design, architectural visualization, and CAD drafting with a 99% placement rate. Bridge to next Generation.",
  keywords:
    "interior design, CAD, training, design courses, computer aided design, professional development, career training, Kozhikode, Kerala, architectural visualization",
  authors: [{ name: "Bridgen" }],
  creator: "Bridgen",
  publisher: "Bridgen",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://bridgentraining.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bridgen - Interior Design & Computer Aided Designs Training",
    description:
      "Founded in 2015, Bridgen is a leading training institute specializing in interior design, architectural visualization, and CAD drafting. Our hands-on, job-oriented courses prepare students for successful careers in India and abroad.",
    url: "https://bridgentraining.com",
    siteName: "Bridgen",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/bridgen_logo_highres.png",
        width: 1200,
        height: 630,
        alt: "Bridgen - Interior Design & CAD Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridgen - Interior Design & Computer Aided Designs Training",
    description:
      "Founded in 2015, Bridgen is a leading training institute specializing in interior design and CAD drafting with a 99% placement rate.",
    images: ["/images/bridgen_logo_highres.png"],
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
    icon: "/favicon.ico",
    apple: [{ url: "/apple-icon.png" }],
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWelcomePopup />
        <FloatingButtons />
        {children}
      </body>
    </html>
  );
}
