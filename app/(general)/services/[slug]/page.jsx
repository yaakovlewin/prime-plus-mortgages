import ServicesCards from "@/components/HomePage/ServicesCards";
import DetailedServiceOverview from "@/components/services/DetailedServiceOverview";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import { defaultMetadata, serviceMetadata } from "@/config/metadata";
import servicesData from "@/js/servicesData";
import Script from "next/script";

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
          alt: `${service.title} - Prime Plus Mortgages Service`,
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.primeplusmortgages.co.uk${service.url}`,
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Prime Plus Mortgages",
      "@id": "https://www.primeplusmortgages.co.uk",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "53.4808",
        longitude: "-2.2426",
      },
      geoRadius: "30000",
    },
    serviceType: "Financial Service",
    category: "Mortgage Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.details.map((detail, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: detail.title,
          description: detail.description,
        },
      })),
    },
    image: {
      "@type": "ImageObject",
      url: `https://www.primeplusmortgages.co.uk${service.imageUrl}`,
      caption: `${service.title} - Prime Plus Mortgages Service`,
    },
  };

  return (
    <div>
      <Script
        id={`service-schema-${service.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
