import DynamicHeroSection from "@/components/shared/DynamicHeroSection";

const ServicesHeroSection = () => {
  return (
    <div>
      <DynamicHeroSection
        title="Services"
        description="Discover What We Offer"
        subDescription="Explore our wide range of mortgage solutions tailored to your needs."
        imageUrl="/images/services.jpg"
        ctaText="Get Started"
        ctaLink="/application"
        showContactInfo={true}
      />
      {/* Rest of your services page content */}
    </div>
  );
};

export default ServicesHeroSection;