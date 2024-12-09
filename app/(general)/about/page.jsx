"use client";

import AboutHeroSection from "@/components/About/AboutHeroSection";
import CompanyOverviewSection from "@/components/About/CompanyOverviewSection";
import MeetTheTeamSection from "@/components/About/MeetTheTeamSection";
import ValuesMissionSection from "@/components/About/ValuesMissionSection";
import WhyChooseUsSection from "@/components/About/WhyChooseUsSection";

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
