"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Building2,
  Palette,
  Monitor,
  HardHat,
  Zap,
  Users,
  Gift,
} from "lucide-react";

const whyChoosePoints = [
  {
    text: "Authorised Training Centre of Kerala State Rutronix",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    text: "Industry-Based Interior Design Diploma Courses",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    text: "Certified Software Training: AutoCAD, SketchUp, V-Ray, Photoshop & more",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    text: "Real Project Training + On-site Visits",
    icon: <HardHat className="w-8 h-8" />,
  },
  {
    text: "Job-Ready Skills in 6–12 Months",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    text: "100% Placement Support (India & Gulf)",
    icon: <Users className="w-8 h-8" />,
  },
  {
    text: "Trusted by 1000+ Students Since 2015",
    icon: <Users className="w-8 h-8" />,
  },
  {
    text: "Scholarship Worth ₹50,000 for Early Enrollees",
    icon: <Gift className="w-8 h-8" />,
  },
];

export default function WhyChooseBridgenSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[var(--navy-blue)] via-[var(--green)] to-[var(--red)] bg-clip-text text-transparent">
              Why Choose Bridgen?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {whyChoosePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--green)]/5 to-[var(--red)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 text-[var(--green)]">
                  {point.icon}
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--green)] flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-[var(--navy-blue)] transition-colors duration-300">
                    {point.text}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--green)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Rutronix Certification Advantage Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[var(--navy-blue)]/10 to-[var(--green)]/10 rounded-2xl p-8 border-2 border-[var(--navy-blue)]/20">
            <div className="text-center mb-6">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] bg-clip-text text-transparent mb-4">
                Rutronix Certification Advantage
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto rounded-full"></div>
            </div>

            <div className="text-center">
              <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                "Get Certified by Kerala State Rutronix – a Government
                initiative for quality technical education. Gain official
                recognition and credibility for your skills. This certificate
                adds value to your resume for both Indian and Gulf placements."
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--green)] rounded-full"></span>
                  Government Recognized
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--green)] rounded-full"></span>
                  Industry Validated
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--green)] rounded-full"></span>
                  Gulf Placement Ready
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
