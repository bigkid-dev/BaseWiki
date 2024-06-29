import "../index.css";
import { useEffect, useRef } from "react";
import baseLogo from "../assets/ecosystem.webp";
import "../index.css";
import AnimatedParagraph from "../components/AnimatedText";

const BaseInfo = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current.classList.add("animate");
        } else {
          textRef.current.classList.remove("animate");
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6  justify-center">
        <div>
        <AnimatedParagraph text="-    Token Swap, Limit Order, DCA" />
        <AnimatedParagraph text="-    Token Contract Analysis (Health Check)" />
        <AnimatedParagraph text="-    Contract Deployment on Base" />
        </div>
        {/* <h1
          ref={textRef}
          className="text-4xl font-bold leading-none tracking-tight sm:text-6xl special-elite-regular animated-text"
        >
          Accurate AI Answers
        </h1> */}
        <div className="stats" style={{ width: "30%", height: "50Vh" }}>
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest base-logo hidden lg:block">
              <img src={baseLogo} />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default BaseInfo;
