"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, MessageCircle, ArrowRight, X } from "lucide-react";
import { useState } from "react";

export default function StickyFooterCTA() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-[var(--green)]/20 shadow-2xl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Main CTA */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] bg-clip-text text-transparent">
              Start Your Design Career Now
            </h3>
            <p className="text-sm text-gray-600">
              With Government-Recognised Certificate + Full Placement Support
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/courses"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--green)] hover:from-[var(--red)]/90 hover:to-[var(--green)]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              <span>Download Brochure</span>
            </Link>

            <Link
              href="/contact-bridgen"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-[var(--light-blue)] to-[var(--navy-blue)] hover:from-[var(--light-blue)]/90 hover:to-[var(--navy-blue)]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Talk on WhatsApp</span>
            </Link>

            <Link
              href="/contact-bridgen"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-[var(--green)] to-[var(--red)] hover:from-[var(--green)]/90 hover:to-[var(--red)]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
