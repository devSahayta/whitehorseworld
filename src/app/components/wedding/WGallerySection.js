/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "motion/react";
import { Divider } from "rsuite";
import { FaDiamond } from "react-icons/fa6";

export default function WGallerySection() {
  const galleryData = [
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment9-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management14-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management8-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management4-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management2-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management1-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment9-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management14-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management8-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management4-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management2-290x274.jpg",
    },
    {
      image:
        "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management1-290x274.jpg",
    },
  ];

  return (
    <section className="w-full py-20 px-4 w-gallery-container ">
      <h2 className="text-4xl font-bold text-center mb-5 text-yellow-400 ">
        Wedding Collections
      </h2>
      <Divider
        className=" w-about-divider text-yellow-400 "
        style={{ width: "25%", margin: "auto", marginBottom: "76px" }}
      >
        <FaDiamond size={10} /> <FaDiamond size={20} className=" ml-1 mr-1 " />
        <FaDiamond size={10} />
      </Divider>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-9 max-w-6xl mx-auto">
        {galleryData.map((data, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.7,
            }}
            key={index}
            className="overflow-hidden shadow-md "
          >
            {/* <Image
              src={data.image}
              width={400}
              height={300}
              alt="Wedding moment"
              className="object-cover w-full h-full hover:scale-110 transition-all "
            /> */}

            <img
              src={data.image}
              alt="Wedding moment"
              className="object-cover w-full h-full hover:scale-110 transition-all "
            />
          </motion.div>
        ))}
      </div>
      <motion.a
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4,
        }}
        viewport={{ once: true }}
        href="/gallery"
        className="w-gallery-see-more custom-button-anim "
      >
        See More
      </motion.a>
    </section>
  );
}
