"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";

export default function HeroCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    arrows: false,
  };

  return (
    <div className=" z-50 overflow-hidden pt-5">
      <Slider {...settings}>
        <CarouselItem
          heading1={"Innovative, Ambitious, and"}
          heading2={"Efficient"}
          subheading={"Redefining Mortgage Solutions for You"}
        ></CarouselItem>

        <CarouselItem
          heading1={"Expert Title Splitting Services"}
          heading2={"Unlocked"}
          subheading={"Maximize Your Investment Potential"}
        ></CarouselItem>
        <CarouselItem
          heading1={"Direct Bank Negotiations"}
          heading2={"For You"}
          subheading={"Navigating Negotiations for Optimal Terms"}
        ></CarouselItem>
        <CarouselItem
          heading1={"Securing Major Loans:"}
          heading2={"Up to £150 Million"}
          subheading={"Financing Your Ambitions, Large and Small"}
        ></CarouselItem>
      </Slider>
    </div>
  );
}
