/**
 * Header Component - Navigation and Branding
 * Follows modern React and TypeScript best practices
 *
 * @fileoverview Main navigation header component
 * @version 2.0.0
 * @author Bridgen Development Team
 */

"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Import types and constants for better maintainability
import type { NavigationLink } from "@/types";
import {
  COMPANY_INFO,
  NAVIGATION_LINKS,
  WHATSAPP_TEMPLATES,
  ANIMATION_DURATIONS,
} from "@/utils/constants";
import { createWhatsAppUrl } from "@/utils/helpers";

// Component constants for better code organization
const HEADER_ANIMATION = {
  HOVER_SCALE: 1.05,
  TRANSITION_DURATION: ANIMATION_DURATIONS.FAST,
} as const;

const MOBILE_MENU_ANIMATION = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
  transition: { duration: ANIMATION_DURATIONS.NORMAL },
} as const;

/**
 * Navigation Link Component - Reusable navigation item
 */
interface NavLinkProps {
  readonly link: NavigationLink;
  readonly onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  readonly isMobile?: boolean;
}

const NavLink = ({ link, onClick, isMobile = false }: NavLinkProps) => {
  const baseClasses = isMobile
    ? "px-4 py-2 text-[var(--navy-blue)] hover:text-[var(--red)] hover:bg-gray-50 rounded-md transition-colors duration-200"
    : "relative px-4 py-2 font-medium text-[var(--navy-blue)] hover:text-[var(--red)] transition-colors duration-200 group";

  return (
    <Link
      href={link.href}
      className={baseClasses}
      {...(onClick && { onClick })}
      aria-label={`Navigate to ${link.label}`}
    >
      {link.label}
      {!isMobile && (
        <span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--red)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          aria-hidden="true"
        />
      )}
    </Link>
  );
};

/**
 * WhatsApp Button Component - Reusable CTA button
 */
interface WhatsAppButtonProps {
  readonly isMobile?: boolean;
  readonly onClick?: () => void;
}

const WhatsAppButton = ({ isMobile = false, onClick }: WhatsAppButtonProps) => {
  const handleWhatsAppClick = useCallback(() => {
    const whatsappUrl = createWhatsAppUrl(WHATSAPP_TEMPLATES.GENERAL_INQUIRY);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClick?.();
  }, [onClick]);

  const baseClasses = isMobile
    ? "flex items-center justify-center bg-[var(--green)] hover:bg-[var(--green)]/90 text-white px-4 py-2 rounded-full mt-2 transition-colors duration-200"
    : "ml-4 flex items-center bg-[var(--green)] hover:bg-[var(--green)]/90 text-white px-5 py-2 rounded-full transition-colors duration-200 shadow-md";

  return (
    <button
      onClick={handleWhatsAppClick}
      className={baseClasses}
      type="button"
      aria-label="Start WhatsApp conversation"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Chat on WhatsApp
    </button>
  );
};

/**
 * Mobile Menu Toggle Button Component
 */
interface MenuToggleProps {
  readonly isOpen: boolean;
  readonly onToggle: () => void;
}

const MenuToggle = ({ isOpen, onToggle }: MenuToggleProps) => {
  const IconComponent = isOpen ? CloseIcon : MenuIcon;

  return (
    <button
      onClick={onToggle}
      className="text-[var(--navy-blue)] p-2 focus:outline-none focus:ring-2 focus:ring-[var(--navy-blue)] rounded-md"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      type="button"
    >
      <IconComponent />
    </button>
  );
};

// Icon components for better organization
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

/**
 * Main Header Component
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use useCallback for performance optimization
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleMobileLinkClick = useCallback(() => {
    closeMobileMenu();
  }, [closeMobileMenu]);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label={`${COMPANY_INFO.NAME} - ${COMPANY_INFO.TAGLINE}`}
          >
            <motion.span
              className="text-2xl font-bold text-[var(--navy-blue)]"
              whileHover={{ scale: HEADER_ANIMATION.HOVER_SCALE }}
              transition={{ duration: HEADER_ANIMATION.TRANSITION_DURATION }}
            >
              {COMPANY_INFO.NAME}
            </motion.span>
            <span className="text-sm text-[var(--grey)] ml-2 transform transition-transform group-hover:translate-x-1">
              {COMPANY_INFO.TAGLINE}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1"
            role="navigation"
          >
            {NAVIGATION_LINKS.map((link) => (
              <NavLink key={link.href} link={link} />
            ))}
            <WhatsAppButton />
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <MenuToggle isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              {...MOBILE_MENU_ANIMATION}
              className="lg:hidden mt-4"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-3 py-4 px-2 bg-white rounded-lg shadow-lg">
                {NAVIGATION_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    link={link}
                    onClick={handleMobileLinkClick}
                    isMobile
                  />
                ))}
                <WhatsAppButton isMobile onClick={closeMobileMenu} />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
