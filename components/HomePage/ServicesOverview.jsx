"use client";
import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "../ServiceCard";
import BrickWallContainer from "../BrickWallContainer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import servicesData from "@/js/servicesData";

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
        <BrickWallContainer>
            <section
                className="py-12 relative "
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
                        {servicesData.map((service) => (
                            <ServiceCard
                                key={service.id}
                                title={service.title}
                                description={service.description}
                                link={`/services${service.url}`}
                                imgSrc={service.imageUrl}
                            />
                        ))}
                       
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
        </BrickWallContainer>
    );
}
