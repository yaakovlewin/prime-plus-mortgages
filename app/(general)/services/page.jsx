import ServicesCards from "@/components/HomePage/ServicesCards";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import BrickWallContainer from "@/components/shared/BrickWallContainer";
import servicesData from "@/js/servicesData";

const overviewService = servicesData[0];

const ServiceSection = () => {
  return (
    <div>
      <ServicesHeroSection />
      <BrickWallContainer>
        <ServicesOverview />
      </BrickWallContainer>
      {/* <section className="bg-sky-100 py-12 heropattern-architect-cyan-300/10">
        <div className="container mx-auto px-4">
          <Heading2 className="text-cyan-600">Our Expertise</Heading2>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-12 text-lg text-gray-700">
              With years of experience in the mortgage industry, Prime Plus
              Mortgages specializes in providing comprehensive financial
              solutions tailored to your needs. Our expert team is dedicated to
              making your property dreams a reality.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            
            <div className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <ShieldCheckIcon className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="mb-3 font-exo2 text-xl font-semibold text-cyan-900">
                FCA Regulated
              </h3>
              <p className="text-gray-600">
                As an FCA regulated mortgage broker, we maintain the highest
                standards of professional service and client protection.
              </p>
            </div>

           
            <div className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <BanknotesIcon className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="mb-3 font-exo2 text-xl font-semibold text-cyan-900">
                Competitive Rates
              </h3>
              <p className="text-gray-600">
                Access exclusive mortgage deals and competitive rates through
                our extensive network of trusted lenders.
              </p>
            </div>

         
            <div className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <UserGroupIcon className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="mb-3 font-exo2 text-xl font-semibold text-cyan-900">
                Personal Service
              </h3>
              <p className="text-gray-600">
                Receive dedicated support from our experienced team who will
                guide you through every step of your mortgage journey.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <BrickWallContainer>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Heading2 className="text-cyan-50">
              Your Mortgage Journey Starts Here
            </Heading2>
            <p className="mb-8 text-cyan-50">
              At Prime Plus Mortgages, we understand that every financial
              journey is unique. Our comprehensive range of services is designed
              to provide you with the flexibility and support you need at every
              stage of your property investment journey.
            </p>
          </div> */}

      {/* Example Service Overview */}
      {/* <DetailedServiceOverview service={overviewService} /> */}
      {/* </div>
      </BrickWallContainer> */}
      {/* <ServicesSection /> */}
      <ServicesCards />
    </div>
  );
};

export default ServiceSection;
