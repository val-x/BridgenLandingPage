"use client";

import Image from "next/image";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-blue)] mb-4">
            About Bridgen
          </h2>
          <div className="w-20 h-1 bg-[var(--red)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[var(--navy-blue)]">
              Bridgen – Bridge to Next Generation
            </h3>
            <p className="text-gray-700 mb-6">
              Bridgen is a premier training institute in Kerala, empowering the
              next generation of interior designers, CAD experts, and
              visualization professionals. Founded in 2015, we began our journey
              as DreamZone Calicut, where we built a legacy of excellence over
              10 years as a franchise.
            </p>
            <p className="text-gray-700 mb-6">
              Today, we have evolved into Bridgen, an independent brand
              dedicated to delivering international-standard training that
              prepares students for global careers. Over the past decade, we've
              earned a strong reputation for high-quality, job-oriented
              education and have proudly achieved a 99% placement record — both
              in India and across the Middle East.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[var(--red)] mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  10+ Years Experience
                </h4>
                <p className="text-gray-600 text-sm">
                  Legacy of trusted training, evolved into an independent
                  institute
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[var(--green)] mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  99% Placement Record
                </h4>
                <p className="text-gray-600 text-sm">
                  Career opportunities across India and the Middle East
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[var(--light-blue)] mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  International Standards
                </h4>
                <p className="text-gray-600 text-sm">
                  Curriculum aligned with Gulf and global industry expectations
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[var(--navy-blue)] mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  Small Batch Training
                </h4>
                <p className="text-gray-600 text-sm">
                  Personalized attention through limited batch sizes
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="aspect-[4/3] relative transition-transform duration-300 hover:scale-105">
              <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <h1
                  className={cn("md:text-4xl text-xl text-white relative z-20")}
                >
                  BRIDGEN
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-20">
                  Bridge to Next Generation
                </p>
              </div>
            </div>
            <div className="absolute top-8 -left-8 w-full h-full border-8 border-[var(--navy-blue)] rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
