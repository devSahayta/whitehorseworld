"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { motion } from "motion/react";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";

const faqs = [
  {
    q: "What services does Whitehorse provide?",
    a: "We specialize in Government Events, Corporate Events, Sports Events, Artist Management, Exhibitions & Fairs, and more.",
  },
  {
    q: "Do you handle international events?",
    a: "Yes, our team has extensive experience in managing international events with precision and creativity.",
  },
  {
    q: "How can I get in touch?",
    a: "You can reach us through our contact page, email, or direct call. Our team responds within 24 hours.",
  },
  {
    q: "Do you also manage celebrity or artist bookings?",
    a: "Absolutely! We have strong connections in the entertainment industry and manage artists, musicians, and celebrities for various events.",
  },
  {
    q: "Can you customize themes for events?",
    a: "Yes! Our creative team designs fully customized themes, stage setups, and décor tailored to your vision.",
  },
  {
    q: "What makes Whitehorse different from others?",
    a: "We combine years of expertise with innovative technology, ensuring every event we organize is world-class and memorable.",
  },
  {
    q: "Do you provide digital marketing support for events?",
    a: "Yes, we provide 360° event marketing services including digital campaigns, social media promotions, and brand activations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="text-4xl font-semibold text-center text-yellow-400 mb-4 "
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.h5
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className=" text-center mb-8 "
      >
        {/* Hear from our happy clients about their experience working with White
          Horse World and the quality of our craftsmanship */}
      </motion.h5>
      <Divider
        className=" w-about-divider text-yellow-400 "
        style={{ width: "25%", margin: "auto", marginBottom: "96px" }}
      >
        <FaDiamond size={10} /> <FaDiamond size={20} className=" ml-1 mr-1 " />
        <FaDiamond size={10} />
      </Divider>

      <div className="space-y-6">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex justify-between items-center w-full text-lg font-semibold text-gray-800"
            >
              {item.q}
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-blue-500"
              >
                {openIndex === i ? "−" : "+"}
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-3 text-gray-600 leading-relaxed"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
