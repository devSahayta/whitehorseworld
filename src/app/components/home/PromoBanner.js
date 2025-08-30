"use client";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <div className="w-full h-[80px] bg-pink-200 flex items-center justify-center relative border-t border-b border-yellow-500">
      <div className="flex whitespace-nowrap">
        <h2 className="text-3xl font-bold text-black mx-12 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
          Book Appointment Now and Get 10% Off ✨
        </h2>
      </div>
    </div>
  );
}
