import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const portfolioCategories = [
  {
    id: "interior-design",
    title: "Interior Design Projects",
    description:
      "Residential and commercial interior design projects created by our students.",
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    description:
      "Photorealistic renders and visualizations using 3ds Max and V-Ray/Corona.",
  },
  {
    id: "architectural-drafting",
    title: "Architectural Drafting",
    description:
      "Technical drawings, floor plans, and construction documents created with AutoCAD.",
  },
  {
    id: "concept-development",
    title: "Concept Development",
    description:
      "Initial concept sketches, mood boards, and design development work.",
  },
];

const featuredProjects = [
  {
    id: "modern-apartment",
    title: "Modern Apartment Renovation",
    student: "Ananya Mehta",
    course: "Interior Design",
    year: "2022",
    description:
      "A complete redesign of a 2BHK apartment in Mumbai, focusing on maximizing space and creating a contemporary aesthetic with natural materials.",
    tags: ["Residential", "Space Planning", "3D Visualization"],
    category: "interior-design",
  },
  {
    id: "boutique-hotel",
    title: "Boutique Hotel Lobby",
    student: "Rahul Kapoor",
    course: "3ds Max with V-Ray",
    year: "2021",
    description:
      "Photorealistic visualization of a boutique hotel lobby featuring custom furniture and dramatic lighting to create an intimate atmosphere.",
    tags: ["Commercial", "Lighting Design", "Photorealistic Rendering"],
    category: "3d-visualization",
  },
  {
    id: "restaurant-design",
    title: "Fine Dining Restaurant",
    student: "Divya Singh",
    course: "Interior Design",
    year: "2022",
    description:
      "A complete interior scheme for a fine dining restaurant, including space planning, lighting design, and material specification.",
    tags: ["Commercial", "Hospitality", "Lighting Design"],
    category: "interior-design",
  },
  {
    id: "urban-villa",
    title: "Urban Villa Complex",
    student: "Arjun Patel",
    course: "AutoCAD Training & SketchUp",
    year: "2021",
    description:
      "Technical drawings and 3D models for a complex of modern urban villas, including floor plans, elevations, and sections.",
    tags: ["Residential", "Technical Drawing", "Multi-unit"],
    category: "architectural-drafting",
  },
  {
    id: "retail-concept",
    title: "Sustainable Retail Store Concept",
    student: "Meera Shah",
    course: "Interior Design",
    year: "2022",
    description:
      "Concept development for a sustainable retail space using recycled materials, natural lighting, and energy-efficient systems.",
    tags: ["Commercial", "Sustainable Design", "Concept Development"],
    category: "concept-development",
  },
  {
    id: "office-visualization",
    title: "Corporate Office Visualization",
    student: "Vikrant Desai",
    course: "3ds Max with Corona",
    year: "2021",
    description:
      "High-quality visualizations of an open-plan corporate office space designed to enhance collaboration and productivity.",
    tags: ["Commercial", "Workspace", "3D Visualization"],
    category: "3d-visualization",
  },
  {
    id: "residential-plans",
    title: "Luxury Villa Floor Plans",
    student: "Nisha Sharma",
    course: "AutoCAD Training",
    year: "2022",
    description:
      "Detailed floor plans, sections, and elevations for a 5-bedroom luxury villa with integrated smart home technology.",
    tags: ["Residential", "Technical Drawing", "Luxury"],
    category: "architectural-drafting",
  },
  {
    id: "cafe-concept",
    title: "Urban Café Concept",
    student: "Rohan Verma",
    course: "Interior Design & SketchUp",
    year: "2021",
    description:
      "Concept development and initial visualizations for a contemporary urban café with indoor-outdoor seating and a minimalist aesthetic.",
    tags: ["Commercial", "Hospitality", "Concept Development"],
    category: "concept-development",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="py-12 bg-[var(--navy-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Student Projects Portfolio
              </h1>
              <div className="w-20 h-1 bg-[var(--green)] mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Showcasing the creative talent and technical skills of our
                students
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6">
                Our Student Work
              </h2>
              <p className="text-lg text-gray-700">
                At Bridgen, we believe the best way to demonstrate the quality
                of our education is through the work of our students. Here's a
                selection of projects completed by recent graduates across
                various disciplines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {portfolioCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[var(--navy-blue)] text-white p-5">
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    <a
                      href={`#${category.id}`}
                      className="inline-flex items-center text-[var(--navy-blue)] font-medium"
                    >
                      View Projects
                      <svg
                        className="w-4 h-4 ml-2"
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
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {portfolioCategories.map((category) => (
              <div key={category.id} id={category.id} className="mb-16">
                <div className="border-l-4 border-[var(--navy-blue)] pl-4 mb-8">
                  <h2 className="text-2xl font-bold text-[var(--navy-blue)]">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredProjects
                    .filter((project) => project.category === category.id)
                    .map((project) => (
                      <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        <div className="h-60 bg-gray-200"></div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-2">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                            <p className="mr-4">
                              <span className="font-medium">Student:</span>{" "}
                              {project.student}
                            </p>
                            <p className="mr-4">
                              <span className="font-medium">Course:</span>{" "}
                              {project.course}
                            </p>
                            <p>
                              <span className="font-medium">Year:</span>{" "}
                              {project.year}
                            </p>
                          </div>
                          <p className="text-gray-700 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-[var(--navy-blue)] text-xs font-medium px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6 text-center">
                Student Portfolio Development
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                At Bridgen, we place special emphasis on helping students
                develop professional portfolios that showcase their skills and
                creativity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-[var(--navy-blue)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                    Project Selection
                  </h3>
                  <p className="text-gray-700">
                    Students learn to select projects that best represent their
                    skills and align with their career goals.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[var(--navy-blue)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                    Presentation Skills
                  </h3>
                  <p className="text-gray-700">
                    Our courses include guidance on how to effectively present
                    work to potential employers and clients.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[var(--navy-blue)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-2">
                    Digital Portfolio
                  </h3>
                  <p className="text-gray-700">
                    Students create both physical and digital portfolios,
                    learning to showcase their work effectively online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-4">
              Create Your Own Portfolio
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Join Bridgen School of Creative Studies and develop the skills to
              create impressive design projects for your professional portfolio.
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
