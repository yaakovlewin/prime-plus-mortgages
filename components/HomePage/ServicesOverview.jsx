"use client";
import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "../ServiceCard";

import servicesData from "@/js/servicesData";
import Heading2 from "@/components/Heading2";
import Link from "next/link";

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
            className="py-12 relative "
            onMouseEnter={() => {
                setCanScrollLeft(scrollContainer.current.scrollLeft > 0);
                setCanScrollRight(
                    scrollContainer.current.scrollLeft <
                        scrollContainer.current.scrollWidth -
                            scrollContainer.current.offsetWidth
                );
            }}
            onMouseLeave={() => {
                setCanScrollLeft(false);
                setCanScrollRight(false);
            }}
        >
            <div className="container mx-auto px-4">
                <Heading2>Our Services</Heading2>
                <div className=" relative rounded">
                    <div
                        ref={scrollContainer}
                        className="flex overflow-x-scroll gap-4 scrolling-touch hide-scroll-bar rounded"
                    >
                        <div className="grid grid-flow-col gap-4">
                            {servicesData.map((service) => (
                                <div
                                    className="w-full md:w-96 md:h-full"
                                    key={service.id}
                                >
                                    <ServiceCard
                                        key={service.id}
                                        title={service.title}
                                        description={service.description}
                                        link={`/services${service.url}`}
                                        imgSrc={service.imageUrl}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Scroll Buttons */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll(-300)} // Negative value for scrolling left
                            className="absolute left-3 md:left-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg bg-opacity-75 md:bg-opacity-100 "
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
                            className="absolute right-3  top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg bg-opacity-75 md:bg-opacity-100"
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
                <article className="mt-8">
                    <Link
                        href="/services"
                        className="text-center font-zilla-slab underline text-xl font-semibold mt-4 block text-cyan-500 hover:text-cyan-600 transition-colors duration-300 border-cyan-500 hover:border-cyan-600 border-b-2"
                    >
                        <button className="block mx-auto mt-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded px-4 py-2">
                            All Services
                        </button>
                    </Link>
                </article>
            </div>
        </section>
    );
}
