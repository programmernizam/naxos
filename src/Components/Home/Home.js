import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Features from "./Features";
import Hero from "./Hero";
import Overview from "./Overview";
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
        <Overview />
        <Footer />
      </Navbar>
    </div>
  );
};

export default Home;
