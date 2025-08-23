"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";

const workItems = [
  {
    title: "GOVERNMENT EVENTS",
    description:
      "We orchestrate high-profile government events, ensuring protocol, precision, and impactful public engagement.",
    image: "/images/work/work-government-event.jpg",
  },
  {
    title: "CORPORATE EVENTS",
    description:
      "From product launches to conferences, we design and deliver seamless experiences that reflect your brand’s professionalism.",
    image: "/images/work/work-corporate-event.jpg",
  },
  {
    title: "SPORTS MANAGEMENT",
    description:
      "Managing sports events with energy and excellence — we bring athletes, fans, and experiences together.",
    image: "/images/work/work-sports.jpg",
  },
  {
    title: "ARTIST MANAGEMENT",
    description:
      "We represent and manage talents across genres, ensuring perfect coordination between artists and audiences.",
    image: "/images/work/work-artist-management.png",
  },
  {
    title: "INTERNATIONAL ACTS",
    description:
      "Bringing global entertainment to your doorstep with curated international performances and collaborations.",
    image: "/images/work/work-international-events.jpg",
  },
  {
    title: "EXHIBITION & FAIRS",
    description:
      "We conceptualize and execute exhibitions and trade fairs that attract, engage, and convert audiences.",
    image: "/images/work/work-exhibition-fair.jpg",
  },
  {
    title: "DATABASE & RESPONSE MANAGEMENT",
    description:
      "Efficiently managing data, leads, and responses for a streamlined and personalized event communication.",
    image: "/images/work/work-database-management.jpg",
  },
  {
    title: "BRAND ACTIVATION & MARKETING SERVICES",
    description:
      "Bringing your brand to life with interactive campaigns, experiential marketing, and unforgettable engagements.",
    image: "/images/work/work-rural-marketing-02-655x545.jpg",
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Powering your presence in the digital world through innovative strategies, performance tracking, and content creation.",
    image: "/images/work/work-SOCIAL-NETWORKING-02-655x545.jpg",
  },
  {
    title: "RURAL MARKETING",
    description:
      "Connecting brands with rural India through culturally relevant campaigns and ground-level activations.",
    image: "/images/work/work-rural-marketing-03-655x545.jpg",
  },
  {
    title: "WEDDINGS",
    description:
      "Crafting magical wedding experiences with themes, traditions, and creativity blended perfectly.",
    image: "/images/work/work-wed5-655x545.jpg",
  },
  {
    title: "THEME INSTALLATIONS",
    description:
      "Building immersive themed environments that enhance storytelling and capture attention.",
    image: "/images/work/work-theme1-655x545.jpg",
  },
];

export default function HomeWork2() {
  return (
    <section className="bg-black text-white px-4 md:px-12 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-bold mb-16 main-color "
        style={{ marginBottom: "25px", marginTop: "100px" }}
      >
        WHITE HORSE WORLD IN ACTION
      </motion.h2>
      <motion.h5
        className=" text-center "
        style={{ marginBottom: "26px", marginTop: "25px" }}
      >
        A Glimpse into the World-Class Events and Experiences We&apos;ve Brought
        to Life
      </motion.h5>
      <Divider
        className=" w-about-divider text-yellow-400 "
        style={{ width: "25%", margin: "auto", marginBottom: "76px" }}
      >
        <FaDiamond size={10} /> <FaDiamond size={20} className=" ml-1 mr-1 " />
        <FaDiamond size={10} />
      </Divider>
      <div>
        {workItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // viewport={{ once: true }}
            className={` h-[80vh] md:h-screen w-[92%] m-auto flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            // style={{
            //   position: "sticky",
            //   top: "4vh",
            //   backgroundColor: "black",
            //   //   marginBottom: "250px",
            //   minHeight: "100vh",
            // }}
          >
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full md:w-1/2"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-6 ">
                {item.title}
              </h2>
              <p className="text-lg text-gray-300">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
