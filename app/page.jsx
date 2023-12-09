import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ServicesOverview />
        </div>
    );
}
