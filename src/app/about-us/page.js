"use client";

import WBreadcumb from "../components/WBreadcumb";
import WhFooter from "../components/WhFooter";
import WhHeader from "../components/WhHeader";
import { Avatar, Divider } from "rsuite";
import { motion } from "motion/react";
import { FaDiamond } from "react-icons/fa6";

export default function AboutUsPage() {
  const teamData = [
    {
      name: "Amit",
      image: "https://i.pravatar.cc/150?u=1",
      post: "Event Strategist",
    },
    {
      name: "Priya",
      image: "https://i.pravatar.cc/150?u=2",
      post: "Event Strategist",
    },
    {
      name: "Ravi",
      image: "https://i.pravatar.cc/150?u=4",
      post: "Event Strategist",
    },
    {
      name: "Neha",
      image: "https://i.pravatar.cc/150?u=6",
      post: "Event Strategist",
    },
  ];

  return (
    <>
      <WhHeader />

      <div className=" pt-4 "></div>
      <WBreadcumb headingText="About Us" />

      <div className="bg-black text-white min-h-screen py-16">
        <section className="max-w-5xl mx-auto text-center py-16 px-6 md:px-20 ">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="text-yellow-400 text-4xl md:text-5xl font-bold mb-9"
          >
            About White Horse
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            White Horse Event Management is a premier full-service agency known
            for creating impactful and memorable experiences. With over a decade
            of expertise in managing corporate events, government summits,
            exhibitions, weddings, and brand activations — our team is dedicated
            to delivering nothing but excellence.
          </motion.p>
        </section>

        <section className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 px-6 md:px-20 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="bg-white/10 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10"
          >
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300">
              To be the most trusted name in the world of experiential marketing
              and event planning. We aim to inspire, innovate, and impact
              through extraordinary execution and unmatched creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="bg-white/10 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10"
          >
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300">
              To deliver seamless and memorable event experiences for clients
              across industries, ensuring high standards, professionalism, and
              an eye for detail in everything we do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="bg-white/10 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10"
          >
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Our Team
            </h2>
            <p className="text-gray-300">
              The White Horse team comprises of passionate professionals with
              expertise across event planning, marketing, design, production,
              and client servicing. Every project is handled by a team that’s
              driven by creativity and execution excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="bg-white/10 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10"
          >
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Our Story
            </h2>
            <p className="text-gray-300">
              White Horse started with the goal of reshaping the events
              industry. Frustrated by generic events, our founders envisioned an
              agency where creativity, logistics, and strategy merged to create
              powerful, memorable experiences for every audience.
            </p>
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto mt-20 text-center py-32 px-6 md:px-20 ">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="text-yellow-400 text-3xl font-semibold mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <Divider
            className=" w-about-divider text-yellow-400 "
            style={{ width: "25%", margin: "auto", marginBottom: "46px" }}
          >
            <FaDiamond size={10} />{" "}
            <FaDiamond size={20} className=" ml-1 mr-1 " />
            <FaDiamond size={10} />
          </Divider>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="text-gray-300 text-lg"
          >
            At White Horse, we combine strategy, creativity, and flawless
            execution to bring your vision to life. From ideation to
            implementation — our team works relentlessly to ensure your event is
            remembered, celebrated, and talked about for years to come.
          </motion.p>
        </section>

        {/* Values Section */}
        <section className="bg-yellow-400/90 text-black py-28 px-4 md:px-20 text-center mt-14 ">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="text-2xl font-bold mb-7 text-white "
          >
            OUR VALUES
          </motion.h2>
          <Divider
            className=" w-about-divider text-yellow-400 "
            style={{ width: "25%", margin: "auto", marginBottom: "76px" }}
          >
            <FaDiamond size={10} />{" "}
            <FaDiamond size={20} className=" ml-1 mr-1 " />
            <FaDiamond size={10} />
          </Divider>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4,
              }}
              className="bg-white/25 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10 py-12"
            >
              <h4 className="font-semibold text-lg mb-4">Integrity</h4>
              <p>We honor our commitments and act with transparency.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4,
              }}
              className="bg-white/25 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10 py-12"
            >
              <h4 className="font-semibold text-lg mb-4">Innovation</h4>
              <p>
                We deliver fresh, trend-setting event ideas that make an impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4,
              }}
              className="bg-white/25 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10 py-12"
            >
              <h4 className="font-semibold text-lg mb-4">Excellence</h4>
              <p>We strive to exceed client expectations at every step.</p>
            </motion.div>
          </div>
        </section>

        {/* Team Members (Optional – Replace with real images later) */}
        <section className="bg-black py-24 px-4 md:px-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="text-yellow-400 text-3xl font-bold mb-6"
          >
            Meet Our Leadership
          </motion.h2>
          <Divider
            className=" w-about-divider text-yellow-400 "
            style={{ width: "25%", margin: "auto", marginBottom: "76px" }}
          >
            <FaDiamond size={10} />{" "}
            <FaDiamond size={20} className=" ml-1 mr-1 " />
            <FaDiamond size={10} />
          </Divider>
          <div className="grid md:grid-cols-4 gap-8">
            {teamData.map((data, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.4,
                }}
                key={index}
                className="bg-neutral-900 rounded-xl p-6"
              >
                <Avatar
                  bordered
                  src={data.image}
                  circle
                  size="xl"
                  className=" mb-6 mx-auto "
                />
                <h4 className="font-semibold text-lg">{data.name}</h4>
                <p className="text-sm">{data.post}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <WhFooter />
    </>
  );
}
