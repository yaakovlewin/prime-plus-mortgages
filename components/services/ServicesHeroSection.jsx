import DynamicHeroSection from "../shared/DynamicHeroSection";

const ServicesHeroSection = () => {
  return (
    <DynamicHeroSection
      title="Services"
      description="Discover What We Offer"
      subDescription="Explore our wide range of mortgage solutions tailored to your needs."
      imageUrl="/images/hero/services.jpg"
      ctaText="Apply Now"
      ctaLink="/application"
    />
  );
};

export default ServicesHeroSection;
