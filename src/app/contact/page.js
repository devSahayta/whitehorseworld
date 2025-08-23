"use client";

import ContactForm from "../components/ContactForm";
import ScrollPage from "../components/ScrollPage";
import WhFooter from "../components/WhFooter";
import WhHeader from "../components/WhHeader";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { Divider } from "rsuite";
import { FaDiamond } from "react-icons/fa6";
import ContactForm2 from "../components/ContactForm2";

export default function ContactUsPage() {
  return (
    <>
      <ScrollPage />

      <WhHeader />
      <div className="bg-black text-white min-h-screen px-6 py-12">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className=" w-full m-auto mb-12 mt-7 px-16 "
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-7 ">
              Reach out to us
            </h2>
            <Divider
              className=" w-about-divider text-yellow-400 "
              style={{ width: "25%", margin: "auto", marginBottom: "76px" }}
            >
              <FaDiamond size={10} />{" "}
              <FaDiamond size={20} className=" ml-1 mr-1 " />
              <FaDiamond size={10} />
            </Divider>
          </div>
          <ContactForm2 />

          {/* <ContactForm /> */}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-center mb-12 mt-32 "
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-4xl font-bold mb-4 text-yellow-400 "
          >
            Get In Touch
          </motion.h2>
          <Divider
            className=" w-about-divider text-yellow-400 "
            style={{ width: "25%", margin: "auto", marginBottom: "66px" }}
          >
            <FaDiamond size={10} />{" "}
            <FaDiamond size={20} className=" ml-1 mr-1 " />
            <FaDiamond size={10} />
          </Divider>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            We&apos;d love to hear from you! Whether you have questions, need
            support, or want to learn more about our services, our team is here
            to help.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="bg-gray-900 p-6 rounded-lg w-full md:w-1/3 text-center custom-shadow "
          >
            <div className="text-3xl mb-2">
              <IoLocationOutline className=" m-auto text-red-500 " />
            </div>
            <h3 className="text-lg font-semibold mb-1">Our Address</h3>
            <p className="text-gray-400">
              Ground Floor, Sahni Apt, PP Compound, 4,
              <br />
              Mahatma Gandhi Main Rd, Ranchi, Jharkhand 834001, India
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
            className="bg-gray-900 p-6 rounded-lg w-full md:w-1/3 text-center custom-shadow "
          >
            <div className="text-3xl mb-2 ">
              <IoCallOutline className=" m-auto text-green-500 " />
            </div>
            <h3 className="text-lg font-semibold mb-1">Our Contact Info</h3>
            <p className="text-gray-400">
              <a href="tel:0651-2332534" className=" hover:text-yellow-400 ">
                0651-2332534
              </a>{" "}
              /{" "}
              <a href="tel:+91-94315 81052" className=" hover:text-yellow-400 ">
                +91-94315 81052
              </a>
              <br />
              <a
                href="mailto:info@whitehorseevent.com"
                className=" hover:text-yellow-400 "
              >
                info@whitehorseevent.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-lg w-full h-[400px] mt-32 "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7325.76108653449!2d85.324822!3d23.356342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a8d4b0f5ad%3A0xdda054ea757bc09e!2sWhite%20Horse%20Event%20Management!5e0!3m2!1sen!2sus!4v1745319205658!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </motion.div>
      </div>

      <WhFooter />
    </>
  );
}
