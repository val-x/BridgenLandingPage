"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FreelanceHeroSection() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/919061002200?text=${encodeURIComponent(
      "Hello Bridgen Team, I'm interested in your Project Works - 2D & 3D Design Services. Please provide more information about your outsourcing services."
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative text-white overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center"
      style={{
        background:
          "linear-gradient(135deg, var(--navy-blue) 0%, var(--navy-blue) 30%, var(--green) 50%, var(--navy-blue) 70%, var(--navy-blue) 100%)",
      }}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/portfolio/sreeLakshmi/living-hall.jpg"
          alt="Professional interior design showcase"
          fill
          className="object-cover object-center filter blur-md"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-[var(--navy-blue)]/95"></div>
        <div className="absolute inset-0 bg-[var(--grey)]/50"></div>
      </div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[var(--green)]/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--red)]/30 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[var(--light-blue)]/20 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating Decorative Elements */}
      <div className="hidden sm:block absolute top-20 left-10 w-2 h-2 bg-[var(--green)] rounded-full animate-bounce"></div>
      <div
        className="hidden sm:block absolute top-40 right-20 w-3 h-3 bg-[var(--red)] rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="hidden sm:block absolute bottom-20 left-20 w-2 h-2 bg-[var(--light-blue)] rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="hidden sm:block absolute bottom-40 right-10 w-1 h-1 bg-[var(--green)] rounded-full animate-bounce"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-2xl border-2 border-white/30 backdrop-blur-md"
          >
            Professional Design Services
          </motion.div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,51,102,0.9), 0 0 8px rgba(0,51,102,0.6)",
            }}
          >
            Project Works – 2D & 3D Design Services
            <span
              className="text-[var(--green)] block md:inline animate-pulse drop-shadow-2xl"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,51,102,0.9), 0 0 8px rgba(42,157,143,0.4)",
              }}
            >
              {" "}
              Local & International Outsourcing
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-24 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto mb-8 rounded-full shadow-2xl"
          ></motion.div>

          <p
            className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-2xl font-medium"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,51,102,0.8), 0 0 6px rgba(0,51,102,0.6)",
            }}
          >
            Your one-stop destination for professional 2D drafting, 3D
            visualization, and interior design outsourcing. With over a decade
            of industry experience, we deliver quality-driven CAD drawings, 3D
            renders, and complete design documentation for clients across India
            and international markets.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--green)] hover:from-[var(--red)]/90 hover:to-[var(--green)]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <span className="relative z-10">Get Quote on WhatsApp</span>
              <svg
                className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[var(--red)] to-[var(--green)] rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            </button>
            <Link
              href="#services"
              className="group relative inline-flex items-center justify-center bg-white/20 backdrop-blur-sm border-2 border-white hover:border-[var(--green)] hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Explore Our Services</span>
              <svg
                className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
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
  );
}
