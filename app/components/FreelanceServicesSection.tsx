"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "2d-cad-drafting",
    title: "2D CAD Drafting",
    items: [
      "Floor plans, elevations, sections",
      "Electrical, plumbing, furniture layout drawings",
      "Construction detail drawings",
      "Architectural documentation",
    ],
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
    image: "/images/portfolio/aswathy2025/view001-5.png",
  },
  {
    id: "3d-modeling-rendering",
    title: "3D Modeling & Rendering",
    items: [
      "Photorealistic interior and exterior renders",
      "3D walkthroughs and animation",
      "SketchUp + V-Ray, 3ds Max, Lumion & more",
      "Conceptual and presentation-ready visuals",
    ],
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    image: "/images/portfolio/sreeLakshmi/dining.jpg",
  },
  {
    id: "interior-design-outsourcing",
    title: "Interior Design Outsourcing",
    items: [
      "Residential, commercial & hospitality design",
      "Mood boards, material boards & FF&E selection",
      "Complete drawing set for execution",
      "Custom design solutions as per region-specific styles",
    ],
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    image: "/images/portfolio/aiswarya/bedroom.jpg",
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

export default function FreelanceServicesSection() {
  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--navy-blue) 0%, var(--navy-blue)/90 50%, var(--green)/20 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[var(--green)]/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
      <div
        className="hidden sm:block absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[var(--red)]/20 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
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
            📐 Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] drop-shadow-2xl mb-6">
            Professional Design & Drafting Solutions
          </h2>
          <p className="text-lg text-[var(--navy-blue)] max-w-3xl mx-auto drop-shadow-2xl font-medium">
            From 2D technical drawings to photorealistic 3D renders, we deliver
            comprehensive design solutions that meet international standards and
            exceed client expectations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl border-2 border-white/20 hover:border-[var(--green)]/50 transform hover:scale-105"
              variants={fadeIn}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-blue)]/30 to-[var(--green)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} showcase`}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-blue)]/70 to-[var(--navy-blue)]/50 flex items-center justify-center z-10 group-hover:from-[var(--navy-blue)]/60 group-hover:to-[var(--green)]/40 transition-all duration-500">
                  <svg
                    className="w-16 h-16 text-white drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={service.icon}
                    />
                  </svg>
                </div>
              </div>

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-[var(--navy-blue)] drop-shadow-2xl mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[var(--green)] mr-3 mt-1 flex-shrink-0 drop-shadow-2xl"
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
                      <span className="text-[var(--navy-blue)] font-medium drop-shadow-2xl">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 px-6 pb-6">
                <Link
                  href="/contact-bridgen"
                  className="group inline-flex items-center bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Get a Quote</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
