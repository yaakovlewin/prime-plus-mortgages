import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="flex h-[50vh] items-center bg-cover bg-center object-fill px-10 py-24 text-white"
      style={{ backgroundImage: `url('/services.jpg')` }}
    >
      {" "}
      <div className="rounded-lg bg-neutral-200 bg-opacity-60 p-4 py-7 text-shadow-black md:w-1/2">
        <h1 className="mb-4 text-4xl font-bold">Services</h1>
        <p className=" text-3xl font-medium text-sky-600 text-shadow-white">
          Discover What We Offer
        </p>
        <p className="mb-8 text-xl">
          Explore our wide range of mortgage solutions tailored to your needs.
        </p>
        <Link
          href="#learn-more"
          className=" rounded border border-sky-500 bg-cyan-500 px-6 py-4 font-bold uppercase text-white shadow-2xl text-shadow-none hover:bg-cyan-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
