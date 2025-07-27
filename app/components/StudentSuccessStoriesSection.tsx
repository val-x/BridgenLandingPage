"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Award,
  Briefcase,
  Target,
  TrendingUp,
} from "lucide-react";

const successStats = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Placed in top firms",
    description: "Calicut, Bangalore & Dubai",
    color: "from-[var(--red)] to-[var(--green)]",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "1000+ Students Trained",
    description: "since 2015",
    color: "from-[var(--green)] to-[var(--light-blue)]",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Real Portfolio Works",
    description: "+ Internship Options",
    color: "from-[var(--light-blue)] to-[var(--navy-blue)]",
  },
];

export default function StudentSuccessStoriesSection() {
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
              Student Success Stories
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Our graduates have achieved remarkable success in their careers,
            working with top firms across India and the Gulf region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {successStats.map((stat, index) => (
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
              className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:shadow-xl transition-all duration-300`}
                >
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-2 group-hover:text-[var(--green)] transition-colors duration-300">
                  {stat.title}
                </h3>
                <p className="text-gray-600 font-medium">{stat.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--green)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Success Story Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[var(--green)]/10 to-[var(--light-blue)]/10 rounded-2xl p-8 border-2 border-[var(--green)]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] bg-clip-text text-transparent mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  Placement Success
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    <span className="text-gray-700">
                      99% placement rate across all courses
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    <span className="text-gray-700">
                      Graduates working in top design firms
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    <span className="text-gray-700">
                      International placements in Gulf region
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--light-blue)] to-[var(--navy-blue)] bg-clip-text text-transparent mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Career Growth
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--light-blue)] rounded-full"></div>
                    <span className="text-gray-700">
                      Real project experience during training
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--light-blue)] rounded-full"></div>
                    <span className="text-gray-700">
                      Professional portfolio development
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--light-blue)] rounded-full"></div>
                    <span className="text-gray-700">
                      Industry networking opportunities
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-br from-[var(--navy-blue)]/10 to-[var(--red)]/10 rounded-2xl p-6 border-2 border-[var(--navy-blue)]/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[var(--navy-blue)] to-[var(--red)] bg-clip-text text-transparent mb-3">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-700 mb-4">
              Join our community of successful graduates and transform your
              creative passion into a thriving career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-bridgen"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[var(--green)] to-[var(--red)] hover:from-[var(--green)]/90 hover:to-[var(--red)]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Start Your Journey
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
