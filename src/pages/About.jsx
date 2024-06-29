import { Player } from "@lottiefiles/react-lottie-player";
import "../index.css";
import { useEffect, useRef } from "react";

const About = () => {
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
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1
          ref={textRef}
          className="text-4xl font-bold leading-none tracking-tight sm:text-6xl special-elite-regular animated-text"
        >
          Accurate AI Answers
        </h1>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              <Player
                autoplay
                loop
                src="https://lottie.host/269e8ac7-7ae4-4f7c-9e60-714ed5e3220e/PmUmSMNeA8.json" // Replace with your Lottie file URL
                style={{ height: "200px", width: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm leading-8 max-w-1xl mx-auto press-start-2p-regular">
        Say goodbye to tedious searches and hello to streamlined, intelligent
        assistance with BaseWiki.
      </p>
    </>
  );
};
export default About;
