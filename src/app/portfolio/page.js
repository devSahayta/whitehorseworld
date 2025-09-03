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

// "use client";
// import { motion } from "framer-motion";
// import WhHeader from "../components/WhHeader";
// import WhFooter from "../components/WhFooter";
// import HomeBanner from "../components/home/HomeBanner";

// const projects = [
//   {
//     id: 1,
//     title: "LIVING ROOM",
//     subtitle: "TEST DESIGN KGG",
//     image: "/images/gallery/1.png",
//     side: "left",
//   },
//   {
//     id: 2,
//     title: "FLORIST SHOP",
//     subtitle: "Mini Retail Store",
//     image: "/images/gallery/2.png",
//     side: "right",
//   },
//   {
//     id: 3,
//     title: "MASSIMO DUTTI",
//     subtitle: "Retail Store",
//     image: "/images/gallery/4.jpg",
//     side: "left",
//   },
//   {
//     id: 4,
//     title: "OFFICE",
//     subtitle: "Public Space",
//     image: "/images/gallery/5.jpg",
//     side: "right",
//   },
//   {
//     id: 5,
//     title: "MR.R's LIVING ROOM",
//     subtitle: "Residential",
//     image: "/images/gallery/5.jpg",
//     side: "left",
//   },
// ];

// export default function PortfolioTimeline() {
//   return (
//     <>
//       <WhHeader />
//       <section className="bg-gray-100 py-16 px-6 md:px-20">
//         {/* Header */}

//         <div className="flex items-center mb-16">
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "200px" }}
//             transition={{ duration: 1 }}
//             className="h-12 bg-red-800 rounded-r-full flex items-center"
//           >
//             <h2 className="text-3xl text-white font-bold ml-6">Portfolio.</h2>
//           </motion.div>
//           <span className="ml-4 text-lg tracking-widest h-9 bg-red-800  ">
//             {" "}
//             Of WhiteHorse
//           </span>
//         </div>

//         <>{HomeBanner()}</>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Center Line */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-400 transform -translate-x-1/2"></div>

//           {projects.map((p, index) => (
//             <motion.div
//               key={p.id}
//               className={`mb-20 flex w-full ${
//                 p.side === "left" ? "justify-start pr-10" : "justify-end pl-10"
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <div
//                 className={`w-1/2 flex ${
//                   p.side === "left"
//                     ? "justify-end text-right"
//                     : "justify-start text-left"
//                 }`}
//               >
//                 <div className="max-w-sm">
//                   {/* Circle Number */}
//                   <div className="flex items-center mb-4">
//                     {p.side === "left" && (
//                       <span className="flex-1 border-t border-gray-400"></span>
//                     )}
//                     <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mx-4">
//                       {p.id}
//                     </div>
//                     {p.side === "right" && (
//                       <span className="flex-1 border-t border-gray-400"></span>
//                     )}
//                   </div>

//                   {/* Image */}
//                   <motion.img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-70 object-cover rounded-lg shadow-lg cursor-pointer"
//                     whileHover={{ scale: 1.05 }}
//                   />

//                   {/* Text */}
//                   <h4 className="text-gray-500 text-sm mt-4">{p.subtitle}</h4>
//                   <h3 className="text-xl font-bold">{p.title}</h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <WhFooter />
//     </>
//   );
// }

// --------------------------------------------------Import-HOmebanner-------------------------------------------------------

"use client";
import { motion } from "framer-motion";
import WhHeader from "../components/WhHeader";
import WhFooter from "../components/WhFooter";

const images = [
  "/images/1.JPG",
  "/images/4.png",
  "/images/5.JPG",
  "/images/7.jpg",
  "/images/3.JPG",
  "/images/11.jpg",
  "/images/p1.JPG",
  "/images/p2.JPG",
  "/images/p3.JPG",
  "/images/p4.JPG",
  "/images/p19.JPG",
  "/images/p6.JPG",
  "/images/p7.JPG",
  "/images/p8.JPG",
  "/images/p9.JPG",
  "/images/p10.JPG",
  "/images/p11.JPG",
  "/images/p12.JPG",
  "/images/p13.JPG",
  "/images/p14.JPG",
  "/images/p15.JPG",
  "/images/p16.JPG",
  "/images/p17.JPG",
  "/images/P18.jpg",
  "/images/p19.jpg",
  "/images/p20.jpg",
  "/images/p21.jpg",
  "/images/p22.jpg",
  "/images/p23.JPG",
  "/images/p24.jpg",
  "/images/p25.jpg",
  "/images/p26.jpg",
  "/images/p27.jpg",
  "/images/p28.jpg",
  "/images/p29.jpg",
  "/images/p30.jpg",
  "/images/p31.jpg",
  "/images/p32.jpg",
  "/images/p33.jpg",

  "/images/p34.jpg",
  "/images/p35.jpg",
  "/images/p36.jpg",
  "/images/p37.jpg",
  "/images/p38.jpg",
  "/images/p39.jpg",
];

export default function HomeBanner() {
  return (
    <>
      <WhHeader />

      <section className="relative w-full min-h-screen bg-white px-4 py-10">
        <div className="flex items-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1 }}
            className="h-12 bg-red-800 rounded-r-full flex items-center"
          >
            <h2 className="text-3xl text-white font-bold ml-6">Portfolio.</h2>
          </motion.div>
          {/* <span className="ml-4 text-lg tracking-widest h-9 bg-red-800  ">
            {" "}
            Of WhiteHorse
          </span> */}
        </div>

        {/* ----------------------------------------------------------------------------------- */}
        {/* Animated headline */}
        {/* <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Explore Our Moments ✨
        </h1>
        <p className="text-gray-500 mt-2">
          A glimpse into our unforgettable events
        </p>
      </motion.div> */}

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className=" text-2xl md:text-4xl text-center font-bold text-yellow-400 mb-2 "
        >
          Capturing the Memories✨
        </motion.h2>
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className=" text-1xl text-center"
        >
          A glimpse into our unforgettable events
        </motion.h5>

        {/* Instagram-style grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold"
              >
                ❤️ 120 · 💬 15
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <WhFooter />
    </>
  );
}
