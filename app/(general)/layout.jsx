import Faq from "@/components/HomePage/Faq";
import MortgageProcessSection from "@/components/HomePage/MortgageProcessSection";
import OurLocationSection from "@/components/HomePage/OurLocationSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";

export default function layout({ children }) {
  return (
    <div>
      {children}
      <MortgageProcessSection />
      <Faq />
      <TestimonialsSection />
      <OurLocationSection />
    </div>
  );
}
