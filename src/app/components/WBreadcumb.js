"use client";

import Image from "next/image";
import { motion } from "motion/react";

const WBreadcumb = ({ headingText }) => {
  return (
    <div className=" relative h-[300px] w-full flex justify-center items-center z-0 ">
      <Image
        src="/images/optimize.gif"
        alt="bread-cumb-bg-image"
        fill
        className=" object-cover "
        style={{ filter: "brightness(50%)", zIndex: "-1" }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4,
        }}
        className=" text-4xl md:text-6xl font-bold "
      >
        {headingText}
      </motion.h2>
    </div>
  );
};

export default WBreadcumb;
