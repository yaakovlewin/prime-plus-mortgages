import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import MortgageCalculator from "@/components/MortgageCalculator";
import MortgageProcessSection from "@/components/MortgageProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OurLocationSection from "@/components/OurLocationSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ServicesOverview />
            <MortgageCalculator />
            <MortgageProcessSection />
            <TestimonialsSection />
            <OurLocationSection />
        </div>
    );
}
