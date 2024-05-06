export default function CarouselItem({ heading1, heading2, subheading }) {
  return (
    <div className="">
      <h1 className="mb-6 font-rubik text-2xl font-semibold uppercase tracking-tight text-sky-950 text-shadow-white-border md:text-3xl xl:text-5xl">
        {heading1}
        <br />
        <small className="text-2xl text-white text-shadow-black-border md:text-3xl xl:text-5xl">
          {heading2}
        </small>
      </h1>
      <p className="text-md mb-6 text-shadow-black-border md:text-lg">
        {subheading}
      </p>
    </div>
  );
}
