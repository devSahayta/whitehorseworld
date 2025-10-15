"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Modal } from "rsuite";
import Image from "next/image";
import Head from "next/head";

const originalImages = [
  { src: "/images/gallery/5.jpg", caption: "GOVERNMENT EVENTS" },
  { src: "/images/gallery/3.jpg", caption: "CORPORATE EVENTS" },
  { src: "/images/gallery/6.jpg", caption: "SPORTS MANAGEMENT" },
  { src: "/images/gallery/7.jpg", caption: "ARTIST MANAGEMENT" },
  { src: "/images/gallery/8.jpg", caption: "INTERNATIONAL ACTS" },
  { src: "/images/gallery/gallery1.jpg", caption: "DESTINATION WEDDINGS" },
  { src: "/images/gallery/01.jpg", caption: "EVENTS PLANNING" },
  { src: "/images/gallery/10.jpg", caption: "EXHIBITION & FAIRS" },
  { src: "/images/gallery/12.jpg", caption: "WEDDING PLANNING" },
];

export default function WGallerySection2() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  // Split into 3 equal columns
  const columnImages = [
    originalImages.slice(0, 3),
    originalImages.slice(3, 6),
    originalImages.slice(6, 9),
  ];

  // Seamless vertical scroll
  const scrollVariants = (direction = "up", speed = 15) => ({
    animate: {
      y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        repeat: Infinity,
        duration: speed,
        ease: "linear",
      },
    },
  });

  // ✅ Preload all images before rendering gallery
  useEffect(() => {
    let loadedCount = 0;
    originalImages.forEach((img) => {
      const image = new window.Image();
      image.src = img.src;
      image.onload = () => {
        loadedCount++;
        if (loadedCount === originalImages.length) {
          setLoaded(true);
        }
      };
    });
  }, []);

  if (!loaded) {
    return (
      <section className="w-full h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl animate-pulse">Loading gallery...</p>
      </section>
    );
  }

  return (
    <>
      {/* ✅ Preload hints for browser */}
      <Head>
        {originalImages.map((img, i) => (
          <link key={i} rel="preload" as="image" href={img.src} />
        ))}
      </Head>

      <section className="w-full h-screen bg-black overflow-hidden">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full">
          {columnImages.map((images, col) => (
            <motion.div
              key={col}
              className="flex flex-col"
              variants={scrollVariants(
                col % 2 === 0 ? "up" : "down",
                18 - col * 3
              )}
              animate="animate"
            >
              <div>
                {[...images, ...images].map((img, i) => (
                  <div
                    key={`${col}-${i}`}
                    className="relative cursor-pointer border border-black"
                    onClick={() => handleOpen(img.src)}
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                      loading="eager"
                      unoptimized
                    />

                    {/* Caption Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <p className="text-white text-sm sm:text-base md:text-lg font-bold text-center px-2">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Preview */}
        <Modal open={open} onClose={() => setOpen(false)} size="lg">
          <Modal.Body className="flex justify-center items-center">
            <Image
              src={selectedImage}
              alt="Selected"
              width={900}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
              loading="eager"
              unoptimized
            />
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}
