/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { FaDiamond } from "react-icons/fa6";
import { Divider, Modal } from "rsuite";

const videos = [
  {
    title: "Indian Bride Groom JAI MALA",
    thumbnail:
      "https://i.ytimg.com/vi/tGLnEDaomHM/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGDYgVyh_MA8=&rs=AOn4CLC4xBZtBP3ijwMx5hcnzmZrmPdkZQ",
    embedUrl: "https://www.youtube.com/embed/tGLnEDaomHM",
  },
  {
    title: "Magical JAI MALA Indian Wedding",
    thumbnail:
      "https://i.ytimg.com/vi/dWrKagYmXB8/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBoAC4AOKAgwIABABGFMgOCh_MA8=&rs=AOn4CLDtG9QRwvS_hf8vbVLSct7r6AIY8g",
    embedUrl: "https://www.youtube.com/embed/dWrKagYmXB8",
  },
  {
    title: "Royal Indian Bride Entry",
    thumbnail:
      "https://i.ytimg.com/vi/da-WDPlRApM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBxaSHFBBwitIlPtAUlhObQtECZ2w",
    embedUrl: "https://www.youtube.com/embed/da-WDPlRApM",
  },
  {
    title: "South Indian Wedding",
    thumbnail:
      "https://i.ytimg.com/vi/ZCWBvo0Ybew/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBSMj1lFoDNza-YP_mfemiz_O8y9w",
    embedUrl: "https://www.youtube.com/embed/ZCWBvo0Ybew",
  },
  {
    title: "Wedding planner building venue",
    thumbnail:
      "https://i.ytimg.com/vi/ipw1fQad5sg/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEIgRShlMA8=&rs=AOn4CLCkl4ZGBTOkU_gHaWOw5n1WTkLBsw",
    embedUrl: "https://www.youtube.com/embed/ipw1fQad5sg",
  },
  {
    title: "Wedding Design",
    thumbnail:
      "https://i.ytimg.com/vi/goW_jtXjiBI/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEMgVChlMA8=&rs=AOn4CLD-LJnOyu1NEVyIkaIz7VZ9E5HB9w",
    embedUrl: "https://www.youtube.com/embed/goW_jtXjiBI",
  },
];

export default function VideoGallery() {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (video) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section className="w-full bg-gray-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 ">
          Wedding Moments
        </h2>
        <Divider
          className=" w-about-divider text-yellow-400 "
          style={{
            width: "25%",
            margin: "auto",
            marginTop: "25px",
            marginBottom: "76px",
          }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <div
              key={i}
              onClick={() => handleOpen(video)}
              className="cursor-pointer hover:scale-105 hover:text-yellow-400 transition duration-300 shadow-xl rounded-xl overflow-hidden custom-shadow3 "
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-60 object-cover"
              />
              <div className=" p-4 py-5">
                <h3 className=" font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{selectedVideo?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedVideo && (
            <iframe
              width="100%"
              height="400"
              src={selectedVideo.embedUrl}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}
