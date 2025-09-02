"use client";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-pink-200 flex items-center justify-center relative border-t border-b border-yellow-500 px-4 py-3"
    >
      <div className="flex whitespace-nowrap text-center">
        <h2
          className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl 
            font-bold text-black 
            mx-2 sm:mx-6 md:mx-10 lg:mx-12 
            hover:text-yellow-500 
            transition-colors duration-300 
            cursor-pointer
          "
        >
          Book Appointment Now and Get{" "}
          <span className="text-yellow-600">10% Off ✨</span>
        </h2>
      </div>
    </motion.div>
  );
}
