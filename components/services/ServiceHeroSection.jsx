import DynamicHeroSection from "../shared/DynamicHeroSection";

export default function ServiceHeroSection({
  service,
  urlPrefix = "",
  children,
}) {
  return (
    <DynamicHeroSection
      title={service.title}
      subDescription={service.description}
      imageUrl={service.imageUrl}
      ctaText={children}
      serviceUrl={service.url}
      urlPrefix={urlPrefix}
    />
  );
}
