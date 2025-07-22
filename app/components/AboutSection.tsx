"use client";

import Image from "next/image";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy load the heavy Boxes component
const BoxesBackground = dynamic(
  () => import("./ui/background-boxes").then((mod) => ({ default: mod.Boxes })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
    ),
  }
);

// Server-side stats data
const aboutStats = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" fill="none" />
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "10+ Years Experience",
    description:
      "Legacy of trusted training, evolved into an independent institute",
    color: "var(--red)",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "99% Placement Record",
    description: "Career opportunities across India and the Middle East",
    color: "var(--green)",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "International Standards",
    description:
      "Curriculum aligned with Gulf and global industry expectations",
    color: "var(--light-blue)",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    title: "Small Batch Training",
    description: "Personalized attention through limited batch sizes",
    color: "var(--navy-blue)",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-100 to-transparent rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--navy-blue)] to-[var(--light-blue)] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            About Our Institute
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[var(--navy-blue)] via-[var(--light-blue)] to-[var(--red)] bg-clip-text text-transparent">
              About Bridgen
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--light-blue)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[var(--red)] to-[var(--light-blue)] rounded-lg opacity-20"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--navy-blue)] leading-tight">
                Bridgen –
                <span className="block bg-gradient-to-r from-[var(--red)] to-[var(--light-blue)] bg-clip-text text-transparent">
                  Bridge to Next Generation
                </span>
              </h3>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-700 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm"
              >
                Bridgen is a premier training institute in Kerala, empowering
                the next generation of interior designers, CAD experts, and
                visualization professionals. Founded in 2015, we began our
                journey as DreamZone Calicut, where we built a legacy of
                excellence over 10 years as a franchise.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-700 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm"
              >
                Today, we have evolved into Bridgen, an independent brand
                dedicated to delivering international-standard training that
                prepares students for global careers. Over the past decade,
                we've earned a strong reputation for high-quality, job-oriented
                education and have proudly achieved a 99% placement record —
                both in India and across the Middle East.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12"
            >
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      {stat.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[var(--navy-blue)] transition-colors duration-300">
                      {stat.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--light-blue)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative mb-8"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
                <Image
                  src="/images/bridgen_logo_highres.png"
                  alt="Bridgen Logo"
                  fill
                  className="object-contain drop-shadow-2xl rounded-full"
                  priority
                />
                {/* Glow effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[var(--light-blue)] to-[var(--red)] rounded-full blur-3xl opacity-20 animate-pulse"></div> */}
              </div>
            </motion.div>

            {/* Portfolio Images Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-sm sm:max-w-md mx-auto"
            >
              {/* Student Portfolio Images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative w-full h-32 sm:h-40 md:h-48">
                  <Image
                    src="/images/portfolio/aiswarya/bedroom.jpg"
                    alt="Student Portfolio - Bedroom Design"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Bedroom Design
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative w-full h-32 sm:h-40 md:h-48">
                  <Image
                    src="/images/portfolio/sreeLakshmi/living-hall.jpg"
                    alt="Student Portfolio - Living Hall Design"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Living Hall
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative w-full h-32 sm:h-40 md:h-48">
                  <Image
                    src="/images/portfolio/aswathy2025/coffe-shope-223.jpg"
                    alt="Student Portfolio - Coffee Shop Design"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Coffee Shop
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative w-full h-32 sm:h-40 md:h-48">
                  <Image
                    src="/images/portfolio/muhammadShamil/bedroom-camara-1.jpg"
                    alt="Student Portfolio - Bedroom Interior"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Bedroom Interior
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-gradient-to-br from-[var(--red)] to-[var(--light-blue)] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-gradient-to-br from-[var(--light-blue)] to-[var(--navy-blue)] rounded-full opacity-20 blur-xl"></div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 bg-white/90 backdrop-blur-sm p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--navy-blue)]">
                  500+
                </div>
                <div className="text-xs text-gray-600">Students Trained</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-white/90 backdrop-blur-sm p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--red)]">
                  99%
                </div>
                <div className="text-xs text-gray-600">Placement Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
