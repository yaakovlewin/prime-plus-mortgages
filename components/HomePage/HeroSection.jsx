"use client";

import HeroContent, {
  backgroundVideo,
  buttonLink,
  buttonText,
} from "@/content/home/hero.mdx";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "../../app/mdx-components";

export default function HeroSection() {
  const components = useMDXComponents({});

  return (
    <div className="relative min-h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
      {/* Background Video */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 h-full w-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      <div className="absolute h-full w-full"></div>

      {/* Hero Content */}
      <div className="relative flex h-full flex-row items-center justify-center px-6 text-white">
        <div className="w-full text-center">
          <MDXProvider components={components}>
            <div className="prose prose-invert max-w-none">
              <HeroContent />
            </div>
          </MDXProvider>

          {buttonText && buttonLink && (
            <div className="flex items-center justify-center space-x-8 text-center">
              <a
                href={buttonLink}
                className="bg-primary hover:bg-primary/90 mt-4 inline-block rounded-lg px-6 py-3 text-lg font-bold text-white"
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
