/* eslint-disable @next/next/no-img-element */
"use client";

import "../styles/wedding.css";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";
import { motion } from "motion/react";
import Image from "next/image";
import WServiceSection from "../components/wedding/WServiceSection";
import WhHeader from "../components/WhHeader";

export default function PlanWeddingPage() {
  return (
    <div className=" bg-gray-100 ">
      <WhHeader pageTheme="white" />

      <section className=" relative w-full h-[950px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0001.jpg"
          alt="section1"
          fill
        />
      </section>

      {/* <section className=" relative w-full h-[1400px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0002.jpg"
          alt="section1"
          fill
        />
      </section>

      <section className=" relative w-full h-[1200px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0003.jpg"
          alt="section1"
          fill
        />
      </section>

      <section className=" relative w-full h-[1200px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0004.jpg"
          alt="section1"
          fill
        />
      </section>

      <section className="w-full max-w-7xl px-4 py-20 text-center bg-blue-50 ">
        <h2 className="text-4xl font-bold text-yellow-400 mb-5 ">
          Destination Wedding Venues
        </h2>
        <Divider
          className=" w-about-divider text-yellow-400 "
          style={{ width: "25%", margin: "auto", marginBottom: "76px" }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>
        <WServiceSection />
      </section>

      <section className=" relative w-full h-[1200px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0005.jpg"
          alt="section1"
          fill
        />
      </section>

      <section className=" relative w-full h-[1400px]  ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0006.jpg"
          alt="section1"
          fill
        />
      </section> */}

      {/* custom section */}

      {/* second section */}
      <section className=" bg-white text-amber-800 border-t border-b border-amber-800 py-20 px-10 sm:px-20 ">
        <Divider
          className=" w-about-divider text-amber-800 "
          style={{
            width: "25%",
            margin: "auto",
            marginTop: "55px",
            marginBottom: "36px",
          }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>
        <p className=" font-semibold text-3xl text-center px-5 ">
          Taran Signature Wedding endeavours to make every wedding into an
          everlasting dream. Wedding planning extraordinaire greets you here!
        </p>
        <Divider
          className=" w-about-divider text-amber-800 "
          style={{
            width: "25%",
            margin: "auto",
            marginTop: "36px",
            marginBottom: "76px",
          }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>

        <div className=" relative w-full h-[700px] ">
          <Image
            src="/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0002 1.jpg"
            alt="section1"
            fill
          />
        </div>

        <div>
          <h2 className=" text-4xl md:text-5xl font-bold tracking-tight mb-9 text-center mt-20 ">
            Wedding Planning
          </h2>
          <Divider
            className=" w-about-divider text-amber-800 "
            style={{
              width: "25%",
              margin: "auto",
              marginTop: "15px",
              marginBottom: "36px",
            }}
          >
            <FaDiamond size={10} />{" "}
            <FaDiamond size={20} className=" ml-1 mr-1 " />
            <FaDiamond size={10} />
          </Divider>
          <p className=" text-2xl leading-relaxed text-black ">
            Our wedding planning services are designed to make special day into
            a euphoric extravaganza. From personalized invites that will charm
            you guests to entertainment options that will add a zing to you
            wedding day. Our ace wedding planners in Delhi will offer you and
            your loved ones memories of a lifetime as you say &apos;I Do&apos;
            in a resplendent setting.
          </p>
        </div>
      </section>

      {/* third section */}
      <section className=" bg-white text-amber-800 border-t border-b border-amber-800 py-20 px-20 ">
        <div className=" relative w-full h-[700px] ">
          <Image
            src="/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0003 1.jpg"
            alt="section1"
            fill
          />
        </div>

        <div>
          <h2 className=" text-4xl md:text-5xl font-bold text-center tracking-tight mb-9 mt-11 ">
            Wedding Decoration
          </h2>
          <Divider
            className=" w-about-divider text-amber-800 "
            style={{
              width: "25%",
              margin: "auto",
              marginTop: "15px",
              marginBottom: "36px",
            }}
          >
            <FaDiamond size={10} />{" "}
            <FaDiamond size={20} className=" ml-1 mr-1 " />
            <FaDiamond size={10} />
          </Divider>
          <p className=" text-2xl leading-relaxed text-black ">
            Owing to our traditional values and the social signi cance attached,
            weddings in India beckon for a celebration replete in beauty, At
            TARAN SIGNATURE Weddings, we understand your aesthetic needs and
            make your wedding ceremony a resplendent one with our ace oral deco
            rations and other thematic decorations. From a contemporary to a
            traditional ceremony, from the day your family bows in front of the
            deity on ‘Mata ki Chowki’ to the reception, our wedding decorators
            will ensure that the celebrations blooms with beauty.
          </p>
        </div>

        <div className=" w-full mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {[
            "/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0003 2.jpg",
            "/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0003 3.jpg",
            "/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0003 4.jpg",
          ].map((data, index) => (
            <div key={index} className="imageWrapper">
              <img src={data} alt={`WEDDING CATALOGUE ${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* fourth section */}
      <section className=" bg-yellow-600 text-black border-t border-b border-amber-800 py-20 px-10 sm:px-20 ">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <section>
            {[
              "/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0003 2.jpg",
              "/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0003 3.jpg",
              "/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0003 4.jpg",
            ].map((data, index) => (
              <div key={index} className="imageWrapper border-2 border-white">
                <img src={data} alt={`WEDDING CATALOGUE ${index}`} />
              </div>
            ))}
          </section>

          <section>
            <h2 className=" text-4xl md:text-5xl font-bold text-center tracking-tight mb-9 mt-7 text-white ">
              Wedding Planner
            </h2>
            <Divider
              className=" w-about-divider text-amber-800 "
              style={{
                width: "25%",
                margin: "auto",
                marginTop: "15px",
                marginBottom: "36px",
              }}
            >
              <FaDiamond size={10} />{" "}
              <FaDiamond size={20} className=" ml-1 mr-1 " />
              <FaDiamond size={10} />
            </Divider>
            <p className=" text-2xl leading-relaxed ">
              In the current wedding scenario in India, wedding has become a
              glamorous affair with grand budgets and picturesque wedding
              venues. Every one aspires to make their wedding a living legend
              and our wedding planner helps the couples providing all the
              necessary assistance for materializing their dream wedding in
              India. Taran Signature Weddings provides the most over-whelming
              hospitality and assistance to its clientele as they plan their
              dream wedding in India.
            </p>
            <p className=" text-2xl leading-relaxed mt-7 ">
              At Taran Signature Weddings a team of efficient, trained and
              dedicated profession als work most meticulously to make your
              wedding a success. Our wedding planner keeps inventing new ways
              and ideas for providing a unique wedding experience to all our
              clients giving foremost importance to their inputs and desires.
              One can choose either between a beach, adventure, palace wedding
              or suggest a unique theme and our team takes care of all the
              ingredients making your wedding the most cherished memory for
              life.
            </p>
          </section>
        </div>
      </section>

      {/* custom service */}
      <section className="w-full max-w-7xl px-4 py-20 text-center bg-blue-50 ">
        <h2 className="text-4xl font-bold text-yellow-400 mb-5 ">
          Destination Wedding Venues
        </h2>
        <Divider
          className=" w-about-divider text-yellow-400 "
          style={{ width: "25%", margin: "auto", marginBottom: "76px" }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>
        <WServiceSection />
      </section>

      <section className=" bg-white text-black border-t border-b border-amber-800 py-20 px-10 sm:px-20 ">
        <h2 className=" text-4xl md:text-5xl font-bold text-center tracking-tight mb-9 mt-7 text-amber-800 ">
          Providing Services
        </h2>
        <Divider
          className=" w-about-divider text-amber-800 "
          style={{
            width: "25%",
            margin: "auto",
            marginTop: "15px",
            marginBottom: "36px",
          }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>
        <p className=" text-2xl leading-relaxed ">
          The wedding services provided by Taran Signature Weddings are :
        </p>
        <ul className=" mt-7 list-disc pl-5 [&>li]:mb-2 ">
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold ">Wedding Venues:</span> the
            selection of a perfect venue for your dream wedding ranks foremost
            in the scheme of things while planning a wedding. The wedding venue
            is one of the most significant factors of a wedding as it provides
            the base for an authentic theme wedding. Hence, be it the scenic
            environs of Kerala, royal settings of Rajasthan or picturesque
            beaches of Goa our wedding planner at Exotic Indian Wedding shall
            book the most desired venue for your wedding.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Wedding Trousseau:</span> Whether
            you want a traditional trousseau or a simple and casual one with a
            Western formal look our team with the help of professional designers
            shall provide the finest wedding dress.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Wedding Trousseau:</span> Whether
            you want a traditional trousseau or a simple and casual one with a
            Western formal look our team with the help of professional designers
            shall provide the finest wedding dress.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Wedding Theme:</span> weddings
            with a theme are the most modern way of celebrating the illustrious
            event. According to your interest and liking a perfect theme shall
            be selected after consulting the couple. Themes like royal theme
            wedding, fairytale theme or any color specific theme shall give a
            unique approach to your wedding.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Accommodation:</span> Taran
            Signature Weddings will find all your answers regarding
            accommodation needs with a choice of 5 star hotels to other humble
            lodgings.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Transportation:</span> Taran
            Signature Weddings will arrange all your transportation, right from
            receiving you from the airport, all your transport during your stay;
            everything will be taken care of. For those looking for royal rides
            for their grand entrance our team shall provide Limousine, this
            vehicle signifies aristocracy, nobility. We at Exotic Indian Wedding
            will arrange it for you the same with floral decoration.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Wedding Priest:</span> Priest or
            Pastor is an integral part of every wedding. For Hindu wedding, the
            wedding priest has to be a Brahmin, for Christian it has to be a
            Catholic hence, we at Taran Signature Weddings arranges priest for
            those looking forward to a traditional Indian wedding.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Catering:</span> Taran Signature
            Weddings will arrange a variety of sumptuous delicacies as exotic
            menus for the guests with a blend of Indian and foreign cuisines. To
            have a slap-up meal you need a wonderful menu. And soon you decide
            the menu the job surpasses to the caterers. The menu shall be
            decided according to your preference and budget. As per your
            selection a menu shall be placed for your guests the caterers shall
            provide vegetarian and non- vegetarian cuisines.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Floral and Light Décor:</span>
            Fresh flowers like roses, orchid, marigold, gerberas, etc. can
            augment the overall appearance of the traditional and ethnic look
            and Taran Signature Weddings can do all these with your consent. In
            Taran Signa ture Weddings, we believe that lighting if used
            artistically can amplify and emphasize each and every element of
            décor and take it to a completely different level. So we always try
            to arrange it differently.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold ">
              Video and Still Photography:
            </span>
            Taran Signature Weddings will appoint a photographer and
            professionals for video coverage for capturing the propitious
            moments of your life on tape.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Cultural Programmes:</span>
            Song and dance is an integral part of all marriages, without which
            it seems incomplete. Taran Signature Weddings will arrange
            native/folk dancers to perform in the weddings.
          </li>
          <li className=" text-2xl leading-relaxed ">
            <span className=" font-semibold "> Wedding Cake:</span>
            Taran Signature Weddings also take care of your Wedding Cakes and
            Champagne. We can provide you with any kind of cakes and Champagne
            depending upon your taste and theme of your wedding.
          </li>
        </ul>
      </section>

      <section className=" bg-white text-black border-t border-b border-amber-800 py-20 px-10 sm:px-20 ">
        <div className=" relative w-full h-[700px] ">
          <Image
            src="/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0006 1.jpg"
            alt="section1"
            fill
          />
        </div>

        <div className=" w-full mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {[
            "/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0006 2.jpg",
            "/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0006 3.jpg",
            "/images/tsw-images/tsw-page/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0006 4.jpg",
          ].map((data, index) => (
            <div key={index} className="imageWrapper">
              <img src={data} alt={`WEDDING CATALOGUE ${index}`} />
            </div>
          ))}
        </div>

        <div>
          <h2 className=" text-4xl md:text-5xl font-bold tracking-tight mb-11 text-center mt-20 text-amber-800 ">
            Important Moments. Magnificent Backdrops. A Lifetime of Happiness.
          </h2>
          <p className=" text-2xl leading-relaxed text-black ">
            We aren&apos;t your typical wedding planners. People hire us because
            they want a destination wedding that stands apart from the rest. Our
            clients are crazy-busy professionals that depend on us to make their
            planning process stress-free, and to discover what will make their
            day uniquely special. We make design and destination planning simple
            - and simple isn&apos;t easy.
          </p>
        </div>

        <Divider
          className=" w-about-divider text-amber-800 "
          style={{
            width: "25%",
            margin: "auto",
            marginTop: "95px",
            marginBottom: "75px",
          }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>

        <div className=" flex justify-center items-center ">
          <a
            href="tel:+916512332534"
            className=" inline-block bg-yellow-600 px-28 py-2.5 text-white leading-relaxed text-lg "
          >
            For Appointment Call : +91 651 2332534
          </a>
        </div>
      </section>

      {/* About Us */}
      {/* <section className="w-full px-16 py-28 grid md:grid-cols-2 gap-12 items-center bg-gray-100 ">
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.7,
          }}
          className=" relative "
        >
          <Image
            src="/images/assets/cr=w_1234,h_500.webp"
            width={500}
            height={350}
            alt="Team working"
            className="rounded-2xl shadow-lg w-about-img"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 1.1,
          }}
        >
          <h2 className="text-4xl font-bold mb-4 text-yellow-400 ">
            About White Horse World
          </h2>
          <Divider className=" w-about-divider text-yellow-400 pr-28 ">
            <FaDiamond size={10} />{" "}
            <FaDiamond size={20} className=" ml-1 mr-1 " />
            <FaDiamond size={10} />
          </Divider>
          <p className="text-lg text-gray-500 leading-relaxed mt-9 mb-5">
            White Horse World is a premier wedding management company, renowned
            for curating unforgettable events with elegance, creativity, and
            impeccable planning. From intimate ceremonies to grand celebrations,
            we bring your vision to life with grace and style.
          </p>
          <a href="#" className="wed-button inline-block mt-6 ">
            Read More
          </a>
          <a href="#" className="wed-button inline-block mt-6 ml-4 ">
            Call Us
          </a>
          <a href="#" className="plan-wedding-button ">
            Plan Your Wedding
          </a>
        </motion.div>
      </section> */}
    </div>
  );
}
