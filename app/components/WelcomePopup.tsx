"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || "ontouchstart" in window;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Check if the user has seen the popup before
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // Show popup after longer delay on mobile for better UX
      setTimeout(
        () => {
          setIsOpen(true);
        },
        isMobile ? 2000 : 1000
      );
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, [isMobile]);

  // Auto-cycle through features (slower on mobile, disabled on very small screens)
  useEffect(() => {
    if (
      isOpen &&
      (!isMobile || (typeof window !== "undefined" && window.innerWidth > 400))
    ) {
      const interval = setInterval(
        () => {
          setCurrentFeature((prev) => (prev + 1) % 4);
        },
        isMobile ? 4000 : 3000
      ); // Slower on mobile
      return () => clearInterval(interval);
    }
  }, [isOpen, isMobile]);

  const closePopup = () => {
    setIsOpen(false);
    // Remove body scroll lock on mobile
    if (isMobile) {
      document.body.style.overflow = "unset";
    }
  };

  // Touch gesture handling for feature carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0]?.clientX || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0]?.clientX || 0);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentFeature((prev) => (prev + 1) % 4);
    } else if (isRightSwipe) {
      setCurrentFeature((prev) => (prev === 0 ? 3 : prev - 1));
    }
  };

  // Prevent body scroll on mobile when popup is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    };
  }, [isOpen, isMobile]);

  const features = [
    {
      icon: "🎯",
      title: "99% Placement Rate",
      description: "Students find jobs quickly after training",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      icon: "💼",
      title: "Job-Oriented Training",
      description: "Skills that employers actually need",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: "⭐",
      title: "10+ Years Experience",
      description: "Expert instructors with industry knowledge",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: "🌍",
      title: "Global Placement",
      description: "100% support in Gulf & India",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  // Reduced particle count for mobile performance
  const particles = Array.from({ length: isMobile ? 8 : 15 }, (_, i) => i);

  const getWindowDimensions = () => {
    if (typeof window !== "undefined") {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    return { width: 1000, height: 800 };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-[100] flex items-center justify-center ${
            isMobile ? "px-3 py-4" : "px-4 py-6"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(0,51,102,0.95) 0%, rgba(0,35,71,0.98) 100%)",
            paddingTop: isMobile ? "env(safe-area-inset-top, 1rem)" : undefined,
            paddingBottom: isMobile
              ? "env(safe-area-inset-bottom, 1rem)"
              : undefined,
          }}
        >
          {/* Optimized Background Particles - fewer on mobile */}
          {!isMobile ||
          (typeof window !== "undefined" && window.innerWidth > 400) ? (
            <div className="absolute inset-0 overflow-hidden">
              {particles.map((particle) => (
                <motion.div
                  key={particle}
                  className={`absolute ${
                    isMobile ? "w-1 h-1" : "w-2 h-2"
                  } bg-white/20 rounded-full`}
                  initial={{
                    x: Math.random() * getWindowDimensions().width,
                    y: Math.random() * getWindowDimensions().height,
                    scale: 0,
                  }}
                  animate={{
                    y: [null, -50, -100],
                    scale: [0, 1, 0],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: isMobile ? 4 : 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          ) : null}

          {/* Main Modal - Mobile Optimized */}
          <motion.div
            initial={{
              scale: isMobile ? 0.9 : 0.5,
              y: isMobile ? 20 : 0,
              rotateY: isMobile ? 0 : -180,
              opacity: 0,
            }}
            animate={{ scale: 1, y: 0, rotateY: 0, opacity: 1 }}
            exit={{
              scale: isMobile ? 0.9 : 0.5,
              y: isMobile ? 20 : 0,
              rotateY: isMobile ? 0 : 180,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              damping: isMobile ? 25 : 20,
              stiffness: isMobile ? 300 : 200,
              duration: isMobile ? 0.5 : 0.8,
            }}
            className={`relative w-full overflow-hidden shadow-2xl ${
              isMobile
                ? "max-w-sm rounded-2xl max-h-[95vh]"
                : "max-w-lg rounded-3xl max-h-[85vh]"
            }`}
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: isMobile ? "blur(15px)" : "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Mobile-Optimized Close Button */}
            <motion.button
              onClick={closePopup}
              className={`absolute top-3 right-3 z-10 flex items-center justify-center rounded-full text-gray-600 hover:text-white transition-all duration-300 touch-manipulation ${
                isMobile ? "h-12 w-12" : "h-10 w-10"
              }`}
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{
                scale: isMobile ? 1.05 : 1.1,
                background: "linear-gradient(135deg, #ef4444, #f97316)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close popup"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${isMobile ? "h-6 w-6" : "h-5 w-5"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                whileHover={{ rotate: isMobile ? 90 : 180 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            </motion.button>

            {/* Simplified background for mobile */}
            {!isMobile && (
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    "linear-gradient(45deg, #ef4444, #f97316)",
                    "linear-gradient(45deg, #10b981, #06b6d4)",
                    "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                    "linear-gradient(45deg, #8b5cf6, #ef4444)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            <div className={`relative ${isMobile ? "p-5" : "p-8"}`}>
              {/* Mobile-Optimized Header */}
              <motion.div
                initial={{ y: isMobile ? -20 : -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-center mb-6"
              >
                <motion.div
                  className={`mx-auto mb-3 rounded-full p-2 shadow-lg ${
                    isMobile ? "w-16 h-16" : "w-20 h-20 p-3"
                  }`}
                  style={{
                    background: "linear-gradient(135deg, #003366, #4cc9f0)",
                  }}
                  whileHover={{
                    scale: isMobile ? 1.05 : 1.1,
                    rotate: isMobile ? 180 : 360,
                  }}
                  transition={{ duration: isMobile ? 0.5 : 0.8 }}
                >
                  <Image
                    src="/images/bridgen_logo_highres.png"
                    alt="Bridgen Logo"
                    width={isMobile ? 48 : 60}
                    height={isMobile ? 48 : 60}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </motion.div>

                <motion.h1
                  className={`font-bold mb-2 ${
                    isMobile ? "text-2xl" : "text-3xl"
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, #003366, #4cc9f0, #e63946)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% 200%",
                  }}
                  animate={
                    !isMobile
                      ? {
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }
                      : {}
                  }
                  transition={
                    !isMobile
                      ? {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {}
                  }
                >
                  Welcome to Bridgen!
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`text-gray-600 ${
                    isMobile ? "text-xs" : "text-sm"
                  }`}
                >
                  Kerala's #1 training institute
                </motion.p>
              </motion.div>

              {/* Mobile-Optimized Feature Carousel with Touch Support */}
              <div
                ref={carouselRef}
                className={`relative mb-6 ${isMobile ? "h-24" : "h-32"}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature}
                    initial={{
                      x: isMobile ? 50 : 100,
                      opacity: 0,
                      rotateY: isMobile ? 0 : 90,
                    }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    exit={{
                      x: isMobile ? -50 : -100,
                      opacity: 0,
                      rotateY: isMobile ? 0 : -90,
                    }}
                    transition={{
                      duration: isMobile ? 0.3 : 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      className={`rounded-xl h-full ${
                        features[currentFeature].bgColor
                      } ${isMobile ? "p-4" : "p-6 rounded-2xl"}`}
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))`,
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                      whileHover={!isMobile ? { scale: 1.02 } : {}}
                    >
                      <div className="flex items-center h-full">
                        <motion.div
                          className={`mr-3 ${
                            isMobile ? "text-2xl" : "text-4xl mr-4"
                          }`}
                          animate={
                            !isMobile
                              ? {
                                  rotate: [0, 10, -10, 0],
                                  scale: [1, 1.1, 1],
                                }
                              : {}
                          }
                          transition={
                            !isMobile
                              ? {
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }
                              : {}
                          }
                        >
                          {features[currentFeature].icon}
                        </motion.div>
                        <div className="flex-1">
                          <h3
                            className={`font-bold mb-1 ${
                              features[currentFeature].textColor
                            } ${isMobile ? "text-lg" : "text-xl"}`}
                          >
                            {features[currentFeature].title}
                          </h3>
                          <p
                            className={`text-gray-600 ${
                              isMobile ? "text-xs" : "text-sm"
                            }`}
                          >
                            {features[currentFeature].description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Mobile-Friendly Feature Indicators */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 flex space-x-2 ${
                    isMobile ? "-bottom-4" : "-bottom-6"
                  }`}
                >
                  {features.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`rounded-full transition-all duration-300 touch-manipulation ${
                        index === currentFeature
                          ? `bg-blue-500 ${isMobile ? "w-6 h-3" : "w-6 h-2"}`
                          : `bg-gray-300 ${isMobile ? "w-3 h-3" : "w-2 h-2"}`
                      }`}
                      onClick={() => setCurrentFeature(index)}
                      whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                {/* Mobile swipe hint */}
                {isMobile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: 2 }}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 text-xs"
                  >
                    👈 Swipe
                  </motion.div>
                )}
              </div>

              {/* Mobile-Optimized Stats Grid */}
              <motion.div
                initial={{ y: isMobile ? 20 : 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className={`grid grid-cols-2 gap-3 mb-6 ${
                  isMobile ? "gap-2 mb-5" : "gap-4 mb-8"
                }`}
              >
                {[
                  { number: "500+", label: "Students", icon: "👥" },
                  { number: "99%", label: "Placement", icon: "🎯" },
                  { number: "50+", label: "Companies", icon: "🏢" },
                  { number: "10+", label: "Years", icon: "⭐" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`text-center rounded-lg ${
                      isMobile ? "p-3" : "p-4 rounded-xl"
                    }`}
                    style={{
                      background: "rgba(255, 255, 255, 0.4)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                    whileHover={
                      !isMobile
                        ? {
                            scale: 1.05,
                            background: "rgba(255, 255, 255, 0.6)",
                          }
                        : {}
                    }
                    whileTap={{ scale: 0.98 }}
                    initial={{ scale: 0, rotate: isMobile ? 0 : -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className={`mb-1 ${isMobile ? "text-lg" : "text-xl"}`}>
                      {stat.icon}
                    </div>
                    <div
                      className={`font-bold text-blue-600 ${
                        isMobile ? "text-lg" : "text-2xl"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`text-gray-600 ${
                        isMobile ? "text-xs" : "text-xs"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile-Optimized CTA Buttons */}
              <motion.div
                initial={{ y: isMobile ? 20 : 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                className={`space-y-3 ${isMobile ? "space-y-2" : "space-y-3"}`}
              >
                <motion.button
                  onClick={closePopup}
                  className={`w-full text-white font-bold relative overflow-hidden touch-manipulation ${
                    isMobile
                      ? "py-3 px-4 text-base rounded-lg"
                      : "py-4 px-6 text-lg rounded-xl"
                  }`}
                  style={{
                    background: "linear-gradient(135deg, #003366, #4cc9f0)",
                  }}
                  whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="relative z-10"
                    animate={
                      !isMobile
                        ? {
                            textShadow: [
                              "0 0 0px rgba(255,255,255,0)",
                              "0 0 10px rgba(255,255,255,0.3)",
                              "0 0 0px rgba(255,255,255,0)",
                            ],
                          }
                        : {}
                    }
                    transition={
                      !isMobile
                        ? {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                        : {}
                    }
                  >
                    🚀 Start Your Journey Today
                  </motion.span>
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.button>

                <motion.button
                  onClick={closePopup}
                  className={`w-full font-medium text-gray-600 border border-gray-300 touch-manipulation ${
                    isMobile
                      ? "py-2.5 px-4 text-sm rounded-lg"
                      : "py-3 px-6 rounded-xl"
                  }`}
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                  }}
                  whileHover={{
                    scale: isMobile ? 1.01 : 1.02,
                    background: "rgba(255, 255, 255, 0.9)",
                    borderColor: "#4cc9f0",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Maybe Later
                </motion.button>
              </motion.div>
            </div>

            {/* Simplified decorative elements for mobile */}
            {!isMobile && (
              <>
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 opacity-10"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl" />
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 w-20 h-20 opacity-10"
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-red-400 to-yellow-400 rounded-full blur-xl" />
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
