/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import Image from "next/image"; // Optional: If using Next.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    img: "https://shaadisquad.com/wp-content/uploads/2024/05/HannaSaif-Wedding16-2.jpg",
    alt: "Slide 1",
  },
  {
    id: 2,
    img: "https://shaadisquad.com/wp-content/uploads/2024/05/HannaSaif-Wedding16-2.jpg",
    alt: "Slide 2",
  },
  {
    id: 3,
    img: "https://shaadisquad.com/wp-content/uploads/2024/05/HannaSaif-Wedding16-2.jpg",
    alt: "Slide 3",
  },
  {
    id: 4,
    img: "https://shaadisquad.com/wp-content/uploads/2024/05/HannaSaif-Wedding16-2.jpg",
    alt: "Slide 4",
  },
  {
    id: 5,
    img: "https://shaadisquad.com/wp-content/uploads/2024/05/HannaSaif-Wedding16-2.jpg",
    alt: "Slide 5",
  },
  {
    id: 6,
    img: "https://shaadisquad.com/wp-content/uploads/2024/05/HannaSaif-Wedding16-2.jpg",
    alt: "Slide 6",
  },
];

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" absolute w-sec1-bg-container ">
      <Slider {...settings}>
        {slides.map((data) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            key={data.id}
            className="imageWrapper"
          >
            <img src={data.img} alt={data.alt}></img>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}
