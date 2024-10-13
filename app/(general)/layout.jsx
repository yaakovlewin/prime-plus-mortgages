import MortgageProcessSection from "@/components/HomePage/MortgageProcessSection";
import OurLocationSection from "@/components/HomePage/OurLocationSection";

export default function layout({ children }) {
  return (
    <div>
      {children}
      <MortgageProcessSection />
      {/* <Faq />
      <TestimonialsSection /> */}
      <OurLocationSection />
    </div>
  );
}
