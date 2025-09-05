// "use client";
// import * as motion from "motion/react-client";
// import { Divider } from "rsuite";
// import { FaDiamond } from "react-icons/fa6";

// export default function WeddingPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       {/* Wedding Types Section */}
//       <div className="text-center py-14">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
//           className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2"
//         >
//           Wedding Types
//         </motion.h2>
//         <motion.h5
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
//           className="text-gray-600"
//         >
//           Choose from our signature wedding styles crafted to perfection
//         </motion.h5>
//         <Divider
//           className="w-about-divider text-yellow-400"
//           style={{
//             width: "20%",
//             margin: "auto",
//             marginBottom: "20px",
//             marginTop: "15px",
//           }}
//         >
//           <FaDiamond size={10} /> <FaDiamond size={20} className="mx-1" />{" "}
//           <FaDiamond size={10} />
//         </Divider>
//       </div>

//       {/* Wedding Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-45 mb-45">
//         {weddings.map(({ title, img }, i) => (
//           <Card i={i} title={title} img={img} key={i} />
//         ))}
//       </div>

//       {/* Destinations Section */}
//       <div className="text-center py-14">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
//           className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2"
//         >
//           Destinations
//         </motion.h2>
//         <motion.h5
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
//           className="text-gray-600"
//         >
//           Discover exotic locations for your dream wedding
//         </motion.h5>
//         <Divider
//           className="w-about-divider text-yellow-400"
//           style={{
//             width: "25%",
//             margin: "auto",
//             marginBottom: "40px",
//             marginTop: "20px",
//           }}
//         >
//           <FaDiamond size={10} /> <FaDiamond size={20} className="mx-1" />{" "}
//           <FaDiamond size={10} />
//         </Divider>
//       </div>

//       {/* Destination Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {destinations.map(({ title, img, hueA, hueB }, i) => (
//           <Card
//             i={i + 10}
//             title={title}
//             img={img}
//             hueA={hueA}
//             hueB={hueB}
//             key={i}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Card({ title, img, hueA, hueB, i }) {
//   const background = `linear-gradient(306deg, hsl(${hueA},100%,50%), hsl(${hueB},100%,50%))`;

//   return (
//     <motion.div
//       className={`relative card-container-${i}`}
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ amount: 0.6, once: false }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background,
//           clipPath: `path("M 0 203.5 C 0 192.454 8.995 185.101 20 183.5 L 460 119.5 C 470.085 118.033 480 128.454 480 139.5 L 500 330 C 500 341.046 491.046 350 480 350 L 20 350 C 8.954 350 0 341.046 0 330 Z")`,
//         }}
//       />
//       <motion.div
//         variants={cardVariants}
//         className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg"
//       >
//         <img
//           src={img}
//           alt={title}
//           className="w-full h-full object-cover absolute z-1"
//         />
//         <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-2 rounded-lg z-10 text-center">
//           <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// const cardVariants = {
//   offscreen: { y: 200 },
//   onscreen: {
//     y: 40,
//     rotate: -6,
//     transition: { type: "spring", bounce: 0.4, duration: 0.8 },
//   },
// };

// const weddings = [
//   {
//     title: "Destination Wedding",
//     img: "/images/gallery/01.jpg",
//     hueA: 340,
//     hueB: 10,
//   },
//   { title: "Royal Wedding", img: "/images/gallery/02.jpg", hueA: 20, hueB: 40 },
//   {
//     title: "Beach Wedding",
//     img: "/images/gallery/gallery1.jpg",
//     hueA: 60,
//     hueB: 90,
//   },
//   {
//     title: "Intimate Wedding",
//     img: "https://source.unsplash.com/600x800/?intimate,wedding",
//     hueA: 100,
//     hueB: 140,
//   },
// ];

// const destinations = [
//   {
//     title: "Jaipur",
//     img: "https://source.unsplash.com/600x800/?jaipur,palace",
//     hueA: 200,
//     hueB: 240,
//   },
//   {
//     title: "Goa",
//     img: "https://source.unsplash.com/600x800/?goa,beach",
//     hueA: 260,
//     hueB: 290,
//   },
//   {
//     title: "Udaipur",
//     img: "https://source.unsplash.com/600x800/?udaipur,lake",
//     hueA: 300,
//     hueB: 340,
//   },
//   {
//     title: "Kerala",
//     img: "https://source.unsplash.com/600x800/?kerala,backwater",
//     hueA: 120,
//     hueB: 160,
//   },
// ];

// second effects

"use client";
import * as motion from "motion/react-client";
import { Divider } from "rsuite";
import { FaDiamond } from "react-icons/fa6";
import WhHeader from "../components/WhHeader";
import WhFooter from "../components/WhFooter";
// import WGallerySection from "../components/wedding/WGallerySection";
// import VideoGallery from "../components/wedding/VideoGallery";
// import WeddingVideos from "../components/wedding/WeddingVideos";
import HomeBanner from "../portfolio/page";

export default function WeddingPage() {
  return (
    <>
      <WhHeader />

      <HomeBanner />
      <div className="relative w-full  bg-white  mx-auto px-12 py-14">
        {/* Wedding Types Section */}
        <SectionHeader
          title="Wedding Genres"
          subtitle="Choose from our signature wedding styles crafted to perfection"
        />

        {/* Wedding Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {weddings.map(({ title, img }, i) => (
            <Card i={i} title={title} img={img} key={i} />
          ))}
        </div>

        {/* <VideoGallery /> */}

        {/* <WGallerySection /> */}

        {/* <WeddingVideos /> */}

        {/* Destinations Section */}
        <SectionHeader
          title="Destinations"
          subtitle="Discover exotic locations for your dream wedding"
        />

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
          {destinations.map(({ title, img, hueA, hueB }, i) => (
            <Card
              i={i + 10}
              title={title}
              img={img}
              hueA={hueA}
              hueB={hueB}
              key={i}
            />
          ))}
        </div>
      </div>

      <WhFooter />
    </>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center py-14">
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2"
      >
        {title}
      </motion.h2>
      <motion.h5
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-gray-600"
      >
        {subtitle}
      </motion.h5>
      <Divider
        className="w-about-divider text-yellow-400"
        style={{
          width: "22%",
          margin: "auto",
          marginBottom: "35px",
          marginTop: "20px",
        }}
      >
        <FaDiamond size={10} /> <FaDiamond size={20} className="mx-1" />{" "}
        <FaDiamond size={10} />
      </Divider>
    </div>
  );
}

function Card({ title, img, hueA, hueB, i }) {
  const background = `linear-gradient(306deg, hsl(${hueA},100%,55%), hsl(${hueB},100%,55%))`;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: 0.9,
        delay: i * 0.1,
      }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background,
          clipPath: `path("M 0 203.5 C 0 192.454 8.995 185.101 20 183.5 L 460 119.5 C 470.085 118.033 480 128.454 480 139.5 L 500 330 C 500 341.046 491.046 350 480 350 L 20 350 C 8.954 350 0 341.046 0 330 Z")`,
          zIndex: 1,
        }}
      />

      <motion.div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-xl z-10">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover absolute"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-3 rounded-lg text-center"
        >
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ================== Data ================== */
const weddings = [
  {
    title: "Destination Wedding",
    img: "/images/gallery/13.jpg",
    hueA: 340,
    hueB: 10,
  },
  { title: "Royal Wedding", img: "/images/gallery/11.png", hueA: 20, hueB: 40 },
  {
    title: "Beach Wedding",
    img: "/images/gallery/gallery1.jpg",
    hueA: 60,
    hueB: 90,
  },
  {
    title: "Intimate Wedding",
    img: "/images/tsw-images/tsw-page/01.jpg",
    hueA: 100,
    hueB: 140,
  },
];

const destinations = [
  {
    title: "Jaipur",
    img: "https://source.unsplash.com/600x800/?jaipur,palace",
    hueA: 200,
    hueB: 240,
  },
  {
    title: "Goa",
    img: "https://source.unsplash.com/600x800/?goa,beach",
    hueA: 260,
    hueB: 290,
  },
  {
    title: "Udaipur",
    img: "https://source.unsplash.com/600x800/?udaipur,lake",
    hueA: 300,
    hueB: 340,
  },
  {
    title: "Kerala",
    img: "https://source.unsplash.com/600x800/?kerala,backwater",
    hueA: 120,
    hueB: 160,
  },
];
