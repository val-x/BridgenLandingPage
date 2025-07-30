"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FreelanceAboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/portfolio/sreeLakshmi/home.jpg"
          alt="About background"
          fill
          className="object-cover object-center"
          quality={50}
        />
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white text-lg font-bold mb-3 px-6 py-3 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-md">
              Interior Design & Drafting Services – Bridgen
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] mb-6">
              Welcome to Bridgen's Project Works Division
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Your one-stop destination for professional 2D drafting, 3D
              visualization, and interior design outsourcing. With over a decade
              of industry experience, we deliver quality-driven CAD drawings, 3D
              renders, and complete design documentation for clients across
              India and international markets in the UAE, Qatar, UK, and USA.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "4", label: "Countries Served" },
              { number: "500+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[var(--navy-blue)] backdrop-blur-md rounded-xl p-6 border-2 border-white/30 hover:bg-[var(--navy-blue)]/80 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--red)]/30 to-[var(--green)]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-[var(--green)] drop-shadow-2xl mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold text-white leading-tight drop-shadow-2xl">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
