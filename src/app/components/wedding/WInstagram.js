"use client";

import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";
import { motion } from "motion/react";

export default function WInstagram() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.setAttribute("src", "https://www.instagram.com/embed.js");
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);

  return (
    <>
      <section
        className="  w-full flex justify-center items-center flex-col py-16 "
        style={{ backgroundColor: "#F9F0E7" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.4,
          }}
          className=" text-3xl md:text-4xl font-bold text-yellow-400 text-center "
        >
          INSTAGRAM FEED
        </motion.h2>

        <Divider
          className=" w-about-divider text-yellow-400 m-auto "
          style={{ width: "25%", marginBottom: "46px" }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>

        {/* <div
          dangerouslySetInnerHTML={{
            __html: `
          <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DBWu_2jT9Pn/" data-instgrm-version="14" style="max-width:540px; width:100%; margin:auto;"></blockquote>
        `,
          }}
        /> */}

        {/* <div>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DBWu_2jT9Pn/"
            data-instgrm-version="14"
          ></blockquote>
        </div> */}

        <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.6,
          }}
          href="https://www.instagram.com/whitehorseevent"
          target="_blank"
          className=" w-follow-instagram "
        >
          <span className=" mr-2 ">
            <FaInstagram />
          </span>
          <span>Follow us on Instagram</span>
        </motion.a>
      </section>
    </>
  );
}
