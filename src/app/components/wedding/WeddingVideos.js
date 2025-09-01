/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";

const weddingVideos = [
  {
    src: "/videos/New.mp4",
    title: "Royal Wedding Highlights",
  },
  {
    src: "/videos/New1.mp4",
    title: "Beach Destination Wedding",
  },
  {
    src: "/videos/4.mp4",
    title: "Luxury Palace Wedding",
  },

  {
    src: "/videos/2.mp4",
    title: "Luxury Palace Wedding",
  },
  {
    src: "/videos/5.mp4",
    title: "Luxury Palace Wedding",
  },
  {
    src: "/videos/6.mp4",
    title: "Luxury Palace Wedding",
  },
  {
    src: "/videos/7.mp4",
    title: "Luxury Palace Wedding",
  },
  {
    src: "/videos/8.mp4",
    title: "Luxury Palace Wedding",
  },

  {
    src: "/videos/3.mp4",
    title: "Luxury Palace Wedding",
  },
];

export default function WeddingVideos() {
  return (
    <section className="w-full bg-black py-16">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4"
        >
          Wedding Films
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Relive the unforgettable moments captured in our beautifully crafted
          wedding films.
        </motion.p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {weddingVideos.map((video, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-700"
          >
            <video
              src={video.src}
              controls
              className="w-full h-64 object-cover"
            ></video>
            <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white p-3 text-center">
              <p className="text-sm md:text-lg font-semibold">{video.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
