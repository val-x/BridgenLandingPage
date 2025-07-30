"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const whyChooseBridgen = [
  {
    title: "Accurate & Timely Delivery",
    description:
      "Precision in every drawing with guaranteed on-time completion",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "NDA-Protected Confidentiality",
    description: "Complete project confidentiality with secure data handling",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Customizable Packages",
    description: "Hourly or project-based pricing to fit your budget",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
  },
  {
    title: "100% Client Satisfaction",
    description: "Unlimited revisions until you're completely satisfied",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "Affordable for All",
    description: "Budget-friendly for startups, scalable for bulk projects",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
  },
  {
    title: "Decade+ Experience",
    description: "Over 10 years of industry experience serving global clients",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
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

export default function FreelanceBenefitsSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--navy-blue) 0%, var(--navy-blue) 30%, var(--green) 50%, var(--navy-blue) 70%, var(--navy-blue) 100%)",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/portfolio/aswathy2025/final-house-camara2-2.jpg"
          alt="Benefits background"
          fill
          className="object-cover object-center"
          quality={50}
        />
        <div className="absolute inset-0 bg-[var(--navy-blue)]/50"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white text-lg font-bold mb-3 px-6 py-3 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-md">
            🧰 Why Choose Bridgen?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-2xl">
            Your Trusted Outsourcing Partner
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-2xl font-medium">
            Experience the difference of working with a team that prioritizes
            quality, confidentiality, and client satisfaction above all else.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {whyChooseBridgen.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative flex bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/20 hover:border-[var(--green)]/50 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              variants={fadeIn}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--red)]/20 to-[var(--green)]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mr-4 flex-shrink-0 relative z-10">
                <div className="bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] rounded-lg p-3 shadow-xl">
                  <svg
                    className="w-6 h-6 text-white drop-shadow-2xl"
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
              <div className="relative z-10">
                <h3 className="font-bold text-xl text-white mb-2 drop-shadow-2xl">
                  {benefit.title}
                </h3>
                <p className="text-white/90 font-medium drop-shadow-lg">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Testimonials Section */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold text-white mb-8 drop-shadow-2xl">
            Trusted by Design Professionals Worldwide
          </h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {[
              {
                name: "Bharat Bhagyanath",
                role: "Architect",
                image: "/images/profile/BharatBhagyanath.jpeg",
              },
              {
                name: "Muhammad Riyas",
                role: "Interior Designer",
                image: "/images/profile/muhammadRiyas.jpeg",
              },
              {
                name: "Murshida",
                role: "Design Consultant",
                image: "/images/profile/murshida.jpeg",
              },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className="relative w-16 h-16 mb-3 rounded-full overflow-hidden border-3 border-[var(--green)] shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover object-center"
                    quality={85}
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-sm drop-shadow-2xl">
                    {client.name}
                  </p>
                  <p className="text-white/80 text-xs drop-shadow-lg">
                    {client.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
