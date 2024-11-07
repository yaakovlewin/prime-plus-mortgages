import CompanyValuesSection from "@/components/HomePage/CompanyValueSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesCards from "@/components/HomePage/ServicesCards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesCards />
      {/* <MortgageCalculator /> */}
      {/* <MortgageProcessSection /> */}
      {/* <Faq /> */}
      {/* <TestimonialsSection /> */}
      {/* <OurLocationSection /> */}
      <CompanyValuesSection />
    </>
  );
}
