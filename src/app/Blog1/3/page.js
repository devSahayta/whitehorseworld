"use client";

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
        <title>How to save big on wedding decor without losing style?</title>
        <meta
          name="description"
          content="Smart wedding decor ideas to cut costs without compromise. From floral choices to DIY details, plan a stylish celebration that fits your budget."
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
          How to Save Big on Wedding Decor Without Losing Style
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
            Planning a wedding is exciting, but it can also be overwhelming,
            especially when you start looking at the costs. One area that often
            surprises couples with its price tag is wedding decor. Be it the
            fresh flowers, fabric draping, lights, or designs — it all adds up
            quickly. But what if we told you that you can have the wedding of
            your dreams without breaking the bank on decor? It’s absolutely
            possible! Let’s explore smart strategies and insider tips to help
            you save big on wedding decor while still creating a stunning and
            memorable celebration.
          </p>

          <Image
            src="/images/slides/A.jpg"
            alt="Budget-friendly wedding decor with fairy lights, flowers, and draped fabrics creating a dreamy setup."
            width={1000}
            height={1000}
            className="rounded-lg w-full object-cover h-72"
          />

          <h2 className="text-3xl font-semibold text-yellow-400">
            Understanding Wedding Decor Costs
          </h2>
          <p>
            Before we dive into saving strategies, let's understand why wedding
            decor can be so pricey. Several factors contribute:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Labor-intensive:</strong> Designers and florists spend
              hours creating and setting up decor.
            </li>
            <li>
              <strong>Perishable goods:</strong> Fresh flowers are beautiful but
              costly and short-lived.
            </li>
            <li>
              <strong>Specialty items:</strong> Unique backdrops or custom
              lights often come at premium rental rates.
            </li>
            <li>
              <strong>Venue restrictions:</strong> Some venues limit decor
              options or require in-house vendors.
            </li>
            <li>
              <strong>Scale and scope:</strong> Larger spaces mean more decor
              and higher costs.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-yellow-400">
            1️⃣ Prioritize and Personalize
          </h2>
          <p>
            Focus your budget where it matters most. Decorate high-impact areas
            like the stage, entryway, and dining space. Add personal touches
            like framed memories or DIY details. Remember, “less is more” — a
            few well-placed statement pieces look classier than clutter.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            2️⃣ Choose the Right Venue
          </h2>
          <p>
            A venue with natural beauty saves you thousands on decor. Gardens,
            heritage hotels, and beachfront spaces already have ambiance built
            in. Bonus tip: book off-season or weekday weddings for better deals!
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            3️⃣ DIY Decor Magic
          </h2>
          <p>
            Add a personal touch by making your own signage, table cards, or
            centerpieces. Host a “craft party” with friends and family to help.
            Just remember to pick simple projects that won’t stress you out.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            4️⃣ Smart Floral Choices
          </h2>
          <p>
            Go for local and seasonal blooms. Mix in greenery like eucalyptus or
            ferns for a lush look. Reuse floral arrangements across ceremony and
            reception areas. You can even explore dried or faux flowers for
            sustainability and savings.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            5️⃣ Lighting: Your Secret Weapon
          </h2>
          <p>
            Lighting can completely transform your space — affordably! Use fairy
            lights, candles, or soft uplighting to create a warm, dreamy
            atmosphere without extravagant florals.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            6️⃣ Rent Smart, Buy Smarter
          </h2>
          <p>
            Rent big items (arches, chairs, linens), but buy small ones you can
            reuse or resell later. Check secondhand wedding marketplaces for
            incredible deals on lightly used decor.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            7️⃣ Budget-Friendly Linens
          </h2>
          <p>
            Simple linens with colored runners or textured napkins can look just
            as elegant as premium fabrics. Mixing textures adds visual depth
            without extra cost.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            8️⃣ Repurpose Decor
          </h2>
          <p>
            Reuse ceremony decor for your reception. Aisle flowers can become
            table arrangements. Bridesmaid bouquets can decorate the cake or
            buffet tables. It’s sustainable and smart.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            9️⃣ Think Beyond Traditional Vendors
          </h2>
          <p>
            Explore home decor stores, flea markets, or local artisans for
            unique decor items at lower prices. Wedding vendors often charge
            extra for the same products.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400">
            🔟 Minimalism & Digital Elements
          </h2>
          <p>
            Minimalist decor — clean lines, greens, and texture — is timeless
            and trending. Go digital for invites, seating charts, and menus to
            save printing costs and stay eco-friendly.
          </p>

          <Divider
            className="text-yellow-400"
            style={{ width: "25%", margin: "auto", marginTop: "64px" }}
          >
            <FaDiamond size={10} /> <FaDiamond size={20} className="mx-1" />{" "}
            <FaDiamond size={10} />
          </Divider>

          <h2 className="text-3xl font-semibold text-yellow-400 mt-8">
            FAQs: Wedding Decor on a Budget
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Cheap but stylish decor ideas:</strong> Candles, fairy
              lights, potted plants, and DIY signage.
            </li>
            <li>
              <strong>Small budget decor tips:</strong> Focus on high-impact
              areas and personal elements.
            </li>
            <li>
              <strong>DIY worth it?</strong> Yes, for small projects. Mix DIY
              and rentals smartly.
            </li>
            <li>
              <strong>Cut floral costs:</strong> Go local, use greenery, and
              repurpose decor.
            </li>
            <li>
              <strong>Rent or buy?</strong> Rent large items, buy small reusable
              decor.
            </li>
            <li>
              <strong>Digital decor:</strong> QR menus and LED screens reduce
              printing costs.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-yellow-400 mt-8">
            Wrapping It Up
          </h2>
          <p>
            At the end of the day, wedding decor isn’t just about money- it’s
            about meaning. A few thoughtful touches in the right places will
            always stand out more than extravagant decor everywhere. By focusing
            on high-impact details, repurposing wisely, and keeping your budget
            in mind, you’ll create a wedding atmosphere that’s not only stunning
            but also stress-free. And remember, the most unforgettable part of
            your celebration isn’t the flowers or the lights- it’s the love and
            joy that fill the room. Everything else is just the beautiful
            backdrop.
          </p>

          <p>
            <span className="text-yellow-400 font-semibold">
              White Horse Event Management Company
            </span>{" "}
            specializes in crafting budget-friendly yet breathtaking weddings.
            Whether it’s a royal destination celebration or a chic minimalist
            event, we’ll make it unforgettable.
          </p>

          <p className="text-center text-gray-400 text-lg mt-6">
            Ready to bring your dream wedding to life (without overspending)?
            <br />
            <span className="text-yellow-400 font-semibold">
              Let’s start planning your beautiful day today!
            </span>
          </p>
        </motion.div>
      </section>

      <WhFooter />
    </>
  );
}
