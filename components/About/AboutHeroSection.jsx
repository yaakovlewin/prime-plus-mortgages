import React from "react";

const AboutHeroSection = () => {
    return (
        <div
            className="relative h-96 flex items-center justify-center text-white"
            style={{
                backgroundImage: `url('/path-to-hero-image.jpg')`,
                backgroundSize: "cover",
            }}
        >
            <div className="bg-black bg-opacity-50 p-10 rounded-lg">
                <h1 className="text-5xl font-bold mb-4">About Us</h1>
                <p className="text-xl mb-4">
                    Discover our story and our commitment to excellence.
                </p>
            </div>
            {/* Overlay to improve text readability */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30"></div>
        </div>
    );
};

export default AboutHeroSection;
