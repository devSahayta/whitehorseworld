/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";

export default function HomeClient() {
  return (
    <section
      className=" py-32 px-4 overflow-hidden"
      // style={{ border: "solid 1px red" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="text-4xl font-bold text-center mb-4 text-yellow-400"
      >
        WHO WE WORK WITH
      </motion.h2>
      <motion.h5
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className=" text-center  mb-8 "
      >
        From Global Giants to Visionary Startups — We Deliver Impact Across
        Every Collaboration
      </motion.h5>
      <Divider
        className=" w-about-divider text-yellow-400 "
        style={{ width: "25%", margin: "auto", marginBottom: "126px" }}
      >
        <FaDiamond size={10} /> <FaDiamond size={20} className=" ml-1 mr-1 " />
        <FaDiamond size={10} />
      </Divider>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        className="relative overflow-hidden"
      >
        <motion.div
          className="flex gap-10 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(2)]
            .flatMap(() => [
              "/images/client/1.png",
              "/images/client/2.png",
              "/images/client/3.png",
              "/images/client/4.png",
              "/images/client/5.png",
              "/images/client/6.png",
              "/images/client/7.png",
              "/images/client/8.png",
              "/images/client/9.png",
              "/images/client/10.png",
              "/images/client/11.png",
              "/images/client/12.png",
              "/images/client/13.png",
              "/images/client/14.png",
              "/images/client/15.png",
              "/images/client/16.png",
              "/images/client/17.png",
              "/images/client/18.png",
            ])
            .map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Client ${index + 1}`}
                className="h-32 w-auto object-contain filter grayscale hover:grayscale-0 transition"
              />
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
