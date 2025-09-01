// "use client"; // Only if using Next.js App Router

// import WhHeader from "../components/WhHeader";
// import WGallerySection from "../components/wedding/WGallerySection";
// import VideoGallery from "../components/wedding/VideoGallery";
// import WeddingVideos from "../components/wedding/WeddingVideos";

// export default function PortfolioPage() {
//   return (
//     <>
//       <WhHeader />

//       <VideoGallery />

//       <WGallerySection />

//       <WeddingVideos />
//     </>
//   );
// }

"use client";
import { motion } from "framer-motion";
import WhHeader from "../components/WhHeader";
import WhFooter from "../components/WhFooter";

const projects = [
  {
    id: 1,
    title: "LIVING ROOM",
    subtitle: "TEST DESIGN KGG",
    image: "/images/gallery/1.png",
    side: "left",
  },
  {
    id: 2,
    title: "FLORIST SHOP",
    subtitle: "Mini Retail Store",
    image: "/images/gallery/2.png",
    side: "right",
  },
  {
    id: 3,
    title: "MASSIMO DUTTI",
    subtitle: "Retail Store",
    image: "/images/gallery/4.jpg",
    side: "left",
  },
  {
    id: 4,
    title: "OFFICE",
    subtitle: "Public Space",
    image: "/images/gallery/5.jpg",
    side: "right",
  },
  {
    id: 5,
    title: "MR.R's LIVING ROOM",
    subtitle: "Residential",
    image: "/images/gallery/5.jpg",
    side: "left",
  },
];

export default function PortfolioTimeline() {
  return (
    <>
      <WhHeader />
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        {/* Header */}

        <div className="flex items-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1 }}
            className="h-12 bg-red-800 rounded-r-full flex items-center"
          >
            <h2 className="text-3xl text-white font-bold ml-6">Portfolio.</h2>
          </motion.div>
          <span className="ml-4 text-lg tracking-widest h-9 bg-red-800  ">
            {" "}
            Of WhiteHorse
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-400 transform -translate-x-1/2"></div>

          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              className={`mb-20 flex w-full ${
                p.side === "left" ? "justify-start pr-10" : "justify-end pl-10"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className={`w-1/2 flex ${
                  p.side === "left"
                    ? "justify-end text-right"
                    : "justify-start text-left"
                }`}
              >
                <div className="max-w-sm">
                  {/* Circle Number */}
                  <div className="flex items-center mb-4">
                    {p.side === "left" && (
                      <span className="flex-1 border-t border-gray-400"></span>
                    )}
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mx-4">
                      {p.id}
                    </div>
                    {p.side === "right" && (
                      <span className="flex-1 border-t border-gray-400"></span>
                    )}
                  </div>

                  {/* Image */}
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-70 object-cover rounded-lg shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Text */}
                  <h4 className="text-gray-500 text-sm mt-4">{p.subtitle}</h4>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WhFooter />
    </>
  );
}
