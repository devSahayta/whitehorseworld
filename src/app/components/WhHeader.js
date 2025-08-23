/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useScroll, useMotionValueEvent } from "motion/react";
import "../styles/header.css";
import { useState } from "react";
import { useMediaQuery } from "rsuite";
import Hamburger from "hamburger-react";
import { motion } from "motion/react";
import Image from "next/image";

const WhHeader = ({ pageTheme = "black" }) => {
  const { scrollY } = useScroll(); // Framer Motion scroll tracking
  const [direction, setDirection] = useState("Idle");
  const [lastScroll, setLastScroll] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScroll) {
      setDirection("Down");
    } else if (latest < lastScroll) {
      setDirection("Up");
    }
    setLastScroll(latest);
  });

  return (
    <>
      <header
        className={` h-sec1-header-container w-full z-50 ${pageTheme == "black" ? "bg-black" : "bg-gray-100"} shadow-md fixed top-0 `}
      >
        <div
          className={` header-container ${lastScroll < 100 ? "flex-col justify-center" : "flex-row justify-between"} `}
        >
          <section className="h-sec2-container">
            <a href="/" className="imageWrapper">
              <img
                src="/images/whem-logo-all_small.png"
                alt="company-logo"
              ></img>
            </a>
            <div className={`menu-toggle  ${isMobile ? "" : "dis-none"}`}>
              <Hamburger
                toggled={menuOpen}
                toggle={setMenuOpen}
                size={24}
                duration={0.5}
                color={`${pageTheme == "black" ? "#fff" : "#000"}`}
              />
            </div>
          </section>

          {/* mobile header */}
          <motion.nav
            initial={{ opacity: 0, y: -115 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className={` n-mobile-nav-container flex flex-col border-2 border-black w-full justify-center items-center fixed left-0 bg-black z-50 ${menuOpen ? " top-0" : " top-[-612px]"} `}
          >
            <section className="h-sec2-container mt-5 mb-16 px-9 ">
              <a href="/" className="imageWrapper">
                <img
                  src="/images/whem-logo-all_small.png"
                  alt="company-logo"
                ></img>
              </a>
              <div className={`menu-toggle  ${isMobile ? "" : "dis-none"}`}>
                <Hamburger
                  toggled={menuOpen}
                  toggle={setMenuOpen}
                  size={24}
                  duration={0.5}
                  color="#fff"
                />
              </div>
            </section>

            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              href="/about-us"
              className=" h-link "
            >
              About
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              href="/services"
              className=" h-link "
            >
              Services
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              href="/portfolio"
              className=" h-link "
            >
              Portfolio
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
              href="/taran-signature-wedding"
              className=" h-link "
            >
              Taran Signature Wedding
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.7 }}
              href="/contact"
              className=" h-link "
            >
              Contact
            </motion.a>
          </motion.nav>
          <nav
            className={` h-down-link-container ${isMobile ? "dis-none-imp" : ""}  `}
          >
            <a
              href="/about-us"
              className={` h-link hover:!text-yellow-400 ${pageTheme == "black" ? "!text-white" : "!text-black"} `}
            >
              About
            </a>
            <a
              href="/services"
              className={` h-link hover:!text-yellow-400 ${pageTheme == "black" ? "!text-white" : "!text-black"} `}
            >
              Services
            </a>
            <a
              href="/portfolio"
              className={` h-link hover:!text-yellow-400 ${pageTheme == "black" ? "!text-white" : "!text-black"} `}
            >
              Portfolio
            </a>
            <a
              href="/taran-signature-wedding"
              className={` h-link hover:!text-yellow-400 ${pageTheme == "black" ? "!text-white" : "!text-black"} `}
            >
              Taran Signature Wedding
            </a>
            <a
              href="/contact"
              className={` h-link hover:!text-yellow-400 ${pageTheme == "black" ? "!text-white" : "!text-black"} `}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className=" pt-32 md:pt-44 "></div>
    </>
  );
};

export default WhHeader;
