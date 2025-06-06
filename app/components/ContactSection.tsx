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

// Import types and utilities for better maintainability
import type {
  ContactFormData,
  SubmitMethodType,
  InputChangeHandler,
  FormEventHandler,
} from "@/types";
import {
  COMPANY_INFO,
  AVAILABLE_COURSES,
  CSS_VARIABLES,
} from "@/utils/constants";
import {
  validateContactForm,
  formatContactMessage,
  createWhatsAppUrl,
  createEmailUrl,
  safeOpenUrl,
  sanitizeInput,
  handleError,
} from "@/utils/helpers";

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
      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[${
        CSS_VARIABLES.COLORS.NAVY_BLUE
      }] focus:border-transparent font-sans text-gray-900 ${
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
      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[${
        CSS_VARIABLES.COLORS.NAVY_BLUE
      }] focus:border-transparent font-sans text-gray-900 resize-vertical ${
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
      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[${
        CSS_VARIABLES.COLORS.NAVY_BLUE
      }] focus:border-transparent text-gray-900 font-sans ${
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
          className={`h-4 w-4 text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}] focus:ring-[${CSS_VARIABLES.COLORS.NAVY_BLUE}]`}
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
          className={`h-4 w-4 text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}] focus:ring-[${CSS_VARIABLES.COLORS.NAVY_BLUE}]`}
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
        // Validate form data
        const validation = validateContactForm(formData);

        if (!validation.isValid) {
          setErrors(validation.errors);
          return;
        }

        // Clear any existing errors
        setErrors({});

        // Format the message
        const message = formatContactMessage(formData);

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
        handleError(error, "form submission");
        setErrors({ message: "Something went wrong. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, submitMethod, isSubmitting]
  );

  return (
    <section className="py-16 md:py-24 font-sans" id="contact">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}] mb-4 font-sans`}
          >
            Get In Touch
          </h2>
          <div
            className={`w-20 h-1 bg-[${CSS_VARIABLES.COLORS.RED}] mx-auto mb-6`}
          ></div>
          <p className="max-w-2xl mx-auto text-gray-600 font-sans">
            Ready to transform your creative passion into a global profession?
            Contact us today to learn more about our Gulf-ready design programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3
                className={`text-2xl font-semibold text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}] mb-6 font-sans`}
              >
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
                    className={`w-full bg-[${CSS_VARIABLES.COLORS.NAVY_BLUE}] hover:bg-[#00264d] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors font-sans`}
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
                className={`flex-1 bg-[${CSS_VARIABLES.COLORS.LIGHT_BLUE}] hover:bg-[#3ab7dc] text-white rounded-lg p-4 flex items-center justify-center gap-3 transition-colors`}
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3
                className={`text-2xl font-semibold text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}] mb-6`}
              >
                📞 Contact Information
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 bg-[${CSS_VARIABLES.COLORS.NAVY_BLUE}] text-white p-3 rounded-lg mr-4`}
                  >
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
                    <h4
                      className={`text-lg font-medium text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}]`}
                    >
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
                  <div
                    className={`flex-shrink-0 bg-[${CSS_VARIABLES.COLORS.RED}] text-white p-3 rounded-lg mr-4`}
                  >
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
                    <h4
                      className={`text-lg font-medium text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}]`}
                    >
                      Call Us
                    </h4>
                    <p className="text-gray-600">{COMPANY_INFO.PHONE}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 bg-[${CSS_VARIABLES.COLORS.GREEN}] text-white p-3 rounded-lg mr-4`}
                  >
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
                    <h4
                      className={`text-lg font-medium text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}]`}
                    >
                      Email Us
                    </h4>
                    <p className="text-gray-600">{COMPANY_INFO.EMAIL}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 bg-[${CSS_VARIABLES.COLORS.LIGHT_BLUE}] text-white p-3 rounded-lg mr-4`}
                  >
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
                    <h4
                      className={`text-lg font-medium text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}]`}
                    >
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
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4
                  className={`text-xl font-medium text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}] mb-2`}
                >
                  Need design support?
                </h4>
                <p className="text-gray-700 mb-2">
                  Let's work together on your next project — from blueprint to
                  build.
                </p>
                <div
                  className={`flex flex-col sm:flex-row items-start sm:items-center text-[${CSS_VARIABLES.COLORS.NAVY_BLUE}]`}
                >
                  <div className="flex items-center mb-2 sm:mb-0">
                    <span className="mr-2">📞</span>
                    <a
                      href={`tel:${COMPANY_INFO.WHATSAPP_NUMBER}`}
                      className={`hover:text-[${CSS_VARIABLES.COLORS.GREEN}] transition-colors`}
                    >
                      {COMPANY_INFO.WHATSAPP_NUMBER}
                    </a>
                  </div>
                  <span className="hidden sm:inline mx-2">|</span>
                  <div className="flex items-center">
                    <span className="mr-2">📩</span>
                    <a
                      href={`mailto:${COMPANY_INFO.EMAIL}`}
                      className={`hover:text-[${CSS_VARIABLES.COLORS.GREEN}] transition-colors break-all`}
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
