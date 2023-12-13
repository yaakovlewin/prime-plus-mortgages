import React from "react";

const ServiceHeroSection = ({ service }) => {
    return (
        <div
            className="bg-cover bg-center h-96 text-white py-24 px-10 object-fill"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
        >
            {" "}
            {/* Replace with the background image specific to the service */}
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl mb-6">{service.heroSubText}</p>
                <a
                    href="#learn-more"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded uppercase"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default ServiceHeroSection;
