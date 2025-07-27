"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Gift, Users, ArrowRight, GraduationCap } from "lucide-react";

export default function ScholarshipOfferSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--red)]/10 via-[var(--green)]/10 to-[var(--navy-blue)]/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border-2 border-[var(--red)]/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--red)] to-[var(--green)] text-white p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="text-6xl mb-4">
                  <GraduationCap className="w-16 h-16 mx-auto" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Limited Time Offer: Scholarship Admission Open
                </h2>
                <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
                <p className="text-xl md:text-2xl font-semibold mb-2">
                  Apply now and get up to{" "}
                  <span className="text-yellow-300">₹50,000</span> in
                  scholarships
                </p>
                <p className="text-lg opacity-90">
                  Only for the first 11 admissions this batch
                </p>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-[var(--red)]/10 to-[var(--green)]/10 rounded-2xl p-6 border border-[var(--red)]/20">
                    <Clock className="w-12 h-12 text-[var(--red)] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-2">
                      Limited Time
                    </h3>
                    <p className="text-gray-600">
                      Early bird scholarship available for first 11 students
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-[var(--green)]/10 to-[var(--light-blue)]/10 rounded-2xl p-6 border border-[var(--green)]/20">
                    <Gift className="w-12 h-12 text-[var(--green)] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-2">
                      ₹50,000 Scholarship
                    </h3>
                    <p className="text-gray-600">
                      Significant financial support for deserving candidates
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-[var(--light-blue)]/10 to-[var(--navy-blue)]/10 rounded-2xl p-6 border border-[var(--light-blue)]/20">
                    <Users className="w-12 h-12 text-[var(--light-blue)] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-2">
                      Small Batch
                    </h3>
                    <p className="text-gray-600">
                      Personalized attention with limited batch size
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Scholarship Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[var(--navy-blue)]/5 to-[var(--green)]/5 rounded-2xl p-6 border border-[var(--navy-blue)]/20 mb-8"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] bg-clip-text text-transparent mb-4 text-center">
                  Scholarship Benefits Include:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    <span className="text-gray-700">
                      Reduced course fees up to ₹50,000
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    <span className="text-gray-700">
                      Priority placement assistance
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    <span className="text-gray-700">
                      Free study materials and software
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    <span className="text-gray-700">
                      Mentorship from industry experts
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact-bridgen"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--green)] hover:from-[var(--red)]/90 hover:to-[var(--green)]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Apply for Scholarship Now</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href="/courses"
                  className="group inline-flex items-center justify-center bg-white border-2 border-[var(--navy-blue)] text-[var(--navy-blue)] hover:bg-[var(--navy-blue)] hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>View Course Details</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              {/* Deadline Notice */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <div className="inline-flex items-center gap-2 bg-[var(--red)]/10 text-[var(--red)] px-4 py-2 rounded-full border border-[var(--red)]/20">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">
                    Deadline: Limited Seats Available
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
