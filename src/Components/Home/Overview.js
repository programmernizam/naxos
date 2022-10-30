import React from "react";
import chain from "../../assets/icons/chain.png";
import compass from "../../assets/icons/compass.png";
import wheel from "../../assets/icons/wheel.png";
import mobile1 from "../../assets/mobile_1.png";
import "../Style/Overview.css";
const Overview = () => {
  const overviews = [
    {
      id: 1,
      name: "Easy to Use",
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
      img: compass,
    },
    {
      id: 2,
      name: "Monitor & Manage",
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
      img: wheel,
    },
    {
      id: 3,
      name: "Stay Connected",
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
      img: chain,
    },
  ];
  return (
    <section className="overview">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5">
          <img
            src={mobile1}
            alt="mobile"
            className="max-w-sm lg:max-w-lg overview_mobile"
          />
          <div>
            <h2 className="text-4xl font-bold mb-5">
              Track Time From Anywhere
            </h2>
            <p className="text-lg text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo <br className="hidden lg:inline-block" /> ligula eget
              dolor.
            </p>
            <div className="my-10">
              {overviews.map((overview) => (
                <div
                  key={overview.id}
                  className="flex gap-5 mb-5 justify-start p-5 lg:p-10 shadow-xl shadow-gray-300 hover:bg-secondary rounded group  hover:text-white duration-500 hover:translate-x-[-5px]"
                >
                  <span>
                    <img
                      className="bg-secondary p-2 lg:p-5 rounded-full group-hover:bg-purple-500 border-2 group-hover:border-white"
                      src={overview.img}
                      alt=""
                    />
                  </span>
                  <div>
                    <h6 className="font-bold text-lg">{overview.name}</h6>
                    <p className="text-[16px] font-semibold text-gray-400 group-hover:text-white lg:w-4/5">
                      {overview.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
