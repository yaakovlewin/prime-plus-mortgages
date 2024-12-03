"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const defaultComponents = {
  h1: (props) => <h1 className="mb-4 text-4xl font-bold" {...props} />,
  h2: (props) => <h2 className="mb-3 text-3xl font-bold" {...props} />,
  h3: (props) => <h3 className="mb-2 text-2xl font-bold" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
  ul: (props) => <ul className="mb-4 list-inside list-disc" {...props} />,
  ol: (props) => <ol className="mb-4 list-inside list-decimal" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  a: (props) => (
    <a
      className="text-blue-600 underline hover:text-blue-800"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-gray-300 pl-4 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-4 overflow-x-auto rounded bg-gray-100 p-4 font-mono text-sm"
      {...props}
    />
  ),
  Slider: ({ children, ...props }) => {
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
      <Slider {...settings} {...props}>
        {children}
      </Slider>
    );
  },
};

export default defaultComponents;
