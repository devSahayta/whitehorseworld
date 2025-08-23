import Slider from "react-slick";
import { Card, Avatar } from "rsuite";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Anjali & Rohan",
    quote: "Absolutely magical! Every detail was perfect.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Priya & Kunal",
    quote:
      "White Horse World made our dream wedding a reality. Truly the best!",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Neha & Arjun",
    quote: "From decor to coordination, everything was flawless.",
    photo: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Simran & Akash",
    quote: "We couldn’t have asked for a better wedding planner!",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} z-10 left-[-30px]`} onClick={onClick}>
      <FaChevronLeft className="text-2xl text-gray-700 hover:text-pink-500" />
    </div>
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} z-10 right-[-30px]`} onClick={onClick}>
      <FaChevronRight className="text-2xl text-gray-700 hover:text-pink-500" />
    </div>
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

export default function WTestimonialsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-10 text-black ">
        What Our Clients Say
      </h2>
      <div className="max-w-2xl mx-auto">
        <Slider {...sliderSettings}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              className="px-2"
            >
              <Card className="p-8 shadow-md bg-black rounded-2xl">
                <Card.Body className="flex flex-col items-center">
                  <Avatar
                    src={t.photo}
                    circle
                    size="lg"
                    className="mb-4 shadow-md"
                    alt={`${t.name} photo`}
                  />
                  <p className="italic text-xl text-gray-800 mb-4">
                    “{t.quote}”
                  </p>
                  <p className="font-semibold text-pink-700 mb-2">— {t.name}</p>
                  <div className="flex space-x-1 justify-center">
                    {[...Array(5)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 2,
                          delay: idx * 0.2, // little delay between stars for twinkling
                        }}
                      >
                        <FaStar className="text-yellow-400 text-lg" />
                      </motion.div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
