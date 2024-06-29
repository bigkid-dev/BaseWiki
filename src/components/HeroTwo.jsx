import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const HeroTwo = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="hidden h-[28rem] lg:carousel carousel-center space-x-4  rounded-box ">
        <Player
          autoplay
          loop
          src="https://lottie.host/4f157d91-7cdb-4952-bc0c-88388c03e468/eihzycrxYm.json" // Replace with your Lottie file URL
          style={{ height: "400px", width: "400px" }}
        />
      </div>
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl special-elite-regular">
          Chart Analysis
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 ">
          BaseWiki will also help users to effortlessly execute on-chain actions
          such as token trading, chart analysis, and contract deployments in
          seconds with our advanced AI agent.
        </p>
        <div className="mt-10">
          <Link
            to="/products"
            className="btn btn-primary"
            style={{
              backgroundColor: "rgb(74,128,219)",
              borderColor: "rgb(74,128,219)",
              color: "rgb(247,247, 241)",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};






export default HeroTwo;
