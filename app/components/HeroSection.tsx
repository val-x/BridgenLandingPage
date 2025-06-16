"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  const trustSignals = [
    { number: "99%", label: "Placement Rate" },
    { number: "2015", label: "Established" },
    { number: "500+", label: "Successful Students" },
    { number: "10+", label: "Industry Partners" },
  ];

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative text-white overflow-hidden min-h-[80vh] flex items-center hero-section"
      aria-label="Hero section with course information and call-to-action"
    >
      {/* Background Image with parallax effect, blur, and dark blue overlay */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 scale-110">
          <Image
            src="/images/homeHero.png"
            alt="Interior design students learning CAD and visualization techniques at Bridgen Training Institute"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            style={{
              filter: "blur(8px)",
            }}
          />
        </div>
        {/* Dark blue overlay with blur background effect */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--navy-blue)",
            opacity: 0.75,
            backdropFilter: "blur(2px)",
          }}
        ></div>
        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Logo and Tagline with better semantic structure */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4">
              <Image
                src="/images/bridgen_logo_highres.png"
                alt="Bridgen Training Institute Logo"
                width={60}
                height={60}
                className="h-12 w-12 sm:h-16 sm:w-16"
                loading="eager"
              />
              <span className="text-xl sm:text-2xl font-medium text-[var(--light-blue)] text-center sm:text-left">
                Bridge to Next Generation
              </span>
            </div>
          </motion.header>

          {/* Enhanced Main Heading with better SEO structure */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center sm:text-left leading-tight"
          >
            Launch Your Career in{" "}
            <span style={{ color: "var(--red)" }}>Interior Design</span> & CAD
            Training
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 text-center sm:text-left max-w-3xl"
          >
            Expert-led training in Kozhikode, Kerala to transform your creative
            potential into industry-ready skills.{" "}
            <strong className="text-[var(--light-blue)]">
              99% placement success rate
            </strong>{" "}
            since 2015.
          </motion.p>

          {/* Trust Signals Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center"
          >
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--red)" }}
                >
                  {signal.number}
                </div>
                <div className="text-sm text-gray-300">{signal.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons with better accessibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
          >
            <Link
              href="https://wa.me/+919061002200?text=Hello%20Bridgen%20Team%2C%0A%0AI'm%20interested%20in%20exploring%20career%20opportunities%20in%20design.%20I'd%20like%20to%20know%20more%20about%20your%20professional%20training%20programs%20and%20placement%20success.%20%0A%0ALooking%20forward%20to%20your%20response.%0A%0AThank%20you!"
              className="btn-accent w-full sm:w-auto text-center group relative overflow-hidden"
              aria-label="Contact Bridgen Training on WhatsApp for course information"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Free Consultation
              </span>
            </Link>

            <Link
              href="/courses"
              className="btn-secondary w-full sm:w-auto text-center group relative overflow-hidden"
              aria-label="Browse Bridgen Training Institute courses"
            >
              <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center">
                Explore Courses
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Additional trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Industry Certified Faculty</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Hands-on Training</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Job Placement Support</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Schema markup for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Interior Design & CAD Training",
            description:
              "Professional Interior Design, Architectural Visualization & CAD courses",
            provider: {
              "@type": "EducationalOrganization",
              name: "Bridgen Training Institute",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Thayyil Arcade, V Panoli Road, near Baby Memorial Hospital",
                addressLocality: "Thiruthiyad, Kozhikode",
                addressRegion: "Kerala",
                postalCode: "673004",
                addressCountry: "IN",
              },
            },
            courseMode: ["blended", "in-person"],
            educationalLevel: "Beginner to Advanced",
            timeRequired: "P3M",
            inLanguage: "en-IN",
          }),
        }}
      />
    </section>
  );
}
