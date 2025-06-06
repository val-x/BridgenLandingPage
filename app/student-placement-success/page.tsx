import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const placementStats = [
  {
    label: "Placement Rate",
    value: "92%",
    description: "of our graduates find employment within 3 months",
  },
  {
    label: "Average Starting Salary",
    value: "₹28K",
    description: "monthly for entry-level positions",
  },
  {
    label: "Freelance Success",
    value: "65%",
    description: "of graduates secure freelance projects within 6 months",
  },
  {
    label: "Industry Partners",
    value: "45+",
    description: "companies regularly hire our graduates",
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
        <section className="py-12 bg-[var(--navy-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Student Placement Success
              </h1>
              <div className="w-20 h-1 bg-[var(--green)] mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Our graduates' success is our greatest achievement
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6">
                Placement Highlights
              </h2>
              <p className="text-lg text-gray-700">
                At Bridgen, we pride ourselves on preparing students for
                successful careers in the design industry. Our placement record
                speaks for itself, with consistent high employment rates and
                industry recognition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {placementStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <div className="text-5xl font-bold text-[var(--red)] mb-4">
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6 text-center">
                Our Industry Partners
              </h2>
              <p className="text-lg text-gray-700 text-center mb-8">
                We've built strong relationships with leading companies in the
                interior design and architectural visualization industry,
                creating valuable opportunities for our students.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {partnerCompanies.map((company, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200"
                  >
                    <p className="font-medium text-[var(--navy-blue)]">
                      {company}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-10 text-center">
                Success Stories
              </h2>

              <div className="space-y-12">
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="bg-[var(--navy-blue)] text-white p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-2xl font-bold">{story.name}</h3>
                          <p className="text-gray-300">
                            {story.course}, {story.year}
                          </p>
                        </div>
                        <div className="mt-3 md:mt-0">
                          <p className="text-white font-medium">
                            {story.position}
                          </p>
                          <p className="text-gray-300">{story.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-6">
                        <p className="text-gray-700 italic">
                          "{story.testimonial}"
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <p className="text-[var(--navy-blue)] font-medium">
                          Achievement:
                        </p>
                        <p className="text-gray-700">{story.achievement}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6 text-center">
                  Placement Process
                </h2>
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--navy-blue)] text-white font-bold text-xl mb-4 md:mb-0 md:mr-6">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        Portfolio Development
                      </h3>
                      <p className="text-gray-700">
                        Our instructors work closely with students to develop
                        industry-standard portfolios that showcase their
                        technical skills and creative abilities.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--navy-blue)] text-white font-bold text-xl mb-4 md:mb-0 md:mr-6">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        Interview Preparation
                      </h3>
                      <p className="text-gray-700">
                        Students receive guidance on interview techniques,
                        resume building, and professional presentation to help
                        them confidently approach job opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--navy-blue)] text-white font-bold text-xl mb-4 md:mb-0 md:mr-6">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        Industry Connections
                      </h3>
                      <p className="text-gray-700">
                        We organize regular networking events, industry visits,
                        and guest lectures to connect students with potential
                        employers and industry professionals.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--navy-blue)] text-white font-bold text-xl mb-4 md:mb-0 md:mr-6">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                        Placement Assistance
                      </h3>
                      <p className="text-gray-700">
                        Our dedicated placement cell works to match students
                        with suitable job opportunities and provides ongoing
                        support during the application and interview process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-4">
              Begin Your Success Story
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Join Bridgen School of Creative Studies and take the first step
              toward a rewarding career in design and visualization.
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
