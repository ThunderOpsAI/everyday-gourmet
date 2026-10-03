import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "horizontal" | "mark";
  theme?: "light" | "dark";
  className?: string;
  priority?: boolean;
}

export function EverydayGourmetLogo({
  variant = "horizontal",
  className = "",
  priority = false,
}: LogoProps) {
  if (variant === "mark") {
    return (
      <div className={`relative inline-block overflow-hidden rounded-full aspect-square ${className || "w-10 h-10"}`}>
        <Image
          src="/images/logo.png"
          alt="Your Everyday Gourmet rooster emblem"
          width={120}
          height={40}
          className="object-cover h-full w-full"
          priority={priority}
        />
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className="relative w-64 sm:w-80 md:w-96 aspect-[309/92]">
          <Image
            src="/images/logo.png"
            alt="Your Everyday Gourmet - Quality meats, Homemade meals"
            fill
            className="object-contain"
            priority={priority}
          />
        </div>
      </div>
    );
  }

  // Default: horizontal header/footer lockup
  return (
    <div className={`relative h-10 sm:h-12 w-36 sm:w-44 shrink-0 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Your Everyday Gourmet - Quality meats, Homemade meals"
        fill
        className="object-contain object-left"
        priority={priority}
      />
    </div>
  );
}

export default EverydayGourmetLogo;
