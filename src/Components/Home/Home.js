import React from "react";
import Navbar from "../Shared/Navbar";
import Features from "./Features";
import Hero from "./Hero";
import Partners from "./Partners";
import Services from "./Services";
import Watch from "./Watch";

const Home = () => {
  return (
    <div>
      <Navbar>
        <Hero />
        <Partners />
        <Features />
        <Watch />
        <Services />
      </Navbar>
    </div>
  );
};

export default Home;
