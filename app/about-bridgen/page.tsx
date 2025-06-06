import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="py-12 bg-[var(--navy-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🏛️ About Bridgen
              </h1>
              <div className="w-20 h-1 bg-[var(--green)] mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">Bridge to Next Generation</p>
              <p className="text-lg text-gray-300 mt-4">
                Bridgen is a premier training institute in Kerala, empowering
                the next generation of interior designers, CAD experts, and
                visualization professionals. Founded in 2015, we began our
                journey as DreamZone Calicut, where we built a legacy of
                excellence over 10 years as a franchise.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                Today, we have evolved into Bridgen, an independent brand
                dedicated to delivering international-standard training that
                prepares students for global careers. Over the past decade,
                we've earned a strong reputation for high-quality, job-oriented
                education and have proudly achieved a 99% placement record —
                both in India and across the Middle East.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6">
                  🕰️ Our History
                </h2>
                <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                  From DreamZone Calicut to Bridgen — A Legacy of Excellence
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  For over a decade, we've been at the forefront of creative
                  education in Kerala. Our journey began in 2015 as DreamZone
                  Calicut, a franchisee of a nationally recognized design
                  education brand. Under this banner, we built a strong
                  reputation for delivering quality training in interior design,
                  CAD drafting, and 3D visualization.
                </p>

                <h4 className="text-lg font-semibold text-[var(--navy-blue)] mb-3">
                  During our 10-year tenure as DreamZone Calicut:
                </h4>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    We trained hundreds of students who are now working
                    successfully in India and abroad
                  </li>
                  <li>
                    We developed an ecosystem of hands-on learning, practical
                    exposure, and career placement
                  </li>
                  <li>
                    We became a trusted name among students, parents, and
                    industry professionals in North Kerala
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                  ✨ A New Chapter: BRIDGEN
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  In 2024, we made a bold and empowering move — transitioning
                  into an independent brand:
                </p>
                <p className="text-xl font-bold text-[var(--red)] text-center mb-4">
                  BRIDGEN – Bridge to Next Generation
                </p>

                <h4 className="text-lg font-semibold text-[var(--navy-blue)] mb-3">
                  This change allowed us to:
                </h4>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    Build our own unique syllabus, tailored for global design
                    careers
                  </li>
                  <li>
                    Integrate the latest software tools and real-world project
                    training
                  </li>
                  <li>
                    Offer international placement support, especially for the
                    Middle East (Gulf)
                  </li>
                  <li>
                    Provide even more personalized attention, small batch
                    mentorship, and job-focused learning
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                  🧭 Our Commitment Remains the Same
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  While the name has changed, our core values remain unchanged:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Excellence in training</li>
                  <li>Industry-relevant curriculum</li>
                  <li>Student success</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4">
                  The transition to Bridgen was not a step away from our past —
                  it was a step forward to empower our students with even
                  greater opportunities.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6">
                  🔑 What Makes Us Different?
                </h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-[var(--green)] rounded-full p-2">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        🎓 10+ Years of Experience
                      </h3>
                      <p className="text-gray-700">
                        Legacy of trusted training, now evolved into an
                        independent, future-ready institute
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-[var(--green)] rounded-full p-2">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        🌍 International Standards
                      </h3>
                      <p className="text-gray-700">
                        Our curriculum is aligned with industry expectations in
                        the Gulf and beyond
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-[var(--green)] rounded-full p-2">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        👥 Small Batch, Big Impact
                      </h3>
                      <p className="text-gray-700">
                        Personalized attention through limited batch sizes and
                        dedicated mentoring
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-[var(--green)] rounded-full p-2">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        🛠️ On-the-Job Training
                      </h3>
                      <p className="text-gray-700">
                        Real-world project exposure to help students gain
                        practical, workplace-ready skills
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-[var(--green)] rounded-full p-2">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        🖥️ Advanced Software Training
                      </h3>
                      <p className="text-gray-700">
                        Learn tools like AutoCAD, SketchUp, 3ds Max, Revit,
                        Photoshop, and more
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-[var(--green)] rounded-full p-2">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        💼 100% Placement Focus
                      </h3>
                      <p className="text-gray-700">
                        Job readiness programs, portfolio development, and
                        placement support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-[var(--navy-blue)] mb-4">
                    🌟 Our Vision
                  </h2>
                  <p className="text-gray-700 mb-4">
                    To be the bridge between raw talent and global opportunities
                    — helping passionate individuals turn their creativity into
                    a thriving profession.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-[var(--navy-blue)] mb-4">
                    📍 Our Campus
                  </h2>
                  <p className="text-gray-700 mb-2">
                    📌 Thayyil Arcade, V Panoli Road, near Baby Memorial
                    Hospital, Thiruthiyad, Kozhikode, Kerala 673004
                  </p>
                  <p className="text-gray-700 mb-2">
                    🌐 www.bridgentraining.com
                  </p>
                  <p className="text-gray-700">📞 9061002200</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6">
                  📈 Legacy by Numbers (2015–2024)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-[var(--navy-blue)] mb-2">
                      1000+
                    </div>
                    <p className="text-gray-700">🎓 Students Trained</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-[var(--green)] mb-2">
                      99%
                    </div>
                    <p className="text-gray-700">💼 Placement Success</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-[var(--red)] mb-2">
                      5+
                    </div>
                    <p className="text-gray-700">
                      🌍 Countries (UAE, Qatar, Oman, India)
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-[var(--light-blue)] mb-2">
                      100+
                    </div>
                    <p className="text-gray-700">🛠️ Live Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--navy-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">✉️ Need design support?</h2>
            <p className="text-lg mb-6">
              Let's work together on your next project — from blueprint to
              build.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-lg">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a
                  href="tel:9061002200"
                  className="hover:text-[var(--green)] transition-colors"
                >
                  9061002200
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📩</span>
                <a
                  href="mailto:hello@bridgentraining.com"
                  className="hover:text-[var(--green)] transition-colors"
                >
                  hello@bridgentraining.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-4">
              Ready to Start Your Creative Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Join our community of designers and visualization experts to gain
              the skills that will set you apart in the industry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center bg-[var(--navy-blue)] hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Explore Our Courses
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
                href="/contact-bridgen"
                className="inline-flex items-center justify-center bg-[var(--red)] hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
