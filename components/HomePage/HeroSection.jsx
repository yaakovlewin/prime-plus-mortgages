import Link from "next/link";
import HeroCarousel from "@/components/HomePage/HeroCarousel.jsx";

export default function HeroSection() {
    return (
        <div className="relative h-96 lg:h-[40rem]">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover z-0"
            >
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute w-full h-full"></div>

            {/* Hero Content */}
            <div className="relative flex items-center justify-center h-full px-6 text-white">
                <div className="text-center w-full">
                    <HeroCarousel />
                    {/* <h1 className="text-3xl md:text-6xl font-rubik text-sky-950 text-shadow-white sm:text-shadow-white-lg uppercase font-semibold tracking-tighter mb-6">
                        Inovative, Ambitious, and
                        <br />
                        <small className="md:text-6xl text-white">
                            Efficient
                        </small>
                    </h1>
                    <p className="text-sm md:text-xl mb-6">
                        Leading the way in mortgage solutions
                    </p> */}
                    <Link
                        href="/get-started"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded inline-block mt-4"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}
