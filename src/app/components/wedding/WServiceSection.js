import Image from "next/image";
import { Card } from "rsuite";
import { motion } from "motion/react";

export default function WServiceSection() {
  const serviceData = [
    {
      id: 1,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Jiapur-7-qxibxuqoh47pp3j7nbukzzvi99qhy4bi74lun4pm3c.webp",
      title: "Rajasthan",
      description:
        "An exotic destination wedding offers a unique experience, and Kerala’s backwaters with lush greenery and coconut trees create a magical setting.",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-02-at-6.22.58-PM-1-qey08vc78djwrj9ad5yxb6bg51tsq3w7foyqdefy1k.webp",
      title: "Goa",
      description:
        "If you are seeking an incredible destination to get an indelible wedding experience, then you can host your dream destination wedding in Udaipur.",
      link: "#",
    },
    {
      id: 3,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Destiantion-wedding-in-Kerala-r0uxk3uh1yqmghlmmlx3v6d655ji4mjs7njp2lqf4o.webp",
      title: "Uttarkhand",
      description:
        "Beach weddings in India, especially in South Indian states like Goa and Kerala, create an unforgettable experience for your destination wedding in India.",
      link: "#",
    },
    {
      id: 4,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Why-should-you-consider-Kerala-for-your-destination-Wedding-qdd0gb58eyjcrnnjiswoon1niauhcqphc26uy25w60.webp",
      title: "Kerela",
      description:
        "Your wedding may be destined for you, but your wedding location is definitely planned for you. Jaspira Wedding Planners are here to make your destination wedding in Goa much...",
      link: "#",
    },
    {
      id: 5,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Why-should-you-consider-Kerala-for-your-destination-Wedding-qdd0gb58eyjcrnnjiswoon1niauhcqphc26uy25w60.webp",
      title: "Jammu & Kashmir",
      description:
        "Ever envisioned yourself tying the knot in the midst of a backwater, on a houseboat? Well, Jaspira’s destination wedding planners in India can make that a reality for you.",
      link: "#",
    },
    {
      id: 6,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Shimla-Destiantion-Wedding-e1738400038322-r0uwnpcrgkds8eo0u3p3euq4xz8zs8ww39y4i7rzmg.webp",
      title: "Himachal Pradesh",
      description:
        "Saying YES to a wedding, saying yes to your wedding dress, or accessories is little bit a tedious process. But it’s way easier to say ‘Yes’ to a magnificent destination like Jaipur, Rajasthan",
      link: "#",
    },
    {
      id: 7,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Jiapur-6-qxibxsv03g551vlxyb1bv0cl2hzriq41ivavoksefs.webp",
      title: "Global",
      description:
        "Find destination wedding places in Karnataka, India, and get the best destination wedding event venue selection services from Jaspira. Choose from the best venues in Coorg, Mysore, Bangalore, coastal beaches in Karnataka, and the Western Ghats hilltops from our curated list.",
      link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-2 sm:pl-8 ">
      {serviceData.map((data, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.2,
          }}
          viewport={{ once: true }}
          key={data.id}
        >
          <Card
            width={320}
            shaded
            style={{ color: "black", backgroundColor: "#fffbf6" }}
            className=" custom-shadow4-h-imp m-auto "
          >
            {/* <img src={data.image} alt={data.title} /> */}
            <Image src={data.image} alt={data.title} height={300} width={320} />
            <Card.Header as="h5" className=" text-2xl mt-2 mb-1  ">
              {data.title}
            </Card.Header>
            <Card.Body>{data.description}</Card.Body>
            <Card.Footer>
              <a
                href={data.link}
                className=" block m-auto mt-1 mb-3 bg-yellow-200 hover:bg-transparent w-service-learn-more"
              >
                Learn More
              </a>
            </Card.Footer>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
