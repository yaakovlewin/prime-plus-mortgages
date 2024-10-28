import HeroSection from "@/components/HomePage/HeroSection";
import ServicesOverview from "@/components/HomePage/ServicesOverview";
import servicesData from "@/js/servicesData";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview services={servicesData} />
      {/* <MortgageCalculator /> */}
      {/* <MortgageProcessSection /> */}
      {/* <Faq /> */}
      {/* <TestimonialsSection /> */}
      {/* <OurLocationSection /> */}
    </>
  );
}
