import Heading2 from "../Heading2";

const CompanyOverviewSection = () => {
  return (
    <section className="bg-sky-100 py-12">
      <div className="container mx-auto px-4">
        <Heading2 className="mb-1 text-center text-3xl font-semibold text-cyan-600">
          Empower Your Property Dreams
        </Heading2>
        <h3 className="mb-6 text-center font-exo2 text-lg font-semibold tracking-wide text-sky-950">
          Precision Meets Passion at Prime Plus Mortgages
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-justify text-lg leading-relaxed text-gray-700">
              At Prime Plus Mortgages, innovation meets ambition. We tailor
              every mortgage plan to fit the dreams of our clients, from eager
              first-timers to savvy investors. Experience custom mortgage and
              title-splitting services that set the standard in the industry.
            </p>
          </div>
          <div>
            <p className="text-justify text-lg leading-relaxed text-gray-700">
              Our strong relationships with banks mean you get unparalleled
              rates and flexible solutions. We negotiate on your behalf,
              ensuring a mortgage plan that&apos;s as unique as your property
              aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
