"use client";

import OurLocationSection from "@/components/HomePage/OurLocationSection";
import MortgageProcessSection from "@/components/shared/MortgageProcessSection";

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
