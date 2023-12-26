import React from "react";

export default function ServiceHeroSection({ service }) {
    return (
        <div
            className="bg-cover bg-center h-4/5 text-white py-24 px-10 object-fill"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
        >
            {" "}
            {/* Replace with the background image specific to the service */}
            <div className="md:w-1/2 bg-gray-400 bg-opacity-40 rounded-lg p-4 py-7">
                <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl mb-6">{service.description}</p>
                <a
                    href="#learn-more"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded uppercase"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}
