import DetailedServiceOverview from "@/components/services/[slug]/DetailedServiceOverview";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import servicesData from "@/js/servicesData";

export default function page({ params: { slug } }) {
  console.log("slug", slug);
  const service = servicesData.find((s) => s.url === `/${slug}`);

  if (!service) {
    console.log("Service not found");
    return <div>Service not found</div>;
  }

  return (
    <div>
      {/* Header Section */}

      {/* Button Links Section */}
      <div className="">
        <ServiceHeroSection service={service} urlPrefix={"application/"}>
          Apply
        </ServiceHeroSection>
        <DetailedServiceOverview service={service} />
      </div>
    </div>
  );
}
