"use client";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Heading2 from "../Heading2";

const testimonials = [
    {
        quote: "Prime Plus Mortgages provided outstanding service and helped me secure the best rate for my home loan.",
        author: "Moishe Goldstein",
        imageSrc: "/profile1.png", // Replace with actual image path
    },
    {
        quote: "The team at Prime Plus Mortgages was incredibly helpful and made the mortgage process seamless and stress-free.",
        author: "Gavriel Cohen",
        imageSrc: "/profile2.png", // Replace with actual image path
    },
    {
        quote: "I highly recommend Prime Plus Mortgages for their professionalism and expertise in the mortgage industry.",
        author: "Shloime Schwartz",
        imageSrc: "/images/testimonial-3.jpg", // Replace with actual image path
    },
    {
        quote: "Prime Plus Mortgages provided outstanding service and helped me secure the best rate for my home loan.",
        author: "John Doe",
        imageSrc: "/images/testimonial-1.jpg", // Replace with actual image path
    },
    // ... add more testimonials as needed ...
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        // Adjust this timeout value as needed for automatic transition
        const interval = setInterval(() => {
            setActiveIndex(
                (prevIndex) => (prevIndex + 1) % testimonials.length
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const visibleTestimonials = [
        testimonials[
            (activeIndex + testimonials.length - 1) % testimonials.length
        ],
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
    ];

    return (
        <section className="bg-gray-100 py-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <Heading2>What Our Clients Say</Heading2>
                <div className="flex justify-center gap-4">
                    {visibleTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                            isHighlighted={index === 1}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-6 gap-4 overflow-hidden">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`inline-block h-3 w-3 mx-1 rounded-full cursor-pointer ${
                                index === activeIndex
                                    ? "bg-cyan-500"
                                    : "bg-gray-400"
                            }`}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}
