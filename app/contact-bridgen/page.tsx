"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Link from "next/link";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll by filling out the contact form on this page, calling our admissions office, or visiting our campus in person. Our team will guide you through the enrollment process and help you choose the right course for your goals.",
    },
    {
      question: "What are the payment options?",
      answer:
        "We offer flexible payment options including full payment, installment plans, and student loans through our partner financial institutions. Please contact our admissions team for specific details about payment plans for your chosen course.",
    },
    {
      question: "Do you offer placement assistance?",
      answer:
        "Yes, we provide comprehensive placement assistance including portfolio development, interview preparation, and connections with industry partners. Our dedicated placement cell works to help students find suitable job opportunities after course completion.",
    },
    {
      question: "What are the computer requirements for the courses?",
      answer:
        "For most of our courses, you'll need a computer with at least 8GB RAM, a multi-core processor, and a dedicated graphics card for rendering software. Specific requirements vary by course, and we provide detailed specifications during orientation.",
    },
    {
      question: "Can I visit the campus before enrolling?",
      answer:
        "Absolutely! We encourage prospective students to visit our campus, meet our faculty, and get a feel for our learning environment. Please contact us to schedule a campus tour at a time convenient for you.",
    },
    {
      question: "Do you offer job guarantees?",
      answer:
        "While we don't guarantee job placements, our industry connections and placement assistance have helped over 85% of our graduates secure positions within 3 months of completing their courses.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section with Parallax Effect */}
        <section className="relative py-20 bg-gradient-to-r from-[var(--navy-blue)] to-[#1a365d] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/blueprint-pattern.svg')] bg-center"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Let's Start a
                <span className="text-[var(--green)] block md:inline">
                  {" "}
                  Conversation
                </span>
              </h1>
              <div className="w-24 h-1 bg-[var(--green)] mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Have questions about our courses? Want to visit our campus?
                We're here to guide you on your creative journey.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center bg-[var(--red)] hover:bg-red-600 text-white font-medium py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Contact Us Now
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                <a
                  href="tel:+919061002200"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:border-[var(--green)] text-white font-medium py-4 px-8 rounded-lg transition-all"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Us Directly
                </a>
              </div>
            </div>
          </div>

          {/* Wave SVG Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="fill-white"
            >
              <path d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,48C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-4">
                  Why Reach Out To Us?
                </h2>
                <div className="w-20 h-1 bg-[var(--green)] mx-auto mb-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="bg-[var(--navy-blue)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                    Course Guidance
                  </h3>
                  <p className="text-gray-600">
                    Confused about which course is right for you? Our experts
                    will help you choose the perfect program based on your
                    skills and career goals.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="bg-[var(--navy-blue)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                    Schedule a Visit
                  </h3>
                  <p className="text-gray-600">
                    Want to see our facilities? Contact us to schedule a campus
                    tour where you can meet instructors and see our students in
                    action.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="bg-[var(--navy-blue)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy-blue)] mb-4">
                    Career Support
                  </h3>
                  <p className="text-gray-600">
                    Learn about our job placement program and how we connect our
                    graduates with industry opportunities both locally and in
                    the Gulf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <div id="contact-form">
          <ContactSection />
        </div>

        {/* FAQ Section with Accordion */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--navy-blue)] mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="w-20 h-1 bg-[var(--green)] mx-auto mb-6"></div>
                <p className="text-lg text-gray-700">
                  Find answers to common questions about our courses,
                  admissions, and more.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-xl font-semibold text-[var(--navy-blue)]">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-[var(--navy-blue)] transform transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
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
                    </button>
                    <div
                      className={`px-6 pt-0 overflow-hidden transition-all duration-300 ${
                        openFaq === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--navy-blue)] to-[#1a365d)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Creative Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of successful graduates who have built exciting
              careers in design and visualization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center bg-[var(--green)] hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-all"
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
                href="/student-placement-success"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:border-[var(--green)] text-white font-medium py-3 px-8 rounded-lg transition-all"
              >
                Success Stories
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
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
