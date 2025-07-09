"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Project {
  id: string;
  title: string;
  student: string;
  course: string;
  year: string;
  description: string;
  tags: string[];
  category: string;
  images: string[];
  highlights?: string[];
  position?: string;
}

export default function InteriorDesignProjectCard({
  project,
}: {
  project: Project;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const images = project.images || [];
  const minSwipeDistance = 50;

  // Preload adjacent images for smooth experience
  const preloadImages = (index: number) => {
    const imagesToPreload = [images[index - 1], images[index + 1]].filter(
      Boolean
    );

    imagesToPreload.forEach((src) => {
      if (src) {
        const img = new window.Image();
        img.src = src;
      }
    });
  };

  const openModal = () => {
    if (images.length > 0) {
      setIsOpen(true);
      setCurrentIndex(0);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
      // Preload first few images
      preloadImages(0);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  const prevSlide = (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.stopPropagation();
    if (images.length === 0) return;
    setIsLoading(true);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    preloadImages(newIndex);
    setTimeout(() => setIsLoading(false), 200);
  };

  const nextSlide = (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.stopPropagation();
    if (images.length === 0) return;
    setIsLoading(true);
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    preloadImages(newIndex);
    setTimeout(() => setIsLoading(false), 200);
  };

  const goToSlide = (index: number) => {
    setIsLoading(true);
    setCurrentIndex(index);
    preloadImages(index);
    setTimeout(() => setIsLoading(false), 200);
  };

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0]?.clientX || 0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0]?.clientX || 0);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, currentIndex]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      {/* Project Card */}
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
        onClick={openModal}
      >
        <div className="relative h-60 bg-gray-200">
          {images.length > 0 && (
            <Image
              src={images[0]!}
              alt={`${project.student}'s work`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          )}
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            {images.length} images
          </div>
          {/* Mobile-specific tap indicator */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center md:hidden">
            <div className="bg-white bg-opacity-90 rounded-full p-2">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
            <p className="mr-4">
              <span className="font-medium">Student:</span> {project.student}
            </p>
            <p className="mr-4">
              <span className="font-medium">Course:</span> {project.course}
            </p>
            {project.position && (
              <p className="w-full mt-1">
                <span className="font-medium">Current Position:</span>{" "}
                {project.position}
              </p>
            )}
          </div>
          <p className="text-gray-700 mb-4 line-clamp-3">
            {project.description.length > 150
              ? `${project.description.substring(0, 150)}...`
              : project.description}
          </p>
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4">
              <div className="text-sm font-medium text-[var(--navy-blue)] mb-2">
                Highlights:
              </div>
              <div className="flex flex-wrap gap-1">
                {project.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-[var(--navy-blue)] text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Thumbnails inside card */}
          {images.length > 1 && (
            <div className="grid grid-cols-3 gap-2">
              {images.slice(1, 4).map((image, index) => (
                <div key={index} className="relative h-16 bg-gray-200 rounded">
                  <Image
                    src={image}
                    alt={`${project.student}'s work ${index + 2}`}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Mobile-First Modal Slider */}
      {isOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] bg-black"
          onClick={closeModal}
        >
          {/* Mobile-optimized header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-center">
            <div className="text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
            <button
              onClick={closeModal}
              className="text-white text-2xl font-light hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Close gallery"
            >
              ×
            </button>
          </div>

          {/* Image container with touch support */}
          <div
            ref={imageRef}
            className="flex items-center justify-center h-full px-4 py-16 md:py-20"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-4xl max-h-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
              )}
              <Image
                src={images[currentIndex]!}
                alt={`${project.student} slide ${currentIndex + 1}`}
                fill
                className={`object-contain transition-opacity duration-200 ${
                  isLoading ? "opacity-50" : "opacity-100"
                }`}
                sizes="100vw"
                priority
                quality={85}
              />
            </div>
          </div>

          {/* Navigation arrows - larger touch targets for mobile */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 backdrop-blur-sm rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-black/50 transition-colors touch-manipulation"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 backdrop-blur-sm rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-black/50 transition-colors touch-manipulation"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Dot indicators - mobile-friendly */}
          {images.length > 1 && images.length <= 10 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors touch-manipulation ${
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Swipe instruction for first-time users */}
          {images.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/70 text-xs text-center md:hidden">
              Swipe to navigate
            </div>
          )}
        </div>
      )}
    </>
  );
}
