import Link from "next/link";

export default function ServiceHeroSection({ service }) {
  return (
    <div
      className="flex h-[50vh] items-center bg-cover bg-center object-fill px-10 py-24 text-white"
      style={{ backgroundImage: `url(${service.imageUrl})` }}
    >
      {" "}
      <div className="rounded-lg bg-neutral-300 bg-opacity-70 p-4 py-7 text-shadow-black md:w-1/3">
        <h1 className="mb-4 text-4xl font-bold text-shadow-black-lg">
          {service.title}
        </h1>
        <p className="mb-6 text-xl">{service.description}</p>
        <Link
          href="#learn-more"
          className="rounded bg-cyan-500 px-6 py-3 font-bold uppercase text-white text-shadow-none hover:bg-cyan-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
