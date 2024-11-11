const AboutHeroSection = () => {
  return (
    <div
      className="relative flex min-h-[40vh] items-center justify-center sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
      style={{
        backgroundImage: `url('/images/hero/about.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      {/* Overlay for Better Text Contrast */}
      <div className="absolute inset-0"></div>

      {/* Text Content */}
      <div className="mx-5 w-2/3 rounded-lg bg-teal-50 bg-opacity-70 p-10 text-center shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-cyan-800 2xl:text-4xl">
          Unlock Your Dream Home Today
        </h1>
        <p className="text-lg text-gray-900 text-shadow-white lg:text-xl">
          Innovative Solutions, Tailored for You. Discover unparalleled mortgage
          flexibility with Prime Plus Mortgages. Start your journey now.
        </p>
      </div>
    </div>
  );
};

export default AboutHeroSection;
