import { CourseJsonLd, FaqJsonLd } from "../components/JsonLd";

const courses = [
  {
    id: "interior-architecture",
    title: "Diploma in Interior Architecture",
    description: "Bridge to Next Generation - Turning Passion into Profession.",
    fullDescription:
      "At Bridgen, we are dedicated to empowering students with practical skills and industry knowledge, paving the way for rewarding careers in the creative and architectural fields.",
  },
  {
    id: "autocad",
    title: "AutoCAD Training",
    description: "Master the fundamental and advanced tools of AutoCAD.",
    fullDescription:
      "Master the fundamental and advanced tools of AutoCAD, the most widely used drafting software in the architectural and engineering industries.",
  },
  {
    id: "3ds-max",
    title: "3ds Max with V-Ray/Corona",
    description:
      "Create stunning visualizations and realistic renders using 3ds Max with V-Ray and Corona.",
    fullDescription:
      "Create stunning visualizations and realistic renders using 3ds Max with V-Ray and Corona. Ideal for interior designers and architects, this course covers modeling, texturing, and advanced lighting techniques to produce photorealistic 3D renderings.",
  },
  {
    id: "sketchup",
    title: "SketchUp with V-Ray",
    description:
      "Learn to create quick and efficient 3D models using SketchUp and enhance them with V-Ray rendering.",
    fullDescription:
      "Learn to create quick and efficient 3D models using SketchUp and enhance them with V-Ray rendering. Perfect for both beginners and professionals aiming to speed up their design process.",
  },
  {
    id: "photoshop",
    title: "Photoshop for Designers",
    description:
      "Master the art of creating presentation boards, editing images, and enhancing design visuals with Adobe Photoshop.",
    fullDescription:
      "This focused course teaches designers how to leverage Photoshop to enhance their presentations and renderings. You'll learn specialized techniques for architectural and interior design visualization.",
  },
  {
    id: "revit",
    title: "Revit Architecture",
    description:
      "Learn the fundamentals of Building Information Modeling (BIM) with Autodesk Revit.",
    fullDescription:
      "Learn the fundamentals of BIM with Autodesk Revit, including creating and managing building models. Ideal for architectural and engineering professionals looking to integrate BIM in their practice.",
  },
];

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
];

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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

      {children}
    </>
  );
}
