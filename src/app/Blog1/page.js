"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";
import WhHeader from "../components/WhHeader";
import WhFooter from "../components/WhFooter";

// 15 blogs with unique IDs
const blogs = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  title: `Event Blog ${i + 1}`,
  desc: `This is blog number ${i + 1}, showcasing how Whitehorse delivers exceptional event management experiences with creativity and flawless execution.`,
  img:
    i % 2 === 0
      ? "https://source.unsplash.com/800x600/?event,celebration"
      : "https://source.unsplash.com/800x600/?wedding,party",
}));

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
          Explore Our Blogs
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
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={`${blog.id}-${i}`} // ✅ unique key
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.1,
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
      </section>

      <WhFooter />
    </>
  );
}
