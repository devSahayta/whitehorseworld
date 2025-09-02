"use client";
import Slider from "react-slick";
import Image from "next/image"; // ✅ Next.js optimized images
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// ✅ Slides with Event Categories
const slides = [
  { id: 1, img: "/images/work/work-government-event.jpg", title: "" },
  { id: 2, img: "/images/work/work-corporate-event.jpg", title: "" },
  { id: 3, img: "/images/work/work-sports.jpg", title: "" },
  { id: 4, img: "/images/work/work-artist-management.png", title: "" },
  { id: 5, img: "/images/work/work-exhibition-fair.jpg", title: "" },
  { id: 6, img: "/images/work/work-international-events.jpg", title: "" },
  { id: 7, img: "/images/s/s18.png", title: "" },
  { id: 8, img: "/images/s/s1.png", title: "" },
  { id: 9, img: "/images/s/s2.jpg", title: "" },
  { id: 10, img: "/images/s/s2.png", title: "" },
  { id: 11, img: "/images/s/s3.jpg", title: "" },
  { id: 12, img: "/images/s/s3.png", title: "" },
  { id: 13, img: "/images/s/s4.jpg", title: "" },
  { id: 14, img: "/images/s/s4.jpg", title: "" },
  { id: 15, img: "/images/s/s5.jpg", title: "" },
  { id: 16, img: "/images/s/s5.png", title: "" },
  { id: 17, img: "/images/s/s6.png", title: "" },
  { id: 18, img: "/images/s/s7.png", title: "" },
  { id: 19, img: "/images/s/s8.png", title: "" },
  { id: 20, img: "/images/s/s9.png", title: "" },
  { id: 21, img: "/images/s/s10.png", title: "" },
  { id: 22, img: "/images/s/s12.png", title: "" },
  { id: 23, img: "/images/s/s13.png", title: "" },
  { id: 24, img: "/images/s/s14.png", title: "" },
  { id: 25, img: "/images/s/s15.png", title: "" },
  { id: 26, img: "/images/s/s16.png", title: "" },
  { id: 27, img: "/images/s/s17.png", title: "" },
  { id: 28, img: "/images/s/s18.png", title: "" },
  { id: 29, img: "/images/s/s19.png", title: "" },
  { id: 30, img: "/images/s/s20.png", title: "" },
  { id: 31, img: "/images/s/s21.png", title: "" },
  { id: 32, img: "/images/s/s22.png", title: "" },
  { id: 33, img: "/images/s/s23.png", title: "" },
  { id: 34, img: "/images/s/s24.png", title: "" },
  { id: 35, img: "/images/s/s25.png", title: "" },
  { id: 36, img: "/images/s/s26.png", title: "" },
  { id: 37, img: "/images/s/s27.png", title: "" },
  { id: 38, img: "/images/s/s28.png", title: "" },
  { id: 39, img: "/images/s/s29.png", title: "" },
  { id: 40, img: "/images/s/s30.png", title: "" },
];

export default function ServicesCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 5 } }, // 2XL
      { breakpoint: 1280, settings: { slidesToShow: 4 } }, // XL
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Laptop
      { breakpoint: 768, settings: { slidesToShow: 2 } }, // Tablet
      { breakpoint: 700, settings: { slidesToShow: 6 } }, // Mobile
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6 py-6"
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-1 sm:px-2 md:px-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[5/3]">
                <Image
                  src={slide.img}
                  alt={slide.title || "Event Image"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         (max-width: 1280px) 33vw,
                         20vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

              {/* Caption */}
              {slide.title && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-center px-2"
                  >
                    {slide.title}
                  </motion.h3>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
