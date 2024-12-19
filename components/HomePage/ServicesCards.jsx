import SectionContainer from "@/components/layout/SectionContainer";
import Heading2 from "@/components/shared/Heading2";
import ServiceCard from "@/components/shared/ServiceCard";
import defaultServices from "@/js/servicesData";

export default function ServicesCards({
  services = null,
  buttonText = "Learn More",
}) {
  const serviceList = services || defaultServices;

  const getAriaLabel = (service) => {
    return buttonText === "Learn More"
      ? `Learn more about our ${service.title.toLowerCase()} services`
      : `${buttonText} for ${service.title.toLowerCase()} services`;
  };

  return (
    <SectionContainer>
      <Heading2>{services ? "Other Services" : "Our Services"}</Heading2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {serviceList.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            prefix="services"
            buttonText={buttonText}
            ariaLabel={getAriaLabel(service)}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
