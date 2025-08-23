"use client";

import { motion } from "framer-motion";
import ContactForm from "../ContactForm";
import { Col, Divider, Row } from "rsuite";
import { FaDiamond } from "react-icons/fa6";

export default function HomeContact() {
  return (
    <section className="  text-white mx-7 rounded-2xl py-14 px-4 home-contact-container ">
      <div className=" text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-4xl font-semibold text-yellow-400 mb-4"
        >
          Get in touch
        </motion.h2>
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className=" mb-8  "
        >
          For any inquiries or to explore your vision further, we invite you to
          contact our professional team using the details provided below
        </motion.h5>
        <Divider
          className=" w-about-divider text-yellow-400 "
          style={{ width: "25%", margin: "auto", marginBottom: "96px" }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>
      </div>

      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            style={{ marginBottom: "75px", marginTop: "45px" }}
            className=" px-6 "
          >
            <div className=" hc-details ">
              <h4 className=" font-bold text-yellow-200 ">Office</h4>
              <a href="#">150 Old Park Ln, London W1K 1QZ</a>
            </div>
            <div className=" hc-details ">
              <h4 className=" font-bold  text-yellow-200 ">Email</h4>
              <a href="#">hello@refit.com</a>
            </div>
            <div className=" hc-details ">
              <h4 className=" font-bold  text-yellow-200 ">Telephone</h4>
              <a href="#">07716 534984</a>
            </div>
          </motion.div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className=" px-6 "
          >
            <ContactForm />
          </motion.div>
        </Col>
      </Row>
    </section>
  );
}
