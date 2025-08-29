"use client";
import * as motion from "motion/react-client";
import { FaStar } from "react-icons/fa";

export default function Testimonials1() {
  const testimonials = [
    {
      name: "John Deo",
      role: "Happy Client",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "It was a great experience and delivered an excellent job. Good communication all round. Quality work and many revisions available, he will guarantee your satisfaction. Thank you!",
    },
    {
      name: "Mick Deo",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Amazing professionalism and creativity. The project was handled with precision and delivered on time. Highly recommended!",
    },
    {
      name: "Kavin Joe",
      role: "Wedding Planner",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      text: "Great work and wonderful designs. I loved the attention to detail and the smooth communication throughout.",
    },
    {
      name: "Sarah Lee",
      role: "Event Manager",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Truly exceeded expectations! Creative, reliable, and dedicated. Will definitely work again in the future.",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-yellow-500 mb-4"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          What our clients say about working with us
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="relative bg-white shadow-xl rounded-lg pt-14 pb-6 px-4 text-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
          >
            {/* Profile Image */}
            <motion.div
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-yellow-500 overflow-hidden shadow-lg"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h4 className="mt-4 font-bold text-gray-800">TESTIMONIAL</h4>

            {/* Stars */}
            <div className="flex justify-center mt-2 mb-2">
              {Array(5)
                .fill(0)
                .map((_, j) => (
                  <FaStar key={j} className="text-yellow-400 mx-0.5" />
                ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              {t.name}
            </h3>
            <p className="text-sm text-gray-500 italic mb-3">{t.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
