import React from "react";

const AboutHeroSection = () => {
    return (
        <div
            className="relative h-96 flex items-center justify-center"
            style={{
                backgroundImage: `url('/path-to-hero-image.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for Better Text Contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Text Content */}
            <div className="text-center p-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    About Us
                </h1>
                <p className="text-lg lg:text-xl text-gray-600">
                    Discover our story and our commitment to excellence in the
                    mortgage industry.
                </p>
            </div>
        </div>
    );
};

export default AboutHeroSection;
