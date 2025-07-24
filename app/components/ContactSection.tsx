/**
 * Contact Section Component - Contact Form and Information
 * Follows modern React and TypeScript best practices
 *
 * @fileoverview Contact form with validation and contact information display
 * @version 2.0.0
 * @author Bridgen Development Team
 */

"use client";

import React, { useState, useCallback } from "react";

// Inline types to avoid import issues
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

type SubmitMethodType = "whatsapp" | "email";
type InputChangeHandler = (
  event: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void;
type FormEventHandler = (event: React.FormEvent<HTMLFormElement>) => void;

// Inline constants
const COMPANY_INFO = {
  PHONE: "+91 9061002200",
  WHATSAPP_NUMBER: "919061002200",
  EMAIL: "hello@bridgentraining.com",
  ADDRESS: {
    BUILDING: "Thayyil Arcade",
    STREET: "V Panoli Road",
    LANDMARK: "near Baby Memorial Hospital",
    AREA: "Thiruthiyad",
    CITY: "Kozhikode",
    STATE: "Kerala",
    PINCODE: "673004",
  },
  WORKING_HOURS: {
    FULL: "Monday - Saturday: 9:00 AM - 6:00 PM",
    WEEKEND: "Closed",
  },
};

const AVAILABLE_COURSES = [
  { id: "autocad", name: "AutoCAD Training" },
  { id: "interior-design", name: "Interior Design" },
  { id: "3ds-max", name: "3ds Max with V-Ray/Corona" },
  { id: "sketchup", name: "SketchUp with V-Ray/Corona" },
  { id: "photoshop", name: "Photoshop for Designers" },
];

// Inline helper functions
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, "").slice(0, 1000);
};

const createWhatsAppUrl = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_INFO.WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

const createEmailUrl = (subject: string, body: string): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${COMPANY_INFO.EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
};

const safeOpenUrl = (url: string): void => {
  try {
    window.open(url, "_blank", "noopener,noreferrer");
  } catch (error) {
    console.error("Failed to open URL:", error);
  }
};

// Component constants
const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
} as const;

/**
 * Form Input Component - Reusable form input with validation
 */
interface FormInputProps {
  readonly id: keyof ContactFormData;
  readonly label: string;
  readonly type: string;
  readonly placeholder: string;
  readonly value: string;
  readonly onChange: InputChangeHandler;
  readonly error?: string | undefined;
  readonly required?: boolean;
}

const FormInput = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  required = true,
}: FormInputProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-800 focus:border-transparent font-sans text-gray-900 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    {error && (
      <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
        {error}
      </p>
    )}
  </div>
);

/**
 * Form Textarea Component - Reusable textarea with validation
 */
interface FormTextareaProps {
  readonly id: keyof ContactFormData;
  readonly label: string;
  readonly placeholder: string;
  readonly value: string;
  readonly onChange: InputChangeHandler;
  readonly error?: string | undefined;
  readonly rows?: number;
  readonly required?: boolean;
}

const FormTextarea = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  rows = 4,
  required = true,
}: FormTextareaProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      rows={rows}
      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-800 focus:border-transparent font-sans text-gray-900 resize-vertical ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    {error && (
      <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
        {error}
      </p>
    )}
  </div>
);

/**
 * Course Select Component - Dropdown for course selection
 */
interface CourseSelectProps {
  readonly value: string;
  readonly onChange: InputChangeHandler;
  readonly error?: string | undefined;
}

const CourseSelect = ({ value, onChange, error }: CourseSelectProps) => (
  <div>
    <label
      htmlFor="course"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Interested Course <span className="text-red-500">*</span>
    </label>
    <select
      id="course"
      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-800 focus:border-transparent text-gray-900 font-sans ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      value={value}
      onChange={onChange}
      required
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? "course-error" : undefined}
    >
      <option value="" className="text-gray-900">
        Select a course
      </option>
      {AVAILABLE_COURSES.map((course) => (
        <option key={course.id} value={course.id} className="text-gray-900">
          {course.name}
        </option>
      ))}
    </select>
    {error && (
      <p id="course-error" className="mt-1 text-sm text-red-600" role="alert">
        {error}
      </p>
    )}
  </div>
);

/**
 * Submit Method Radio Group Component
 */
interface SubmitMethodSelectorProps {
  readonly selectedMethod: SubmitMethodType;
  readonly onChange: (method: SubmitMethodType) => void;
}

const SubmitMethodSelector = ({
  selectedMethod,
  onChange,
}: SubmitMethodSelectorProps) => (
  <div className="flex flex-col space-y-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Choose Contact Method <span className="text-red-500">*</span>
    </label>
    <div className="flex items-center space-x-4">
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="contact-method"
          value="whatsapp"
          checked={selectedMethod === "whatsapp"}
          onChange={(e) => onChange(e.target.value as SubmitMethodType)}
          className="h-4 w-4 text-blue-800 focus:ring-blue-800"
        />
        <span className="ml-2 text-gray-700">WhatsApp</span>
      </label>
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="contact-method"
          value="email"
          checked={selectedMethod === "email"}
          onChange={(e) => onChange(e.target.value as SubmitMethodType)}
          className="h-4 w-4 text-blue-800 focus:ring-blue-800"
        />
        <span className="ml-2 text-gray-700">Email</span>
      </label>
    </div>
  </div>
);

/**
 * Main Contact Section Component
 */
export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [submitMethod, setSubmitMethod] =
    useState<SubmitMethodType>("whatsapp");
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Ensure client-side only rendering to prevent hydration mismatch
  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Handle input changes with sanitization
  const handleInputChange: InputChangeHandler = useCallback(
    (e) => {
      const { id, value } = e.target;
      const sanitizedValue = sanitizeInput(value);

      setFormData((prev) => ({
        ...prev,
        [id]: sanitizedValue,
      }));

      // Clear error for this field when user starts typing
      if (errors[id as keyof ContactFormData]) {
        setErrors((prev) => ({
          ...prev,
          [id]: undefined,
        }));
      }
    },
    [errors]
  );

  // Handle submit method change
  const handleSubmitMethodChange = useCallback((method: SubmitMethodType) => {
    setSubmitMethod(method);
  }, []);

  // Handle form submission with validation
  const handleSubmit: FormEventHandler = useCallback(
    async (e) => {
      e.preventDefault();

      if (isSubmitting) return;

      setIsSubmitting(true);

      try {
        // Simple validation
        const errors: Partial<Record<keyof ContactFormData, string>> = {};

        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        if (!formData.phone.trim()) errors.phone = "Phone is required";
        if (!formData.course) errors.course = "Course is required";
        if (!formData.message.trim()) errors.message = "Message is required";

        if (Object.keys(errors).length > 0) {
          setErrors(errors);
          return;
        }

        // Clear any existing errors
        setErrors({});

        // Format the message
        const courseName =
          AVAILABLE_COURSES.find((c) => c.id === formData.course)?.name ||
          formData.course;
        const message = `Hello! I'm ${formData.name} and I'm interested in Bridgen Training programs.

📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🎓 Course of Interest: ${courseName}
💬 My Message: ${formData.message}

I'm excited to start my success story with Bridgen Training!`;

        // Submit based on selected method
        if (submitMethod === "whatsapp") {
          const whatsappUrl = createWhatsAppUrl(message);
          safeOpenUrl(whatsappUrl);
        } else {
          const subject = `Course Inquiry from ${formData.name}`;
          const emailUrl = createEmailUrl(subject, message);
          window.location.href = emailUrl;
        }

        // Reset form after successful submission
        setFormData(INITIAL_FORM_DATA);
      } catch (error) {
        console.error("Form submission error:", error);
        setErrors({ message: "Something went wrong. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, submitMethod, isSubmitting]
  );

  // Don't render form until hydrated to prevent hydration mismatch
  if (!isHydrated) {
    return (
      <section className="py-16 md:py-24 font-sans" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] mb-4 font-sans">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-[var(--red)] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 font-sans">
              Ready to transform your creative passion into a global profession?
              Contact us today to learn more about our Gulf-ready design
              programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-16 md:py-24 font-sans bg-gradient-to-br from-gray-50 via-white to-gray-100"
      id="contact"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--navy-blue)] via-[var(--green)] to-[var(--red)] bg-clip-text text-transparent mb-4 font-sans">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--red)] to-[var(--green)] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 font-sans">
            Ready to transform your creative passion into a global profession?
            Contact us today to learn more about our Gulf-ready design programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-[var(--navy-blue)]/10">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] bg-clip-text text-transparent mb-6 font-sans">
                ✉️ Send Us a Message
              </h3>

              <form
                className="space-y-6 font-sans"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    id="name"
                    label="Your Name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                  />

                  <FormInput
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                  />
                </div>

                <FormInput
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder={COMPANY_INFO.PHONE}
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />

                <CourseSelect
                  value={formData.course}
                  onChange={handleInputChange}
                  error={errors.course}
                />

                <FormTextarea
                  id="message"
                  label="Your Message"
                  placeholder="Tell us more about your requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                />

                <SubmitMethodSelector
                  selectedMethod={submitMethod}
                  onChange={handleSubmitMethodChange}
                />

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[var(--navy-blue)] to-[var(--light-blue)] hover:from-[var(--navy-blue)]/90 hover:to-[var(--light-blue)]/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-sans"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : submitMethod === "whatsapp"
                      ? "Send via WhatsApp"
                      : "Send via Email"}
                  </button>
                </div>
              </form>
            </div>

            {/* Call Button */}
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <a
                href={`tel:${COMPANY_INFO.PHONE}`}
                className="flex-1 bg-gradient-to-r from-[var(--green)] to-[var(--red)] hover:from-[var(--green)]/90 hover:to-[var(--red)]/90 text-white rounded-lg p-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label={`Call us at ${COMPANY_INFO.PHONE}`}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            {/* Google Maps */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[var(--green)]/10">
              <div className="h-[400px] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.911978226204!2d75.78649431475854!3d11.266374391999001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f1b65f35c95%3A0xa3c70fe638cae83d!2sBaby%20Memorial%20Hospital!5e0!3m2!1sen!2sin!4v1645689751241!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bridgen Training Location"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-[var(--red)]/10">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[var(--red)] to-[var(--green)] bg-clip-text text-transparent mb-6">
                📞 Contact Information
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] text-white p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] bg-clip-text text-transparent">
                      Visit Us
                    </h4>
                    <p className="text-gray-600">
                      {COMPANY_INFO.ADDRESS.BUILDING},{" "}
                      {COMPANY_INFO.ADDRESS.STREET},
                      <br />
                      {COMPANY_INFO.ADDRESS.LANDMARK},
                      <br />
                      {COMPANY_INFO.ADDRESS.AREA}, {COMPANY_INFO.ADDRESS.CITY},{" "}
                      {COMPANY_INFO.ADDRESS.STATE}{" "}
                      {COMPANY_INFO.ADDRESS.PINCODE}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-[var(--red)] to-[var(--navy-blue)] text-white p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium bg-gradient-to-r from-[var(--red)] to-[var(--navy-blue)] bg-clip-text text-transparent">
                      Call Us
                    </h4>
                    <p className="text-gray-600">{COMPANY_INFO.PHONE}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] text-white p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium bg-gradient-to-r from-[var(--green)] to-[var(--light-blue)] bg-clip-text text-transparent">
                      Email Us
                    </h4>
                    <p className="text-gray-600">{COMPANY_INFO.EMAIL}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-[var(--light-blue)] to-[var(--green)] text-white p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium bg-gradient-to-r from-[var(--light-blue)] to-[var(--green)] bg-clip-text text-transparent">
                      Working Hours
                    </h4>
                    <p className="text-gray-600">
                      {COMPANY_INFO.WORKING_HOURS.FULL}
                    </p>
                    <p className="text-gray-600">
                      Sunday: {COMPANY_INFO.WORKING_HOURS.WEEKEND}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-4 bg-gradient-to-br from-[var(--navy-blue)]/5 to-[var(--green)]/5 rounded-lg border border-[var(--navy-blue)]/20">
                <h4 className="text-xl font-medium bg-gradient-to-r from-[var(--navy-blue)] to-[var(--green)] bg-clip-text text-transparent mb-2">
                  Need design support?
                </h4>
                <p className="text-gray-700 mb-2">
                  Let's work together on your next project — from blueprint to
                  build.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center text-[var(--navy-blue)]">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <span className="mr-2">📞</span>
                    <a
                      href={`tel:${COMPANY_INFO.WHATSAPP_NUMBER}`}
                      className="hover:text-[var(--green)] transition-colors"
                    >
                      {COMPANY_INFO.WHATSAPP_NUMBER}
                    </a>
                  </div>
                  <span className="hidden sm:inline mx-2">|</span>
                  <div className="flex items-center">
                    <span className="mr-2">📩</span>
                    <a
                      href={`mailto:${COMPANY_INFO.EMAIL}`}
                      className="hover:text-[var(--green)] transition-colors break-all"
                    >
                      {COMPANY_INFO.EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
