export default function CarouselItem({ heading1, heading2, subheading }) {
  return (
    <div className="">
      <h1 className="mb-6 font-rubik text-3xl font-semibold uppercase tracking-tight text-sky-950 text-shadow-white-border md:text-6xl">
        {heading1}
        <br />
        <small className="text-3xl text-white text-shadow-black-border md:text-6xl">
          {heading2}
        </small>
      </h1>
      <p className="mb-6 text-lg text-shadow-black-border md:text-xl">
        {subheading}
      </p>
    </div>
  );
}
