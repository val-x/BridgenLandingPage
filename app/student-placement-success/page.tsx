"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const placementStats = [
  {
    label: "Placement Rate",
    value: "92%",
    description: "of our graduates find employment within 3 months",
    icon: "🎯",
  },
  {
    label: "Average Starting Salary",
    value: "₹28K",
    description: "monthly for entry-level positions",
    icon: "💰",
  },
  {
    label: "Freelance Success",
    value: "65%",
    description: "of graduates secure freelance projects within 6 months",
    icon: "🚀",
  },
  {
    label: "Industry Partners",
    value: "45+",
    description: "companies regularly hire our graduates",
    icon: "🤝",
  },
];

const successStories = [
  {
    name: "Aarav Kumar",
    course: "Interior Design",
    year: "2022",
    position: "Junior Interior Designer",
    company: "Spaces Design Studio",
    testimonial:
      "The skills I learned at Bridgen gave me a significant advantage when applying for jobs. My portfolio stood out because of the technical proficiency I developed during the course.",
    achievement: "Recently promoted to lead designer for residential projects",
  },
  {
    name: "Zara Patel",
    course: "AutoCAD Training & 3ds Max",
    year: "2021",
    position: "3D Visualization Artist",
    company: "Architect Associates",
    testimonial:
      "Bridgen's practical approach to teaching 3D visualization helped me master the software much faster than I expected. The instructors were always available to provide guidance on portfolio projects.",
    achievement: "Won company award for best visualization of the quarter",
  },
  {
    name: "Vikram Singh",
    course: "SketchUp with V-Ray",
    year: "2020",
    position: "Freelance Visualization Specialist",
    company: "Self-employed",
    testimonial:
      "After completing my course at Bridgen, I was able to start my own freelance business. The technical skills and business guidance provided by the school were invaluable in helping me establish my client base.",
    achievement: "Now manages a team of 3 and works with international clients",
  },
  {
    name: "Neha Sharma",
    course: "Interior Design (1-year program)",
    year: "2021",
    position: "Interior Design Consultant",
    company: "Urban Living Interiors",
    testimonial:
      "The comprehensive curriculum at Bridgen prepared me for all aspects of interior design work. I particularly appreciated the focus on client management and project execution.",
    achievement:
      "Successfully completed 15+ residential projects in first year",
  },
];

const partnerCompanies = [
  "Design Innovations",
  "Architectural Solutions",
  "Interiors Plus",
  "Visualize Studio",
  "Homes & Spaces",
  "Creative Dimensions",
  "Urban Design Co.",
  "Modern Interiors",
];

export default function PlacementsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-2 h-2 to-pink-500 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Student Success Stories
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-white to-pink-500  bg-clip-text text-transparent">
                  Placement Success
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Our graduates' success is our greatest achievement. Discover how
                Bridgen transforms passion into profession.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-900 to-pink-500 to-green-500 bg-clip-text text-transparent">
                  Placement Highlights
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                At Bridgen, we pride ourselves on preparing students for
                successful careers in the design industry. Our placement record
                speaks for itself, with consistent high employment rates and
                industry recognition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {placementStats.map((stat, index) => (
                <div key={index} className="relative group">
                  {/* Background Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-red-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Main Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                      {stat.value}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Partners Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
                  Our Industry Partners
                </h2>
                <p className="text-lg text-gray-200 text-center mb-12 max-w-3xl mx-auto">
                  We've built strong relationships with leading companies in the
                  interior design and architectural visualization industry,
                  creating valuable opportunities for our students.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {partnerCompanies.map((company, index) => (
                    <div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <p className="font-semibold text-white">{company}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-blue-900 to-pink-500 to-green-500 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>

              <div className="space-y-12">
                {successStories.map((story, index) => (
                  <div key={index} className="relative group">
                    {/* Background Glow */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-red-500/5 rounded-3xl blur-2xl"></div>

                    {/* Main Card */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl transition-all duration-500">
                      {/* Header Section */}
                      <div className="bg-gradient-to-r from-blue-900 to-pink-500 to-green-600 text-white p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <h3 className="text-3xl font-bold mb-2">
                              {story.name}
                            </h3>
                            <p className="text-blue-100 text-lg">
                              {story.course}, {story.year}
                            </p>
                          </div>
                          <div className="mt-4 lg:mt-0 text-right">
                            <p className="text-white font-semibold text-lg">
                              {story.position}
                            </p>
                            <p className="text-blue-100">{story.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <div className="mb-8">
                          <div className="flex items-start">
                            <div className="text-4xl mr-4 mt-1">💬</div>
                            <p className="text-gray-700 italic text-lg leading-relaxed">
                              "{story.testimonial}"
                            </p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200/50">
                          <div className="flex items-start">
                            <div className="text-2xl mr-4 mt-1">🏆</div>
                            <div>
                              <p className="text-blue-900 font-semibold text-lg mb-2">
                                Achievement:
                              </p>
                              <p className="text-gray-700">
                                {story.achievement}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Placement Process Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
                  Placement Process
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Portfolio Development",
                      description:
                        "Our instructors work closely with students to develop industry-standard portfolios that showcase their technical skills and creative abilities.",
                      icon: "📁",
                    },
                    {
                      step: "2",
                      title: "Interview Preparation",
                      description:
                        "Students receive guidance on interview techniques, resume building, and professional presentation to help them confidently approach job opportunities.",
                      icon: "🎯",
                    },
                    {
                      step: "3",
                      title: "Industry Connections",
                      description:
                        "We organize regular networking events, industry visits, and guest lectures to connect students with potential employers and industry professionals.",
                      icon: "🤝",
                    },
                    {
                      step: "4",
                      title: "Placement Assistance",
                      description:
                        "Our dedicated placement cell works to match students with suitable job opportunities and provides ongoing support during the application and interview process.",
                      icon: "🚀",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col lg:flex-row items-start group"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-2xl mb-6 lg:mb-0 lg:mr-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <h3 className="text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-900 to-pink-500 to-green-500 bg-clip-text text-transparent">
                  Begin Your Success Story
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join Bridgen School of Creative Studies and take the first step
                toward a rewarding career in design and visualization.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/courses"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Explore Our Courses
                  <svg
                    className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  href="/contact-bridgen"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 to-blue-700 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Contact Us
                  <svg
                    className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
