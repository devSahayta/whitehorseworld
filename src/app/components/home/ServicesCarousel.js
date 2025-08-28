import Slider from "react-slick";
import Image from "next/image"; // ✅ Next.js optimized images
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// ✅ Slides with Event Categories
const slides = [
  { id: 1, img: "/images/events/slider1.jpg", title: "Government Events" },
  { id: 2, img: "/images/events/slider3.jpg", title: "Corporate Events" },
  { id: 3, img: "/images/events/slider5.jpg", title: "Sports Events" },
  { id: 4, img: "/images/events/slider4.jpg", title: "Artist Management" },
  { id: 5, img: "/images/events/slider6.jpg", title: "Exhibition & Fairs" },
  {
    id: 6,
    img: "/images/events/slider1.jpg",
    title: "International Acts",
  },
  {
    id: 7,
    img: "/images/events/slider4.jpg",
    title: "Database & Response Mgmt",
  },
  {
    id: 8,
    img: "/images/events/slider3.jpg",
    title: "Brand Activation & Marketing",
  },
  { id: 9, img: "/images/events/slider5.jpg", title: "Digital Marketing" },
  {
    id: 10,
    img: "/images/events/slider6.jpg",
    title: "Theme Installations",
  },
];

export default function ServicesCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5, // ✅ 4-5 images in a row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="max-w-[1400px] mx-auto px-6 py-12"
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

              {/* Caption */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-white text-lg md:text-xl font-bold text-center px-4"
                >
                  {slide.title}
                </motion.h3>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
