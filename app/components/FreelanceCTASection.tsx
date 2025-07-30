"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const contactInfo = [
  {
    title: "Email",
    value: "hello@bridgentraining.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Call/WhatsApp",
    value: "+91 9061002200",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    title: "Website",
    value: "bridgentraining.com",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Service Coverage",
    value: "Local India & International (UAE, Qatar, UK, USA)",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
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

export default function FreelanceCTASection() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/919061002200?text=${encodeURIComponent(
      "Hello Bridgen Team, I'm interested in your Project Works - 2D & 3D Design Services. Please provide more information about your outsourcing services."
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center"></div>
      </div>
      <div className="hidden sm:block absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--green)]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        className="hidden sm:block absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[var(--light-blue)]/15 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-12 lg:p-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy-blue)] mb-4 sm:mb-6">
                📞 Get a Quote
              </h2>
              <p className="text-base sm:text-lg text-[var(--navy-blue)] mb-6 sm:mb-8 leading-relaxed">
                Whether you need quick 2D drawings, full 3D visualization, or a
                complete interior design solution, we are ready to support your
                workflow. Submit your files and requirements for a customized
                quote.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start sm:items-center">
                    <div className="mr-3 sm:mr-4 bg-[var(--navy-blue)] bg-opacity-10 p-2 sm:p-3 rounded-full flex-shrink-0 mt-1 sm:mt-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-blue)]"
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
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-medium text-[var(--navy-blue)] opacity-80 mb-1">
                        {info.title}
                      </div>
                      <div className="font-semibold text-sm sm:text-base text-[var(--navy-blue)] break-words">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--green)] hover:from-[var(--red)]/90 hover:to-[var(--green)]/90 text-white font-bold py-2.5 px-4 sm:py-3 sm:px-6 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto"
                >
                  <span className="relative z-10">WhatsApp Quote</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[var(--red)] to-[var(--green)] rounded-lg sm:rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                </button>
                <Link
                  href="/contact-bridgen"
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--navy-blue)] to-[var(--light-blue)] hover:from-[var(--navy-blue)]/90 hover:to-[var(--light-blue)]/90 text-white font-bold py-2.5 px-4 sm:py-3 sm:px-6 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <span className="relative z-10">Contact Form</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
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
            </div>

            <div
              className="relative flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--navy-blue) 0%, var(--navy-blue) 30%, var(--green) 50%, var(--navy-blue) 70%, var(--navy-blue) 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center"></div>
              </div>

              {/* Animated Background Elements */}
              <div className="hidden sm:block absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[var(--green)]/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
              <div
                className="hidden sm:block absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-[var(--red)]/20 to-transparent rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl">
                  Our Process
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4 shadow-xl mt-1">
                      1
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 drop-shadow-2xl">
                        Initial Consultation
                      </h4>
                      <p className="text-sm sm:text-base text-white/90 drop-shadow-lg font-medium leading-relaxed">
                        We discuss your needs, timeline, and budget to create a
                        tailored approach.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4 shadow-xl mt-1">
                      2
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 drop-shadow-2xl">
                        Proposal & Agreement
                      </h4>
                      <p className="text-sm sm:text-base text-white/90 drop-shadow-lg font-medium leading-relaxed">
                        We provide a detailed quote and project plan for your
                        approval.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4 shadow-xl mt-1">
                      3
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 drop-shadow-2xl">
                        Production & Delivery
                      </h4>
                      <p className="text-sm sm:text-base text-white/90 drop-shadow-lg font-medium leading-relaxed">
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

      {/* Portfolio Highlights Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-md">
            📁 Portfolio Highlights
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy-blue)] mb-4 sm:mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-base sm:text-lg text-[var(--navy-blue)] max-w-3xl mx-auto leading-relaxed">
            Explore some of our best works – from detailed architectural
            drawings to stunning 3D visualizations that bring designs to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {[
            {
              title: "Residential Design",
              subtitle: "2D Floor Plans & 3D Renders",
              image: "/images/portfolio/aiswarya/bedroom.jpg",
            },
            {
              title: "Commercial Spaces",
              subtitle: "Office Layouts & Visualizations",
              image: "/images/portfolio/sreeLakshmi/cafe.jpg",
            },
            {
              title: "Hospitality Projects",
              subtitle: "Hotel & Restaurant Designs",
              image: "/images/portfolio/sreeLakshmi/resort.jpg",
            },
            {
              title: "Bathroom Design",
              subtitle: "Technical Documentation",
              image: "/images/portfolio/sreeLakshmi/bathroom.jpg",
            },
            {
              title: "Interior Renderings",
              subtitle: "Photorealistic Visualizations",
              image: "/images/portfolio/aswathy2025/bedroom-camara-2.jpg",
            },
            {
              title: "Kitchen Design",
              subtitle: "Modern Kitchen Solutions",
              image: "/images/portfolio/aswathy2025/kiyhchen-camar-3.jpg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform hover:scale-105 rounded-xl sm:rounded-2xl h-48 sm:h-56 lg:h-64"
              variants={fadeIn}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-blue)]/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-blue)]/20 to-[var(--green)]/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 drop-shadow-2xl">
                  {item.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm font-medium drop-shadow-lg">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Link
            href="/student-projects-portfolio"
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--navy-blue)] to-[var(--light-blue)] hover:from-[var(--navy-blue)]/90 hover:to-[var(--light-blue)]/90 text-white font-bold py-2.5 px-6 sm:py-3 sm:px-8 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span className="relative z-10">View Full Portfolio</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
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
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[var(--navy-blue)] to-[var(--light-blue)] rounded-lg sm:rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
