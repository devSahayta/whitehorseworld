"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* eslint-disable @next/next/no-img-element */
export default function HomeCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const slides = [
    { id: 1, img: "/images/slides/slider1.jpg", alt: "Slide 1" },
    { id: 2, img: "/images/slides/slider2.jpg", alt: "Slide 2" },
    { id: 3, img: "/images/slides/slider3.jpg", alt: "Slide 3" },
    { id: 4, img: "/images/slides/slider4.jpg", alt: "Slide 4" },
    { id: 5, img: "/images/slides/slider5.jpg", alt: "Slide 5" },
    { id: 6, img: "/images/slides/slider6.jpg", alt: "Slide 6" },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-screen h-[450px] ">
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
