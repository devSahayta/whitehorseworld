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
      {/* ✅ SEO Meta */}
      <Head>
        <title>
          Wedding trends 2025 | Latest ideas, fashion & destinations
        </title>
        <meta
          name="description"
          content="Wedding trends 2025 bring fresh styles, eco-friendly themes, and luxury destinations in Udaipur, Goa, Jaipur or any of your favourite locations across India."
        />
      </Head>

      <WhHeader />

      <section className="max-w-6xl mx-auto px-6 py-16 bg-black text-gray-200">
        {/* ✅ Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-6"
        >
          Wedding Trends of 2025: The Future of Celebrations
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
            The world of weddings is evolving faster than ever. With couples
            looking for ways to make their big day more meaningful, stylish, and
            personalized, 2025 is shaping up to be an exciting year for the
            wedding industry. From intimate luxury weddings to tech-driven
            celebrations, the trends reflect not only changing aesthetics but
            also deeper values around sustainability, personalization, and guest
            experience.
          </p>

          <p>
            At{" "}
            <span className="text-yellow-400 font-semibold">
              White Horse Event Management Company
            </span>
            , we’ve planned weddings across India’s most iconic destinations,
            and we see firsthand how couples’ preferences are shifting. If
            you’re getting married in 2025, here’s everything you need to know
            about the trends shaping the wedding world this year.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Why 2025 weddings will be different?
          </h2>
          <p>
            Unlike the last few years where weddings were influenced heavily by
            the pandemic and its aftermath, 2025 weddings are marked by a
            balance between tradition and innovation. Couples want grandeur but
            not wastefulness, personalization but not chaos, and above all,
            experiences that reflect their unique story.
          </p>
          <p>
            This means weddings are not just about “how it looks” anymore but
            also “how it feels.” Whether it’s a destination wedding in Udaipur,
            an intimate beachside celebration in Goa, or a fusion wedding that
            brings together different cultures, the upcoming season is all about
            reimagining the big day.
          </p>

          {/* Trend #1 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Trend #1: Intimate Luxury and Micro-Weddings
          </h2>
          <p>
            One of the biggest trends in 2025 is the rise of intimate luxury
            weddings. Instead of inviting 800 guests, couples are opting for 80
            and focusing on making every detail feel personal. Think curated
            menus, handwritten notes, custom decor, and experiences designed to
            leave lasting memories.
          </p>
          <p>
            While smaller weddings may seem cheaper, many couples are spending
            similar budgets — reallocating funds to upgrade experiences like
            gourmet dining, designer decor, and boutique venues.
          </p>

          {/* Trend #2 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Trend #2: Sustainable Weddings
          </h2>
          <p>
            Sustainability is now a lifestyle. In 2025, couples are finding ways
            to go green without losing elegance. From recycled invitations and
            solar-powered lighting to locally sourced flowers and plant-based
            catering, eco-conscious choices make weddings stylish and
            sustainable.
          </p>
          <p>
            Decor trends include brass, bamboo, and glass, while digital-first
            planning with e-invites, virtual RSVPs, and live-streaming reduces
            waste.
          </p>
          <Image
            src="/images/slides/b7.jpg"
            alt="Eco-friendly Indian wedding decor with bamboo mandap draped in earthy fabrics, vibrant local flowers, potted plants, and reusable lanterns creating a sustainable celebration setup."
            width={1200}
            height={800}
            className="rounded-lg w-full object-cover h-[550px] md:h-[650px]"
          />

          {/* Trend #3 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Trend #3: Technology-Enhanced Weddings
          </h2>
          <p>
            Tech is redefining the wedding experience. From 4K live-streaming
            for distant guests to drones and AI-powered planning tools,
            technology enhances connection and convenience.
          </p>
          <p>
            Smart screens at venues display event details and guest trivia,
            while AI helps with seating, music curation, and planning
            efficiency.
          </p>
          <Image
            src="/images/slides/b8.jpg"
            alt="Live streaming at an Indian wedding ceremony using smartphone and tablet."
            width={1200}
            height={800}
            className="rounded-lg w-full object-cover h-[550px] md:h-[650px]"
          />

          {/* Trend #4 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Trend #4: Destination Weddings in 2025
          </h2>
          <p>
            Udaipur, Jaipur, Goa, and Kerala lead India’s list of 2025 wedding
            hotspots. Palaces, forts, and beaches provide perfect backdrops.
            Internationally, Italy, Greece, and Bali continue to be favorites
            for romantic celebrations.
          </p>
          <p>
            Destination weddings are now multi-day experiences that blend
            celebration with travel, culture, and relaxation.
          </p>

          {/* Trend #5 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Trend #5: Fusion and Themed Celebrations
          </h2>
          <p>
            With intercultural marriages rising, fusion weddings are trending.
            Couples merge rituals, cuisines, and decor from multiple cultures,
            creating meaningful celebrations with unique themes like Bollywood
            glam or fairytale romance.
          </p>
          <Image
            src="/images/slides/b6.jpg"
            alt="Fusion wedding celebration combining Indian traditions with a modern beach reception."
            width={1200}
            height={800}
            className="rounded-lg w-full object-cover h-[550px] md:h-[650px]"
          />

          {/* Trend #8 */}
          <h2 className="text-3xl font-semibold text-yellow-400">
            Trend #8: Culinary Experiences — More Than Just a Meal!
          </h2>
          <p>
            Food is now an immersive experience. Interactive live counters,
            curated gourmet menus, and fusion cuisines define modern wedding
            dining. Desserts evolve into artistic experiences — think Gulab
            Jamun fondue and artisanal ice creams.
          </p>
          <Image
            src="/images/slides/b5.jpg"
            alt="Guests enjoying a vibrant Indian wedding feast with curated dishes, fusion flavors, and interactive dining experiences."
            width={1200}
            height={800}
            className="rounded-lg w-full object-cover h-[550px] md:h-[650px]"
          />

          <h2 className="text-3xl font-semibold text-yellow-400">
            Trend #9: Experiential entertainment
          </h2>

          <h5>Beyond music and dance</h5>
          <p>
            Entertainment at weddings in 2025 goes far beyond DJs and dhol
            players. Think aerial performances, live art shows, interactive
            photo booths, and storytelling sessions. Couples are also hiring
            celebrity performers to surprise their guests.
          </p>
          <h5>Guest engagement</h5>
          <p>
            Interactive experiences like tarot readings, caricature artists, and
            mixology classes keep guests engaged throughout the celebration.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            Trend #10: Wellness-inspired weddings
          </h2>

          <h5>Mindful and balanced celebrations</h5>
          <p>
            A surprising yet refreshing trend is wellness-inspired weddings.
            Couples are adding yoga mornings, meditation sessions, and healthy
            cuisine to ensure guests feel rejuvenated throughout the
            celebrations.
          </p>

          <h5>Pre-wedding retreats</h5>
          <p>
            Destination weddings now often start with wellness retreats like spa
            days, sound healing, and detox menus, helping guests relax before
            the ceremonies begin.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            FAQs About Wedding Trends 2025
          </h2>
          <h5>What are the top wedding destinations in India for 2025?</h5>
          <p>
            Udaipur, Goa, Jaipur, Jodhpur, and Kerala continue to lead as
            favoured wedding destinations in 2025, thanks to their royal venues,
            scenic landscapes, and luxury offerings. Other places like Shimla,
            Rishikesh, and Agra are also gaining popularity for couples seeking
            mountain backdrops, spiritual settings, or historic charm.
          </p>

          <h5>Are destination weddings affordable?</h5>

          <p>
            Destination weddings can be tailored to different budgets. While
            luxury venues may be expensive, smaller guest lists and careful
            planning can make them surprisingly affordable.
          </p>

          <h5>What is the latest bridal fashion trend for 2025?</h5>
          <p>
            Metallic lehengas, pastel tones, and sustainable fabrics are in
            vogue for brides, while grooms are experimenting with bold prints
            and unique color palettes.
          </p>

          <h5>How can I make my wedding eco-friendly?</h5>

          <p>
            Opt for e-invites, locally sourced flowers and food, reusable décor,
            and sustainable fashion choices. White Horse Event Management
            Company offers eco-conscious planning solutions that blend
            sustainability with elegance, ensuring your celebration remains both
            stylish and responsible.
          </p>

          <h5>Making your 2025 wedding truly yours</h5>

          <p>
            The wedding trends of 2025 are about more than style, they’re about
            meaning, experience, and personalization. Whether you want an
            intimate lakeside wedding, a grand palace celebration, or a modern
            sustainable event, the options are limitless. Your wedding deserves
            more than just a plan, it deserves an experience. At White Horse
            Event Management Company, we don’t just manage events, we create
            once-in-a-lifetime celebrations tailored to your love story. Connect
            with us today and let’s make your 2025 wedding unforgettable.
          </p>
          <Divider
            className="text-yellow-400"
            style={{ width: "25%", margin: "auto", marginTop: "64px" }}
          >
            <FaDiamond size={10} /> <FaDiamond size={20} className="mx-1" />{" "}
            <FaDiamond size={10} />
          </Divider>

          <p className="text-center text-gray-400 text-lg mt-6">
            Connect with{" "}
            <span className="text-yellow-400 font-semibold">
              White Horse Events
            </span>{" "}
            today — let’s make your 2025 wedding unforgettable.
          </p>
        </motion.div>
      </section>

      <WhFooter />
    </>
  );
}
