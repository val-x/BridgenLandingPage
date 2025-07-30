"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const showcaseProjects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Residential",
    image: "/images/portfolio/sreeLakshmi/living1.jpg",
    description: "Contemporary design with premium finishes",
  },
  {
    id: 2,
    title: "Luxury Bedroom Suite",
    category: "Interior Design",
    image: "/images/portfolio/aiswarya/bedroom03.jpg",
    description: "Elegant bedroom with custom furniture",
  },
  {
    id: 3,
    title: "Commercial Café Space",
    category: "Commercial",
    image: "/images/portfolio/sreeLakshmi/cafe.jpg",
    description: "Vibrant café interior with modern aesthetics",
  },
  {
    id: 4,
    title: "Dining Room Design",
    category: "Residential",
    image: "/images/portfolio/sreeLakshmi/dining2.jpg",
    description: "Sophisticated dining area with contemporary style",
  },
  {
    id: 5,
    title: "Resort Architecture",
    category: "Hospitality",
    image: "/images/portfolio/sreeLakshmi/resort.jpg",
    description: "Luxurious resort design with tropical elements",
  },
  {
    id: 6,
    title: "Kitchen Design",
    category: "Interior Design",
    image: "/images/portfolio/aswathy2025/new-kithchen-camara-2.jpg",
    description: "Modern kitchen with functional layout",
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

export default function FreelanceShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center"></div>
      </div>
      <div className="hidden sm:block absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[var(--navy-blue)]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        className="hidden sm:block absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[var(--green)]/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
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
            🎨 Project Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] mb-6">
            Featured Design Projects
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our latest architectural and interior design projects,
            showcasing the quality and creativity we bring to every client.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {showcaseProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              variants={fadeIn}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--green)] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--navy-blue)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h4 className="text-xl font-bold mb-2 drop-shadow-2xl">
                    {project.title}
                  </h4>
                  <p className="text-white/90 mb-4 drop-shadow-lg">
                    {project.description}
                  </p>
                  <button className="bg-[var(--green)] hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
