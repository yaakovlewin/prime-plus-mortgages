import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="relative h-96">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
            >
                <source src="/test.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute w-full h-full bg-black opacity-50"></div>

            {/* Hero Content */}
            <div className="relative flex items-center justify-center h-full px-6 text-white">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">
                        Welcome to Prime plus Mortgages
                    </h1>
                    <p className="text-xl mb-6">
                        Leading the way in mortgage solutions
                    </p>
                    <Link
                        href="/get-started"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}
