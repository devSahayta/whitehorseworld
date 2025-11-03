"use client";
export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { Divider } from "rsuite";
import { FaDiamond } from "react-icons/fa6";
import WhHeader from "../../components/WhHeader";
import WhFooter from "../../components/WhFooter";

export default function BlogPage() {
  return (
    <>
      {/* ✅ Meta SEO */}
      <Head>
        <title>Destination wedding in Udaipur | Venues, cost & planning</title>
        <meta
          name="description"
          content="Plan your dream destination wedding in Udaipur with the best venues, cost breakdown, planning tips, and FAQs for a royal and memorable celebration."
        />
      </Head>

      <WhHeader />

      <section className="max-w-6xl mx-auto px-6 py-16 bg-black text-gray-200">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-6"
        >
          Why Udaipur is the Dream Wedding Destination?
        </motion.h1>

        <Divider
          className="text-yellow-400"
          style={{ width: "25%", margin: "auto", marginBottom: "64px" }}
        >
          <FaDiamond size={10} /> <FaDiamond size={20} className="mx-1" />{" "}
          <FaDiamond size={10} />
        </Divider>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-lg leading-relaxed"
        >
          <p>
            When couples dream of a royal yet romantic wedding, Udaipur is often
            the first city that comes to mind. Known as the “city of lakes” and
            the “Venice of the East,” Udaipur offers a magical mixture of
            heritage and luxury. Grand palaces, historic forts, serene lakes,
            and luxury resorts — this city has everything needed to turn a
            wedding into an unforgettable experience. It is no surprise that
            Udaipur is one of the most sought-after wedding destinations not
            only in India but also internationally.
          </p>

          <p>
            Planning a destination wedding here may feel overwhelming at first,
            but with the right preparation, the journey can be as beautiful as
            the celebration itself. In this ultimate guide, we will walk through
            everything you need to know — from the best time to get married and
            popular venues to estimated costs, insider tips, and FAQs.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Why choose Udaipur for your destination wedding?
          </h2>
          <p>
            Couples from across the globe choose Udaipur for its extraordinary
            blend of natural beauty, royal heritage, and warm hospitality.
            Imagine taking your wedding vows against the shimmering backdrop of
            Lake Pichola, hosting a sangeet under a starlit sky, or welcoming
            guests with traditional folk performances that highlight the culture
            of Rajasthan.
          </p>
          <p>
            The charm of Udaipur lies in its versatility. Whether you’re
            planning a grand regal wedding or an intimate lakeside celebration,
            the city offers venues and experiences for every preference.
            Udaipur’s connectivity also makes it ideal for both domestic and
            international guests.
          </p>
          <Image
            src="/images/slides/Udaipur.png"
            alt="Palace courtyard wedding celebration in Udaipur at Lake Pichola at sunset with royal architecture and starlit sky ambiance."
            width={1920}
            height={1080}
            className="rounded-lg w-full object-cover h-screen"
          />

          {/* Section 2 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Best time for a destination wedding in Udaipur
          </h2>
          <p>
            The most popular time to host a wedding in Udaipur is between
            October and March when the weather ranges between 10°C and 25°C —
            perfect for outdoor ceremonies. Monsoon months (July–September)
            transform the city into a lush paradise but require indoor backups.
            Summers (April–June) are too hot and generally avoided.
          </p>
          <Image
            src="/images/slides/b1.jpg"
            alt="Best season for weddings in Udaipur with cool and romantic lakeside setting."
            width={1920}
            height={1080}
            className="rounded-lg w-full object-cover h-screen"
          />

          {/* Section 3 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            How much does a destination wedding in Udaipur cost?
          </h2>
          <p>
            The cost depends on the venue, guest count, and event scale.
            Generally, it ranges between ₹15 lakhs and ₹1.5 crores or more.
            Smaller weddings (50–100 guests) start at ₹15–25 lakhs. Mid-range
            weddings cost ₹30–60 lakhs, and luxury palace weddings at Jagmandir,
            Taj Lake Palace, or Oberoi Udaivilas can exceed ₹1 crore.
          </p>
          <p>
            Major factors influencing the cost include venue choice, decor,
            catering, and entertainment. Partnering with{" "}
            <span className="text-yellow-400 font-semibold">
              White Horse Event Management
            </span>{" "}
            helps make your wedding more cost-efficient and stress-free.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Top wedding venues in Udaipur
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>The Oberoi Udaivilas:</strong> Mughal-inspired domes and
              lakeside courtyards.
            </li>
            <li>
              <strong>Taj Lake Palace:</strong> A floating palace ideal for
              exclusive weddings.
            </li>
            <li>
              <strong>Jagmandir Island Palace:</strong> Heritage-rich, cinematic
              venue accessible by boat.
            </li>
            <li>
              <strong>The Leela Palace:</strong> Modern luxury with traditional
              elegance.
            </li>
            <li>
              <strong>RAAS Devigarh:</strong> 18th-century fort with a modern
              twist.
            </li>
          </ul>
          <Image
            src="/images/slides/b1.jpg"
            alt="Oberoi Udaivilas Udaipur evening view with golden domes and royal architecture."
            width={1920}
            height={1080}
            className="rounded-lg w-full object-cover h-screen"
          />

          {/* Section 5 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Planning your destination wedding in Udaipur step-by-step
          </h2>
          <p>
            Start with the guest list and budget, then shortlist venues that fit
            your vision. Book early — top venues are reserved months in advance.
            Collaborate with{" "}
            <span className="text-yellow-400 font-semibold">
              White Horse Event Management
            </span>{" "}
            for venue negotiations, decor, logistics, and entertainment. Food,
            guest accommodation, and authentic Rajasthani entertainment make the
            celebration complete.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Insider Tips for a Smooth Wedding
          </h2>
          <p>
            Visit venues before booking and plan indoor backups for outdoor
            functions. Hire a wedding planner to handle logistics, artist
            bookings, and permits. Early planning ensures smooth execution and
            better venue options.
          </p>

          {/* Section 7 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Frequently Asked Questions
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Cost for 100 guests:</strong> ₹25–40 lakhs.
            </li>
            <li>
              <strong>Best time:</strong> October to March.
            </li>
            <li>
              <strong>Top venues:</strong> Oberoi Udaivilas, Taj Lake Palace,
              Jagmandir, Leela Palace.
            </li>
            <li>
              <strong>Budget-friendly tip:</strong> Choose boutique hotels or
              off-season dates.
            </li>
          </ul>

          {/* Final Section */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Turning Your Dream Wedding into Reality
          </h2>
          <p>
            A destination wedding in Udaipur isn’t just an event — it’s a royal
            celebration. With expert planning from{" "}
            <span className="text-yellow-400 font-semibold">
              White Horse Events
            </span>
            , every detail of your big day can reflect luxury, culture, and
            perfection.
          </p>

          <Divider
            className="text-yellow-400"
            style={{ width: "25%", margin: "auto", marginTop: "64px" }}
          >
            <FaDiamond size={10} /> <FaDiamond size={20} className="mx-1" />{" "}
            <FaDiamond size={10} />
          </Divider>

          <p className="text-center text-gray-400 text-lg mt-6">
            Get in touch with{" "}
            <span className="text-yellow-400 font-semibold">
              White Horse Events
            </span>{" "}
            today to start planning the wedding of your dreams.
          </p>
        </motion.div>
      </section>

      <WhFooter />
    </>
  );
}
