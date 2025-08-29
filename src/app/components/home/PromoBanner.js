"use client";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <div className="w-full h-[80px] bg-white overflow-hidden flex items-center relative border-t border-b border-yellow-500">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 12, // speed of scrolling
          ease: "linear",
        }}
      >
        {/* Repeat text 3 times for continuous loop */}
        {Array(3)
          .fill("Book Appointment Now and Get 10% Off ✨")
          .map((text, i) => (
            <h2
              key={i}
              className="text-3xl font-bold text-black mx-12 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
            >
              {text}
            </h2>
          ))}
      </motion.div>
    </div>
  );
}
