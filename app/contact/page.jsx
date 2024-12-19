import ContactFormSection from "@/components/Contact/ContactFormSection";
import ContactHeroSection from "@/components/Contact/ContactHeroSection";
import ContactInfoSection from "@/components/Contact/ContactInfoSection";
import MapContainer from "@/components/HomePage/MapContainer";
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: "Contact Us | Prime Plus Mortgages Salford & Manchester",
  description:
    "Get in touch with our expert mortgage advisors in Salford & Manchester. Professional mortgage advice, competitive rates, and personalized solutions for your property finance needs.",
  keywords: [
    ...defaultMetadata.keywords.split(", "),
    "contact mortgage broker",
    "mortgage advisor contact",
    "book mortgage appointment",
    "mortgage consultation Salford",
    "mortgage advice Manchester",
  ].join(", "),
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Contact Prime Plus Mortgages | Expert Mortgage Advice",
    description:
      "Get in touch with our expert mortgage advisors in Salford & Manchester. Professional mortgage advice, competitive rates, and personalized solutions for your property finance needs.",
  },
};

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
