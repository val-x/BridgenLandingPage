import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CourseJsonLd, FaqJsonLd } from "../components/JsonLd";
import type { Metadata } from "next";

// Define metadata for this page
export const metadata: Metadata = {
  title: "Courses - Bridgen",
  description:
    "Explore our comprehensive range of Interior Design, Architectural Visualization, and CAD courses at Bridgen. With a 99% placement rate, our hands-on courses prepare you for successful careers in India and abroad.",
  openGraph: {
    title: "Interior Design & CAD Courses - Bridgen",
    description:
      "Launch your career with our professional Interior Design and CAD courses. From AutoCAD to 3ds Max, we offer comprehensive training with a 99% placement rate for all skill levels.",
    url: "https://bridgentraining.com/courses",
    type: "website",
  },
};

const courses = [
  {
    id: "interior-architecture",
    title: "Diploma in Interior Architecture",
    duration: "Comprehensive Program",
    price: "Contact for Pricing",
    icon: (
      <svg
        className="w-16 h-16"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
      </svg>
    ),
    description:
      "Bridge to Next Generation - Turning Passion into Profession. Our comprehensive program empowers students with practical skills for rewarding careers.",
    fullDescription:
      "At Bridgen, we are dedicated to empowering students with practical skills and industry knowledge, paving the way for rewarding careers in the creative and architectural fields. Our programs are meticulously designed to meet industry demands, focusing on skill development, hands-on learning, and real-world application.",
    topics: [
      "Design Basics & Principles",
      "Advanced Design Concepts",
      "Architectural Designing",
      "Technical Services & Systems",
      "Interior & Exterior Landscaping",
      "Estimation, Costing & Specification",
      "Software Training (AutoCAD, 3DS Max, SketchUp, Photoshop)",
      "Portfolio Development & Presentation Skills",
    ],
    outcomes: [
      "Master design principles and spatial planning",
      "Create professional technical drawings and 3D visualizations",
      "Develop project management and client interaction skills",
      "Build a comprehensive portfolio for job applications",
      "Access placement opportunities with our 99% success rate",
    ],
    audience:
      "Perfect for aspiring interior designers, architects, and creative professionals looking for comprehensive training.",
    highlights: [
      "Hands-on workshops and real-time projects",
      "99% placement assurance with global opportunities",
      "Comprehensive curriculum from basics to advanced concepts",
      "Industry exposure through site visits and expert panels",
      "Career guidance and portfolio development support",
    ],
    modules: [
      {
        name: "Design Basics",
        description:
          "Foundational knowledge in interior and architectural design principles.",
        topics: [
          "Elements of Design",
          "Principles of Design",
          "Spatial Organizations",
          "Circulation Principles",
        ],
      },
      {
        name: "Design Concept",
        description: "Advanced concepts and creative thinking development.",
        topics: [
          "Anthropometry",
          "Ergonomics",
          "Space Planning for Residential and Commercial Spaces",
          "Interior Design Styles",
          "Furniture Design and Detailing",
        ],
      },
      {
        name: "Design Development",
        description: "Real-world application through hands-on projects.",
        topics: [
          "Kitchen Design",
          "Furniture Styles",
          "Interior Landscaping",
          "Architectural Planning and Exterior Design",
        ],
      },
      {
        name: "Execution",
        description: "Technical detailing and project implementation.",
        topics: [
          "Drafting Techniques (Manual and Software)",
          "Lighting, Plumbing, and Electrical Design",
          "Acoustic and Thermal Insulation",
          "Safety and Automation Systems",
        ],
      },
      {
        name: "Presentation",
        description: "Professional skills to showcase work effectively.",
        topics: [
          "Portfolio Making",
          "Presentation Boards",
          "Client Interaction Techniques",
          "Digital Visualization (3D, Rendering, and Animation)",
        ],
      },
    ],
    careerOptions: [
      "Interior and Spatial Designer",
      "Interior Decorator and Planner",
      "Space Planning Consultant",
      "Decorator Consultant",
      "3D Visualizer",
      "Furniture Designer",
      "Turnkey Designer",
      "Academician",
      "Exhibition Designer",
      "Event Designer",
      "Production Designer (Theatre/TV/Film)",
      "Visual Merchandiser",
      "Interior Stylist",
      "Artist/Blogger/Photographer",
      "Furniture Curator",
    ],
  },
  {
    id: "autocad",
    title: "AutoCAD Training",
    duration: "1 Month",
    price: "₹15,000",
    icon: (
      <svg
        className="w-16 h-16"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
    description:
      "Master the fundamental and advanced tools of AutoCAD, the most widely used drafting software in the architectural and engineering industries.",
    fullDescription:
      "Master the fundamental and advanced tools of AutoCAD, the most widely used drafting software in the architectural and engineering industries. Learn how to create precise 2D drawings, technical plans, and basic 3D models through hands-on training and real-world projects.",
    topics: [
      "Interface Navigation and Customization",
      "2D Drafting Techniques",
      "Dimensioning and Annotation",
      "Plotting and Printing",
      "Introduction to 3D Modeling",
      "Working with blocks and layers",
      "Floor plans and elevations",
      "Working with layouts and printing",
    ],
    outcomes: [
      "Create professional architectural drawings",
      "Develop efficient workflow techniques",
      "Understand industry standards and best practices",
      "Build a portfolio of completed projects",
    ],
    audience:
      "Ideal for architects, interior designers, civil engineers, draftsmen, and professionals looking to enhance drafting skills.",
    careerOptions: [
      "CAD Technician",
      "Draftsman",
      "Design Engineer",
      "Architectural Assistant",
    ],
  },
  {
    id: "3ds-max",
    title: "3ds Max with V-Ray/Corona",
    duration: "2 Months",
    price: "₹25,000",
    icon: (
      <svg
        className="w-16 h-16"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.5 12a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"></path>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
      </svg>
    ),
    description:
      "Create stunning visualizations and realistic renders using 3ds Max with V-Ray and Corona. Master modeling, texturing, and advanced lighting techniques.",
    fullDescription:
      "Create stunning visualizations and realistic renders using 3ds Max with V-Ray and Corona. Ideal for interior designers and architects, this course covers modeling, texturing, and advanced lighting techniques to produce photorealistic 3D renderings that will set your design presentations apart.",
    topics: [
      "3D Modeling Basics",
      "Material and Texture Mapping",
      "Lighting with V-Ray and Corona",
      "Rendering Techniques",
      "Animation and Walkthroughs",
      "Post-production integration",
      "Interior scene setup",
      "Exterior visualization techniques",
    ],
    outcomes: [
      "Create detailed 3D models from scratch",
      "Set up photorealistic materials and lighting",
      "Master rendering settings for optimal results",
      "Develop an efficient visualization workflow",
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
    price: "₹18,000",
    icon: (
      <svg
        className="w-16 h-16"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 10h18v10H3V10zM3 4h18v4H3V4z"></path>
      </svg>
    ),
    description:
      "Learn to create quick and efficient 3D models using SketchUp and enhance them with V-Ray rendering. Perfect for speeding up your design process.",
    fullDescription:
      "Learn to create quick and efficient 3D models using SketchUp and enhance them with V-Ray rendering. Perfect for both beginners and professionals aiming to speed up their design process, this course takes you from basics to advanced techniques to produce stunning visualizations efficiently.",
    topics: [
      "SketchUp Interface and Navigation",
      "Creating 3D Models and Layouts",
      "V-Ray for Realistic Renderings",
      "Exporting and Presentation Techniques",
      "Component creation and organization",
      "Material application and management",
      "Layout and presentation techniques",
      "Scene optimization",
    ],
    outcomes: [
      "Create accurate 3D models quickly",
      "Develop efficient modeling techniques",
      "Set up professional materials and lighting",
      "Produce high-quality renders",
      "Generate presentation-ready outputs",
    ],
    audience:
      "Ideal for interior designers, decorators, and anyone needing quick 3D visualization skills.",
    careerOptions: ["Interior Designer", "3D Modeler", "Furniture Designer"],
  },
  {
    id: "photoshop",
    title: "Photoshop for Designers",
    duration: "1 Month",
    price: "₹12,000",
    icon: (
      <svg
        className="w-16 h-16"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14c-3.36 0-5-1.94-5-5 0-3.31 1.79-5 5-5 1.76 0 3.22.61 4.08 1.76l-1.93 1.55C13.81 9.85 13 9.5 12 9.5c-1.55 0-2.5 1.13-2.5 3 0 1.97.82 3 2.5 3 1.17 0 1.93-.47 2.33-1.61H12V11.5h4.15v1.38c0 2.39-1.5 4.12-4.15 4.12z"></path>
      </svg>
    ),
    description:
      "Master the art of creating presentation boards, editing images, and enhancing design visuals with Adobe Photoshop for portfolios and client presentations.",
    fullDescription:
      "This focused course teaches designers how to leverage Photoshop to enhance their presentations and renderings. You'll learn specialized techniques for architectural and interior design visualization that will elevate your final presentations, from basic image editing to creating professional portfolios.",
    topics: [
      "Image Editing and Retouching",
      "Creating Mood Boards",
      "Presentation Layouts",
      "Design Mockups and Render Adjustments",
      "Layer management and masking",
      "Post-production for 3D renders",
      "Color correction and adjustment",
      "Exporting for print and digital media",
    ],
    outcomes: [
      "Enhance architectural and interior renderings",
      "Create professional presentation boards",
      "Develop efficient post-production workflows",
      "Master image correction techniques",
      "Prepare files for various output methods",
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
    price: "₹30,000",
    icon: (
      <svg
        className="w-16 h-16"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 2.27V2c-5 .5-9 4.76-9 10s4 9.5 9 10v-.27A9.97 9.97 0 0 1 4 12c0-5.08 3.77-9.4 9-9.73zM14.82 4A9.86 9.86 0 0 1 19 8.55V4h-4.18zM19 9.65V12H5l7-7c1.3 1.3 5.4 5.4 7 7zm-6.48-1.63L9 10.55v4.9c2.3-2.3 3.5-3.5 3.52-3.52 2.77 2.77 5.07 5.07 6.48 6.48V11l-6.48-2.98zm0 11.08c-1.53-1.53-2.93-2.93-6.52-6.52V20h11v-5.5c-1.43 1.43-2.95 2.95-4.48 4.48z"></path>
      </svg>
    ),
    description:
      "Learn the fundamentals of Building Information Modeling (BIM) with Autodesk Revit, creating and managing building models for architectural projects.",
    fullDescription:
      "Learn the fundamentals of BIM with Autodesk Revit, including creating and managing building models. Ideal for architectural and engineering professionals looking to integrate BIM in their practice, this comprehensive course covers everything from basic modeling to advanced collaboration techniques.",
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
      "Create custom families and components",
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
  // FAQ data specific to courses
  const coursesFaqData = [
    {
      question: "What learning options do you offer?",
      answer:
        "We offer flexible learning options including online classes, offline classes in our modern training facility, and a hybrid mode combining online and offline sessions for optimal learning based on your convenience.",
    },
    {
      question: "Do I need any prior experience to take these courses?",
      answer:
        "Our beginner-level courses require no prior experience. For advanced courses, basic knowledge of design principles or specific software may be beneficial.",
    },
    {
      question:
        "What career opportunities can I expect after completing your programs?",
      answer:
        "Our graduates find diverse opportunities including: Interior Designer, Space Planning Consultant, 3D Visualizer, Furniture Designer, Exhibition Designer, Visual Merchandiser, CAD Technician, and many more roles in India and abroad, including the Gulf region.",
    },
    {
      question:
        "What is included in your Diploma in Interior Architecture program?",
      answer:
        "Our comprehensive diploma includes 5 modules: Design Basics, Design Concept, Design Development, Execution, and Presentation. The program covers everything from fundamental principles to advanced software training, with hands-on projects and industry exposure.",
    },
    {
      question: "What makes Bridgen's teaching approach different?",
      answer:
        "We focus on hands-on, experiential learning. Our approach includes workshops, panel discussions, design talks, site visits, market studies, and real-time projects to ensure students gain practical knowledge and industry-ready skills.",
    },
    {
      question: "Does Bridgen offer placement assistance?",
      answer:
        "Yes, we have a 99% placement rate. We provide comprehensive career support including portfolio development, interview preparation, and job placement in both Indian and international markets, especially the Gulf region.",
    },
    {
      question: "How long are your software courses?",
      answer:
        "Our software courses range from 1 to 3 months depending on the complexity. AutoCAD, SketchUp, and Photoshop are typically 1-month courses, 3ds Max is 2 months, and Revit Architecture is a comprehensive 3-month program.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Structured Data for Courses */}
      {courses.map((course) => (
        <CourseJsonLd
          key={course.id}
          name={course.title}
          description={course.fullDescription || course.description}
          url={`https://bridgentraining.com/courses#${course.id}`}
        />
      ))}

      {/* FAQ Structured Data */}
      <FaqJsonLd questions={coursesFaqData} />

      <Header />
      <main>
        <section className="py-12 bg-[var(--navy-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Courses
              </h1>
              <div className="w-20 h-1 bg-[var(--green)] mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Comprehensive design and technical training courses to boost
                your career in interior design and architectural visualization
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {courses.map((course) => (
              <div
                key={course.id}
                id={course.id}
                className="mb-16 p-8 bg-white rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center mb-8">
                  <div className="bg-[var(--navy-blue)] text-white p-6 rounded-lg flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                    {course.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[var(--navy-blue)]">
                      {course.title}
                    </h2>
                    <div className="flex flex-wrap items-center mt-3">
                      <div className="mr-8 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 text-[var(--green)] mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{course.duration}</span>
                      </div>
                      <div className="mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 text-[var(--green)] mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{course.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-lg text-gray-700 mb-4">
                    {course.fullDescription}
                  </p>
                </div>

                {/* Display modules if they exist (for Interior Architecture course) */}
                {course.id === "interior-architecture" && course.modules && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                      Course Modules
                    </h3>
                    <div className="space-y-4">
                      {course.modules.map((module, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium text-[var(--navy-blue)]">
                            {module.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 mb-2">
                            {module.description}
                          </p>
                          <ul className="text-sm grid grid-cols-1 md:grid-cols-2 gap-1">
                            {module.topics.map((topic, i) => (
                              <li key={i} className="flex items-start">
                                <svg
                                  className="w-4 h-4 text-[var(--green)] mr-1 mt-0.5 flex-shrink-0"
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
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* If course has highlights, display them */}
                {course.highlights && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                      Program Highlights
                    </h3>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-[var(--red)] mr-2 mt-1 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                      What You'll Learn
                    </h3>
                    <ul className="space-y-3">
                      {course.topics.map((topic, index) => (
                        <li key={index} className="flex">
                          <svg
                            className="w-5 h-5 text-[var(--green)] mr-3 mt-1 flex-shrink-0"
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
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                      Course Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {course.outcomes.map((outcome, index) => (
                        <li key={index} className="flex">
                          <svg
                            className="w-5 h-5 text-[var(--red)] mr-3 mt-1 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Career Options Section */}
                {course.careerOptions && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                      Career Opportunities
                    </h3>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="flex flex-wrap gap-2">
                        {course.careerOptions.map((career, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-3">
                    Who Should Attend
                  </h3>
                  <p className="text-gray-700">{course.audience}</p>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="/contact-bridgen#enroll"
                    className="inline-flex items-center justify-center bg-[var(--red)] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Enroll Now
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
            ))}
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-4">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Join our community of successful graduates and start building your
              professional skills today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--navy-blue)] hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-colors"
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
