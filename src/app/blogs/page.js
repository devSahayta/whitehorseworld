"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "../components/FAQSection";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";
import WhHeader from "../components/WhHeader";
import WhFooter from "../components/WhFooter";
import Testimonials1 from "../components/home/Testimonials1";

const blogs = [
  {
    id: 1,
    title: "Government Event Excellence",
    desc: " lorem A glimpse into how Whitehorse organizes large-scale government events with flawless execution lorem A glimpse into how Whitehorse organizes large-scale government events with flawless executio.",
    img: "/images/work/work-corporate-event.jpg",
  },
  {
    id: 2,
    title: "Corporate Event Innovation",
    desc: "howInnovative solutions that transform corporate gatherings into unforgettable experiences.",
    img: "/images/work/work-exhibition-fair.jpg",
  },
  {
    id: 3,
    title: "Sports Event Management",
    desc: "Our sports events are adrenaline-packed with world-class organization.",
    img: "/images/banner-collage.png",
  },
  {
    id: 4,
    title: "Government Event Excellence",
    desc: "A glimpse into how Whitehorse organizes large-scale government events with flawless execution.",
    img: "https://source.unsplash.com/800x600/?conference,government",
  },
  {
    id: 5,
    title: "Corporate Event Innovation",
    desc: "Innovative solutions that transform corporate gatherings into unforgettable experiences.",
    img: "https://source.unsplash.com/800x600/?business,event",
  },
  {
    id: 6,
    title: "Sports Event Management",
    desc: "Our sports events are adrenaline-packed with world-class organization.",
    img: "https://source.unsplash.com/800x600/?sports,stadium",
  },
];

export default function BlogPage() {
  return (
    <>
      <WhHeader />

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-4xl font-semibold text-center text-yellow-400 mb-4"
        >
          Our Latest Blog
        </motion.h2>

        {/* Divider */}
        <Divider
          className="w-about-divider text-yellow-400"
          style={{ width: "25%", margin: "auto", marginBottom: "96px" }}
        >
          <FaDiamond size={10} /> <FaDiamond size={20} className="ml-1 mr-1" />
          <FaDiamond size={10} />
        </Divider>

        {/* Blog Grid */}
        <a href="../Blog1">
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: -100 }} // start from top
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: i * 0.2,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.25)",
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    width={500}
                    height={400}
                    className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600">{blog.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* See More Button */}
          <div className="flex justify-center mt-12">
            <Link href="../Blog1">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 25px rgba(255, 215, 0, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold text-lg tracking-wide shadow-lg overflow-hidden"
              >
                <span className="relative z-10">See More</span>
                {/* Shimmer effect */}
                <motion.span
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </motion.button>
            </Link>
          </div>
        </a>

        {/* FAQs Section */}
      </section>
      <>
        {Testimonials1()}

        {FAQSection()}
      </>

      <WhFooter />
    </>
  );
}
