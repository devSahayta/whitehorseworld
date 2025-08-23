"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

const ScrollPage = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      setScrollPercent(scrollRatio);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalDots = 12;
  const activeDots = Math.round((scrollPercent / 100) * totalDots);

  return (
    <motion.div
      className={` fixed bottom-5 right-5 z-50 ${scrollPercent < 2 ? "dis-none" : ""} `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative w-[80px] h-[80px] flex items-center justify-center cursor-pointer group"
      >
        {/* Rotating Orbit Container */}
        <motion.div
          className="absolute w-full h-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {Array.from({ length: totalDots }).map((_, i) => {
            const angle = (360 / totalDots) * i;
            const isActive = i < activeDots;
            const x = 30 * Math.cos((angle * Math.PI) / 180);
            const y = 30 * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${
                  isActive
                    ? "bg-gradient-to-br from-white to-cyan-400 shadow-md"
                    : "bg-white/10"
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              />
            );
          })}
        </motion.div>

        {/* Glowing Center Button */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(251,146,60,0.6)] group-hover:scale-105 transition-transform duration-200">
          {/* <FaArrowUp className="text-white w-5 h-5" /> */}
          <Image
            src="/images/whem-logo-all_link.png"
            alt="Company Logo"
            height={60}
            width={40}
            className=" object-fill "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollPage;
