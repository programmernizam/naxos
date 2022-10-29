import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "../Style/Watch.css";
const Watch = () => {
  return (
    <section className="watch-video">
      <div className="container mx-auto py-20 text-center">
        <div className="z-20 ">
          <BsFillPlayFill className="bg-secondary text-white text-8xl p-5 rounded-full mx-auto hover:bg-white hover:text-secondary duration-700" />
          <h2 className="text-2xl font-bold text-white">Watch This Video</h2>
        </div>
      </div>
    </section>
  );
};

export default Watch;
