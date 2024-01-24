import React from "react";
import ContactHeroSection from "@/components/Contact/ContactHeroSection";
import ContactFormSection from "@/components/Contact/ContactFormSection";
import ContactInfoSection from "@/components/Contact/ContactInfoSection";
import LocationMapSection from "@/components/Contact/LocationMapSection";
import OurLocationSection from "@/components/HomePage/OurLocationSection";

const ContactPage = () => {
    return (
        <div>
            <ContactHeroSection />
            <ContactFormSection />
            <ContactInfoSection />
            {/* <LocationMapSection /> */}
            <OurLocationSection />
        </div>
    );
};

export default ContactPage;
