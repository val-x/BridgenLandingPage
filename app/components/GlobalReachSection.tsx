"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const servingRegions = [
  {
    title: "Local Market",
    regions: ["Calicut, Kerala", "Across India"],
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "International Markets",
    regions: ["UAE", "Qatar", "UK", "USA"],
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const clientTypes = [
  {
    title: "Architects & Interior Designers",
    description: "Professional design studios and contractors",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Builders & Contractors",
    description: "Construction companies across Gulf and Europe",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Design Studios",
    description:
      "Remote delivery through email, cloud sharing, or BIM collaboration",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function GlobalReachSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/portfolio/sreeLakshmi/traditional-home.jpg"
          alt="Global reach background"
          fill
          className="object-cover object-center"
          quality={50}
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center"></div>
      </div>
      <div className="hidden sm:block absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-[var(--light-blue)]/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
      <div
        className="hidden sm:block absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-br from-[var(--green)]/15 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white text-lg font-bold mb-3 px-6 py-3 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-md">
            🌍 Serving Locally & Internationally
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] mb-6">
            Global Reach, Local Expertise
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide outsourcing support to professionals and businesses
            worldwide with remote delivery through email, cloud sharing, or BIM
            collaboration.
          </p>
        </motion.div>

        {/* Regional Coverage */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {servingRegions.map((region, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 border-white/20 hover:border-[var(--green)]/50 transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
              variants={fadeIn}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-blue)]/20 to-[var(--green)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10 flex items-center mb-6">
                <div className="bg-gradient-to-br from-[var(--green)] to-[var(--light-blue)] p-3 rounded-full mr-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white drop-shadow-2xl"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={region.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--navy-blue)] drop-shadow-lg">
                  {region.title}
                </h3>
              </div>
              <div className="relative z-10 space-y-2">
                {region.regions.map((location, idx) => (
                  <div key={idx} className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[var(--green)] mr-2 drop-shadow-lg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium drop-shadow-sm">
                      {location}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Types */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-105 text-center transform"
              variants={fadeIn}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--green)]/10 to-[var(--light-blue)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[var(--navy-blue)] to-[var(--green)] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-xl">
                  <svg
                    className="w-8 h-8 text-white drop-shadow-2xl"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={client.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-[var(--navy-blue)] mb-2 drop-shadow-lg">
                  {client.title}
                </h3>
                <p className="text-gray-600 text-sm font-medium drop-shadow-sm">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
