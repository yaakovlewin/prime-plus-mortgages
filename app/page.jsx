import Faq from "@/components/HomePage/Faq";
import HeroSection from "@/components/HomePage/HeroSection";
import MortgageCalculator from "@/components/HomePage/MortgageCalculator";
import MortgageProcessSection from "@/components/HomePage/MortgageProcessSection";
import OurLocationSection from "@/components/HomePage/OurLocationSection";
import ServicesOverview from "@/components/HomePage/ServicesOverview";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import servicesData from "@/js/servicesData";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview services={servicesData} />
      <MortgageCalculator />
      <MortgageProcessSection />
      <Faq />
      <TestimonialsSection />
      <OurLocationSection />
    </>
  );
}
