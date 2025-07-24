"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const courses = [
  {
    id: "interior-architecture",
    title: "Diploma in Interior Architecture",
    duration: "Comprehensive Program",
    level: "Beginner to Advanced",
    image: "/images/portfolio/sreeLakshmi/living-hall.jpg",
    description: "Bridge to Next Generation - Turning Passion into Profession.",
    fullDescription:
      "At Bridgen, we are dedicated to empowering students with practical skills and industry knowledge, paving the way for rewarding careers in the creative and architectural fields.",
    topics: [
      "Design Basics & Principles",
      "Advanced Design Concepts",
      "Architectural Designing",
      "Software Training (AutoCAD, 3DS Max, SketchUp, Photoshop)",
    ],
    outcomes: [
      "Master design principles and spatial planning",
      "Create professional technical drawings and 3D visualizations",
      "Build a comprehensive portfolio for job applications",
    ],
    audience:
      "Perfect for aspiring interior designers, architects, and creative professionals.",
    careerOptions: [
      "Interior and Spatial Designer",
      "3D Visualizer",
      "Furniture Designer",
      "Turnkey Designer",
    ],
  },
  {
    id: "autocad",
    title: "AutoCAD Training",
    duration: "1 Month",
    level: "Beginner Friendly",
    image: "/images/portfolio/aiswarya/bedroom.jpg",
    description: "Master the fundamental and advanced tools of AutoCAD.",
    fullDescription:
      "Master the fundamental and advanced tools of AutoCAD, the most widely used drafting software in the architectural and engineering industries.",
    topics: [
      "Interface Navigation and Customization",
      "2D Drafting Techniques",
      "Dimensioning and Annotation",
      "Introduction to 3D Modeling",
    ],
    outcomes: [
      "Create professional architectural drawings",
      "Develop efficient workflow techniques",
      "Build a portfolio of completed projects",
    ],
    audience:
      "Ideal for architects, interior designers, civil engineers, draftsmen.",
    careerOptions: ["CAD Technician", "Draftsman", "Design Engineer"],
  },
  {
    id: "3ds-max",
    title: "3ds Max with V-Ray/Corona",
    duration: "2 Months",
    level: "Intermediate",
    image: "/images/portfolio/sreeLakshmi/resort.jpg",
    description:
      "Create stunning visualizations and realistic renders using 3ds Max with V-Ray and Corona.",
    fullDescription:
      "Create stunning visualizations and realistic renders using 3ds Max with V-Ray and Corona. Ideal for interior designers and architects, this course covers modeling, texturing, and advanced lighting techniques to produce photorealistic 3D renderings.",
    topics: [
      "3D Modeling Basics",
      "Material and Texture Mapping",
      "Lighting with V-Ray and Corona",
      "Rendering Techniques",
      "Animation and Walkthroughs",
      "Post-production integration",
    ],
    outcomes: [
      "Create detailed 3D models from scratch",
      "Set up photorealistic materials and lighting",
      "Master rendering settings for optimal results",
      "Build a portfolio of high-quality renders",
    ],
    audience:
      "Perfect for interior designers, architects, and visualization specialists looking to create stunning presentations.",
    careerOptions: [
      "3D Visualizer",
      "Interior Design Visual Specialist",
      "Rendering Artist",
    ],
  },
  {
    id: "sketchup",
    title: "SketchUp with V-Ray",
    duration: "1 Month",
    level: "All Levels",
    image: "/images/portfolio/aiswarya/dinning.jpg",
    description:
      "Learn to create quick and efficient 3D models using SketchUp and enhance them with V-Ray rendering.",
    fullDescription:
      "Learn to create quick and efficient 3D models using SketchUp and enhance them with V-Ray rendering. Perfect for both beginners and professionals aiming to speed up their design process.",
    topics: [
      "SketchUp Interface and Navigation",
      "Creating 3D Models and Layouts",
      "V-Ray for Realistic Renderings",
      "Exporting and Presentation Techniques",
      "Component creation and organization",
      "Material application and management",
    ],
    outcomes: [
      "Create accurate 3D models quickly",
      "Develop efficient modeling techniques",
      "Set up professional materials and lighting",
      "Produce high-quality renders",
    ],
    audience:
      "Ideal for interior designers, decorators, and anyone needing quick 3D visualization skills.",
    careerOptions: ["Interior Designer", "3D Modeler", "Furniture Designer"],
  },
  {
    id: "photoshop",
    title: "Photoshop for Designers",
    duration: "1 Month",
    level: "Design Focused",
    image: "/images/portfolio/sreeLakshmi/cafe.jpg",
    description:
      "Master the art of creating presentation boards, editing images, and enhancing design visuals with Adobe Photoshop.",
    fullDescription:
      "This focused course teaches designers how to leverage Photoshop to enhance their presentations and renderings. You'll learn specialized techniques for architectural and interior design visualization.",
    topics: [
      "Image Editing and Retouching",
      "Creating Mood Boards",
      "Presentation Layouts",
      "Design Mockups and Render Adjustments",
      "Layer management and masking",
      "Post-production for 3D renders",
    ],
    outcomes: [
      "Enhance architectural and interior renderings",
      "Create professional presentation boards",
      "Develop efficient post-production workflows",
      "Master image correction techniques",
    ],
    audience:
      "Essential for interior designers, architects, and professionals who need to create professional presentations.",
    careerOptions: [
      "Graphic Designer",
      "Visual Presentation Specialist",
      "Interior Design Portfolio Creator",
    ],
  },
  {
    id: "revit",
    title: "Revit Architecture",
    duration: "3 Months",
    level: "Professional",
    image: "/images/portfolio/sreeLakshmi/traditional-home.jpg",
    description:
      "Learn the fundamentals of Building Information Modeling (BIM) with Autodesk Revit.",
    fullDescription:
      "Learn the fundamentals of BIM with Autodesk Revit, including creating and managing building models. Ideal for architectural and engineering professionals looking to integrate BIM in their practice.",
    topics: [
      "Introduction to BIM and Revit",
      "Creating Architectural Models",
      "Family Creation and Customization",
      "Project Collaboration and Documentation",
      "Advanced BIM Techniques",
    ],
    outcomes: [
      "Create complete building information models",
      "Generate construction documentation",
      "Collaborate effectively on BIM projects",
      "Implement BIM workflows in architectural practice",
    ],
    audience:
      "Ideal for architectural and engineering professionals looking to integrate BIM in their practice.",
    careerOptions: [
      "BIM Technician",
      "Revit Specialist",
      "Architectural Modeler",
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-blue)] via-[var(--green)] to-[var(--navy-blue)]"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[var(--green)]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--red)]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Professional Training Programs
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-white via-[var(--green)] to-[var(--red)] bg-clip-text text-transparent">
                  Our Courses
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Comprehensive design and technical training courses to boost
                your career
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="container mx-auto px-4">
            {courses.map((course) => (
              <div key={course.id} className="mb-24">
                <div className="relative">
                  {/* Background Glow */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-[var(--navy-blue)]/5 via-[var(--light-blue)]/5 to-[var(--red)]/5 rounded-3xl blur-2xl"></div>

                  {/* Main Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl transition-all duration-500">
                    {/* Header Section */}
                    <div className="p-8 md:p-12">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                        {/* Image Section */}
                        <div className="flex-shrink-0">
                          <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--navy-blue)] via-[var(--light-blue)] to-[var(--red)] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl">
                              <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20"></div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 space-y-6">
                          <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                              <span className="bg-gradient-to-r from-[var(--navy-blue)] via-[var(--green)] to-[var(--red)] bg-clip-text text-transparent">
                                {course.title}
                              </span>
                            </h2>

                            <div className="flex flex-wrap items-center gap-6 mb-4">
                              <div className="flex items-center gap-2 bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white px-4 py-2 rounded-full text-sm font-medium">
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {course.duration}
                              </div>
                              <div className="flex items-center gap-2 bg-gradient-to-r from-[var(--red)] to-[var(--navy-blue)] text-white px-4 py-2 rounded-full text-sm font-medium">
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {course.level}
                              </div>
                            </div>
                          </div>

                          <p className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
                            {course.fullDescription}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="px-8 md:px-12 pb-8 md:pb-12 space-y-8">
                      {/* Course Content Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-[var(--navy-blue)]">
                            What You'll Learn
                          </h3>
                          <div className="space-y-3">
                            {course.topics.map((topic, index) => (
                              <div
                                key={index}
                                className="flex items-start p-3 bg-gradient-to-r from-[var(--green)]/5 to-[var(--light-blue)]/5 rounded-xl border border-[var(--green)]/10"
                              >
                                <svg
                                  className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-[var(--green)]"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-gray-700">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-[var(--navy-blue)]">
                            Course Outcomes
                          </h3>
                          <div className="space-y-3">
                            {course.outcomes.map((outcome, index) => (
                              <div
                                key={index}
                                className="flex items-start p-3 bg-gradient-to-r from-[var(--red)]/5 to-[var(--navy-blue)]/5 rounded-xl border border-[var(--red)]/10"
                              >
                                <svg
                                  className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-[var(--red)]"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-gray-700">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Career Options Section */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[var(--navy-blue)]">
                          Career Opportunities
                        </h3>
                        <div className="bg-gradient-to-br from-[var(--navy-blue)]/5 to-[var(--light-blue)]/5 p-6 rounded-2xl border border-[var(--navy-blue)]/10">
                          <div className="flex flex-wrap gap-3">
                            {course.careerOptions.map((career, idx) => (
                              <span
                                key={idx}
                                className="inline-block bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                              >
                                {career}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Who Should Attend */}
                      <div className="bg-gradient-to-br from-[var(--light-blue)]/5 to-[var(--green)]/5 p-6 rounded-2xl border border-[var(--light-blue)]/10">
                        <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-3">
                          Who Should Attend
                        </h3>
                        <p className="text-gray-700">{course.audience}</p>
                      </div>

                      {/* CTA Button */}
                      <div className="text-center pt-8 pb-6 bg-gradient-to-r from-[var(--red)]/10 to-[var(--green)]/10 rounded-2xl border-2 border-[var(--red)]/20 mx-4">
                        <h3 className="text-2xl font-bold text-[var(--navy-blue)] mb-4">
                          Ready to Get Started?
                        </h3>
                        <Link
                          href="/contact-bridgen#enroll"
                          className="group inline-flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--green)] hover:from-[var(--red)]/90 hover:to-[var(--green)]/90 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-xl relative z-10 border-4 border-[var(--red)]/50 min-w-[200px]"
                        >
                          <span className="relative z-10 font-extrabold text-white drop-shadow-lg">
                            Enroll Now
                          </span>
                          <svg
                            className="w-7 h-7 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10 text-white drop-shadow-lg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                          {/* Enhanced glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[var(--red)] to-[var(--green)] rounded-2xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                        </Link>
                        <p className="text-gray-600 mt-4 text-sm">
                          Limited seats available - Enroll today!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[var(--navy-blue)] via-[var(--green)] to-[var(--navy-blue)] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[var(--green)]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--red)]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Accelerate Your Career?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join our community of successful graduates and start building
                your professional skills today.
              </p>
              <Link
                href="/contact-bridgen"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-[var(--green)] to-[var(--red)] hover:from-[var(--green)]/90 hover:to-[var(--red)]/90 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
