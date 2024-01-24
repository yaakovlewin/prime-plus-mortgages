const AboutHeroSection = () => {
    return (
        <div
            className="relative h-[50vh] flex items-center justify-center"
            style={{
                backgroundImage: `url('/meeting2.png')`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
            }}
        >
            {/* Overlay for Better Text Contrast */}
            <div className="absolute inset-0"></div>

            {/* Text Content */}
            <div className="text-center p-10 bg-neutral-100 bg-opacity-70 rounded-lg shadow-lg">
                <h1 className="text-4xl lg:text-5xl font-bold text-cyan-800 mb-4">
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
