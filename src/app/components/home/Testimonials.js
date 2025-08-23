"use client";

import { motion } from "motion/react";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";

const Testimonials = () => {
  // Array of video links for testimonials
  const videoLinks = [
    "https://www.youtube.com/embed/AXR7JqwMDBA", // Replace with actual video embed URLs
    "https://www.youtube.com/embed/ptftO6Fdzdo", // Replace with actual video embed URLs
    "https://www.youtube.com/embed/JWg2rVYwfOY", // Replace with actual video embed URLs
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-4xl font-semibold text-yellow-400 mb-4"
        >
          Hear from our clients
        </motion.h2>
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className=" text-center mb-8 "
        >
          Hear from our happy clients about their experience working with White
          Horse World and the quality of our craftsmanship
        </motion.h5>
        <Divider
          className=" w-about-divider text-yellow-400 "
          style={{ width: "25%", margin: "auto", marginBottom: "96px" }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 ">
          {videoLinks.map((video, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: `${index * 0.55} `,
              }}
              key={index}
              className="bg-yellow-50 p-2 rounded-lg shadow-lg"
            >
              <iframe
                width="100%"
                height="315"
                src={video}
                title="Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
