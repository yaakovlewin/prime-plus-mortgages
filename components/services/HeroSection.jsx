import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-sky-300 heropattern-tinycheckers-white">
      <section
        className="mx-auto flex min-h-[40vh] max-w-[2000px] items-center border-x-4 border-green-200 bg-cyan-50 bg-opacity-70 bg-cover bg-center object-fill px-10 py-24 text-cyan-50 text-shadow-black-border-sm sm:h-[50vh] md:h-[60vh] lg:h-[70vh] "
        style={{ backgroundImage: `url('/services.jpg')` }}
      >
        {" "}
        <article className="rounded-lg bg-teal-50 bg-opacity-70 p-4 py-7 text-shadow-black md:w-1/3">
          <h1 className="mb-4 text-4xl font-bold text-shadow-black-lg">
            Services
          </h1>
          <p className=" text-3xl font-medium text-sky-600 text-shadow-white">
            Discover What We Offer
          </p>
          <p className="mb-8 font-exo2 text-xl text-sky-950 text-shadow-none">
            Explore our wide range of mortgage solutions tailored to your needs.
          </p>
          <Link
            href="#learn-more"
            className=" rounded border border-sky-500 bg-cyan-500 px-6 py-4 font-bold uppercase text-white shadow-2xl text-shadow-none hover:bg-cyan-600"
          >
            Get Started
          </Link>
        </article>
      </section>
    </div>
  );
};

export default HeroSection;
