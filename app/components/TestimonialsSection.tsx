import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Interior Designer",
    company: "Dezyne Interiors",
    image: "/testimonial1.jpg",
    quote:
      "Bridgen Training transformed my career. The hands-on approach and industry-focused curriculum gave me the confidence to start my own interior design practice. The instructors are truly experts in their field.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "AutoCAD Specialist",
    company: "ArchViz Studios",
    image: "/testimonial2.jpg",
    quote:
      "I completed the AutoCAD course at Bridgen, and within two months, I secured a well-paying job. The practical training and placement assistance made all the difference in my career trajectory.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "3D Visualization Artist",
    company: "Dream Spaces",
    image: "/testimonial3.jpg",
    quote:
      "Learning 3ds Max with V-Ray at Bridgen was the best decision I made. The course is comprehensive, and the small batch size ensures personalized attention. I now work with top architectural firms.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Freelance Designer",
    company: "Self-employed",
    image: "/testimonial4.jpg",
    quote:
      "Thanks to Bridgen's training in SketchUp and Photoshop, I've built a successful freelance business. Their job portal helped me connect with my first clients, and I haven't looked back since.",
  },
];

export default function TestimonialsSection() {
  // Function to get initials from a name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("");
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
            in design and visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-[var(--navy-blue)] flex items-center justify-center text-white text-2xl font-bold">
                  {getInitials(testimonial.name)}
                </div>
              </div>

              <div>
                <svg
                  className="text-[var(--light-blue)] w-10 h-10 mb-4 opacity-40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.31-.406.7-.754 1.2-1.05v-1.3c-.93.14-1.72.442-2.38.903-.66.46-1.19 1.06-1.58 1.8-.39.75-.59 1.6-.59 2.57 0 .97.2 1.81.59 2.56.39.75.92 1.35 1.58 1.8.66.46 1.45.76 2.38.903v-1.29c-.5-.297-.89-.632-1.2-1.03-.31-.395-.51-1.06-.41-2.02.47.108.97.116 1.52-.013.55-.126.99-.396 1.32-.807.46-.6.69-1.34.69-2.23zm9.45 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.694-1.33-.824-.56-.126-1.07-.136-1.54-.027-.16-.95.09-1.626.4-2.032.31-.406.7-.754 1.2-1.05v-1.3c-.93.14-1.72.442-2.38.903-.66.46-1.19 1.06-1.58 1.8-.39.75-.59 1.6-.59 2.57 0 .97.2 1.81.59 2.56.39.75.92 1.347 1.58 1.81.66.46 1.45.764 2.38.9v-1.29c-.5-.297-.89-.632-1.2-1.03-.31-.395-.51-1.06-.41-2.02.47.108.97.116 1.52-.013.55-.126 1-.396 1.32-.807.46-.6.69-1.34.69-2.23z" />
                </svg>

                <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>

                <div>
                  <h4 className="font-semibold text-[var(--navy-blue)]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
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
              <div className="text-4xl font-bold text-[var(--red)]">1000+</div>
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
