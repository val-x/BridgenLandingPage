"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "service1",
    title: "2D CAD Drafting",
    items: [
      "Floor Plans, Elevations, Sections",
      "Working Drawings & Detailed Construction Drawings",
      "Interior Joinery & Custom Furniture Drawings",
      "Renovation / As-Built Drawings",
    ],
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
    image: "/images/cad-drafting.jpg",
  },
  {
    id: "service2",
    title: "3D Modeling & Rendering",
    items: [
      "Photorealistic Interior & Exterior Views",
      "Product & Furniture Visualization",
      "Material, Lighting & Texture Realism",
      "Real-Time Client Revisions",
    ],
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    image: "/images/3d-rendering.jpg",
  },
  {
    id: "service3",
    title: "Architectural Presentation Boards",
    items: [
      "Concept Boards, Mood Boards",
      "Color Plans, Annotated Diagrams, Layouts",
      "Marketing-Ready Visuals for Brochures or Social Media",
    ],
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    image: "/images/presentation-boards.jpg",
  },
];

const clients = [
  {
    title: "Architects & Designers",
    description: "Needing technical support and detailed drawings",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Contractors",
    description: "Requiring fast & clear construction documentation",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Real Estate Companies",
    description: "For pre-sale visuals and marketing materials",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
  },
  {
    title: "Students & Professionals",
    description: "Needing portfolio support and learning resources",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Design Studios",
    description: "Requiring white-labeled drafting services",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

const benefits = [
  {
    title: "10+ Years Experience",
    description: "Industry expertise across multiple design disciplines",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery with affordable rates",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Global Experience",
    description: "India & Gulf market expertise with international clients",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Flexible Collaboration",
    description: "One-time projects or long-term partnerships",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Multiple Delivery Options",
    description: "Email, Drive, WhatsApp, or project management platforms",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  },
];

const contactInfo = [
  {
    title: "Email",
    value: "bridgentraining@gmail.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Phone",
    value: "+91 9061002200",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    title: "Website",
    value: "www.bridgentraining.com",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Location",
    value: "Available Worldwide | Remote Delivery",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

// Animation variants
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

export default function FreelanceServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-[var(--navy-blue)] via-[#1a365d] to-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Freelance CAD Drafting &
              <span className="text-[var(--green)] block md:inline">
                {" "}
                3D Visualization
              </span>
            </h1>

            <div className="w-24 h-1 bg-[var(--green)] mx-auto mb-8"></div>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transforming Ideas into Detailed Drawings & Realistic Visuals with
              Precision and Quality
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact-bridgen"
                className="inline-flex items-center justify-center bg-[var(--red)] hover:bg-red-600 text-white font-medium py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2"
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
              <Link
                href="#services"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:border-[var(--green)] text-white font-medium py-4 px-8 rounded-lg transition-all"
              >
                Explore Services
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave SVG Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="fill-gray-50"
          >
            <path d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,48C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-xl text-gray-700 mb-10 leading-relaxed text-center md:text-left">
              At Bridgen, we offer expert-level freelance CAD drafting and 3D
              visualization services for architects, interior designers,
              builders, and real estate developers — across India and globally.
              Whether you're looking to outsource technical drawings or need
              compelling 3D renders for your presentations or clients, we ensure
              speed, precision, and quality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="text-[var(--navy-blue)] text-5xl font-bold mb-4">
                  10+
                </div>
                <div className="text-lg font-medium text-gray-700">
                  Years Experience
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="text-[var(--navy-blue)] text-5xl font-bold mb-4">
                  200+
                </div>
                <div className="text-lg font-medium text-gray-700">
                  Completed Projects
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="text-[var(--navy-blue)] text-5xl font-bold mb-4">
                  50+
                </div>
                <div className="text-lg font-medium text-gray-700">
                  Recurring Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Modern Cards */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-block text-[var(--green)] text-lg font-semibold mb-3 bg-green-50 px-4 py-2 rounded-full">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] mb-6">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer comprehensive design and visualization services that
              bring your ideas to life with precision and creativity.
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
                className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100"
                variants={fadeIn}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--navy-blue)] bg-opacity-60 flex items-center justify-center z-10 group-hover:bg-opacity-40 transition-all">
                    <svg
                      className="w-16 h-16 text-white"
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
                  {/* Placeholder for images - add actual images to public/images/ folder */}
                  <div className="absolute inset-0 bg-gray-300 group-hover:scale-110 transition-transform duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-4">
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-[var(--green)] mr-3 mt-1 flex-shrink-0"
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
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    href="/contact-bridgen"
                    className="inline-block text-[var(--green)] hover:text-[var(--navy-blue)] font-medium mt-4 transition-colors"
                  >
                    Get a Quote
                    <svg
                      className="w-4 h-4 ml-1 inline-block"
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

      {/* Client Section with Modern Icons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-block text-[var(--green)] text-lg font-semibold mb-3 bg-green-50 px-4 py-2 rounded-full">
              Our Clients
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] mb-6">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We partner with professionals and businesses across the
              architecture and design industry.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center"
                variants={fadeIn}
              >
                <div className="bg-[var(--navy-blue)] bg-opacity-10 p-4 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[var(--navy-blue)]"
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
                <div>
                  <h3 className="font-semibold text-lg text-[var(--navy-blue)]">
                    {client.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{client.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section with Creative Layout */}
      <section className="py-20 bg-[var(--navy-blue)]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-block text-white text-lg font-semibold mb-3 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              Our Advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We bring experience, efficiency and excellence to every project.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} className="flex" variants={fadeIn}>
                <div className="mr-4 flex-shrink-0">
                  <div className="bg-[var(--green)] rounded-lg p-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={benefit.icon}
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action with modern design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16">
                <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Whether you have sketches, ideas, or a detailed brief, we're
                  ready to transform your vision into reality. Get in touch
                  today for a free consultation.
                </p>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-4 bg-[var(--navy-blue)] bg-opacity-10 p-2 rounded-full">
                        <svg
                          className="w-5 h-5 text-[var(--navy-blue)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={info.icon}
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          {info.title}
                        </div>
                        <div className="font-medium text-gray-800">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact-bridgen"
                  className="inline-flex items-center justify-center bg-[var(--red)] hover:bg-red-600 text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105"
                >
                  Contact Us Now
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </Link>
              </div>

              <div className="bg-[var(--navy-blue)] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('/images/blueprint-pattern.svg')] bg-center"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Our Process
                  </h3>

                  <div className="space-y-8">
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--green)] text-white font-bold text-xl mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          Initial Consultation
                        </h4>
                        <p className="text-gray-300">
                          We discuss your needs, timeline, and budget to create
                          a tailored approach.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--green)] text-white font-bold text-xl mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          Proposal & Agreement
                        </h4>
                        <p className="text-gray-300">
                          We provide a detailed quote and project plan for your
                          approval.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--green)] text-white font-bold text-xl mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          Production & Delivery
                        </h4>
                        <p className="text-gray-300">
                          We execute with precision, providing updates and
                          revisions as needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
