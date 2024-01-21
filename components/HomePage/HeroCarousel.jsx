"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        arrows: false,
    };

    return (
        <div className=" z-50 overflow-hidden">
            <Slider {...settings}>
                <div>
                    <h1 className="text-3xl md:text-6xl font-rubik text-sky-950 text-shadow-white sm:text-shadow-white-border uppercase font-semibold tracking-tighter mb-6">
                        Inovative, Ambitious, and
                        <br />
                        <small className="md:text-6xl text-white text-shadow-black-border">
                            Efficient
                        </small>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 text-shadow-black-border">
                        Leading the way in mortgage solutions
                    </p>
                </div>

                {/* Add more slides as needed */}

                <div>
                    <h1 className="text-3xl md:text-6xl font-rubik text-sky-950 text-shadow-white sm:text-shadow-white-border uppercase font-semibold tracking-tighter mb-6">
                        We offer
                        <br />
                        <small className="md:text-6xl text-white text-shadow-black-border">
                            title splitting
                        </small>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 text-shadow-black-border">
                        We are the experts in title splits
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl md:text-6xl font-rubik text-sky-950 text-shadow-white sm:text-shadow-white-border uppercase font-semibold tracking-tighter mb-6">
                        We speak to the banks
                        <br />
                        <small className="md:text-6xl text-white text-shadow-black-border">
                            Directly
                        </small>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 text-shadow-black-border">
                        We have direct access to the banks
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl md:text-6xl font-rubik text-sky-950 text-shadow-white sm:text-shadow-white-border uppercase font-semibold tracking-tighter mb-6">
                        Loans up to
                        <br />
                        <small className="md:text-6xl text-white text-shadow-black-border">
                            £150,000,000
                        </small>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 text-shadow-black-border">
                        We can provide loans up to £150,000,000
                    </p>
                </div>
            </Slider>
        </div>
    );
}
