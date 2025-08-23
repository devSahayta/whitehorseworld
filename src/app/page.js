/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { motion } from "motion/react";

import "./styles/wedding.css";
import HeroSection from "./components/wedding/HeroSection";
import WServiceSection from "./components/wedding/WServiceSection";
import WhHeader from "./components/WhHeader";
import WGallerySection from "./components/wedding/WGallerySection";
import WTestimonialsSection from "./components/wedding/WTestimonialsSection";
import WhFooter from "./components/WhFooter";
import HomeAbout from "./components/home/HomeAbout";
import { Divider } from "rsuite";
import { FaDiamond } from "react-icons/fa6";
import WInstagram from "./components/wedding/WInstagram";
import WGallerySection2 from "./components/wedding/WGallerySection2";
import ScrollPage from "./components/ScrollPage";

export default function Home() {
  return (
    <div className=" bg-gray-100 ">
      <ScrollPage />

      <WhHeader pageTheme="white" />

      <section className=" bg-gray-100 ">
        <WGallerySection2 requiredModal={false} renderImage="half" />
      </section>

      {/* Custom Gallery */}
      {/* <WGallerySection /> */}

      <HomeAbout />

      <div className=" flex justify-center items-center flex-col  text-black w-main-container ">
        {/* Hero Section */}

        {/* Custom 1st section */}

        {/* <section className=" relative w-full h-[650px] bg-cover bg-center w-sec1-container ">
          <HeroSection />

          <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400 ">
              White Horse World
            </h1>
            <p className="text-xl mb-10">
              Turning Your Dream Wedding into a Magical Reality
            </p>
            <a href="#" className="plan-wedding-button">
              Plan Your Wedding
            </a>
          </div>
        </section> */}

        {/* custom testimonials */}
        {/* <WTestimonialsSection /> */}

        <section className="w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Visual */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481511.jpg?ga=GA1.1.182348916.1740823709&semt=ais_hybrid&w=740"
                alt="Taran Signature Wedding"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-7 tracking-tight">
                Taran Signature Wedding
              </h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                An experience crafted for the extraordinary.{" "}
                <span className="text-pink-400 font-semibold">
                  Taran Signature Wedding
                </span>{" "}
                is the epitome of elegance, grandeur, and perfection — uniquely
                designed for couples who desire a wedding that reflects timeless
                luxury. From hand-picked venues to curated couture and elite
                entertainment, every detail whispers sophistication.
              </p>
              <a
                href="/taran-signature-wedding"
                className=" inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium text-lg px-6 py-3 rounded-full transition duration-300 shadow-xl"
              >
                Explore Signature Experience
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          className=" w-full py-32 px-7 text-center overflow-hidden "
          style={{ backgroundColor: "#FCE5F5" }}
        >
          <h2 className="text-4xl font-bold mb-5 text-yellow-400 ">
            Let’s Make Your Wedding Magical
          </h2>
          <p className="text-lg mb-9 text-gray-500 ">
            Schedule a free consultation with White Horse World today!
          </p>
          <a href="/contact" className="book-consultation-button">
            Book a Consultation
          </a>
        </section>

        <WInstagram />

        {/* Footer */}
      </div>

      <WhFooter pageTheme="white" />
    </div>
  );
}
