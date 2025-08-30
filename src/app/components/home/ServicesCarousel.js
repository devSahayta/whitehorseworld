import Slider from "react-slick";
import Image from "next/image"; // ✅ Next.js optimized images
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// ✅ Slides with Event Categories
const slides = [
  {
    id: 1,
    img: "/images/work/work-government-event.jpg",
    title: "",
  },
  {
    id: 2,
    img: "/images/work/work-corporate-event.jpg",
    title: "",
  },
  { id: 3, img: "/images/work/work-sports.jpg", title: "" },
  {
    id: 4,
    img: "/images/work/work-artist-management.png",
    title: "",
  },
  {
    id: 5,
    img: "/images/work/work-exhibition-fair.jpg",
    title: "",
  },
  {
    id: 6,
    img: "/images/work/work-international-events.jpg",
    title: "",
  },
  {
    id: 7,
    img: "/images/s/s1.jpg",
    title: "",
  },

  {
    id: 8,
    img: "/images/s/s1.png",
    title: "",
  },

  {
    id: 9,
    img: "/images/s/s2.jpg",
    title: "",
  },

  {
    id: 10,
    img: "/images/s/s2.png",
    title: "",
  },

  {
    id: 11,
    img: "/images/s/s3.jpg",
    title: "",
  },

  {
    id: 12,
    img: "/images/s/s3.png",
    title: "",
  },

  {
    id: 13,
    img: "/images/s/s4.jpg",
    title: "",
  },

  {
    id: 14,
    img: "/images/s/s4.jpg",
    title: "",
  },
  {
    id: 15,
    img: "/images/s/s5.jpg",
    title: "",
  },
  {
    id: 16,
    img: "/images/s/s5.png",
    title: "",
  },
  {
    id: 16,
    img: "/images/s/s6.png",
    title: "",
  },
  {
    id: 17,
    img: "/images/s/s7.png",
    title: "",
  },
  {
    id: 18,
    img: "/images/s/s8.png",
    title: "",
  },
  {
    id: 19,
    img: "/images/s/s9.png",
    title: "",
  },
  {
    id: 20,
    img: "/images/s/s10.png",
    title: "",
  },
  {
    id: 21,
    img: "/images/s/s12.png",
    title: "",
  },
  {
    id: 22,
    img: "/images/s/s13.png",
    title: "",
  },
  {
    id: 23,
    img: "/images/s/s14.png",
    title: "",
  },
  {
    id: 24,
    img: "/images/s/s15.png",
    title: "",
  },
  {
    id: 25,
    img: "/images/s/s16.png",
    title: "",
  },
  {
    id: 26,
    img: "/images/s/s17.png",
    title: "",
  },
  {
    id: 27,
    img: "/images/s/s18.png",
    title: "",
  },
  {
    id: 28,
    img: "/images/s/s19.png",
    title: "",
  },

  {
    id: 29,
    img: "/images/s/s20.png",
    title: "",
  },
  {
    id: 30,
    img: "/images/s/s21.png",
    title: "",
  },
  {
    id: 31,
    img: "/images/s/s22.png",
    title: "",
  },
  {
    id: 32,
    img: "/images/s/s23.png",
    title: "",
  },
  {
    id: 33,
    img: "/images/s/s24.png",
    title: "",
  },
  {
    id: 34,
    img: "/images/s/s25.png",
    title: "",
  },
  {
    id: 35,
    img: "/images/s/s26.png",
    title: "",
  },
  {
    id: 36,
    img: "/images/s/s27.png",
    title: "",
  },
  {
    id: 37,
    img: "/images/s/s28.png",
    title: "",
  },
  {
    id: 38,
    img: "/images/s/s29.png",
    title: "",
  },
  {
    id: 39,
    img: "/images/s/s30.png",
    title: "",
  },
  {
    id: 40,
    img: "/images/s/s31.png",
    title: "",
  },
];

export default function ServicesCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5, // ✅ 4-5 images in a row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
      className="max-w-[1400px] mx-auto px-6 py-6"
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
