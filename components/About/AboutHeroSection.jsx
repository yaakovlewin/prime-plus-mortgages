const AboutHeroSection = () => {
  return (
    <div
      className="relative flex h-[50vh] items-center justify-center"
      style={{
        backgroundImage: `url('/meeting2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      {/* Overlay for Better Text Contrast */}
      <div className="absolute inset-0"></div>

      {/* Text Content */}
      <div className="rounded-lg bg-neutral-100 bg-opacity-70 p-10 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-cyan-800 lg:text-5xl">
          About Us
        </h1>
        <p className="text-lg text-gray-600 text-shadow-white lg:text-xl">
          Discover our story and our commitment to excellence in the mortgage
          industry.
        </p>
      </div>
    </div>
  );
};

export default AboutHeroSection;
