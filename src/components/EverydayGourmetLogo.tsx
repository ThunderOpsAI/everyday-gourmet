import React from "react";

interface LogoProps {
  variant?: "full" | "horizontal" | "mark";
  theme?: "light" | "dark";
  className?: string;
}

export function EverydayGourmetLogo({
  variant = "full",
  theme = "light",
  className = "",
}: LogoProps) {
  const isDark = theme === "dark";
  const textColor = isDark ? "#FFFFFF" : "#0C1B33";
  const yourColor = isDark ? "#FBBF24" : "#B45309";
  const scriptColor = isDark ? "#E2E8F0" : "#4B5563";
  const circleRed = "#D71920";

  // Standalone Rooster Emblem
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "w-10 h-10"}
        aria-label="Your Everyday Gourmet rooster emblem"
      >
        <circle cx="50" cy="50" r="48" fill={circleRed} />
        {/* Stylized White Rooster Silhouette */}
        <path
          d="M 33 46 C 30 43 23 44 20 42 C 24 40 30 38 34 35 C 33 30 32 23 37 19 C 41 22 41 27 44 26 C 47 22 49 18 53 19 C 55 23 52 27 55 28 C 58 25 62 25 63 29 C 61 34 57 37 57 42 C 63 39 71 39 77 44 C 82 49 84 57 82 65 C 79 73 72 80 62 82 C 52 84 41 80 35 73 C 29 66 28 55 33 46 Z M 48 36 C 48 38 46 38 46 36 C 46 34 48 34 48 36 Z"
          fill="#FFFFFF"
        />
        {/* Wattle detail */}
        <path
          d="M 34 42 C 34 47 31 51 28 49 C 27 46 30 43 34 42 Z"
          fill="#FFFFFF"
        />
        {/* Tail plumes curve inside circle */}
        <path
          d="M 68 52 C 73 54 77 60 76 66 C 72 63 68 59 68 52 Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Compact Horizontal Header Lockup
  if (variant === "horizontal") {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Authentic Rooster Circular Emblem */}
        <div className="relative shrink-0 w-10 h-10 sm:w-11 sm:h-11">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-sm"
          >
            <circle cx="50" cy="50" r="48" fill={circleRed} />
            <path
              d="M 33 46 C 30 43 23 44 20 42 C 24 40 30 38 34 35 C 33 30 32 23 37 19 C 41 22 41 27 44 26 C 47 22 49 18 53 19 C 55 23 52 27 55 28 C 58 25 62 25 63 29 C 61 34 57 37 57 42 C 63 39 71 39 77 44 C 82 49 84 57 82 65 C 79 73 72 80 62 82 C 52 84 41 80 35 73 C 29 66 28 55 33 46 Z"
              fill="#FFFFFF"
            />
            <path
              d="M 34 42 C 34 47 31 51 28 49 C 27 46 30 43 34 42 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        {/* Typographic Wordmark */}
        <div className="flex flex-col">
          <span
            className="text-[10px] sm:text-[11px] font-black tracking-[0.28em] uppercase leading-none"
            style={{ color: yourColor }}
          >
            YOUR
          </span>
          <span
            className="text-base sm:text-lg font-black tracking-wider uppercase leading-tight font-serif text-white"
            style={{ color: textColor }}
          >
            EVERYDAY GOURMET
          </span>
          <span
            className="text-[10px] sm:text-[11px] italic font-medium tracking-wide -mt-0.5"
            style={{ color: scriptColor }}
          >
            Quality meats · Homemade meals
          </span>
        </div>
      </div>
    );
  }

  // Full Center Lockup (Matching exact layout from user card: YOUR / EVERYDAY GOURMET / Quality meats [Rooster] Homemade meals)
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* "YOUR" */}
      <span
        className="text-xs sm:text-sm font-black tracking-[0.35em] uppercase leading-none mb-1"
        style={{ color: isDark ? "#F59E0B" : "#0C1B33" }}
      >
        YOUR
      </span>

      {/* "EVERYDAY GOURMET" in distinctive heritage typography */}
      <h1
        className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase leading-none font-serif mb-3"
        style={{ color: textColor }}
      >
        EVERYDAY GOURMET
      </h1>

      {/* Tagline Lockup: Quality meats [Red Rooster Circle] Homemade meals */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <span
          className="text-sm sm:text-base md:text-lg italic font-medium tracking-tight"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: scriptColor,
          }}
        >
          Quality meats
        </span>

        {/* Center Rooster Circle Icon */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full shadow-sm"
          >
            <circle cx="50" cy="50" r="48" fill={circleRed} />
            <path
              d="M 33 46 C 30 43 23 44 20 42 C 24 40 30 38 34 35 C 33 30 32 23 37 19 C 41 22 41 27 44 26 C 47 22 49 18 53 19 C 55 23 52 27 55 28 C 58 25 62 25 63 29 C 61 34 57 37 57 42 C 63 39 71 39 77 44 C 82 49 84 57 82 65 C 79 73 72 80 62 82 C 52 84 41 80 35 73 C 29 66 28 55 33 46 Z"
              fill="#FFFFFF"
            />
            <path
              d="M 34 42 C 34 47 31 51 28 49 C 27 46 30 43 34 42 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        <span
          className="text-sm sm:text-base md:text-lg italic font-medium tracking-tight"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: scriptColor,
          }}
        >
          Homemade meals
        </span>
      </div>
    </div>
  );
}
export default EverydayGourmetLogo;
