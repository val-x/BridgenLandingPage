import Link from "next/link";
import {
  Home,
  Layers3,
  Sun,
  Box,
  ImageIcon,
  Building,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    id: "interior-architecture",
    title: "Diploma in Interior Architecture",
    duration: "Comprehensive Program",
    icon: <Home className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
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
    icon: <Layers3 className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
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
    icon: <Sun className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
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
    icon: <Box className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
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
    icon: <ImageIcon className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
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
    icon: <Building className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
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
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="text-white text-center">{course.icon}</div>
                </div>
              </div>

              {/* Course Header */}
              <div className="bg-[var(--navy-blue)] text-white p-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold">{course.title}</h3>
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
                      <CheckCircle className="w-4 h-4 text-[var(--green)] mr-2 mt-0.5" />
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
                    <ArrowRight className="w-4 h-4 ml-2" />
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
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
