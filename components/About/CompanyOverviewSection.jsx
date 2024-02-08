import Heading2 from "../Heading2";

const CompanyOverviewSection = () => {
  return (
    <section className="bg-sky-100 py-12">
      <div className="container mx-auto px-4">
        <Heading2 className="mb-6 text-center text-3xl font-semibold text-cyan-600">
          Empowering Your Property Dreams with Precision and Passion
        </Heading2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              At Prime Plus Mortgages, we blend innovation ambition, and
              efficiency to pioneer bespoke mortgage solutions that lead the
              industry. By engaging directly with banks, we guarantee our
              diverse clientele, From enthusiastic first-time homebuyers to
              astute major investors, each receive mortgage plans meticulously
              crafted to their unique aspirations.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              Our team is devoted to navigating you through an expansive suite
              of mortgage options and cutting-edge title splitting services for
              ventures up to £150M. With us, you benefit from unmatched rates,
              adaptable solutions, and a dedication to seamless service, because
              your property dreams, regardless of scale, deserve unwavering
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
