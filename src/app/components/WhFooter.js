"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const WhFooter = ({ pageTheme = "black" }) => {
  return (
    <footer
      className={` ${pageTheme == "black" ? "bg-black text-white" : "bg-gray-100 text-black"} py-10 `}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/whem-logo-all.png"
            alt="White Horse World Logo"
            width={150}
            height={60}
            className="mb-3"
          />
          <p
            className={` text-sm ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"} `}
          >
            Event & Experiential Marketing Experts
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul
            className={` space-y-2 ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"} `}
          >
            <li>
              <a
                href="#work"
                className={` ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} transition `}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={` ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} transition `}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={` ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} transition `}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={` ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} transition `}
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Connect with Us</h2>
          <div
            className={` flex justify-center md:justify-start space-x-4 text-xl ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"}`}
          >
            <a
              href="mailto:info@whitehorseworld.com"
              className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} `}
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/whitehorseevent"
              target="_blank"
              rel="noopener noreferrer"
              className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-pink-500"} `}
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/whitehorseworld"
              target="_blank"
              rel="noopener noreferrer"
              className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-blue-400"} `}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/whitehorseevent"
              target="_blank"
              rel="noopener noreferrer"
              className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-blue-600"} `}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/whitehorseevent"
              target="_blank"
              rel="noopener noreferrer"
              className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-black"} `}
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPhlg1vrtGLbqbQe2_WdvCQ"
              target="_blank"
              rel="noopener noreferrer"
              className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-red-500"} `}
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className=" text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6 ">
        © {new Date().getFullYear()} White Horse World. All rights reserved.
      </div>
    </footer>
  );
};

export default WhFooter;
