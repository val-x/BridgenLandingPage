"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  GraduationCap,
  Building2,
  UserCheck,
  Briefcase,
} from "lucide-react";

const eligibilityCriteria = [
  {
    text: "SSLC or Plus Two Pass",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    text: "Polytechnic / ITI / Degree Holders",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    text: "Housewives or Career Returnees",
    icon: <UserCheck className="w-8 h-8" />,
  },
  {
    text: "Working Professionals Seeking Skill Upgrade",
    icon: <Briefcase className="w-8 h-8" />,
  },
];

export default function WhoCanJoinSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--navy-blue)]/5 via-white to-[var(--green)]/5">
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
              Who Can Join?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Our programs are designed to be inclusive and accessible to
            individuals from diverse educational and professional backgrounds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {eligibilityCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--green)]/10 to-[var(--red)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-[var(--green)] mb-4">{criteria.icon}</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-[var(--green)] flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-[var(--navy-blue)] transition-colors duration-300">
                    {criteria.text}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--green)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-[var(--green)]/10 to-[var(--light-blue)]/10 rounded-2xl p-6 border-2 border-[var(--green)]/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] bg-clip-text text-transparent mb-4">
              No Prior Design Experience Required!
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our comprehensive curriculum starts from the basics and progresses
              to advanced concepts. Whether you're a complete beginner or
              looking to upgrade your skills, our expert faculty will guide you
              through every step of your learning journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
