import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import "../index.css";
import { useEffect, useRef } from "react";
import baseLogo from "../assets/Base-logo.webp";
import { useNavigate } from "react-router-dom";
import { BsFillCloudHaze2Fill } from "react-icons/bs";

const Hero = () => {
  const textRef = useRef(null);
  const textsRef = useRef(null);
  const navigation = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current.classList.add("zoom");
          textsRef.current.classList.add("zoom");
        } else {
          textRef.current.classList.remove("zoom");
          textsRef.current.classList.remove("zoom");
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
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
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h2
          ref={textsRef}
          
          className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl special-elite-regular zoom-text"
        >
          Unleash the Power of
        </h2>
        <h1
          style={{ left: 40, color: "rgb(74,128,219)" }}
          ref={textRef}
          className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl special-elite-regular zoom-text"
        >
          Base
        </h1>

          <img
            src={baseLogo}
            style={{
              position: "relative",
              width: 40,
              height: 40,
              bottom: 50,
              left: 140,
            }}
          />{" "}
        

        <p className="mt-8 max-w-xl text-lg leading-8">
          Experience the future of trading with{" "}
          <span style={{ color: "rgb(74,128,219)" }}>
            BaseWiki's AI-powered chat
          </span>
          . Gain{" "}
          <span className="font-semibold">instant, personalized insights</span>{" "}
          and make <span className="font-semibold">smarter decisions</span>{" "}
          within the Base Ecosystem. BaseWiki puts the knowledge you need right
          at your fingertips, enhancing your trading efficiency effortlessly.
        </p>
        <div className="mt-10">
          <button
            onClick={() => {
              navigation('/chats')
            }}
            to="/products"
            className="btn btn-blue hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            style={{
              backgroundColor: "rgb(74,128,219)",
              borderColor: "rgb(74,128,219)",
              color: "rgb(247,247, 241)",
            }}
          >
            Start Chat
          </button>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center space-x-4  rounded-box ">
        {/* <Player
          autoplay
          loop
          src="https://lottie.host/269e8ac7-7ae4-4f7c-9e60-714ed5e3220e/PmUmSMNeA8.json" // Replace with your Lottie file URL
          style={{ height: "100px", width: "200px" }}
        /> */}
        {/* <Player
          autoplay
          loop
          src="https://lottie.host/ee438ba3-b18e-400c-9b14-c4a29f80dfbd/KVYKJwqxHS.json" // Replace with your Lottie file URL
          style={{ height: "400px", width: "300px" }}
        /> */}
        <Player
          autoplay
          loop
          src="https://lottie.host/7e35f613-42ba-44a0-93f4-2a1e3250d26a/mTlXe3vn12.json" // Replace with your Lottie file URL
          style={{ height: "400px", width: "400px" }}
        />
        {/* <Player
          autoplay
          loop
          src="https://lottie.host/269e8ac7-7ae4-4f7c-9e60-714ed5e3220e/PmUmSMNeA8.json" // Replace with your Lottie file URL
          style={{ height: "100px", width: "200px" }}
        /> */}

        {/* {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-full object-cover"
              />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
export default Hero;
