/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { Modal } from "rsuite";
import { useState } from "react";
import { motion } from "motion/react";
import "../../styles/wedding.css";

const originalImages = [
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586375325612-PG0ZKMZ25ZHLGXE9ZRZI/Shangri+La+Set+Up+Dec+8-59+Edit-2.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586375027830-5EQ6C91JGM4E0AVPX9LW/Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586375059977-PO2609JI5LPS22KK8WC8/HOTC4081-2.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586375396690-LSNOJ8IXGVEWG35C8E8I/Shangri+La+Set+Up+Dec+8-74-2.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586374861625-X86MLLHMWFG4TW8CQP1E/PD2901_0415+Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586374714125-2V6LZO3TF3EKPU1FM7HC/KF2A2831+Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586374767834-F6QWAYN2MBXBVQO6RMLR/KKK06991.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586596774719-0459GJ83XGCG29AZ9RPU/AltairJaisalmer-222+Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586686562217-SSKDEC0WIFQN84NZLRZ1/AltairJaisalmer-226+Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1587542081141-60QXGTE78KZMHVSFI39D/AltairJaisalmer-292+Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1587542174622-0MMROA5U22S1Z6SQMLEE/Editt.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586686576895-FRDWE8VNE035AZFTTTHK/AltairJaisalmer-261+Edit.jpg",
  "https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1707446/pexels-photo-1707446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586686562527-A1OGEKZRRCWCWGH5KM4Z/AltairJaisalmer-238+Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1587542322360-1P9UY13FVG1VP4QPZVZS/JAJaipur-145+Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1587542186110-E43APCQKFEYZXVXUGXFD/JAJaipur-66+Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1587542262286-9G07STJUH3O5IDRV2O28/JAJaipur-118+Edit.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1586375003581-7ALKHF2XFTHD7BFA2AVU/7Y3A8718-2.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1529307956766-IUWFZGNTPIO6FAAR0DBE/AltAir-11.jpg",
  "https://images.squarespace-cdn.com/content/v1/57122b3140261dc8badfe6b7/1590260107379-L9ZBTAHNAEIIMO5U7F29/AltairJaisalmer-504.jpg",
  "https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/7666513/pexels-photo-7666513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/31906107/pexels-photo-31906107/free-photo-of-elegant-indian-wedding-ceremony-in-delhi.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/31906103/pexels-photo-31906103/free-photo-of-joyful-indian-wedding-celebration-in-delhi.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/7666519/pexels-photo-7666519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/7666503/pexels-photo-7666503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/3947955/pexels-photo-3947955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://cdn.pixabay.com/photo/2016/11/21/15/58/wedding-1846114_640.jpg",
  "https://cdn.pixabay.com/photo/2017/05/23/22/33/birthday-2338813_640.jpg",
  "https://cdn.pixabay.com/photo/2016/02/01/18/26/wedding-table-1174135_640.jpg",
  "https://cdn.pixabay.com/photo/2021/12/23/04/34/bride-6888615_640.jpg",
  "https://cdn.pixabay.com/photo/2022/01/10/04/36/flower-6927351_640.jpg",
];

export default function WGallerySection2({
  requiredModal = true,
  renderImage = "full",
}) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // render image full or half on base of props
  const images = [];

  if (renderImage != "full") {
    const tempImage = originalImages.slice(0, originalImages.length / 2);
    images.push(...tempImage);
  } else {
    images.push(...originalImages);
  }

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  // console.log("Images total length is ", originalImages.length);
  // const newImage = originalImages.slice(0, 10);
  // console.log(newImage);
  // console.log("new image total length is ", newImage.length);

  console.log("length of new image is ", images.length);

  return (
    <section className="py-16 px-4">
      {/* <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400 ">
        Our Wedding Moments
      </h2> */}

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.6,
            }}
            viewport={{ once: true }}
            key={i}
            src={src}
            alt={`Wedding ${i}`}
            className="rounded-lg w-full cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => {
              requiredModal && handleOpen(src);
            }}
          />
        ))}
      </div>

      {!requiredModal && (
        <div>
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
        </div>
      )}

      <Modal open={open} onClose={() => setOpen(false)} size="md">
        <Modal.Body className="flex justify-center items-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full rounded-lg"
          />
        </Modal.Body>
      </Modal>
    </section>
  );
}
