import DetailedServiceOverview from "@/components/services/[slug]/DetailedServiceOverview";
import ServiceHeroSection from "@/components/services/[slug]/ServiceHeroSection";
import Empty from "@/components/services/[slug]/empty";
import serviceData from "@/js/servicesData"; // Import service data

const ServicePage = ({ params: { slug } }) => {
    // Example: Find the service by URL parameter or similar logic
    const service = serviceData.find((s) => s.url === `/${slug}`);
    console.log(service);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div>
            <ServiceHeroSection service={service} />
            <DetailedServiceOverview service={service} />
            <Empty />
            {/* More sections will go here */}
        </div>
    );
};

export default ServicePage;
