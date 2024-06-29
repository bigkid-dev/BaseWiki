import { Hero } from "../components";
import About from "./About";
import Spacing from "../components/Spacing";
import HeroTwo from "../components/HeroTwo";
import BaseInfo from "./BaseInfo";
import { useEffect } from "react";
import { generateUUID } from "../utils";
import { getInfoFromLocalStorage } from "../utils";

const Landing = () => {
  useEffect(() => {
    if (!getInfoFromLocalStorage()) {
      console.log(true);
      localStorage.setItem("sessionId", generateUUID());
    }
  }, []);

  return (
    <>
      <Hero />
      <Spacing />
      <About />
      <Spacing />
      <HeroTwo />
      <Spacing />
      <BaseInfo />
      {/* <ChatApp /> */}
    </>
  );
};
export default Landing;
