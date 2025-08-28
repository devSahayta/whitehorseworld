// "use client";

// import Image from "next/image";
// import {
//   FaInstagram,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaFacebookF,
//   FaYoutube,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const WhFooter = ({ pageTheme = "black" }) => {
//   return (
//     <footer
//       className={` ${pageTheme == "black" ? "bg-black text-white" : "bg-gray-100 text-black"} py-10 `}
//     >
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//         {/* Brand / Logo */}
//         <div className="flex flex-col items-center md:items-start">
//           <Image
//             src="/images/whem-logo-all.png"
//             alt="White Horse World Logo"
//             width={150}
//             height={60}
//             className="mb-3"
//           />
//           <p
//             className={` text-sm ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"} `}
//           >
//             Event & Experiential Marketing Experts
//           </p>
//         </div>

//         {/* Navigation */}
//         <div>
//           <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
//           <ul
//             className={` space-y-2 ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"} `}
//           >
//             <li>
//               <a
//                 href="#work"
//                 className={` ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} transition `}
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className={` ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} transition `}
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className={` ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} transition `}
//               >
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className={` ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} transition `}
//               >
//                 Portfolio
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Socials */}
//         <div>
//           <h2 className="font-semibold text-lg mb-4">Connect with Us</h2>
//           <div
//             className={` flex justify-center md:justify-start space-x-4 text-xl ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"}`}
//           >
//             <a
//               href="mailto:info@whitehorseworld.com"
//               className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-400"} `}
//             >
//               <FaEnvelope />
//             </a>
//             <a
//               href="https://www.instagram.com/whitehorseevent"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-pink-500"} `}
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://linkedin.com/company/whitehorseworld"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-blue-400"} `}
//             >
//               <FaLinkedinIn />
//             </a>
//             <a
//               href="https://www.facebook.com/whitehorseevent"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-blue-600"} `}
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://twitter.com/whitehorseevent"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-black"} `}
//             >
//               <FaXTwitter />
//             </a>
//             <a
//               href="https://www.youtube.com/channel/UCPhlg1vrtGLbqbQe2_WdvCQ"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={` hover:scale-150 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-red-500"} `}
//             >
//               <FaYoutube />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className=" text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6 ">
//         © {new Date().getFullYear()} White Horse World. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default WhFooter;

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
      className={`${pageTheme == "black" ? "bg-black text-white" : "bg-gray-100 text-black"} py-12`}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / Logo */}
        <div className="flex flex-col">
          <Image
            src="/images/whem-logo-all.png"
            alt="White Horse World Logo"
            width={150}
            height={60}
            className="mb-4"
          />
          <p
            className={`text-sm ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"} mb-6`}
          >
            Event & Experiential Marketing Experts
          </p>
          <div
            className={`flex space-x-4 text-xl ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"}`}
          >
            <a
              href="mailto:info@whitehorseworld.com"
              className={`hover:scale-125 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"}`}
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/whitehorseevent"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-125 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-pink-500"}`}
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/whitehorseworld"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-125 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-blue-400"}`}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/whitehorseevent"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-125 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-blue-600"}`}
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-5 text-gold-500 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-500">
            QUICK LINKS
          </h2>
          <ul
            className={`space-y-3 ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"}`}
          >
            <li>
              <a
                href="./"
                className={`block transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"} hover:pl-2`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className={`block transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"} hover:pl-2`}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"} hover:pl-2`}
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#weddings"
                className={`block transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"} hover:pl-2`}
              >
                Weddings
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className={`block transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"} hover:pl-2`}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#destinations"
                className={`block transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"} hover:pl-2`}
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className={`block transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"} hover:pl-2`}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className={`block transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"} hover:pl-2`}
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#community"
                className={`block transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-yellow-500"} hover:pl-2`}
              >
                Community
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="font-semibold text-lg mb-5 text-gold-500 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-500">
            CONTACT US
          </h2>
          <div
            className={`space-y-3 ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"}`}
          >
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>123 Wedding Avenue, Event City, EC 12345</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+1 (234) 567-8901</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@weddingevents.com</span>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h2 className="font-semibold text-lg mb-5 text-gold-500 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-500">
            ABOUT US
          </h2>
          <p
            className={`text-sm ${pageTheme == "black" ? "text-gray-400" : "text-gray-600"} mb-6`}
          >
            We create unforgettable wedding experiences with attention to every
            detail. Our team of passionate event planners ensures your special
            day is exactly as you've always dreamed.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/whitehorseevent"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-125 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-black"}`}
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPhlg1vrtGLbqbQe2_WdvCQ"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-125 transition ${pageTheme == "black" ? "hover:text-white" : "hover:text-red-500"}`}
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`text-center text-sm ${pageTheme == "black" ? "text-gray-500" : "text-gray-600"} mt-10 pt-6 border-t ${pageTheme == "black" ? "border-gray-800" : "border-gray-300"}`}
      >
        © {new Date().getFullYear()} White Horse World. All rights reserved.
      </div>
    </footer>
  );
};

export default WhFooter;
