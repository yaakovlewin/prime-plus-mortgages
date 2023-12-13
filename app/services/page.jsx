import React from "react";
import servicesData from "@/js/servicesData"; // Adjust the path as necessary
import Image from "next/image";
import HeroSection from "@/components/services/HeroSection";
import Link from "next/link";

const ServiceSection = () => {
    return (
        <div>
            <HeroSection />
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Our Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white p-4 shadow rounded-lg"
                            >
                                <Image
                                    src={service.imageUrl}
                                    alt={service.title}
                                    width={150}
                                    height={150}
                                    className="w-full h-64 object-cover mb-4 rounded hover:opacity-75 transition-opacity duration-500   "
                                />
                                <h3 className="text-lg font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p>{service.description}</p>
                                <Link
                                    href={`/services${service.url}`}
                                    className="inline-block mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceSection;
