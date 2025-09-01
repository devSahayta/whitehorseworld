"use client";
import { motion } from "framer-motion";

export default function HomeBanner() {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-black to-black z-0" />

      {/* Floating ambient blobs */}
      <motion.div
        className="absolute -top-20 -left-32 w-64 h-64 md:w-96 md:h-96 rounded-full bg-yellow-400/20 blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-32 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-pink-500/20 blur-3xl"
        animate={{ y: [0, -40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Collage Banners in Responsive Row */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center"
      >
        {/* Image 1 */}
        <div className="relative">
          <motion.img
            src="/images/banner-collage.png"
            alt="Wedding Collage"
            className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-auto object-cover rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.3)]"
            whileHover={{ rotate: [0, -2, 2, 0], scale: 1.03 }}
          />
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 sm:border-3 md:border-4 border-yellow-400/40"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Image 2 */}
        <div className="relative">
          <motion.img
            src="/images/banner-college1.png"
            alt="Concert Collage"
            className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[360px] h-auto object-cover rounded-2xl shadow-[0_0_40px_rgba(255,105,180,0.3)]"
            whileHover={{ rotate: [0, -2, 2, 0], scale: 1.03 }}
          />
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 sm:border-3 md:border-4 border-pink-400/40"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Animated Headline */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-5 text-center z-20 px-4"
      >
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
          Make Your Events Unforgettable ✨
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-3 text-sm sm:text-base md:text-lg text-gray-300"
        >
          Weddings · Concerts · Corporate · Festivals
        </motion.p>
      </motion.div>
    </section>
  );
}
