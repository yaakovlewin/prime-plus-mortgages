import ServicesOverview from "@/components/HomePage/ServicesOverview";
import DetailedServiceOverview from "@/components/services/[slug]/DetailedServiceOverview";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import servicesData from "@/js/servicesData"; // Import service data

const ServicePage = ({ params: { slug } }) => {
  // Example: Find the service by URL parameter or similar logic
  const service = servicesData.find((s) => s.url === `/${slug}`);

  if (!service) {
    return <div>Service not found</div>;
  }

  const otherServices = servicesData.filter(
    (service) => service.url !== `/${slug}`,
  );
  console.log("otherServices", otherServices);
  console.log("slug", slug);

  return (
    <div>
      <ServiceHeroSection service={service} urlPrefix="application/">
        Apply
      </ServiceHeroSection>
      <DetailedServiceOverview service={service} />
      <ServicesOverview services={otherServices} />
    </div>
  );
};

export default ServicePage;
