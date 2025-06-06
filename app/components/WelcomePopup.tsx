"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has seen the popup before
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // If not, show the popup
      setIsOpen(true);
      // Set the flag in localStorage so it doesn't show on future visits
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-100 shadow-2xl max-h-[90vh] md:max-h-[80vh] border border-gray-200"
          >
            {/* Top colorful accent bar */}
            <div className="flex h-2">
              <div className="w-1/4 bg-[#003366]"></div> {/* Navy blue */}
              <div className="w-1/4 bg-[#e63946]"></div> {/* Red */}
              <div className="w-1/4 bg-[#2a9d8f]"></div> {/* Green */}
              <div className="w-1/4 bg-[#4cc9f0]"></div> {/* Light blue */}
            </div>

            <button
              onClick={closePopup}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 hover:bg-[#003366] hover:text-white transition-colors duration-200 shadow-md"
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-6 md:p-8">
              <div className="mb-6 flex items-center justify-center md:justify-start">
                <div className="mr-4 rounded-full bg-white p-2 shadow-md">
                  <Image
                    src="/images/bridgen_logo_highres.png"
                    alt="Bridgen Logo"
                    width={50}
                    height={50}
                    className="h-auto w-auto"
                  />
                </div>
                <h2 className="bg-gradient-to-r from-[#003366] to-[#4cc9f0] bg-clip-text text-2xl font-bold text-transparent">
                  Why Choose Bridgen?
                </h2>
              </div>

              <div className="space-y-5">
                {/* Feature 1 */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="group flex items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#003366] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e63946]/10 text-[#e63946] shadow group-hover:bg-[#e63946] group-hover:text-white transition-colors duration-200">
                    <span className="font-bold">99%</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">
                      99% Placement Rate
                    </h3>
                    <p className="text-sm text-gray-600">
                      Our students find jobs quickly after training
                    </p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="group flex items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#003366] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a9d8f]/10 text-[#2a9d8f] shadow group-hover:bg-[#2a9d8f] group-hover:text-white transition-colors duration-200">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">
                      Job-Oriented Training
                    </h3>
                    <p className="text-sm text-gray-600">
                      Focused on skills that employers need
                    </p>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="group flex items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#003366] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4cc9f0]/10 text-[#4cc9f0] shadow group-hover:bg-[#4cc9f0] group-hover:text-white transition-colors duration-200">
                    <span className="font-bold">10+</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">
                      10+ Years of Expertise
                    </h3>
                    <p className="text-sm text-gray-600">
                      Experienced instructors with industry knowledge
                    </p>
                  </div>
                </motion.div>

                {/* Feature 4 */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="group flex items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#003366] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#003366]/10 text-[#003366] shadow group-hover:bg-[#003366] group-hover:text-white transition-colors duration-200">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">
                      100% Placement Support
                    </h3>
                    <p className="text-sm text-gray-600">In Gulf and India</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <button
                  onClick={closePopup}
                  className="group relative w-full overflow-hidden rounded-lg bg-[#003366] py-3 px-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#002347]"
                >
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-[#e63946] to-[#4cc9f0] transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
