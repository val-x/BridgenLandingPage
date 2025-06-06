/**
 * Utility helper functions following modern coding standards
 * Promotes code reusability and DRY principle
 *
 * @fileoverview Helper functions for common operations
 * @version 1.0.0
 * @author Bridgen Development Team
 */

import type { ContactFormData, CourseType } from "@/types";
import {
  COMPANY_INFO,
  AVAILABLE_COURSES,
  VALIDATION_PATTERNS,
} from "./constants";

/**
 * Validates email format using regex pattern
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== "string") return false;
  return VALIDATION_PATTERNS.EMAIL.test(email.trim());
};

/**
 * Validates phone number format
 * @param phone - Phone number string to validate
 * @returns Boolean indicating if phone is valid
 */
export const isValidPhone = (phone: string): boolean => {
  if (!phone || typeof phone !== "string") return false;
  return VALIDATION_PATTERNS.PHONE.test(phone.trim());
};

/**
 * Validates name format (letters and spaces only)
 * @param name - Name string to validate
 * @returns Boolean indicating if name is valid
 */
export const isValidName = (name: string): boolean => {
  if (!name || typeof name !== "string") return false;
  return VALIDATION_PATTERNS.NAME.test(name.trim()) && name.trim().length >= 2;
};

/**
 * Validates entire contact form data
 * @param formData - Contact form data object
 * @returns Object with validation result and errors
 */
export const validateContactForm = (formData: ContactFormData) => {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!isValidName(formData.name)) {
    errors.name =
      "Please enter a valid name (at least 2 characters, letters only)";
  }

  if (!isValidEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!isValidPhone(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!formData.course) {
    errors.course = "Please select a course";
  }

  if (!formData.message.trim() || formData.message.trim().length < 10) {
    errors.message = "Please enter a message (at least 10 characters)";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Gets course name by course ID
 * @param courseId - Course identifier
 * @returns Course name or empty string if not found
 */
export const getCourseName = (courseId: CourseType): string => {
  const course = AVAILABLE_COURSES.find((c) => c.id === courseId);
  return course?.name ?? "";
};

/**
 * Formats WhatsApp URL with pre-filled message
 * @param message - Message to pre-fill
 * @returns Formatted WhatsApp URL
 */
export const createWhatsAppUrl = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_INFO.WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Formats email URL with subject and body
 * @param subject - Email subject
 * @param body - Email body
 * @returns Formatted mailto URL
 */
export const createEmailUrl = (subject: string, body: string): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${COMPANY_INFO.EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
};

/**
 * Formats contact form data into a readable message
 * @param formData - Contact form data
 * @returns Formatted message string
 */
export const formatContactMessage = (formData: ContactFormData): string => {
  const courseName = getCourseName(formData.course);

  return `Hello! I'm ${formData.name} and I'm interested in Bridgen Training programs.

📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🎓 Course of Interest: ${courseName}
💬 My Message: ${formData.message}

I'm excited to start my success story with Bridgen Training!`;
};

/**
 * Safely opens external URL in new tab
 * @param url - URL to open
 * @param fallbackUrl - Fallback URL if main URL fails
 */
export const safeOpenUrl = (url: string, fallbackUrl?: string): void => {
  try {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");

    // If popup was blocked, try fallback
    if (!newWindow && fallbackUrl) {
      window.location.href = fallbackUrl;
    }
  } catch (error) {
    console.error("Failed to open URL:", error);

    // Use fallback or default behavior
    if (fallbackUrl) {
      window.location.href = fallbackUrl;
    }
  }
};

/**
 * Debounce function for performance optimization
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Sanitizes user input to prevent XSS
 * @param input - User input string
 * @returns Sanitized string
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== "string") return "";

  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocols
    .slice(0, 1000); // Limit length to prevent abuse
};

/**
 * Formats phone number for display
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  if (!phone) return "";

  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");

  // Add country code if not present
  if (digits.startsWith("91") && digits.length === 12) {
    return `+${digits}`;
  } else if (digits.length === 10) {
    return `+91 ${digits}`;
  }

  return phone; // Return original if format is unclear
};

/**
 * Checks if the current environment is development
 * @returns Boolean indicating if in development mode
 */
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === "development";
};

/**
 * Logs errors in development, reports in production
 * @param error - Error object or message
 * @param context - Additional context information
 */
export const handleError = (error: unknown, context?: string): void => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  if (isDevelopment()) {
    console.error(`Error ${context ? `in ${context}` : ""}:`, errorMessage);
  } else {
    // In production, you might want to send to an error tracking service
    // Example: Sentry, LogRocket, etc.
    console.error("An error occurred:", errorMessage);
  }
};
