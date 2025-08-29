"use client"; // Only if using Next.js App Router

import WhHeader from "../components/WhHeader";
import WGallerySection from "../components/wedding/WGallerySection";
import VideoGallery from "../components/wedding/VideoGallery";
import WeddingVideos from "../components/wedding/WeddingVideos";

export default function PortfolioPage() {
  return (
    <>
      <WhHeader />

      <VideoGallery />

      <WGallerySection />

      <WeddingVideos />
    </>
  );
}
