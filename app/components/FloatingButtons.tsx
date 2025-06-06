"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingButtons() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
    email: "",
  });
  const [submitMethod, setSubmitMethod] = useState("whatsapp");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmitMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for both WhatsApp and email
    const message = `Hello! I'm ${formData.name} and I'm interested in Bridgen Training programs.
    
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🎓 Course of Interest: ${formData.course}
💬 My Message: ${formData.message}

I'm excited to start my success story with Bridgen Training!`;

    // Close the form after submission
    setIsFormOpen(false);

    if (submitMethod === "whatsapp") {
      // Send via WhatsApp
      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = "919061002200";
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        "_blank"
      );
    } else {
      // Send via Email
      const subject = encodeURIComponent(`Quick Enquiry from ${formData.name}`);
      const encodedMessage = encodeURIComponent(message);
      window.location.href = `mailto:hello@bridgentraining.com?subject=${subject}&body=${encodedMessage}`;
    }

    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      course: "",
      message: "",
      email: "",
    });
  };

  return (
    <div className="fixed right-4 md:right-4 bottom-10 md:bottom-10 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/+919061002200?text=Hello%20Bridgen%20Team%2C%0A%0AI'm%20interested%20in%20exploring%20career%20opportunities%20in%20design.%20I'd%20like%20to%20know%20more%20about%20your%20professional%20training%20programs%20and%20placement%20success.%20%0A%0ALooking%20forward%20to%20your%20response.%0A%0AThank%20you!"
        className="flex items-center justify-center bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200"
        title="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-6 h-6"
          fill="var(--green)"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>

      {/* Enquiry Button */}
      <button
        onClick={() => setIsFormOpen(!isFormOpen)}
        className="flex items-center justify-center bg-[var(--navy-blue)] hover:bg-[#00264d] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        title="Quick Enquiry"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Enquiry Form */}
      {isFormOpen && (
        <div className="absolute right-0 md:right-0 bottom-16 md:bottom-auto md:mt-16 w-[calc(100vw-2rem)] md:w-80 max-w-sm bg-white rounded-lg shadow-xl p-4 border border-gray-200 z-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[var(--navy-blue)]">
              Quick Enquiry
            </h3>
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[var(--navy-blue)] focus:border-[var(--navy-blue)] text-gray-900"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[var(--navy-blue)] focus:border-[var(--navy-blue)] text-gray-900"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[var(--navy-blue)] focus:border-[var(--navy-blue)] text-gray-900"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Course Interest
              </label>
              <select
                id="course"
                name="course"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[var(--navy-blue)] focus:border-[var(--navy-blue)] text-gray-900"
                required
                value={formData.course}
                onChange={handleInputChange}
              >
                <option value="">Select a course</option>
                <option value="interior-design">Interior Design</option>
                <option value="autocad">AutoCAD Training</option>
                <option value="3ds-max">3ds Max with V-Ray/Corona</option>
                <option value="sketchup">SketchUp with V-Ray/Corona</option>
                <option value="photoshop">Photoshop for Designers</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[var(--navy-blue)] focus:border-[var(--navy-blue)] text-gray-900"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Choose Contact Method
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="whatsapp-quick"
                    name="contact-method-quick"
                    value="whatsapp"
                    checked={submitMethod === "whatsapp"}
                    onChange={handleSubmitMethodChange}
                    className="h-4 w-4 text-[var(--navy-blue)] focus:ring-[var(--navy-blue)]"
                  />
                  <label
                    htmlFor="whatsapp-quick"
                    className="ml-2 text-gray-700 text-sm"
                  >
                    WhatsApp
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="email-quick"
                    name="contact-method-quick"
                    value="email"
                    checked={submitMethod === "email"}
                    onChange={handleSubmitMethodChange}
                    className="h-4 w-4 text-[var(--navy-blue)] focus:ring-[var(--navy-blue)]"
                  />
                  <label
                    htmlFor="email-quick"
                    className="ml-2 text-gray-700 text-sm"
                  >
                    Email
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--navy-blue)] hover:bg-[#00264d] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              {submitMethod === "whatsapp"
                ? "Send via WhatsApp"
                : "Send via Email"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
