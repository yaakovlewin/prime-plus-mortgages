import DynamicHeroSection from "../shared/DynamicHeroSection";

export default function ServiceHeroSection({ service }) {
  return (
    <DynamicHeroSection
      title={service.title}
      // description={service.shortDescription || service.title}
      subDescription={service.description}
      imageUrl={service.imageUrl}
      // ctaText="Get Started"
      // ctaLink={`/application/${service.url}`}
    />
  );
}
