import Heading2 from "@/components/shared/Heading2";
import {
  BanknotesIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const ServicesOverview = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Heading2>Our Expertise</Heading2>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-12 text-lg text-cyan-100">
            With years of experience in the mortgage industry, Prime Plus
            Mortgages specializes in providing comprehensive financial solutions
            tailored to your needs. Our expert team is dedicated to making your
            property dreams a reality.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="group rounded-lg bg-sky-800 bg-opacity-70 p-6 shadow-lg transition-all duration-300 hover:bg-sky-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-900 text-cyan-300 group-hover:bg-cyan-800">
              <ShieldCheckIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-exo2 text-xl font-semibold text-cyan-300">
              FCA Regulated
            </h3>
            <p className="text-cyan-100">
              As an FCA regulated mortgage broker, we maintain the highest
              standards of professional service and client protection.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group rounded-lg bg-sky-800 bg-opacity-70 p-6 shadow-lg transition-all duration-300 hover:bg-sky-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-900 text-cyan-300 group-hover:bg-cyan-800">
              <BanknotesIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-exo2 text-xl font-semibold text-cyan-300">
              Competitive Rates
            </h3>
            <p className="text-cyan-100">
              Access exclusive mortgage deals and competitive rates through our
              extensive network of trusted lenders.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group rounded-lg bg-sky-800 bg-opacity-70 p-6 shadow-lg transition-all duration-300 hover:bg-sky-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-900 text-cyan-300 group-hover:bg-cyan-800">
              <UserGroupIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-exo2 text-xl font-semibold text-cyan-300">
              Personal Service
            </h3>
            <p className="text-cyan-100">
              Receive dedicated support from our experienced team who will guide
              you through every step of your mortgage journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
