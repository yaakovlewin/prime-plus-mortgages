import HeroCarousel from "@/components/HomePage/HeroCarousel.jsx";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative min-h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 h-full w-full object-cover"
      >
        <source src="/images/hero/hero-main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute h-full w-full"></div>

      {/* Hero Content */}
      <div className="relative flex h-full items-center justify-center px-6 text-white">
        <div className="w-full text-center">
          <HeroCarousel />

          <Link
            href="/get-started"
            className="mt-4 inline-block rounded bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
