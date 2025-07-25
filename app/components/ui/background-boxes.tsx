"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = memo(function BoxesCore({
  className,
  ...rest
}: {
  className?: string;
}) {
  const rows = new Array(50).fill(1);
  const cols = new Array(40).fill(1);
  const colors = [
    "var(--navy-blue)",
    "var(--red)",
    "var(--green)",
    "var(--light-blue)",
    "var(--grey)",
  ];
  const getRandomColor = (): string => {
    return (
      colors[Math.floor(Math.random() * colors.length)] || "var(--navy-blue)"
    );
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="relative h-8 w-16 border-l border-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: i * 0.01 }}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
              }}
              transition={{ duration: 0.1 }}
              key={`col-${j}`}
              className="relative h-8 w-16 border-t border-r border-slate-700"
            >
              {j % 4 === 0 && i % 4 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
});

export const Boxes = React.memo(BoxesCore);
