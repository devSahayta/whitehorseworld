/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function HomeWork() {
  const workData = [
    {
      title: "GOVERNMENT EVENTS",
      subtitle: "Government Events",
      img: "/images/work/work-government-event.jpg",
      link: "#",
    },
    {
      title: "CORPORATE EVENTS",
      subtitle: "Corporate Events",
      img: "/images/work/work-corporate-event.jpg",
      link: "#",
    },
    {
      title: "SPORTS MANAGEMENT",
      subtitle: "Sports Management",
      img: "/images/work/work-sports.jpg",
      link: "#",
    },
    {
      title: "Artist Management",
      subtitle: "Live Entertainment Events",
      img: "/images/work/work-artist-management.png",
      link: "#",
    },
    {
      title: "International Acts",
      subtitle: "Trade Shows and Expos",
      img: "/images/work/work-international-events.jpg",
      link: "#",
    },
    {
      title: "Exhibition & Fairs",
      subtitle: "Launch Events",
      img: "/images/work/work-exhibition-fair.jpg",
      link: "#",
    },
    {
      title: "Database & Response Management",
      subtitle: "Launch Events",
      img: "/images/work/work-database-management.jpg",
      link: "#",
    },
    {
      title: "Brand Activation & Marketing Services",
      subtitle: "Launch Events",
      img: "/images/work/work-rural-marketing-02-655x545.jpg",
      link: "#",
    },
    {
      title: "DIGITAL MARKETING",
      subtitle: "Launch Events",
      img: "/images/work/work-SOCIAL-NETWORKING-02-655x545.jpg",
      link: "#",
    },
    {
      title: "Rural Marketing",
      subtitle: "Launch Events",
      img: "/images/work/work-rural-marketing-03-655x545.jpg",
      link: "#",
    },
    {
      title: "Weddings",
      subtitle: "Launch Events",
      img: "/images/work/work-wed5-655x545.jpg",
      link: "#",
    },
    {
      title: "THEME INSTALLATIONS",
      subtitle: "Launch Events",
      img: "/images/work/work-theme1-655x545.jpg",
      link: "#",
    },
  ];

  return (
    <>
      {/* Work Section */}
      <section className=" py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            WORK
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {workData.map((item, index) => (
              <motion.a
                href="#"
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-xl group cursor-pointer block"
              >
                <div className="overflow-hidden h-60">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold tracking-wide mb-1 group-hover:text-yellow-500 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
