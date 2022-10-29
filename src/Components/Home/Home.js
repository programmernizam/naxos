import React from "react";
import Navbar from "../Shared/Navbar";
import Features from "./Features";
import Hero from "./Hero";
import Partners from "./Partners";

const Home = () => {
  return (
    <div>
      <Navbar>
        <Hero />
        <Partners />
        <Features />
      </Navbar>
    </div>
  );
};

export default Home;
