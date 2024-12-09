"use client";

import ContactFormSection from "@/components/Contact/ContactFormSection";
import ContactHeroSection from "@/components/Contact/ContactHeroSection";
import ContactInfoSection from "@/components/Contact/ContactInfoSection";
import MapContainer from "@/components/HomePage/MapContainer";

const ContactPage = () => {
  return (
    <div>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      {/* <LocationMapSection /> */}
      <MapContainer />
    </div>
  );
};

export default ContactPage;
