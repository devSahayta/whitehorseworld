"use client";

import { Divider } from "rsuite";
import HomeAbout from "../components/home/HomeAbout";
import HomeCarousel2 from "../components/home/HomeCarousel2";
import HomeClient from "../components/home/HomeClient";
import HomeContact from "../components/home/HomeContact";
import HomeWork2 from "../components/home/HomeWork2";
import Testimonials from "../components/home/Testimonials";
import ScrollPage from "../components/ScrollPage";
import WhFooter from "../components/WhFooter";
import WhHeader from "../components/WhHeader";
import "../styles/home.css";
import { motion } from "motion/react";
import { FaDiamond } from "react-icons/fa6";

export default function WorkPage() {
  return (
    <>
      <ScrollPage />

      <WhHeader />

      {/* <div className=" home-i-carousel-cont">
            <HomeCarousel />
          </div> */}

      {/* <section className="relative h-screen bg-cover bg-center bg-[url('/images/slides/slider3.jpg')]"> */}
      {/* <section className="relative h-screen flex items-center justify-center text-center bg-[url('/images/slides/slider3.jpg')] bg-cover bg-center">
            
            <div className="absolute inset-0 bg-black/60 backdrop-brightness-85 z-0" />
    
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 px-4 text-white max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                Reimagine <span className="italic text-yellow-400">(Almost)</span>{" "}
                Everything
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                We are White Horse Event Management — Go Getters, Planners, Artists,
                Creatives, and Motivators.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl shadow-lg transition hover:bg-yellow-400"
              >
                Let’s Build Your Next Event
              </motion.a>
            </motion.div>
          </section> */}

      <HomeWork2 />

      {/* <HomeWork /> */}

      <HomeClient />

      <div className=" home-i-carousel-cont">
        <div className=" text-center py-14 ">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className=" text-5xl md:text-4xl font-bold text-yellow-400 mb-2 "
          >
            Where Vision Meets Reality
          </motion.h2>
          <motion.h5
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Explore the visuals that reflect our dedication to creating
            unforgettable events
          </motion.h5>
          <Divider
            className=" w-about-divider text-yellow-400 "
            style={{
              width: "25%",
              margin: "auto",
              marginBottom: "56px",
              marginTop: "25px",
            }}
          >
            <FaDiamond size={10} />{" "}
            <FaDiamond size={20} className=" ml-1 mr-1 " />
            <FaDiamond size={10} />
          </Divider>
        </div>
        <HomeCarousel2 />
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <HomeContact />
      </div>

      <WhFooter />
    </>
  );
}
