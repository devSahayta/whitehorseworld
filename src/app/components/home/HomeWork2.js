"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";
import { useState } from "react";

const workItems = [
  {
    title: "GOVERNMENT EVENTS",
    description:
      "White Horse World is a trusted name in government event management in India, known for delivering events that combine precision, protocol, and impact. We manage every aspect with professionalism be it national celebrations, state-level conferences, cultural festivals or public campaigns.As one of the leading government event organizers, we specialize in end-to-end solutions including stage and set design, security coordination, guest management, logistics, and media coverage. Our team works closely with officials to ensure seamless execution and compliance with government standards.We have successfully handled prestigious occasions such as state foundation day celebrations, award ceremonies, political rallies, and official inaugurations. Every event is designed to inspire pride, connect with citizens, and reflect the significance of the institution hosting it.If you’re looking for government event planners in India who can handle large-scale public functions or VIP gatherings, White Horse World brings unmatched experience, creativity, and reliability. Our events not only uphold protocol but also create memorable experiences that strengthen public engagement..",
    image: "/images/work/work-government-event.jpg",
  },

  {
    title: "CORPORATE EVENTS",
    description: `We are the right choice to contact if you are looking for corporate event planners in India. White Horse World understands business goals as well as event logistics. We have been helping companies host product launches, conferences, team-building retreats, and executive seminars that leave lasting impressions.

Our strength lies in creating events that reflect your brand identity. From concept design and branding to venue setup, digital engagement, and hospitality, we ensure every detail resonates with professionalism. With advanced features like live streaming, interactive displays, and immersive experiences, we make events not just memorable but also measurable.

As a leading corporate event management company in Ranchi, we partner with organizations to deliver polished experiences that inspire employees, engage clients, and build stronger stakeholder connections. Whether your goal is knowledge sharing, celebration, or brand positioning, our corporate events drive impact where it matters most.`,
    image: "/images/work/work-corporate-event.jpg",
  },
  {
    title: "SPORTS MANAGEMENT",
    description: `The energy of sports deserves flawless execution, and White Horse World stands among the most experienced sports event management companies in India. We bring structure, excitement, and precision to every sporting event like local tournaments, school competitions, professional leagues or celebrity matches.

Our team manages athlete coordination, fixture scheduling, sponsorship tie-ups, crowd engagement, broadcasting, and on-ground logistics. We also create vibrant experiences around the event, including grand openings, branded fan zones, merchandise promotions, and award ceremonies.

With strong demand for sports event organizers India and sports tournament planners, our reputation is built on delivering both safe and spectacular experiences. We balance operational efficiency with audience engagement, ensuring every moment is thrilling for participants and spectators alike.

When you partner with White Horse World, you get more than an event. You get a sporting celebration that connects athletes, sponsors, and fans in the most memorable way.`,
    image: "/images/work/work-sports.jpg",
  },
  {
    title: "ARTIST MANAGEMENT & INTERNATIONAL ACTS",
    description: `Finding the right talent can transform an event, and White Horse World leads the way in artist management and international entertainment acts in India. We curate line-ups that suit every occasion- corporate galas, weddings, festivals, and large-scale concerts.

As a trusted artist management company in Ranchi, we arrange celebrity appearances, live bands, DJs, motivational speakers, cultural performers, and global artists. Our role is to ensure smooth coordination between performers and event hosts, covering travel, contracts, stage management, and technical needs.

For international acts, we handle end-to-end planning including visas, logistics, and hospitality, ensuring world-class performances that wow audiences. We specialize in bringing the best of entertainment directly to your stage.

With White Horse World, you’re not just booking talent, you’re delivering experiences that leave guests inspired, entertained, and talking about your event long after the lights go down.`,
    image: "/images/work/work-artist-management.png",
  },
  {
    title: "EXHIBITIONS & TRADE FAIRS",
    description: `Exhibitions are where brands meet audiences, and White Horse World is a leading name in exhibition and trade fair management in India. We design and execute stalls, expos, and fairs that help businesses attract attention and maximize visibility.

From booth design, exhibitor management, and logistics to digital engagement, audio-visual setups, and branding, we provide end-to-end solutions. Our creative designs are built to capture footfall, while our operational expertise ensures smooth participation for both organizers and exhibitors.

As one of the top trade fair organizers, we’ve helped startups, SMEs, and global brands showcase their products effectively. We excel in professional support in this space. With White Horse World, exhibitions go beyond static displays. They become interactive brand experiences that attract, engage, and convert audiences into loyal customers.`,
    image: "/images/work/work-exhibition-fair.jpg",
  },
  {
    title: "BRAND ACTIVATION & MARKETING SERVICES",
    description: `In today’s competitive world, brands just don’t need visibility, they also need experiential connections. White Horse World specializes in brand activation services in India that engage audiences and create lasting impressions.

We design and deliver roadshows, mall promotions, sampling campaigns, interactive product launches, and experiential marketing activations that resonate with consumers. Every campaign is customized to fit the brand’s personality and target audience, ensuring meaningful engagement.

We are a trusted brand activation agency and we combine creative storytelling with measurable results. Our campaigns are backed by strategy, precision execution, and post-event tracking to ensure maximum ROI. We continue to set benchmarks in this field. Whether you’re entering a new market or strengthening existing brand recall, we help you create powerful, unforgettable experiences that drive impact.`,
    image: "/images/work/work-rural-marketing-02-655x545.jpg",
  },
  {
    title: "WEDDINGS",
    description: `Your wedding should be more than an event, in fact it should be a memory for life. White Horse World is widely known for crafting magical celebrations that blend tradition and innovation.

We manage every detail of wedding planning and execution: decor, rituals, entertainment, logistics, guest hospitality, catering, and photography. Our team personalizes each element to reflect your story and vision, ensuring your big day feels uniquely yours.

From luxury palace weddings and beachside ceremonies to intimate cultural gatherings, our expertise ensures elegance and flawless coordination. We continue to lead as a trusted name in wedding experiences. With White Horse World, you don’t just celebrate your wedding, you live your dream in the most unforgettable way possible.`,
    image: "/images/work/work-wed5-655x545.jpg",
  },
  {
    title: "THEME INSTALLATIONS",
    description: `Immersive environments elevate events, and White Horse World specializes in theme installations in India that transform spaces into experiences.

Our services cover concept design, fabrication, lighting, sound, decor, and staging to match your chosen theme. We create captivating atmospheres for weddings, corporate events, exhibitions, and festivals.

Also to note, White Horse World does royal and cultural setups to futuristic installations with digital tech. We have built unique installations that blend creativity with storytelling. Each installation is more than decor, it’s a narrative that engages audiences, enhances the mood, and makes your event unforgettable.`,
    image: "/images/work/work-theme1-655x545.jpg",
  },
  {
    title: "DIGITAL MARKETING",
    description: `In a digital-first world, visibility matters. White Horse World provides expert digital marketing services to help businesses grow online. We offer SEO, social media marketing, PPC campaigns, content creation, and analytics, building customized strategies for each brand. Whether you’re looking to boost search rankings, build engagement on social platforms, or run high-performing ad campaigns, we deliver measurable results.

We are trusted to blend creativity with data-driven insights and help brands stay ahead of the competition. From startups to established businesses, we ensure your digital presence not only reaches your audience but also builds strong, lasting connections.`,
    image: "/images/work/work-SOCIAL-NETWORKING-02-655x545.jpg",
  },
  {
    title: "RURAL MARKETING",
    description: `Reaching rural India requires cultural understanding and strategic execution. White Horse World helps brands connect with audiences in towns and villages across the country.

We design on-ground activations, village fairs, community programs, mobile promotions, and localized campaigns that speak the language of rural consumers. By combining cultural relevance with brand storytelling, we build campaigns that inspire trust and engagement.

We’ve partnered with businesses to expand into untapped markets. We do rural marketing just not for reach but for building meaningful relationships that strengthen brands in the heart of India.`,
    image: "/images/work/work-rural-marketing-03-655x545.jpg",
  },
];

export default function HomeWork2() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="bg-white text-white px-4 md:px-20 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-bold mb-10 main-color"
      >
        WHITE HORSE WORLD IN ACTION
      </motion.h2>

      <motion.h5 className="text-center text-black mb-8 font-medium">
        For over 18 years, White Horse World has been at the forefront of event
        management in Ranchi and across India. From government functions and
        corporate gatherings to weddings, exhibitions, and sports events, we
        bring ideas to life with precision and creativity. Recognized as a
        leading event management company in India, our team arrange experiences
        that inspire audiences, strengthen brands, and create unforgettable
        memories.
      </motion.h5>

      <Divider
        className="text-yellow-400"
        style={{ width: "25%", margin: "auto", marginBottom: "50px" }}
      >
        <FaDiamond size={10} /> <FaDiamond size={20} className="mx-1" />
        <FaDiamond size={10} />
      </Divider>

      <div>
        {workItems.map((item, index) => {
          const isExpanded = expanded === index;
          const maxLength = 450; // max characters before truncation
          const shouldTruncate = item.description.length > maxLength;
          const displayText =
            isExpanded || !shouldTruncate
              ? item.description
              : item.description.slice(0, maxLength) + "...";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`mx-10 w-[92%] m-auto flex flex-col md:flex-row items-center gap-20 mb-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full md:w-1/2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-lg object-cover w-full"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full md:w-1/2 text-center md:text-left"
              >
                <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-6">
                  {item.title}
                </h2>
                <p className="text-lg text-black whitespace-pre-line">
                  {displayText}
                </p>

                {shouldTruncate && (
                  <button
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="mt-4 text-red-600 font-semibold hover:underline"
                  >
                    {isExpanded ? "− See Less" : "+ See More"}
                  </button>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
