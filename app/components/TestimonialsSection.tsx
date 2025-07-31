"use client";

import Image from "next/image";
import studentData from "../../public/data/StudentReviews.json";

// Function to get initials from a name
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
};

export default function TestimonialsSection() {
  // Filter reviews that have names and are not null
  const validReviews = studentData.reviews.filter(
    (review) => review.name && review.name.trim() !== ""
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--navy-blue)] via-[var(--green)] to-[var(--red)] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-2xl">
            Student Success Stories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto mb-6 shadow-lg"></div>
          <p className="max-w-2xl mx-auto text-white font-medium drop-shadow-2xl">
            Hear from our graduates who have successfully launched their careers
            in design and visualization at Bridgen Training, Kozhikode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {validReviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white/30 sm:bg-white/20 backdrop-blur-md rounded-lg shadow-xl overflow-hidden p-6 md:p-8 border-2 border-white/60 sm:border-white/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] flex items-center justify-center text-white text-lg font-bold relative flex-shrink-0 shadow-lg">
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
                <div>
                  <h4
                    className="font-bold text-[var(--light-blue)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                    style={{
                      textShadow:
                        "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(76,201,240,0.2)",
                    }}
                  >
                    {review.name}
                  </h4>
                  <p className="text-sm text-white font-medium drop-shadow-lg">
                    {review.course}
                  </p>
                  {review.current_position && (
                    <p
                      className="text-sm text-[var(--red-light)] font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                      style={{
                        textShadow:
                          "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(247,127,138,0.6)",
                      }}
                    >
                      {review.current_position}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-white font-medium italic mb-4 leading-relaxed drop-shadow-2xl">
                "{review.review}"
              </p>
              {review.skills_learned && review.skills_learned.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {review.skills_learned.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-[var(--light-blue)] text-white text-xs px-3 py-1 rounded font-bold shadow-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              {review.highlights && review.highlights.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {review.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="bg-[var(--green)] text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className="text-3xl font-bold text-[var(--light-blue)] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), 0 0 12px rgba(76,201,240,0.2)",
              }}
            >
              99%
            </div>
            <div className="text-white font-medium drop-shadow-lg">
              Placement Rate
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold text-[var(--red-light)] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), 0 0 12px rgba(247,127,138,0.8)",
              }}
            >
              500+
            </div>
            <div className="text-white font-medium drop-shadow-lg">
              Students Trained
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold text-[var(--green)] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), 0 0 12px rgba(42,157,143,0.8)",
              }}
            >
              10+
            </div>
            <div className="text-white font-medium drop-shadow-lg">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold text-[var(--red)] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), 0 0 12px rgba(230,57,70,0.8)",
              }}
            >
              50+
            </div>
            <div className="text-white font-medium drop-shadow-lg">
              Industry Partners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
