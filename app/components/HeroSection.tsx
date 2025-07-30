"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { memo, useState, useEffect } from "react";

// Slideshow images with parallax effect
const slideshowImages: string[] = [
  "/images/portfolio/sreeLakshmi/living-hall.jpg",
  "/images/portfolio/aiswarya/bedroom.jpg",
  "/images/portfolio/sreeLakshmi/cafe.jpg",
  "/images/portfolio/aiswarya/dinning.jpg",
  "/images/portfolio/sreeLakshmi/resort.jpg",
  "/images/portfolio/aiswarya/bookshelf.jpg",
  "/images/portfolio/sreeLakshmi/traditional-home.jpg",
  "/images/portfolio/aiswarya/bedroom03.jpg",
];

// Memoized trust signals component
const TrustSignals = memo(function TrustSignals() {
  const trustSignals = [
    { number: "99%", label: "Placement Rate" },
    { number: "2015", label: "Established" },
    { number: "500+", label: "Successful Students" },
    { number: "10+", label: "Industry Partners" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
      {trustSignals.map((signal, index) => (
        <motion.div
          key={signal.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative bg-[var(--navy-blue)] sm:bg-[var(--navy-blue)] backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border-2 border-white/60 sm:border-white/30 hover:bg-[var(--navy-blue)]/50 sm:hover:bg-[var(--navy-blue)]/30 transition-all duration-300 shadow-lg hover:shadow-xl"        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--red)]/30 to-[var(--green)]/30 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[var(--green)] drop-shadow-2xl">
              {signal.number}
            </div>
            <div className="text-xs sm:text-sm text-white font-bold leading-tight drop-shadow-2xl">
              {signal.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
});

// Memoized trust indicators component
const TrustIndicators = memo(function TrustIndicators() {
  const indicators = [
    "Industry Certified Faculty",
    "Hands-on Training",
    "Job Placement Support",
  ];

  return (
    <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-white font-bold">
      {indicators.map((indicator, index) => (
        <motion.div
          key={indicator}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="flex items-center gap-1 sm:gap-2 bg-white/40 sm:bg-white/20 backdrop-blur-md px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border-2 border-white/60 sm:border-white/30 hover:bg-white/50 sm:hover:bg-white/30 transition-all duration-300 shadow-lg"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--green)] flex-shrink-0 drop-shadow-2xl"
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
          <span className="whitespace-nowrap drop-shadow-2xl font-bold">
            {indicator}
          </span>
        </motion.div>
      ))}
    </div>
  );
});

// Slideshow component with parallax effect
const SlideshowBackground = memo(function SlideshowBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Auto-advance slideshow
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // Change image every 5 seconds

    // Parallax effect on scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentImage = slideshowImages[currentImageIndex] || slideshowImages[0];

  // Ensure currentImage is always defined
  if (!currentImage) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`, // Parallax effect
          }}
        >
          <Image
            src={currentImage}
            alt={`Interior design showcase ${currentImageIndex + 1}`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-blue)]/98 via-[var(--navy-blue)]/95 to-[var(--navy-blue)]/98" />

      {/* Additional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated Background Elements - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[var(--green)]/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--red)]/30 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[var(--light-blue)]/20 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
});

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center"
      style={{
        background:
          "linear-gradient(135deg, var(--navy-blue) 0%, var(--navy-blue) 30%, var(--green) 50%, var(--navy-blue) 70%, var(--navy-blue) 100%)",
      }}
      aria-label="Hero section with course information and call-to-action"
    >
      {/* Modern Slideshow Background with Parallax */}
      <SlideshowBackground />

      {/* Floating Decorative Elements - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-2 h-2 bg-[var(--green)] rounded-full animate-bounce"></div>
      <div
        className="hidden sm:block absolute top-40 right-20 w-3 h-3 bg-[var(--red)] rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="hidden sm:block absolute bottom-20 left-20 w-2 h-2 bg-[var(--light-blue)] rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="hidden sm:block absolute bottom-40 right-10 w-1 h-1 bg-[var(--green)] rounded-full animate-bounce"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Tagline */}
          <motion.header
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8 lg:mb-12"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Logo glow effect - Hidden on mobile for performance */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Image
                  src="/images/bridgen_logo_highres.png"
                  alt="Bridgen Training Institute Logo"
                  width={80}
                  height={80}
                  className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 drop-shadow-2xl rounded-full"
                  loading="eager"
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--light-blue)] text-center sm:text-left drop-shadow-2xl"
              >
                Bridge to Next Generation
              </motion.span>
            </div>
          </motion.header>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center sm:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight drop-shadow-2xl"
            >
              Start Your Creative Career in
              <span className="block text-[var(--green)] animate-pulse drop-shadow-2xl">
                Interior Design & Software Today!
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto sm:mx-0 mb-4 sm:mb-6 lg:mb-8 rounded-full shadow-2xl"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-bold mb-3 sm:mb-4 lg:mb-6 max-w-4xl lg:max-w-5xl mx-auto sm:mx-0 leading-relaxed drop-shadow-2xl"
            >
              Bridgen – North Malabar's Most Trusted Institute for Design &
              Drafting Courses
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-medium mb-4 sm:mb-6 lg:mb-8 max-w-4xl lg:max-w-5xl mx-auto sm:mx-0 leading-relaxed drop-shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 mb-2 sm:mb-3">
                <span className="text-[var(--green)] font-bold text-center sm:text-left">
                  Authorised Training Centre of Kerala State Rutronix
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
                <span>100% Placement Support</span>
                <span className="hidden sm:inline">•</span>
                <span>Online & Offline Classes</span>
              </div>
            </motion.div>

            {/* Trust Signals */}
            <TrustSignals />

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10"
            >
              <Link
                href="/courses"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--green)] hover:from-[var(--red)]/90 hover:to-[var(--green)]/90 text-white font-bold py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-10 rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base lg:text-lg"
              >
                <span className="relative z-10">Download Course Brochure</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {/* Enhanced glow effect - Hidden on mobile for performance */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[var(--red)] to-[var(--green)] rounded-lg sm:rounded-xl lg:rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/contact-bridgen"
                className="group relative inline-flex items-center justify-center bg-white/20 backdrop-blur-sm border-2 border-white hover:border-[var(--green)] hover:bg-white/30 text-white font-bold py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-10 rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Talk to a Counsellor</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>

              <Link
                href="/contact-bridgen"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--light-blue)] to-[var(--navy-blue)] hover:from-[var(--light-blue)]/90 hover:to-[var(--navy-blue)]/90 text-white font-bold py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-10 rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">
                  Apply for Scholarship Admission
                </span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <TrustIndicators />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile for better UX */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
