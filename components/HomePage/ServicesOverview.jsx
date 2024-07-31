"use client";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "../ServiceCard";

import Heading2 from "@/components/Heading2";

export default function ServicesOverview({ services }) {
  const scrollContainer = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollContainer.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.offsetWidth,
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
      className="relative py-12 "
      onMouseEnter={() => {
        setCanScrollLeft(scrollContainer.current.scrollLeft > 0);
        setCanScrollRight(
          scrollContainer.current.scrollLeft <
            scrollContainer.current.scrollWidth -
              scrollContainer.current.offsetWidth,
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
            className="scrolling-touch hide-scroll-bar flex gap-4 overflow-x-scroll rounded"
          >
            <div className="grid grid-flow-col gap-4">
              {services.map((service) => (
                <div className="w-96 md:h-full" key={service.id}>
                  <ServiceCard {...service} prefix={"services"}>
                    Learn More
                  </ServiceCard>
                </div>
              ))}
            </div>
          </div>
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll(-400)} // Negative value for scrolling left
              className="absolute left-3 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-75 p-2 shadow-lg md:bg-opacity-100 "
              aria-label="Scroll left"
            >
              <svg
                className="h-6 w-6 text-gray-600"
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
              onClick={() => scroll(400)}
              className="absolute right-3  top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-75 p-2 shadow-lg md:bg-opacity-100"
              aria-label="Scroll right"
            >
              <svg
                className="h-6 w-6 text-gray-600"
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
          <div className="mt-4 block border-b-2 border-cyan-500 text-center font-zilla-slab text-xl font-semibold text-cyan-500 underline transition-colors duration-300 hover:border-cyan-600 hover:text-cyan-600"></div>
        </article>
      </div>
    </section>
  );
}
