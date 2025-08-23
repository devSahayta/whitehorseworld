"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HomeAbout() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Fallback Background Image */}
      <div
        className={`absolute inset-0 w-full h-full bg-[url('/images/slides/slider3.jpg')] bg-cover bg-center z-[-1] transition-opacity duration-1000 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
        aria-hidden="true"
      />

      {/* Video Background */}
      <video
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setVideoLoaded(true)}
      >
        <source src="/videos/whitehorseworldvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-88 z-0" />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 px-4 text-white max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Reimagine{" "}
          <span className="italic text-yellow-400 font-ds ">(Almost)</span>{" "}
          Everything
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6  home-about-para ">
          We are White Horse Event Management — Go Getters, Planners, Artists,
          Creatives, and Motivators.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl shadow-lg transition hover:bg-yellow-400"
        >
          Let’s Build Your Next Event
        </motion.a>
      </motion.div>
    </section>
  );
}
