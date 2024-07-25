import React from "react";
import AboutHeroSection from "@/components/About/AboutHeroSection";
import CompanyOverviewSection from "@/components/About/CompanyOverviewSection";
import WhyChooseUsSection from "@/components/About/WhyChooseUsSection";
import MeetTheTeamSection from "@/components/About/MeetTheTeamSection";
import ValuesMissionSection from "@/components/About/ValuesMissionSection";

// Dummy data for team members
const teamMembers = [
    { id: 1, name: "John Doe", role: "CEO", photoUrl: "/images/john.jpg" },
    { id: 2, name: "Jane Doe", role: "CTO", photoUrl: "/images/jane.jpg" },
    // ...more members
];

const AboutPage = () => {
    return (
        <div>
            <AboutHeroSection />
            <CompanyOverviewSection />
            <WhyChooseUsSection />
            <MeetTheTeamSection teamMembers={teamMembers} />
            <ValuesMissionSection />
        </div>
    );
};

export default AboutPage;
