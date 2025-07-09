import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import studentData from "../../public/data/StudentReviews.json";
import dynamic from "next/dynamic";

const InteriorDesignProjectCard = dynamic(
  () => import("../components/InteriorDesignProjectCard")
);

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

// Transform student data into portfolio format
const getStudentProjects = () => {
  const projects: any[] = [];

  // Get students with portfolios
  Object.entries(studentData.portfolios).forEach(([studentKey, images]) => {
    // Find matching review data
    const reviewData = studentData.reviews.find(
      (review) =>
        review.name?.toLowerCase().includes(studentKey.toLowerCase()) ||
        studentKey.toLowerCase().includes(review.name?.toLowerCase() || "")
    );

    const studentName =
      reviewData?.name ||
      studentKey.charAt(0).toUpperCase() + studentKey.slice(1);
    const course = reviewData?.course || "Interior Design";
    const position = reviewData?.current_position || "Graduate";

    // Categorize based on course content
    let category = "interior-design";
    if (
      course.includes("3ds Max") ||
      course.includes("V-Ray") ||
      course.includes("3D")
    ) {
      category = "3d-visualization";
    } else if (course.includes("AutoCAD") || course.includes("Architecture")) {
      category = "architectural-drafting";
    }

    // Create project entries for each student
    projects.push({
      id: studentKey,
      title: `${studentName}'s Portfolio`,
      student: studentName,
      course: course,
      year: "2022-2024",
      description:
        reviewData?.review ||
        `Professional interior design work showcasing creativity and technical skills in ${course.toLowerCase()}.`,
      tags: reviewData?.skills_learned || [
        "Interior Design",
        "3D Visualization",
        "Professional Work",
      ],
      category: category,
      images: images as string[],
      highlights: reviewData?.highlights || [],
      position: position,
    });
  });

  return projects;
};

const studentProjects = getStudentProjects();

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
                students at {studentData.institute.name},{" "}
                {studentData.institute.location}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {studentData.institute.credentials.map((credential, index) => (
                  <span
                    key={index}
                    className="bg-[var(--green)] text-white text-sm px-3 py-1 rounded-full"
                  >
                    {credential}
                  </span>
                ))}
              </div>
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
                At {studentData.institute.name}, we believe the best way to
                demonstrate the quality of our education is through the work of
                our students. Here's a selection of projects completed by recent
                graduates across various disciplines.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--navy-blue)]">
                    {studentData.summary.total_reviews}+
                  </div>
                  <div className="text-gray-600">Student Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--navy-blue)]">
                    {Object.keys(studentData.portfolios).length}
                  </div>
                  <div className="text-gray-600">Portfolio Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--navy-blue)]">
                    {studentData.summary.software_training.length}+
                  </div>
                  <div className="text-gray-600">Software Training</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--navy-blue)]">
                    100%
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {studentProjects
                    .filter((project) => project.category === category.id)
                    .map((project) =>
                      category.id === "interior-design" ? (
                        <InteriorDesignProjectCard
                          key={project.id}
                          project={project}
                        />
                      ) : (
                        <div
                          key={project.id}
                          className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                          <div className="relative h-60 bg-gray-200">
                            {project.images && project.images.length > 0 && (
                              <Image
                                src={project.images[0]}
                                alt={`${project.student}'s work`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            )}
                            <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                              {project.images?.length || 0} images
                            </div>
                          </div>
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
                              {project.position && (
                                <p className="w-full mt-1">
                                  <span className="font-medium">
                                    Current Position:
                                  </span>{" "}
                                  {project.position}
                                </p>
                              )}
                            </div>
                            <p className="text-gray-700 mb-4 line-clamp-3">
                              {project.description.length > 150
                                ? `${project.description.substring(0, 150)}...`
                                : project.description}
                            </p>
                            {project.highlights &&
                              project.highlights.length > 0 && (
                                <div className="mb-4">
                                  <div className="text-sm font-medium text-[var(--navy-blue)] mb-2">
                                    Highlights:
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {project.highlights.map(
                                      (highlight: string, index: number) => (
                                        <span
                                          key={index}
                                          className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded"
                                        >
                                          {highlight}
                                        </span>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map(
                                (tag: string, index: number) => (
                                  <span
                                    key={index}
                                    className="bg-gray-100 text-[var(--navy-blue)] text-xs font-medium px-3 py-1 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                )
                              )}
                            </div>
                            {project.images && project.images.length > 1 && (
                              <div className="grid grid-cols-3 gap-2">
                                {project.images
                                  .slice(1, 4)
                                  .map((image: string, index: number) => (
                                    <div
                                      key={index}
                                      className="relative h-16 bg-gray-200 rounded"
                                    >
                                      <Image
                                        src={image}
                                        alt={`${project.student}'s work ${
                                          index + 2
                                        }`}
                                        fill
                                        className="object-cover rounded"
                                        sizes="(max-width: 768px) 33vw, 16vw"
                                      />
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Reviews Section with Profile Images */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-6">
                What Our Students Say
              </h2>
              <p className="text-lg text-gray-700">
                Hear directly from our graduates about their experience and
                success stories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentData.reviews.map((review) => {
                // Function to get initials from a name
                const getInitials = (name: string) => {
                  return name
                    .split(" ")
                    .map((part) => part[0])
                    .join("");
                };

                return (
                  <div
                    key={review.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    {/* Header with Profile Section - Ready for future images */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-[var(--navy-blue)] flex items-center justify-center text-white text-lg font-bold relative flex-shrink-0">
                          {review.profileImage ? (
                            <Image
                              src={review.profileImage}
                              alt={`${review.name} profile`}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          ) : (
                            <span className="text-white text-lg font-bold">
                              {getInitials(review.name || "AS")}
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[var(--navy-blue)]">
                            {review.name || "Anonymous Student"}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {review.course}
                          </p>
                          {review.current_position && (
                            <p className="text-sm text-[var(--green)] font-medium">
                              {review.current_position}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 mb-4 italic">
                        "{review.review}"
                      </p>
                      {review.skills_learned &&
                        review.skills_learned.length > 0 && (
                          <div className="mb-4">
                            <div className="text-sm font-medium text-gray-800 mb-2">
                              Skills Learned:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {review.skills_learned.map((skill, index) => (
                                <span
                                  key={index}
                                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      {review.highlights && review.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {review.highlights.map((highlight, index) => (
                            <span
                              key={index}
                              className="bg-[var(--green)] text-white text-xs px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[var(--navy-blue)] to-blue-800 rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Student Portfolio Development Program
              </h2>
              <p className="text-lg mb-8 text-center text-blue-100">
                At {studentData.institute.name}, we place special emphasis on
                helping students develop professional portfolios that showcase
                their skills and creativity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white text-[var(--navy-blue)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-xl font-semibold mb-2">
                    Real Project Experience
                  </h3>
                  <p className="text-blue-100">
                    Students work on real projects that build their portfolio
                    and give them practical experience in the industry.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-[var(--navy-blue)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-xl font-semibold mb-2">
                    Industry Software Training
                  </h3>
                  <p className="text-blue-100">
                    Comprehensive training in{" "}
                    {studentData.summary.software_training.join(", ")} and other
                    industry-standard tools.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-[var(--navy-blue)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Career Support</h3>
                  <p className="text-blue-100">
                    {studentData.summary.key_features.includes(
                      "Gulf job support"
                    )
                      ? "Gulf job support"
                      : "Career guidance"}{" "}
                    and placement assistance to help students achieve their
                    professional goals.
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
              Join {studentData.institute.name} and develop the skills to create
              impressive design projects for your professional portfolio.
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
