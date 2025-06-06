/**
 * Type definitions for Bridgen Training Institute
 * Following modern TypeScript best practices for type safety
 *
 * @fileoverview Central type definitions for the application
 * @version 1.0.0
 * @author Bridgen Development Team
 * @created 2024
 */

// Form data interfaces with strict typing
export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly course: CourseType;
  readonly message: string;
}

// Union type for courses - better type safety than string literals
export type CourseType =
  | "autocad"
  | "interior-design"
  | "3ds-max"
  | "sketchup"
  | "photoshop"
  | "";

// Submit method type for contact form
export type SubmitMethodType = "whatsapp" | "email";

// Navigation link interface for consistent structure
export interface NavigationLink {
  readonly href: string;
  readonly label: string;
  readonly isExternal?: boolean;
}

// Contact information interface
export interface ContactInfo {
  readonly phone: string;
  readonly email: string;
  readonly address: string;
  readonly workingHours: string;
}

// Constants for better maintainability
export const CONTACT_CONSTANTS = {
  WHATSAPP_NUMBER: "919061002200",
  EMAIL: "hello@bridgentraining.com",
  WEBSITE: "www.bridgentraining.com",
  ADDRESS:
    "Thayyil Arcade, V Panoli Road, near Baby Memorial Hospital, Thiruthiyad, Kozhikode, Kerala 673004",
} as const;

// Course information interface
export interface CourseInfo {
  readonly id: CourseType;
  readonly name: string;
  readonly description: string;
  readonly duration?: string;
  readonly level?: "beginner" | "intermediate" | "advanced";
}

// API response interface for better error handling
export interface ApiResponse<T = unknown> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: string;
  readonly timestamp: Date;
}

// Event handler types for better type safety
export type FormEventHandler = (
  event: React.FormEvent<HTMLFormElement>
) => void;
export type InputChangeHandler = (
  event: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void;

// Component props interfaces
export interface BaseComponentProps {
  readonly className?: string;
  readonly children?: React.ReactNode;
}

// Animation configuration interface
export interface AnimationConfig {
  readonly duration: number;
  readonly ease?: string;
  readonly delay?: number;
}
