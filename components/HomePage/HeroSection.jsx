"use client";

import { MDXProvider } from "@mdx-js/react";
import HeroContent, {
  backgroundVideo,
  buttonLink,
  buttonText,
} from "content/home/hero.mdx";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useMDXComponents } from "../../app/mdx-components";
import ButtonLink from "../shared/ButtonLink";

export default function HeroSection() {
  const components = useMDXComponents({});
  const videoRef = useRef(null);

  // Optimize video playback
  useEffect(() => {
    const loadVideo = async () => {
      if (videoRef.current && window.matchMedia("(min-width: 768px)").matches) {
        try {
          await videoRef.current.load();
          videoRef.current.play();
        } catch (error) {
          console.error("Video playback failed:", error);
        }
      }
    };

    loadVideo();
  }, []);

  return (
    <div className="relative min-h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
      {/* Background Video */}
      {backgroundVideo && (
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          {/* Mobile Fallback Image */}
          <div className="block h-full w-full md:hidden">
            <Image
              src="/images/hero/services.jpg"
              alt="Hero background"
              fill
              priority
              className="absolute inset-0 h-full w-full object-cover"
              sizes="100vw"
              quality={85}
            />
          </div>

          {/* Video for larger screens */}
          <div className="hidden h-full w-full md:block">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
              poster="/images/hero/services.jpg"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-row items-center justify-center px-6 text-white">
        <div className="w-full text-center">
          <MDXProvider components={components}>
            <div className="prose prose-invert max-w-none">
              <HeroContent />
            </div>
          </MDXProvider>

          {buttonText && buttonLink && (
            <div className="flex items-center justify-center space-x-8 text-center">
              <ButtonLink
                href={buttonLink}
                variant="primary"
                className="px-6 py-3 font-bold uppercase text-shadow-none"
              >
                {buttonText}
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
