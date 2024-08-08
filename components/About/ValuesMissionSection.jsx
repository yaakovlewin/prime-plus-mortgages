import Heading2 from "../shared/Heading2";

const ValuesMissionSection = () => {
  return (
    <section className="border-t border-sky-100 bg-gray-50 py-12 ">
      <div className="container mx-auto px-4">
        <Heading2 className="mb-6 text-center text-3xl font-semibold text-cyan-600">
          Our Core Principles
        </Heading2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Value 1 */}
          <div className="rounded-lg bg-white p-6 text-center shadow">
            <h3 className="mb-3 text-xl font-semibold">Integrity</h3>
            <p className="text-gray-600">
              Honesty and transparency are the foundation of our work, We pledge
              to always act in your best interest.
            </p>
          </div>

          {/* Value 2 */}
          <div className="rounded-lg bg-white p-6 text-center shadow">
            <h3 className="mb-3 text-xl font-semibold">Commitment</h3>
            <p className="text-gray-600">
              Our dedication to exceptional service and value is unwavering.
              We&apos;re not just in it for the transaction, we&apos;re in it
              for you.
            </p>
          </div>

          {/* Value 3 */}
          <div className="rounded-lg bg-white p-6 text-center shadow">
            <h3 className="mb-3 text-xl font-semibold">Expertise</h3>
            <p className="text-gray-600">
              Our commitment to growth means we&apos;re always enhancing our
              skills to serve you better.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Heading2 className="mb-6 text-center text-3xl font-semibold text-cyan-600">
            Empowering Your Financial Journey
          </Heading2>
          <p className="text-lg text-gray-700">
            Prime Plus Mortgages goes beyond transactions. We&apos;re here to
            enlighten and empower, offering a blend of expert advice, tailored
            solutions, and complete transparency. As your ally in the mortgage
            landscape, we&apos;re committed to guiding you with integrity,
            supporting your ambitions with dedication, and leading with
            expertise. Together, we&apos;ll pave the way to your property
            dreams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesMissionSection;
