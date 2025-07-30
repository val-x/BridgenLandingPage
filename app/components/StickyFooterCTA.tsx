"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Download,
  MessageCircle,
  ArrowRight,
  X,
  Sparkles,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyFooterCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-hide after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.95 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="fixed bottom-0 left-0 right-0 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Sticky Footer Background */}
        <div className="relative overflow-hidden">
          {/* Solid navy-blue background for high contrast */}
          <div
            className="absolute inset-0 z-0"
            style={{ background: "var(--navy-blue)" }}
          />

          {/* Top border accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1 z-10"
            style={{
              background:
                "linear-gradient(90deg, var(--green) 0%, var(--light-blue) 50%, var(--red) 100%)",
            }}
          />

          {/* Optional: subtle top accent gradient for depth */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(76,201,240,0.05) 0%, transparent 100%)",
            }}
          />

          {/* Main content container */}
          <div className="relative z-20 bg-transparent px-4 py-4 sm:px-6 sm:py-5">
            {/* Floating sparkles */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-2 left-2 text-yellow-400 opacity-60"
            >
              <Sparkles size={16} />
            </motion.div>
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-4 right-12 text-blue-400 opacity-60"
            >
              <Star size={14} />
            </motion.div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
              {/* Main content */}
              <div className="text-center lg:text-left flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-white">
                    <span className="bg-gradient-to-r from-[var(--green)] via-[var(--light-blue)] to-[var(--red)] bg-clip-text text-transparent">
                      🚀 Start Your Design Career Today!
                    </span>
                  </h3>
                  <p className="text-white text-sm lg:text-base font-medium">
                    <span className="text-[var(--green)] font-semibold">
                      Government-Recognised Certificate
                    </span>{" "}
                    +{" "}
                    <span className="text-[var(--light-blue)] font-semibold">
                      100% Placement Support
                    </span>
                  </p>
                </motion.div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <Link
                    href="/courses"
                    className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--green)] hover:from-[var(--red)]/90 hover:to-[var(--green)]/90 text-white font-semibold py-2.5 px-4 sm:px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                  >
                    <Download className="w-4 h-4 mr-1.5 sm:mr-2" />
                    <span>Download Brochure</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <Link
                    href="/contact-bridgen"
                    className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--light-blue)] to-[var(--navy-blue)] hover:from-[var(--light-blue)]/90 hover:to-[var(--navy-blue)]/90 text-white font-semibold py-2.5 px-4 sm:px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-1.5 sm:mr-2" />
                    <span>WhatsApp Chat</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <Link
                    href="/contact-bridgen"
                    className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--green)] to-[var(--red)] hover:from-[var(--green)]/90 hover:to-[var(--red)]/90 text-white font-semibold py-2.5 px-5 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>

              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 p-2 text-white hover:text-[var(--red)] hover:bg-white/20 rounded-full transition-all duration-300"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Cookie/Data Collection Notice */}
            <div className="mt-3 pt-3 border-t border-white/20">
              <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs font-medium">
                <span role="img" aria-label="cookie">
                  🍪
                </span>
                <span className="text-white/80">
                  <span className="text-[var(--green)]">
                    We use cookies and similar technologies to enhance your
                    experience.
                  </span>{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-[var(--red)] text-[var(--light-blue)] transition-colors"
                  >
                    Learn more
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
