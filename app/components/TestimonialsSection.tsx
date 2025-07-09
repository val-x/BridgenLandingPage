import Image from "next/image";
import studentData from "../../public/data/StudentReviews.json";

// Type definition for testimonial data structure
interface Testimonial {
  id: number;
  name: string | null;
  role: string;
  company: string;
  course: string;
  quote: string;
  skills: string[];
  highlights: string[];
  profileImage: string | null; // Future: Will contain profile image URLs
}

/*
 * FUTURE ENHANCEMENT: Profile Images
 * To add profile images to testimonials:
 * 1. Add student profile images to: public/images/profiles/
 * 2. Update the StudentReviews.json to include profileImage field for each review
 * 3. Set profileImage URLs like: "/images/profiles/student-name.jpg"
 * 4. The component will automatically display images when available, fallback to initials
 */

// Transform student reviews to testimonial format
const getTestimonials = (): Testimonial[] => {
  return studentData.reviews
    .filter((review) => review.name) // Only include reviews with names
    .slice(0, 4) // Take first 4 reviews
    .map((review) => ({
      id: review.id,
      name: review.name,
      role: review.current_position || "Graduate",
      company: review.current_position?.includes("UAE")
        ? "UAE Company"
        : review.current_position?.includes("Business Owner")
        ? review.current_position
        : studentData.institute.name,
      course: review.course,
      quote: review.review,
      skills: review.skills_learned || [],
      highlights: review.highlights || [],
      // Use actual profile image if available, otherwise null
      profileImage: review.profileImage || null,
    }));
};

const testimonials = getTestimonials();

export default function TestimonialsSection() {
  // Function to get initials from a name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("");
  };

  // Function to truncate long testimonials
  const truncateQuote = (quote: string, maxLength: number = 180) => {
    if (quote.length <= maxLength) return quote;
    return quote.substring(0, maxLength).trim() + "...";
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] mb-4">
            Student Success Stories
          </h2>
          <div className="w-20 h-1 bg-[var(--light-blue)] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from our graduates who have successfully launched their careers
            in design and visualization at {studentData.institute.name},{" "}
            {studentData.institute.location}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0">
                {/* Profile Image Section - Ready for future image integration */}
                <div className="w-24 h-24 rounded-full overflow-hidden bg-[var(--navy-blue)] flex items-center justify-center text-white text-2xl font-bold relative">
                  {testimonial.profileImage ? (
                    // Will display actual profile images when available
                    <Image
                      src={testimonial.profileImage}
                      alt={`${testimonial.name} profile`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  ) : (
                    // Fallback to initials when no profile image is available
                    <span className="text-white text-2xl font-bold">
                      {getInitials(testimonial.name || "")}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <svg
                  className="text-[var(--light-blue)] w-10 h-10 mb-4 opacity-40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.31-.406.7-.754 1.2-1.05v-1.3c-.93.14-1.72.442-2.38.903-.66.46-1.19 1.06-1.58 1.8-.39.75-.59 1.6-.59 2.57 0 .97.2 1.81.59 2.56.39.75.92 1.35 1.58 1.8.66.46 1.45.76 2.38.903v-1.29c-.5-.297-.89-.632-1.2-1.03-.31-.395-.51-1.06-.41-2.02.47.108.97.116 1.52-.013.55-.126.99-.396 1.32-.807.46-.6.69-1.34.69-2.23zm9.45 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.694-1.33-.824-.56-.126-1.07-.136-1.54-.027-.16-.95.09-1.626.4-2.032.31-.406.7-.754 1.2-1.05v-1.3c-.93.14-1.72.442-2.38.903-.66.46-1.19 1.06-1.58 1.8-.39.75-.59 1.6-.59 2.57 0 .97.2 1.81.59 2.56.39.75.92 1.347 1.58 1.81.66.46 1.45.764 2.38.9v-1.29c-.5-.297-.89-.632-1.2-1.03-.31-.395-.51-1.06-.41-2.02.47.108.97.116 1.52-.013.55-.126 1-.396 1.32-.807.46-.6.69-1.34.69-2.23z" />
                </svg>

                <p className="text-gray-700 italic mb-4">
                  "{truncateQuote(testimonial.quote)}"
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-[var(--navy-blue)]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-[var(--green)] font-medium">
                    Course: {testimonial.course}
                  </p>
                </div>

                {/* Skills learned tags */}
                {testimonial.skills.length > 0 && (
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {testimonial.skills.slice(0, 3).map((skill, index) => (
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

                {/* Highlights */}
                {testimonial.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {testimonial.highlights
                      .slice(0, 2)
                      .map((highlight, index) => (
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
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--navy-blue)] mb-6">
            Join Our Growing Community of Successful Designers
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--red)]">
                {Object.keys(studentData.portfolios).length * 50}+
              </div>
              <p className="text-gray-600">Graduates</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--green)]">99%</div>
              <p className="text-gray-600">Placement Rate</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--light-blue)]">
                30+
              </div>
              <p className="text-gray-600">Industry Partners</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--navy-blue)]">
                10+
              </div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap justify-center gap-2">
              {studentData.institute.credentials.map((credential, index) => (
                <span
                  key={index}
                  className="bg-[var(--navy-blue)] text-white text-sm px-3 py-1 rounded-full"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://wa.me/+911234567890"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
}
