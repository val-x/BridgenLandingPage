import Link from "next/link";

const courses = [
  {
    id: "interior-architecture",
    title: "Diploma in Interior Architecture",
    duration: "Comprehensive Program",
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
      </svg>
    ),
    description:
      "Bridge to Next Generation - Turning Passion into Profession. Our comprehensive diploma program covers design basics to advanced execution with 99% placement rate.",
    topics: [
      "Design Basics & Principles",
      "Space Planning & Design Concept",
      "Design Development & Execution",
      "Technical Services & Detailing",
      "Software Training & Presentation",
    ],
    audience:
      "Ideal for aspiring interior designers, architects, and creative professionals looking for comprehensive training.",
  },
  {
    id: "autocad",
    title: "AutoCAD Training",
    duration: "1 Month",
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
    description:
      "Master the fundamental and advanced tools of AutoCAD, the most widely used drafting software in the architectural and engineering industries.",
    topics: [
      "Interface Navigation and Customization",
      "2D Drafting Techniques",
      "Dimensioning and Annotation",
      "Plotting and Printing",
      "Introduction to 3D Modeling",
    ],
    audience:
      "Ideal for architects, interior designers, engineers, and professionals looking to enhance drafting skills.",
  },
  {
    id: "3ds-max",
    title: "3ds Max with V-Ray/Corona",
    duration: "2 Months",
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.5 12a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"></path>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
      </svg>
    ),
    description:
      "Create stunning visualizations and realistic renders using 3ds Max with V-Ray and Corona. Learn modeling, texturing, and advanced lighting techniques.",
    topics: [
      "3D Modeling Basics",
      "Material and Texture Mapping",
      "Lighting with V-Ray and Corona",
      "Rendering Techniques",
      "Animation and Walkthroughs",
    ],
    audience:
      "Perfect for interior designers, architects, and visualization specialists.",
  },
  {
    id: "sketchup",
    title: "SketchUp with V-Ray",
    duration: "1 Month",
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 10h18v10H3V10zM3 4h18v4H3V4z"></path>
      </svg>
    ),
    description:
      "Learn to create quick and efficient 3D models using SketchUp and enhance them with V-Ray rendering. Perfect for speeding up your design process.",
    topics: [
      "SketchUp Interface and Navigation",
      "Creating 3D Models and Layouts",
      "V-Ray for Realistic Renderings",
      "Exporting and Presentation Techniques",
      "Efficient Workflow Practices",
    ],
    audience:
      "Ideal for interior designers, decorators, and anyone needing quick 3D visualization skills.",
  },
  {
    id: "photoshop",
    title: "Photoshop for Designers",
    duration: "1 Month",
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14c-3.36 0-5-1.94-5-5 0-3.31 1.79-5 5-5 1.76 0 3.22.61 4.08 1.76l-1.93 1.55C13.81 9.85 13 9.5 12 9.5c-1.55 0-2.5 1.13-2.5 3 0 1.97.82 3 2.5 3 1.17 0 1.93-.47 2.33-1.61H12V11.5h4.15v1.38c0 2.39-1.5 4.12-4.15 4.12z"></path>
      </svg>
    ),
    description:
      "Master the art of creating presentation boards, editing images, and enhancing design visuals with Adobe Photoshop for portfolios and client presentations.",
    topics: [
      "Image Editing and Retouching",
      "Creating Mood Boards",
      "Presentation Layouts",
      "Design Mockups",
      "Render Adjustments",
    ],
    audience:
      "Essential for interior designers, architects, and professionals who need to create professional presentations.",
  },
  {
    id: "revit",
    title: "Revit Architecture",
    duration: "3 Months",
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 2.27V2c-5 .5-9 4.76-9 10s4 9.5 9 10v-.27A9.97 9.97 0 0 1 4 12c0-5.08 3.77-9.4 9-9.73zM14.82 4A9.86 9.86 0 0 1 19 8.55V4h-4.18zM19 9.65V12H5l7-7c1.3 1.3 5.4 5.4 7 7zm-6.48-1.63L9 10.55v4.9c2.3-2.3 3.5-3.5 3.52-3.52 2.77 2.77 5.07 5.07 6.48 6.48V11l-6.48-2.98zm0 11.08c-1.53-1.53-2.93-2.93-6.52-6.52V20h11v-5.5c-1.43 1.43-2.95 2.95-4.48 4.48z"></path>
      </svg>
    ),
    description:
      "Learn the fundamentals of Building Information Modeling (BIM) with Autodesk Revit, creating and managing building models for architectural projects.",
    topics: [
      "Introduction to BIM and Revit",
      "Creating Architectural Models",
      "Family Creation and Customization",
      "Project Collaboration and Documentation",
      "Advanced BIM Techniques",
    ],
    audience:
      "Ideal for architectural and engineering professionals looking to integrate BIM in their practice.",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-16 md:py-24" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] mb-4">
            Our Courses
          </h2>
          <div className="w-20 h-1 bg-[var(--green)] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Comprehensive training programs designed to build your career in
            interior design and architectural visualization with 99% placement
            assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-[var(--navy-blue)] text-white p-6 flex items-center justify-center">
                <div className="text-center">
                  {course.icon}
                  <h3 className="text-xl font-bold mt-4">{course.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {course.duration}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{course.description}</p>

                <h4 className="font-semibold text-[var(--navy-blue)] mb-2">
                  Key Topics:
                </h4>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-[var(--green)] mr-2 mt-0.5"
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
                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700">
                  <strong>Ideal for:</strong> {course.audience}
                </div>

                <div className="mt-6">
                  <Link
                    href={`/courses#${course.id}`}
                    className="inline-flex items-center justify-center w-full bg-[var(--navy-blue)] hover:bg-[#00264d] text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Learn More
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center bg-[var(--red)] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            View All Course Details
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
        </div>
      </div>
    </section>
  );
}
