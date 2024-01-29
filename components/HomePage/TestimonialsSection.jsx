"use client";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Heading2 from "../Heading2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Prime Plus Mortgages provided outstanding service and helped me secure the best rate for my home loan.",
    author: "Moishe Goldstein",
    imageSrc: "/profile1.png", // Replace with actual image path
  },
  {
    quote:
      "The team at Prime Plus Mortgages was incredibly helpful and made the mortgage process seamless and stress-free.",
    author: "Gavriel Cohen",
    imageSrc: "/profile2.png", // Replace with actual image path
  },
  {
    quote:
      "I highly recommend Prime Plus Mortgages for their professionalism and expertise in the mortgage industry.",
    author: "Shloime Schwartz",
    imageSrc: "/images/testimonial-3.jpg", // Replace with actual image path
  },
  {
    quote:
      "Prime Plus Mortgages provided outstanding service and helped me secure the best rate for my home loan.",
    author: "John Doe",
    imageSrc: "/images/testimonial-1.jpg", // Replace with actual image path
  },
  // ... add more testimonials as needed ...
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  }, []);

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: slidesToShow,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: false,

    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <section className="bg-gray-100 py-12 md:py-14">
      <div className="container mx-auto px-4">
        <Heading2>What Our Clients Say</Heading2>

        <Slider
          {...settings}
          afterChange={(current) => setCurrentSlide(current)}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard
                testimonial={testimonial}
                isHighlighted={index === currentSlide}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
