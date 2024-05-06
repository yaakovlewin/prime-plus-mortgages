import Link from "next/link";

export default function ServiceHeroSection({ service }) {
  return (
    <div className="bg-sky-100 heropattern-tinycheckers-sky-300/50">
      <section
        className="mx-auto flex min-h-[40vh] max-w-[2000px] items-center bg-cyan-50 bg-opacity-70 bg-cover bg-center object-fill px-10 py-24 text-teal-50 text-shadow-black-border-sm sm:h-[50vh] md:h-[60vh] lg:h-[70vh] lg:border-green-200 2xl:border-x-4 "
        style={{ backgroundImage: `url(${service.imageUrl})` }}
      >
        {" "}
        <article className="rounded-lg bg-teal-50 bg-opacity-70 p-4 py-7 text-shadow-black md:w-1/3">
          <h1 className="mb-4 text-3xl font-bold text-shadow-black-lg">
            {service.title}
          </h1>
          <p className="mb-6 w-fit bg-white bg-opacity-5 text-xl text-sky-950 text-shadow-white">
            {service.description}
          </p>
          <Link
            href="#learn-more"
            className="rounded bg-cyan-500 px-6 py-3 font-bold uppercase text-white text-shadow-none hover:bg-cyan-600"
          >
            Get Started
          </Link>
        </article>
      </section>
    </div>
  );
}
