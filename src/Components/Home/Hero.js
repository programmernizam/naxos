import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import mobile from "../../assets/hero_mobile.png";
import "../Style/Hero.css";
const Hero = () => {
  return (
    <section>
      <div className="hero min-h-[85vh] hero_section">
        <div className="container mx-auto lg:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-items-center">
            <div>
              <h1 className="text-3xl text-center lg:text-left md:text-6xl font-bold text-white">
                Showcase your
                <br /> App in one place
              </h1>
              <p className="py-6 text-white font-semibold text-center lg:text-left text-sm md:text-lg lg:w-4/5">
                Duis facilisis sem sed metus malesuada rhoncus. Nulla tincidunt
                tincidunt lectus at lacinia. Pellentesque ullamcorper arcu id
                rutrum volutpat. Donec suscipit auctor enim vel dignissim.
              </p>

              <div className="btn_group flex flex-row justify-center lg:justify-start gap-5">
                <div className="flex gap-3 justify-center items-center border-2 px-5 md:px-8 py-2 rounded text-white hover:animate-pulse hover:bg-white hover:text-secondary cursor-pointer">
                  <span>
                    <FaGooglePlay className="text-xl" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm">Available on</p>
                    <h6 className="font-bold text-lg">Google Play</h6>
                  </div>
                </div>
                <div className="flex gap-3 justify-center items-center border-2 px-5 md:px-8 py-2 rounded text-white hover:animate-pulse hover:bg-white hover:text-secondary cursor-pointer">
                  <span>
                    <FaApple className="text-2xl" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm">Download on</p>
                    <h6 className="font-bold text-lg">App Store</h6>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={mobile}
              className="w-content hero_phone"
              alt="hero_mobile"
            />
          </div>
        </div>
        <div className="wave-animation hidden lg:inline-block">
          <div className="wave-1 wave"></div>
          <div className="wave-2 wave"></div>
          <div className="wave-3 wave"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
