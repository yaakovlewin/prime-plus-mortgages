"use client";

import FormHeroSection from "@/components/shared/FormHeroSection";
import ServiceCard from "@/components/shared/ServiceCard";
import servicesData from "@/js/servicesData";

export default function ApplicationForm() {
  return (
    <div className="container mx-auto min-h-screen bg-sky-100 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <FormHeroSection>
        <h1 className="mb-8 text-center text-3xl font-bold text-sky-900">
          Choose Your Application Type
        </h1>
      </FormHeroSection>

      {/* Button Links Section */}
      <div className="grid gap-6 md:grid-cols-5">
        {servicesData.map((service) => (
          <div key={service.id}>
            <ServiceCard {...service} prefix={"application"}>
              Apply
            </ServiceCard>
          </div>
        ))}
      </div>
    </div>
  );
}
