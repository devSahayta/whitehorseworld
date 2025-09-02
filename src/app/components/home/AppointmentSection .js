import React, { useEffect } from "react";
import { gsap } from "gsap";

const AppointmentSection = () => {
  useEffect(() => {
    // Floating animation for entire section
    gsap.to(".appointment-section", {
      x: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Floating icons animation
    const floatingElements = document.querySelectorAll(".floating-element");
    floatingElements.forEach((el, index) => {
      gsap.to(el, {
        y: 15,
        duration: 2 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <section className="appointment-container">
      <div className="appointment-section">
        {/* Floating decorative elements */}
        <div className="floating-elements">
          <div className="floating-element" style={{ top: "20%", left: "5%" }}>
            ✦
          </div>
          <div className="floating-element" style={{ top: "60%", left: "90%" }}>
            ★
          </div>
          <div className="floating-element" style={{ top: "30%", left: "80%" }}>
            ❉
          </div>
          <div className="floating-element" style={{ top: "70%", left: "10%" }}>
            ❤
          </div>
        </div>

        {/* Main Content */}
        <div className="appointment-content">
          <div className="text-content">
            <div className="icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div className="message">
              Book Appointment Now and Get{" "}
              <span className="discount">10% OFF</span>
            </div>
          </div>

          <a
            href="https://wa.me/6299949208"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <i className="fab fa-whatsapp"></i> Book via WhatsApp
          </a>
        </div>
      </div>

      <style jsx>{`
        .appointment-container {
          width: 100%;
          padding: 30px 15px;
          background: linear-gradient(
            135deg,
            #1a2a6c 0%,
            #b21f1f 50%,
            #fdbb2d 100%
          );
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .appointment-section {
          background: linear-gradient(90deg, #ff6b6b 0%, #ff8e53 100%);
          width: 100%;
          max-width: 1100px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          padding: 20px 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          flex-wrap: wrap;
          gap: 20px;
        }

        .appointment-content {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          z-index: 2;
        }

        .text-content {
          display: flex;
          align-items: center;
          gap: 15px;
          flex: 1;
          min-width: 250px;
        }

        .icon {
          font-size: 2rem;
          animation: pulse 2s infinite;
          color: white;
        }

        /* ✅ Responsive message */
        .message {
          font-size: clamp(1rem, 2vw + 0.5rem, 1.8rem);
          font-weight: 700;
          color: white;
          line-height: 1.4;
          text-align: left;
        }

        .discount {
          font-size: clamp(1.2rem, 2.5vw + 0.5rem, 2rem);
          font-weight: 800;
          color: #4a0e0e;
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
        }

        .whatsapp-btn {
          background: #25d366;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 50px;
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
          text-decoration: none;
          white-space: nowrap;
        }

        .whatsapp-btn:hover {
          background: #128c7e;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-btn i {
          margin-right: 8px;
          font-size: 1.4rem;
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .floating-element {
          position: absolute;
          color: rgba(255, 255, 255, 0.2);
          font-size: 2rem;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        /* ✅ Extra fine-tuned responsiveness */
        @media (max-width: 768px) {
          .message {
            font-size: 1.1rem;
            text-align: center;
          }
          .discount {
            font-size: 1.3rem;
          }
          .text-content {
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .message {
            font-size: 1rem;
          }
          .discount {
            font-size: 1.2rem;
          }
          .whatsapp-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default AppointmentSection;
