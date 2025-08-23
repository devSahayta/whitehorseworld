"use client"; // Only if using Next.js App Router

import { useState } from "react";
import { Button, Divider, Modal } from "rsuite";
import WhHeader from "../components/WhHeader";
import { FaDiamond } from "react-icons/fa6";
import WGallerySection2 from "../components/wedding/WGallerySection2";
import VideoGallery from "../components/wedding/VideoGallery";
import ArtistsSection from "../components/portfolio/ArtistsSection";

export default function PortfolioPage() {
  return (
    <>
      <WhHeader />

      <VideoGallery />

      <ArtistsSection />

      <div className="p-6 bg-black text-white py-14 ">
        <h1 className="text-3xl font-bold text-center text-yellow-400 ">
          Wedding Images
        </h1>
        <Divider
          className=" w-about-divider text-yellow-400 "
          style={{
            width: "25%",
            margin: "auto",
            marginTop: "15px",
            marginBottom: "26px",
          }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>

        <WGallerySection2 />
      </div>
    </>
  );
}
