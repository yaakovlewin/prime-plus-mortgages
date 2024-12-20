"use client";
import Map from "@/components/shared/Map";
import { contactInfo } from "@/js/contactInfo";

const LocationMapSection = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return <Map address={contactInfo} apiKey={apiKey} />;
};

export default LocationMapSection;
