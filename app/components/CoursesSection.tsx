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
  Award,
  Clock,
} from "lucide-react";

const courses = [
  {
    id: "interior-design-diploma",
    title: "Diploma in Interior Design",
    duration: "6 or 12 months",
    icon: <Home className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
    description:
      "Comprehensive interior design diploma program with hands-on training and real project experience.",
    topics: [
      "Design Fundamentals",
      "Space Planning",
      "Materials & Finishes",
      "AutoCAD + SketchUp + Photoshop + V-Ray",
      "On-site training and practical projects",
    ],
    audience:
      "Perfect for aspiring interior designers looking for comprehensive training with government recognition.",
    features: [
      "Rutronix-authorised centre certificate",
      "Real project training",
      "On-site visits",
    ],
  },
  {
    id: "autocad",
    title: "AutoCAD Drafting",
    duration: "1 Month",
    icon: <Layers3 className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
    description:
      "Master AutoCAD for Civil, Interior, and Architectural drafting with industry-standard techniques.",
    topics: [
      "2D Drafting Techniques",
      "Civil / Interior / Architecture",
      "Dimensioning and Annotation",
      "Plotting and Printing",
      "Industry Best Practices",
    ],
    audience:
      "Ideal for architects, interior designers, engineers, and professionals looking to enhance drafting skills.",
    features: [
      "Certificate from Rutronix-authorised centre",
      "Industry-focused training",
    ],
  },
  {
    id: "3d-visualization",
    title: "3D Visualization with SketchUp & V-Ray",
    duration: "2 Months",
    icon: <Sun className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
    description:
      "Create stunning 3D visualizations and realistic renders using SketchUp and V-Ray rendering.",
    topics: [
      "SketchUp 3D Modeling",
      "V-Ray Rendering",
      "Material and Texture Mapping",
      "Lighting Techniques",
      "Presentation Skills",
    ],
    audience:
      "Perfect for interior designers, architects, and visualization specialists.",
    features: [
      "Certificate from Rutronix-authorised centre",
      "Portfolio development",
    ],
  },
  {
    id: "photoshop",
    title: "Photoshop for Presentations",
    duration: "1 Month",
    icon: <ImageIcon className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
    description:
      "Master Photoshop for creating professional presentations and enhancing design visuals.",
    topics: [
      "Image Editing and Retouching",
      "Creating Mood Boards",
      "Presentation Layouts",
      "Design Mockups",
      "Portfolio Enhancement",
    ],
    audience:
      "Essential for interior designers, architects, and professionals who need to create professional presentations.",
    features: [
      "Certificate from Rutronix-authorised centre",
      "Real project work",
    ],
  },
];

const softwarePackages = [
  {
    title: "AutoCAD Drafting",
    description: "Civil / Interior / Architecture",
    duration: "1 Month",
    icon: <Layers3 className="w-8 h-8" />,
  },
  {
    title: "3D Visualization",
    description: "SketchUp & V-Ray",
    duration: "2 Months",
    icon: <Sun className="w-8 h-8" />,
  },
  {
    title: "Photoshop",
    description: "For Presentations",
    duration: "1 Month",
    icon: <ImageIcon className="w-8 h-8" />,
  },
];

export default function CoursesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--navy-blue)] via-[var(--green)] to-[var(--red)] bg-clip-text text-transparent mb-4">
            Our Top Courses
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Comprehensive training programs designed to transform your creative
            passion into professional expertise. Choose from our range of
            industry-focused courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-[var(--navy-blue)]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] text-white p-2 rounded-lg">
                    {course.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-[var(--red)] to-[var(--green)] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] bg-clip-text text-transparent mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Topics */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--navy-blue)] mb-2">
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-1">
                    {course.topics.slice(0, 3).map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-[var(--green)] mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                {course.features && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 bg-[var(--green)]/10 text-[var(--green)] text-xs px-2 py-1 rounded-full"
                        >
                          <Award className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Audience */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 italic">
                    {course.audience}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[var(--navy-blue)] to-[var(--light-blue)] hover:from-[var(--navy-blue)]/90 hover:to-[var(--light-blue)]/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Software-Only Packages Section */}
        <div className="bg-gradient-to-br from-[var(--navy-blue)]/5 to-[var(--green)]/5 rounded-2xl p-8 border-2 border-[var(--navy-blue)]/20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] bg-clip-text text-transparent mb-4">
              Software-Only Packages
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Focused training on specific software tools for professionals who
              want to enhance their technical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softwarePackages.map((package_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-[var(--green)]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white p-2 rounded-lg">
                    {package_.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--navy-blue)]">
                      {package_.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {package_.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{package_.duration}</span>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 bg-[var(--green)]/10 text-[var(--green)] text-xs px-2 py-1 rounded-full">
                    <Award className="w-3 h-3" />
                    Certificate from Rutronix-authorised centre
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Courses CTA */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[var(--green)] to-[var(--red)] hover:from-[var(--green)]/90 hover:to-[var(--red)]/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
