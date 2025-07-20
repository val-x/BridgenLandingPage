"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [screenSize, setScreenSize] = useState<string>("md");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Enhanced responsive detection with better tablet support
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 480) setScreenSize("xs");
      else if (width < 640) setScreenSize("sm");
      else if (width < 768) setScreenSize("md");
      else if (width < 1024) setScreenSize("lg");
      else setScreenSize("xl");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const isMobile = screenSize === "xs" || screenSize === "sm";
  const isTablet = screenSize === "md" || screenSize === "lg";
  const isDesktop = screenSize === "xl";

  useEffect(() => {
    // Check if the user has seen the popup before
    if (typeof window !== "undefined" && window.localStorage) {
      const hasSeenPopup = localStorage.getItem("hasSeenPopup");

      if (!hasSeenPopup) {
        // Show popup after appropriate delay based on device type
        setTimeout(
          () => {
            setIsOpen(true);
          },
          isMobile ? 2000 : isTablet ? 1500 : 1000
        );
        localStorage.setItem("hasSeenPopup", "true");
      }
    }
  }, [isMobile, isTablet]);

  // Auto-cycle through features (slower on mobile, disabled on very small screens)
  useEffect(() => {
    if (
      isOpen &&
      (!isMobile ||
        (typeof window !== "undefined" && window && window.innerWidth > 400))
    ) {
      const interval = setInterval(
        () => {
          setCurrentFeature((prev) => (prev + 1) % 4);
        },
        isMobile ? 4000 : isTablet ? 3500 : 3000
      ); // Slower on mobile, medium on tablet
      return () => clearInterval(interval);
    }
    return undefined; // Explicit return for when condition is not met
  }, [isOpen, isMobile, isTablet]);

  const closePopup = () => {
    setIsOpen(false);
    // Remove body scroll lock on mobile
    if (isMobile && typeof document !== "undefined" && document.body) {
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
    if (
      isOpen &&
      (isMobile || isTablet) &&
      typeof document !== "undefined" &&
      document.body
    ) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    }
    return () => {
      if (typeof document !== "undefined" && document.body) {
        document.body.style.overflow = "unset";
        document.body.style.position = "unset";
        document.body.style.width = "unset";
      }
    };
  }, [isOpen, isMobile, isTablet]);

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

  // Get current feature safely
  const currentFeatureData = features[currentFeature] ?? features[0]!;

  // Responsive particle count
  const getParticleCount = () => {
    switch (screenSize) {
      case "xs":
        return 6;
      case "sm":
        return 8;
      case "md":
        return 12;
      case "lg":
        return 15;
      case "xl":
        return 20;
      default:
        return 12;
    }
  };

  const particles = Array.from({ length: getParticleCount() }, (_, i) => i);

  const getWindowDimensions = () => {
    if (typeof window !== "undefined" && window) {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    return { width: 1000, height: 800 };
  };

  // Responsive sizing helpers
  const getModalSize = () => {
    switch (screenSize) {
      case "xs":
        return "max-w-[95vw] max-h-[98vh] rounded-xl";
      case "sm":
        return "max-w-sm max-h-[95vh] rounded-2xl";
      case "md":
        return "max-w-lg max-h-[90vh] rounded-2xl";
      case "lg":
        return "max-w-xl max-h-[85vh] rounded-3xl";
      case "xl":
        return "max-w-2xl max-h-[80vh] rounded-3xl";
      default:
        return "max-w-lg max-h-[85vh] rounded-3xl";
    }
  };

  const getPadding = () => {
    switch (screenSize) {
      case "xs":
        return "p-4";
      case "sm":
        return "p-5";
      case "md":
        return "p-6";
      case "lg":
        return "p-7";
      case "xl":
        return "p-8";
      default:
        return "p-6";
    }
  };

  const getLogoSize = () => {
    switch (screenSize) {
      case "xs":
        return { container: "w-12 h-12", image: 32 };
      case "sm":
        return { container: "w-14 h-14", image: 40 };
      case "md":
        return { container: "w-18 h-18", image: 56 };
      case "lg":
        return { container: "w-20 h-20", image: 64 };
      case "xl":
        return { container: "w-24 h-24", image: 72 };
      default:
        return { container: "w-16 h-16", image: 48 };
    }
  };

  const getTitleSize = () => {
    switch (screenSize) {
      case "xs":
        return "text-xl";
      case "sm":
        return "text-2xl";
      case "md":
        return "text-3xl";
      case "lg":
        return "text-3xl";
      case "xl":
        return "text-4xl";
      default:
        return "text-2xl";
    }
  };

  const getCarouselHeight = () => {
    switch (screenSize) {
      case "xs":
        return "h-20";
      case "sm":
        return "h-24";
      case "md":
        return "h-32";
      case "lg":
        return "h-36";
      case "xl":
        return "h-40";
      default:
        return "h-28";
    }
  };

  const getStatsGrid = () => {
    switch (screenSize) {
      case "xs":
        return "grid-cols-2 gap-2";
      case "sm":
        return "grid-cols-2 gap-3";
      case "md":
        return "grid-cols-4 gap-4";
      case "lg":
        return "grid-cols-4 gap-4";
      case "xl":
        return "grid-cols-4 gap-5";
      default:
        return "grid-cols-2 gap-4";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-[100] flex items-center justify-center ${
            screenSize === "xs"
              ? "px-2 py-2"
              : screenSize === "sm"
              ? "px-3 py-3"
              : screenSize === "md"
              ? "px-6 py-8"
              : "px-4 py-6"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(0,51,102,0.95) 0%, rgba(0,35,71,0.98) 100%)",
            paddingTop:
              isMobile || isTablet
                ? "env(safe-area-inset-top, 0.5rem)"
                : undefined,
            paddingBottom:
              isMobile || isTablet
                ? "env(safe-area-inset-bottom, 0.5rem)"
                : undefined,
          }}
        >
          {/* Optimized Background Particles - responsive count */}
          {screenSize !== "xs" && (
            <div className="absolute inset-0 overflow-hidden">
              {particles.map((particle) => (
                <motion.div
                  key={particle}
                  className={`absolute ${
                    screenSize === "xs"
                      ? "w-1 h-1"
                      : screenSize === "sm"
                      ? "w-1.5 h-1.5"
                      : "w-2 h-2"
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
                    duration:
                      screenSize === "xs" ? 5 : screenSize === "sm" ? 4 : 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          )}

          {/* Main Modal - Enhanced Responsive */}
          <motion.div
            initial={{
              scale: isMobile ? 0.9 : isTablet ? 0.8 : 0.5,
              y: isMobile ? 20 : isTablet ? 10 : 0,
              rotateY: isMobile ? 0 : isTablet ? -90 : -180,
              opacity: 0,
            }}
            animate={{ scale: 1, y: 0, rotateY: 0, opacity: 1 }}
            exit={{
              scale: isMobile ? 0.9 : isTablet ? 0.8 : 0.5,
              y: isMobile ? 20 : isTablet ? 10 : 0,
              rotateY: isMobile ? 0 : isTablet ? 90 : 180,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              damping: isMobile ? 25 : isTablet ? 22 : 20,
              stiffness: isMobile ? 300 : isTablet ? 250 : 200,
              duration: isMobile ? 0.5 : isTablet ? 0.6 : 0.8,
            }}
            className={`relative w-full overflow-hidden shadow-2xl ${getModalSize()}`}
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: isMobile
                ? "blur(15px)"
                : isTablet
                ? "blur(18px)"
                : "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Responsive Close Button */}
            <motion.button
              onClick={closePopup}
              className={`absolute top-2 right-2 z-10 flex items-center justify-center rounded-full text-gray-600 hover:text-white transition-all duration-300 touch-manipulation ${
                screenSize === "xs"
                  ? "h-10 w-10"
                  : screenSize === "sm"
                  ? "h-11 w-11"
                  : screenSize === "md"
                  ? "h-12 w-12"
                  : "h-10 w-10"
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
                className={`${
                  screenSize === "xs"
                    ? "h-5 w-5"
                    : screenSize === "sm"
                    ? "h-5 w-5"
                    : screenSize === "md"
                    ? "h-6 w-6"
                    : "h-5 w-5"
                }`}
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

            <div className={`relative ${getPadding()}`}>
              {/* Responsive Header */}
              <motion.div
                initial={{ y: isMobile ? -20 : -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-center mb-6"
              >
                <motion.div
                  className={`mx-auto mb-3 rounded-full p-2 shadow-lg overflow-hidden ${
                    getLogoSize().container
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
                    width={getLogoSize().image}
                    height={getLogoSize().image}
                    className="w-full h-full object-contain rounded-full"
                  />
                </motion.div>

                <motion.h1
                  className={`font-bold mb-2 ${getTitleSize()}`}
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
                    screenSize === "xs"
                      ? "text-xs"
                      : screenSize === "sm"
                      ? "text-sm"
                      : "text-sm"
                  }`}
                >
                  Kerala's #1 training institute
                </motion.p>
              </motion.div>

              {/* Responsive Feature Carousel with Touch Support */}
              <div
                ref={carouselRef}
                className={`relative mb-6 ${getCarouselHeight()}`}
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
                        currentFeatureData.bgColor
                      } ${
                        screenSize === "xs"
                          ? "p-3"
                          : screenSize === "sm"
                          ? "p-4"
                          : screenSize === "md"
                          ? "p-5"
                          : "p-6 rounded-2xl"
                      }`}
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
                            screenSize === "xs"
                              ? "text-xl"
                              : screenSize === "sm"
                              ? "text-2xl"
                              : screenSize === "md"
                              ? "text-3xl"
                              : "text-4xl mr-4"
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
                          {currentFeatureData.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h3
                            className={`font-bold mb-1 ${
                              currentFeatureData.textColor
                            } ${
                              screenSize === "xs"
                                ? "text-base"
                                : screenSize === "sm"
                                ? "text-lg"
                                : screenSize === "md"
                                ? "text-lg"
                                : "text-xl"
                            }`}
                          >
                            {currentFeatureData.title}
                          </h3>
                          <p
                            className={`text-gray-600 ${
                              screenSize === "xs"
                                ? "text-xs"
                                : screenSize === "sm"
                                ? "text-xs"
                                : "text-sm"
                            }`}
                          >
                            {currentFeatureData.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Responsive Feature Indicators */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 flex space-x-2 ${
                    screenSize === "xs"
                      ? "-bottom-3"
                      : screenSize === "sm"
                      ? "-bottom-4"
                      : screenSize === "md"
                      ? "-bottom-5"
                      : "-bottom-6"
                  }`}
                >
                  {features.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`rounded-full transition-all duration-300 touch-manipulation ${
                        index === currentFeature
                          ? `bg-blue-500 ${
                              screenSize === "xs"
                                ? "w-5 h-2"
                                : screenSize === "sm"
                                ? "w-6 h-2"
                                : screenSize === "md"
                                ? "w-8 h-3"
                                : "w-6 h-2"
                            }`
                          : `bg-gray-300 ${
                              screenSize === "xs"
                                ? "w-2 h-2"
                                : screenSize === "sm"
                                ? "w-3 h-2"
                                : screenSize === "md"
                                ? "w-4 h-3"
                                : "w-2 h-2"
                            }`
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

              {/* Responsive Stats Grid */}
              <motion.div
                initial={{ y: isMobile ? 20 : 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className={`grid ${getStatsGrid()} mb-6`}
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
                      screenSize === "xs"
                        ? "p-2"
                        : screenSize === "sm"
                        ? "p-3"
                        : screenSize === "md"
                        ? "p-3"
                        : "p-4 rounded-xl"
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
                    <div
                      className={`mb-1 ${
                        screenSize === "xs"
                          ? "text-base"
                          : screenSize === "sm"
                          ? "text-lg"
                          : screenSize === "md"
                          ? "text-lg"
                          : "text-xl"
                      }`}
                    >
                      {stat.icon}
                    </div>
                    <div
                      className={`font-bold text-blue-600 ${
                        screenSize === "xs"
                          ? "text-base"
                          : screenSize === "sm"
                          ? "text-lg"
                          : screenSize === "md"
                          ? "text-xl"
                          : "text-2xl"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`text-gray-600 ${
                        screenSize === "xs"
                          ? "text-xs"
                          : screenSize === "sm"
                          ? "text-xs"
                          : "text-xs"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Responsive CTA Buttons */}
              <motion.div
                initial={{ y: isMobile ? 20 : 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                className={`space-y-3 ${
                  screenSize === "xs"
                    ? "space-y-2"
                    : screenSize === "sm"
                    ? "space-y-2"
                    : "space-y-3"
                }`}
              >
                <motion.button
                  onClick={closePopup}
                  className={`w-full text-white font-bold relative overflow-hidden touch-manipulation ${
                    screenSize === "xs"
                      ? "py-2.5 px-3 text-sm rounded-lg"
                      : screenSize === "sm"
                      ? "py-3 px-4 text-base rounded-lg"
                      : screenSize === "md"
                      ? "py-3 px-5 text-base rounded-xl"
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
                    screenSize === "xs"
                      ? "py-2 px-3 text-xs rounded-lg"
                      : screenSize === "sm"
                      ? "py-2.5 px-4 text-sm rounded-lg"
                      : screenSize === "md"
                      ? "py-2.5 px-5 text-sm rounded-xl"
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
