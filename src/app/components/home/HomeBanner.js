"use client";
import { motion } from "framer-motion";

const images = [
  "/images/1.JPG",
  "/images/4.png",
  "/images/5.JPG",
  "/images/7.jpg",
  "/images/3.JPG",
  "/images/11.jpg",
];

export default function HomeBanner() {
  return (
    <section className="relative w-full min-h-screen bg-white px-4 py-10">
      {/* Animated headline */}
      {/* <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Explore Our Moments ✨
        </h1>
        <p className="text-gray-500 mt-2">
          A glimpse into our unforgettable events
        </p>
      </motion.div> */}

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className=" text-2xl md:text-4xl text-center font-bold text-yellow-400 mb-2 "
      >
        Explore Our Moments ✨
      </motion.h2>
      <motion.h5
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className=" text-1xl text-center"
      >
        A glimpse into our unforgettable events
      </motion.h5>

      {/* Instagram-style grid */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-xl shadow-md group"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay effect on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold"
            >
              ❤️ 120 · 💬 15
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
