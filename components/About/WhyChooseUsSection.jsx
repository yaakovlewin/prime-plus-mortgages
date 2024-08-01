import Heading2 from "../common/Heading2";

const WhyChooseUsSection = () => {
  return (
    <section className=" bg-white py-12 ">
      <div className="container mx-auto px-4">
        <Heading2 className="mb-8 text-center text-3xl font-semibold text-cyan-600">
          Why Choose Prime Plus Mortgages
        </Heading2>
        <div className="grid gap-8 text-center md:grid-cols-3">
          {/* Unique Selling Point 1 */}
          <div>
            <h3 className="mb-2 font-exo2 text-xl font-bold text-sky-900">
              Bespoke Solutions, Personal Journeys
            </h3>
            <p className="text-justify text-gray-600">
              Your property journey is unique. We offer tailored mortgage
              solutions that resonate with your personal story, ensuring a
              partnership that values your financial journey above all.
            </p>
          </div>
          {/* Unique Selling Point 2 */}
          <div>
            <h3 className="mb-2 font-exo2 text-xl font-bold text-sky-900">
              Advocacy and Assurance
            </h3>
            <p className="text-justify text-gray-600">
              Navigate your mortgage journey with confidence. Our experts
              advocate on your behalf, ensuring every step is transparent,
              informed, and stress-free. We focus on what&apos;s right for you,
              not just what&apos;s easy.
            </p>
          </div>
          {/* Unique Selling Point 3 */}
          <div>
            <h3 className="mb-2 font-exo2 text-xl font-bold text-sky-900">
              Diverse Services, Singular Ambitions
            </h3>
            <p className="text-justify text-gray-600">
              Our service portfolio caters to a range of needs, from first-time
              purchases to substantial investments. <br />
              <i className=" italic">&quot;Prime Plus Mortgages&quot;</i> is
              more than a provider, we&apos;re your partner in realizing
              property potential, supporting projects up to £150M.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
