/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const artists = [
  {
    name: "DJ Chetas",
    role: "Celebrity DJ",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Harshdeep Kaur",
    role: "Live Sufi Singer",
    image:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "Sukhbir Singh",
    role: "Punjabi Pop Icon",
    image:
      "https://sosimg.sgp1.cdn.digitaloceanspaces.com/artist-gallery/1604754_1702530806.webp",
  },
  {
    name: "Shirley Setia",
    role: "Playback Singer",
    image:
      "https://images.unsplash.com/photo-1586866628184-e07bda20abaa?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 40,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

export default function ArtistsSection() {
  return (
    <section className="py-20 px-6 bg-white" id="artists">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          🎶 Our Star Artists
        </h2>
        <p className="text-gray-500 mb-12 text-lg">
          Crafting unforgettable nights with top-tier talent.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {artist.name}
                </h3>
                <p className="text-sm text-gray-500">{artist.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
