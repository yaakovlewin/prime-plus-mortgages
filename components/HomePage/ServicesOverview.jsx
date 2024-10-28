import Heading2 from "@/components/shared/Heading2";
import ServiceCard from "@/components/shared/ServiceCard";
import servicesData from "@/js/servicesData";

export default function ServicesOverview() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Heading2>Our Services</Heading2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} prefix="services">
              Learn More
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
