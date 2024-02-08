import React from "react";
import Heading2 from "../Heading2";

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
              Customized Solutions That Understand You
            </h3>
            <p className="text-justify text-gray-600">
              Every journey is distinct. Whether you&apos;re stepping onto the
              property ladder, scaling your investment horizon, or delving into
              high-value projects, our mission is to provide mortgage solutions
              that resonate with your individual story. We promise not just
              optimal terms, but a partnership that values your unique financial
              journey.
            </p>
          </div>
          {/* Unique Selling Point 2 */}
          <div>
            <h3 className="mb-2 font-exo2 text-xl font-bold text-sky-900">
              Guidance That Guides, Not Dictates
            </h3>
            <p className="text-justify text-gray-600">
              Embark on your mortgage journey with assurance. Our experts
              don&apos;t just communicate with banks, they advocate for you,
              ensuring every step is informed, transparent, and devoid of
              stress. It&apos;s not just about making it smooth; it&apos;s about
              making it right.
            </p>
          </div>
          {/* Unique Selling Point 3 */}
          <div>
            <h3 className="mb-2 font-exo2 text-xl font-bold text-sky-900">
              A Spectrum of Services for Every Ambition
            </h3>
            <p className="text-justify text-gray-600">
              Our portfolio is as varied as our clients. From navigating your
              first purchase, amplifying your investment portfolio, to
              strategizing on title splitting for substantial investments, our
              spectrum of services is designed with your ambitions in mind.
              <br />
              <i className=" italic">&quot;Prime Plus Mortgages&quot;</i> isn’t
              just a provider, we&apos;re your partner in propery dreams.
              realizing property potential, ready to support projects up to
              £150M.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
