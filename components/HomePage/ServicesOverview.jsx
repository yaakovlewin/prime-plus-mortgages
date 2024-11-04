import Heading2 from "@/components/shared/Heading2";
import ServiceCard from "@/components/shared/ServiceCard";
import defaultServices from "@/js/servicesData";
import SectionContainer from "../layout/SectionContainer";

export default function ServicesOverview({ services = null }) {
  const serviceList = services || defaultServices;

  return (
    <SectionContainer>
      <Heading2>{services ? "Other Services" : "Our Services"}</Heading2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {serviceList.map((service) => (
          <ServiceCard key={service.id} {...service} prefix="services">
            Learn More
          </ServiceCard>
        ))}
      </div>
    </SectionContainer>
  );
}
