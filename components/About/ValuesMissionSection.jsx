import React from "react";
import Heading2 from "../Heading2";

const ValuesMissionSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Heading2 className="mb-6 text-center text-3xl font-semibold text-cyan-600">
          Our Core Principles
        </Heading2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Value 1 */}
          <div className="rounded-lg bg-white p-6 text-center shadow">
            <h3 className="mb-3 text-xl font-semibold">Integrity</h3>
            <p className="text-gray-600">
              We&apos;re steadfast in maintaining the utmost integrity, ensuring
              honesty and transparency are at the heart of everything we do.
            </p>
          </div>

          {/* Value 2 */}
          <div className="rounded-lg bg-white p-6 text-center shadow">
            <h3 className="mb-3 text-xl font-semibold">Commitment</h3>
            <p className="text-gray-600">
              Our dedication is unwavering. Delivering exceptional service and
              unparalleled value to our clients is not just our promise;
              it&apos;s our practice.
            </p>
          </div>

          {/* Value 3 */}
          <div className="rounded-lg bg-white p-6 text-center shadow">
            <h3 className="mb-3 text-xl font-semibold">Expertise</h3>
            <p className="text-gray-600">
              We believe in perpetual growth, constantly enhancing our knowledge
              and skills to exceed your expectations.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Heading2 className="mb-6 text-center text-3xl font-semibold text-cyan-600">
            Empowering Your Financial Journey
          </Heading2>
          <p className="text-lg text-gray-700">
            At Prime Plus Mortgages, our mission transcends mere transactions.
            We&apos;re here to enlighten and empower you, enabling informed
            financial decisions through a blend of expert advice, bespoke
            solutions, and absolute transparency. As your ally in the mortgage
            landscape, we commit to guiding you with integrity, supporting your
            ambitions with our unwavering commitment, and leading with our
            expertise. Together, we&apos;ll navigate the path to your property
            dreams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesMissionSection;
