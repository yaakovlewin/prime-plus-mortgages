"use client";
import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesOverview() {
    const scrollContainer = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollPosition = () => {
        const container = scrollContainer.current;
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
            container.scrollLeft < container.scrollWidth - container.offsetWidth
        );
    };

    useEffect(() => {
        const container = scrollContainer.current;
        container.addEventListener("scroll", checkScrollPosition);
        checkScrollPosition(); // Initial check

        return () => {
            container.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    const scroll = (scrollOffset) => {
        scrollContainer.current.scrollLeft += scrollOffset;
    };
    return (
        <section
            className="py-12 bg-gray-100 relative "
            onMouseEnter={() =>
                setCanScrollLeft(scrollContainer.current.scrollLeft > 0)
            }
            onMouseLeave={() => setCanScrollLeft(false)}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Our Services
                </h2>

                <div
                    ref={scrollContainer}
                    className="flex overflow-x-scroll gap-4 scrolling-touch hide-scroll-bar"
                >
                    <ServiceCard
                        title="Residential Mortgages"
                        description="Expert mortgage solutions for your home purchasing needs."
                        link="/services/residential"
                        imgSrc="/home.jpg" // Replace with your image path
                    />
                    <ServiceCard
                        title="Commercial Mortgages"
                        description="Tailored mortgage services for commercial properties."
                        link="/services/commercial"
                        imgSrc="/house2.jpg" // Replace with your image path
                    />
                    <ServiceCard
                        title="Refinancing"
                        description="Refinance your mortgage for better terms and rates."
                        link="/services/refinancing"
                        imgSrc="/images/refinancing.jpg" // Replace with your image path
                    />
                    <ServiceCard
                        title="Buy To Let"
                        description="Buy to let mortgages for your investment properties."
                        link="/services/buy-to-let"
                        imgSrc="/images/buy-to-let.jpg" // Replace with your image path
                    />
                    <ServiceCard
                        title="Bridging Loans"
                        description="Short term bridging loans for your property needs."
                        link="/services/bridging"
                        imgSrc="/images/bridging.jpg" // Replace with your image path
                    />
                    <ServiceCard
                        title="First Time Buyer"
                        description="Mortgage solutions for first time home buyers."
                        link="/services/first-time-buyer"
                        imgSrc="/images/first-time-buyer.jpg" // Replace with your image path
                    />
                    <ServiceCard
                        title="Insurance"
                        description="Insurance solutions for your mortgage needs."
                        link="/services/insurance"
                        imgSrc="/images/insurance.jpg" // Replace with your image path
                    />
                </div>

                {/* Scroll Buttons */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll(-300)} // Negative value for scrolling left
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg bg-opacity-75 md:bg-opacity-100 "
                        aria-label="Scroll left"
                    >
                        <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                )}

                {canScrollRight && (
                    <button
                        onClick={() => scroll(300)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg bg-opacity-75 md:bg-opacity-100"
                        aria-label="Scroll right"
                    >
                        <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                )}
            </div>
        </section>
    );
}
