import Slider from "react-slick";
import Image from "next/image"; // Optional: If using Next.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

const slides = [
  { id: 1, img: "/images/slides/slider1.jpg", alt: "Slide 1" },
  { id: 2, img: "/images/slides/slider2.jpg", alt: "Slide 2" },
  { id: 3, img: "/images/slides/slider3.jpg", alt: "Slide 3" },
  { id: 4, img: "/images/slides/slider4.jpg", alt: "Slide 4" },
  { id: 5, img: "/images/slides/slider5.jpg", alt: "Slide 5" },
  { id: 6, img: "/images/slides/slider6.jpg", alt: "Slide 6" },
];

export default function HomeCarousel2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="max-w-6xl mx-auto px-4 py-10"
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="transition-transform duration-300 transform hover:scale-105 rounded-xl overflow-hidden"
            >
              <Image
                src={slide.img}
                alt={slide.alt}
                width={600}
                height={400}
                className="object-cover w-full h-60 rounded-xl"
              />
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
