import HeroSection from "@/components/HomePage/HeroSection";
import ServicesOverview from "@/components/HomePage/ServicesOverview";
import MortgageCalculator from "@/components/HomePage/MortgageCalculator";
import MortgageProcessSection from "@/components/HomePage/MortgageProcessSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import OurLocationSection from "@/components/HomePage/OurLocationSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesOverview />
            <MortgageCalculator />
            <MortgageProcessSection />
            <TestimonialsSection />
            <OurLocationSection />
        </>
    );
}
