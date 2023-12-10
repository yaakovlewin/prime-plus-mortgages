import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        quote: "MortgageCo provided outstanding service and helped me secure the best rate for my home loan.",
        author: "John Doe",
        imageSrc: "/images/testimonial-1.jpg", // Replace with actual image path
    },
    {
        quote: "The team at MortgageCo was incredibly helpful and made the mortgage process seamless and stress-free.",
        author: "Jane Smith",
        imageSrc: "/images/testimonial-2.jpg", // Replace with actual image path
    },
    {
        quote: "I highly recommend MortgageCo for their professionalism and expertise in the mortgage industry.",
        author: "Emily Johnson",
        imageSrc: "/images/testimonial-3.jpg", // Replace with actual image path
    },
    // ... add more testimonials as needed ...
];

export default function TestimonialsSection() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-6">
                    What Our Clients Say
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <TestimonialCard
                        quote="MortgageCo provided outstanding service and helped me secure the best rate for my home loan."
                        author="John Doe"
                        imageSrc="/images/testimonial-1.jpg" // Replace with actual image path
                    />
                    <TestimonialCard
                        quote="The team at MortgageCo was incredibly helpful and made the mortgage process seamless and stress-free."
                        author="Jane Smith"
                        imageSrc="/images/testimonial-2.jpg" // Replace with actual image path
                    />
                    <TestimonialCard
                        quote="I highly recommend MortgageCo for their professionalism and expertise in the mortgage industry."
                        author="Emily Johnson"
                        imageSrc="/images/testimonial-3.jpg" // Replace with actual image path
                    />
                    {/* Add more TestimonialCards as needed */}
                </div>
            </div>
        </section>
    );
}
