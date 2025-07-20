/**
 * Application constants following modern coding standards
 * Centralized configuration for maintainability and consistency
 *
 * @fileoverview Application-wide constants and configuration
 * @version 1.0.0
 * @author Bridgen Development Team
 */

import type { NavigationLink, CourseInfo } from "../types";

// Company information - single source of truth
export const COMPANY_INFO = {
  NAME: "BRIDGEN",
  TAGLINE: "Bridge to Next Generation",
  PHONE: "+91 9061002200",
  WHATSAPP_NUMBER: "919061002200",
  EMAIL: "hello@bridgentraining.com",
  WEBSITE: "www.bridgentraining.com",
  ADDRESS: {
    FULL: "Thayyil Arcade, V Panoli Road, near Baby Memorial Hospital, Thiruthiyad, Kozhikode, Kerala 673004",
    BUILDING: "Thayyil Arcade",
    STREET: "V Panoli Road",
    LANDMARK: "near Baby Memorial Hospital",
    AREA: "Thiruthiyad",
    CITY: "Kozhikode",
    STATE: "Kerala",
    PINCODE: "673004",
  },
  WORKING_HOURS: {
    WEEKDAYS: "9:00 AM - 6:00 PM",
    WEEKEND: "Closed",
    FULL: "Monday - Saturday: 9:00 AM - 6:00 PM",
  },
  SOCIAL_MEDIA: {
    FACEBOOK: "https://www.facebook.com/DZcalicut/",
    INSTAGRAM: "https://www.instagram.com/bridgentraining/",
    YOUTUBE: "https://www.youtube.com/@TheZee001",
  },
} as const;

// Navigation structure with proper typing
export const NAVIGATION_LINKS: readonly NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/about-bridgen", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/student-placement-success", label: "Placements" },
  { href: "/student-projects-portfolio", label: "Portfolio" },
  { href: "/freelance-cad-jobs", label: "Freelance Jobs" },
  { href: "/contact-bridgen", label: "Contact" },
] as const;

// Course information with better structure
export const AVAILABLE_COURSES: readonly CourseInfo[] = [
  {
    id: "autocad",
    name: "AutoCAD Training",
    description: "Professional CAD drafting and design",
    duration: "3 months",
    level: "beginner",
  },
  {
    id: "interior-design",
    name: "Interior Design",
    description: "Complete interior design and space planning",
    duration: "6 months",
    level: "intermediate",
  },
  {
    id: "3ds-max",
    name: "3ds Max with V-Ray/Corona",
    description: "3D modeling and photorealistic rendering",
    duration: "4 months",
    level: "intermediate",
  },
  {
    id: "sketchup",
    name: "SketchUp with V-Ray/Corona",
    description: "3D modeling and visualization",
    duration: "3 months",
    level: "beginner",
  },
  {
    id: "photoshop",
    name: "Photoshop for Designers",
    description: "Image editing and design graphics",
    duration: "2 months",
    level: "beginner",
  },
] as const;

// WhatsApp message templates for consistency
export const WHATSAPP_TEMPLATES = {
  GENERAL_INQUIRY:
    "Hello Bridgen Team,\n\nI'm interested in exploring career opportunities in design. I'd like to know more about your professional training programs and placement success.\n\nLooking forward to your response.\n\nThank you!",
  COURSE_INQUIRY: (courseName: string, userName: string) =>
    `Hello! I'm ${userName} and I'm interested in Bridgen Training programs.\n\n🎓 Course of Interest: ${courseName}\n\nI'm excited to start my success story with Bridgen Training!`,
} as const;

// CSS custom properties for consistent theming
export const CSS_VARIABLES = {
  COLORS: {
    NAVY_BLUE: "var(--navy-blue)",
    RED: "var(--red)",
    GREEN: "var(--green)",
    LIGHT_BLUE: "var(--light-blue)",
    GREY: "var(--grey)",
  },
} as const;

// Animation duration constants
export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
} as const;

// Form validation patterns
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[+]?[\d\s-()]+$/,
  NAME: /^[a-zA-Z\s]+$/,
} as const;

// Error messages for consistency
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: "This field is required",
  INVALID_EMAIL: "Please enter a valid email address",
  INVALID_PHONE: "Please enter a valid phone number",
  INVALID_NAME: "Please enter a valid name",
  GENERIC_ERROR: "Something went wrong. Please try again.",
} as const;
