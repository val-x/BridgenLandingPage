"use client";

import Image from "next/image";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Clock,
  Award,
  Globe,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  Zap,
} from "react-feather";

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

// Modern stats data with brand consistency
const aboutStats = [
  {
    icon: Clock,
    iconBg: "from-[var(--red)] via-red-400 to-pink-500",
    bgPattern: "from-red-50 via-pink-50 to-red-100",
    borderColor: "border-red-200/50",
    shadowColor: "shadow-red-500/20",
    glowColor: "shadow-red-400/30",
    accentColor: "text-[var(--red)]",
    title: "10+ Years Experience",
    description:
      "Legacy of trusted training, evolved into an independent institute",
    highlight: "10+",
    metric: "Years",
    animation: "animate-pulse",
  },
  {
    icon: Award,
    iconBg: "from-emerald-500 via-green-400 to-teal-500",
    bgPattern: "from-emerald-50 via-green-50 to-teal-100",
    borderColor: "border-emerald-200/50",
    shadowColor: "shadow-emerald-500/20",
    glowColor: "shadow-emerald-400/30",
    accentColor: "text-emerald-600",
    title: "99% Placement Record",
    description: "Career opportunities across India and the Middle East",
    highlight: "99%",
    metric: "Placed",
    animation: "animate-bounce",
  },
  {
    icon: Globe,
    iconBg: "from-[var(--light-blue)] via-blue-400 to-cyan-500",
    bgPattern: "from-blue-50 via-cyan-50 to-sky-100",
    borderColor: "border-blue-200/50",
    shadowColor: "shadow-blue-500/20",
    glowColor: "shadow-blue-400/30",
    accentColor: "text-[var(--light-blue)]",
    title: "International Standards",
    description:
      "Curriculum aligned with Gulf and global industry expectations",
    highlight: "Global",
    metric: "Standard",
    animation: "animate-spin",
  },
  {
    icon: Users,
    iconBg: "from-[var(--navy-blue)] via-indigo-500 to-purple-500",
    bgPattern: "from-indigo-50 via-purple-50 to-blue-100",
    borderColor: "border-indigo-200/50",
    shadowColor: "shadow-indigo-500/20",
    glowColor: "shadow-indigo-400/30",
    accentColor: "text-[var(--navy-blue)]",
    title: "Small Batch Training",
    description: "Personalized attention through limited batch sizes",
    highlight: "Small",
    metric: "Batches",
    animation: "animate-pulse",
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

            {/* Modern Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12"
            >
              {aboutStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.15,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.08,
                      rotateY: 5,
                      transition: { duration: 0.3, type: "spring" },
                    }}
                    className={`group relative bg-gradient-to-br ${stat.bgPattern} p-8 rounded-3xl border-2 ${stat.borderColor} ${stat.shadowColor} shadow-xl hover:${stat.glowColor} hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm`}
                    style={{
                      background: `linear-gradient(135deg, ${stat.bgPattern})`,
                    }}
                  >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(120,_119,_198,_0.3)_0%,_transparent_50%)]"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(255,_119,_198,_0.3)_0%,_transparent_50%)]"></div>
                    </div>

                    {/* Floating Icon Container */}
                    <div className="relative z-10 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6, type: "spring" }}
                          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.iconBg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          {/* Icon Glow Effect */}
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.iconBg} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                          ></div>

                          <IconComponent
                            size={28}
                            className="text-white relative z-10 drop-shadow-lg"
                            strokeWidth={2.5}
                          />

                          {/* Animated Ring */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
                        </motion.div>

                        {/* Highlight Metric */}
                        <div className="text-right">
                          <motion.div
                            className={`text-3xl font-black ${stat.accentColor} mb-1 leading-none`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.8 + index * 0.1,
                            }}
                          >
                            {stat.highlight}
                          </motion.div>
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {stat.metric}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                      <h4
                        className={`text-xl font-bold ${stat.accentColor} group-hover:text-gray-800 transition-colors duration-300 leading-tight`}
                      >
                        {stat.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                        {stat.description}
                      </p>
                    </div>

                    {/* Animated Border */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.iconBg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Bottom Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.iconBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}
                    ></div>

                    {/* Corner Decorations */}
                    <div
                      className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${stat.iconBg} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                    <div
                      className={`absolute bottom-4 left-4 w-1 h-1 rounded-full bg-gradient-to-r ${stat.iconBg} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                  </motion.div>
                );
              })}
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
