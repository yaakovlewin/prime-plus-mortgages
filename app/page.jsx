import CompanyValuesSection from "@/components/HomePage/CompanyValueSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesOverview from "@/components/HomePage/ServicesOverview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      {/* <MortgageCalculator /> */}
      {/* <MortgageProcessSection /> */}
      {/* <Faq /> */}
      {/* <TestimonialsSection /> */}
      {/* <OurLocationSection /> */}
      <CompanyValuesSection />
    </>
  );
}
