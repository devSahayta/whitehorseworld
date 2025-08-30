"use client";
import * as motion from "motion/react-client";
import { FaStar } from "react-icons/fa";

export default function Testimonials1() {
  const testimonials = [
    {
      name: "Santosh Kumar",
      // role: "Happy Client",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "We had a very good experience with White Horse Event management. Their planning, design and execution was excellent. We will recommend it highly to all.The Decorations were absolutely stunning—everything was beautifully arranged, from the table settings to the floral displays. The attention to detail was impeccable, and the ambiance your team created set the perfect tone for the event.",
    },
    {
      name: "Bhavesh Arya",
      // role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "We came to know about white horse and decided to meet them for a wedding in our family . From the very beginning they were realistic and they knew their job well . From decor to entertainment everything was exceptional and as per our requirement. It was a 3 months intensive planning and numerous calls , thank you taranbir for the patience and the wonderful wedding .",
    },
    {
      name: "Kaushal Omar",
      // role: "Wedding Planner",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      text: "We wanted to take a moment to share our sincere gratitude for the exceptional event management and decoration services provided by your team, White Horse Event Management for our Wedding celebrations. From the start, the planning process was seamless, and it was clear that your team was dedicated to bringing our vision to life.The decorations were absolutely stunning—everything was beautifully arranged, from the table settings to the floral displays. ",
    },
    {
      name: "Srishti Rastogi",
      // role: "Event Manager",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Such a lovely experience! One meeting and they could tell exactly what we wanted..took the stress out of the wedding celebration arrangements in an instant. We knew we’ll get more than what we want and how we want the work to be done! Such a delight and the day of the event, was in awe of the arrangement. Very thoughtful team and very proactive! Couldn’t recommend more!.",
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
