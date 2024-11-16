import HeroCarousel from "@/components/HomePage/HeroCarousel.jsx";
import ButtonLink from "../shared/ButtonLink";

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
      <div className="relative flex h-full flex-row items-center justify-center px-6 text-white">
        <div className="w-full text-center">
          <HeroCarousel />

          <div className="flex items-center justify-center space-x-8 text-center">
            <ButtonLink
              href="/services"
              variant="primary"
              className="mt-4 inline-block px-6 py-3 text-lg font-bold "
            >
              Learn More
            </ButtonLink>
            {/* <p className="mt-4 text-lg font-bold">- or -</p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded border-2 border-sky-500 bg-white/90 px-6 py-3 font-bold text-sky-500 transition-all hover:bg-white hover:text-cyan-600"
            >
              Contact Us
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
