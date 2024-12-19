import ServicesCards from "@/components/HomePage/ServicesCards";
import DetailedServiceOverview from "@/components/services/DetailedServiceOverview";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import { defaultMetadata, serviceMetadata } from "@/config/metadata";
import servicesData from "@/js/servicesData";

// Separate async function to load the data
async function getServiceData(slug) {
  const service = servicesData.find((s) => s.url === `/${slug}`);
  const otherServices = servicesData.filter((s) => s.url !== `/${slug}`);
  return { service, otherServices };
}

// Generate metadata for each service page
export async function generateMetadata({ params }) {
  const { service } = await getServiceData(params.slug);
  if (!service) return defaultMetadata;

  // Map URL slug to serviceMetadata key
  const metadataKey = service.id;
  const serviceSpecificMetadata = serviceMetadata[metadataKey] || {};

  return {
    ...defaultMetadata,
    title:
      serviceSpecificMetadata.title ||
      `${service.title} | Prime Plus Mortgages`,
    description: serviceSpecificMetadata.description || service.description,
    keywords: [
      ...(defaultMetadata.keywords || "").split(", "),
      ...(serviceSpecificMetadata.keywords || "").split(", "),
    ].join(", "),
    openGraph: {
      ...defaultMetadata.openGraph,
      title:
        serviceSpecificMetadata.title ||
        `${service.title} | Prime Plus Mortgages`,
      description: serviceSpecificMetadata.description || service.description,
      images: [
        {
          url: service.imageUrl,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const { service, otherServices } = await getServiceData(resolvedParams.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <ServiceHeroSection service={service} urlPrefix="application/">
        Apply
      </ServiceHeroSection>
      <DetailedServiceOverview service={service} />
      <ServicesCards services={otherServices} />
    </div>
  );
}

// Pre-render these routes at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.url.replace("/", ""),
  }));
}
