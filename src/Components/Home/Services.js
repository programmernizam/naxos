import React from "react";
import database from "../../assets/icons/database.png";
import headphone from "../../assets/icons/headphones.png";
import pen from "../../assets/icons/pen-tool.png";
const Services = () => {
  const services = [
    {
      id: 1,
      name: "Your Data in Cloud",
      description:
        "Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.",
      img: database,
    },
    {
      id: 2,
      name: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.",
      img: headphone,
    },
    {
      id: 3,
      name: "Exclusive Design",
      description:
        "Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.",
      img: pen,
    },
  ];
  return (
    <section className="my-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">How It Works?</h2>
          <p className="text-lg text-gray-400 mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo <br className="hidden lg:inline-block" /> justo. Nullam
            dictum felis eu pede mollis pretium.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-24 my-10">
          {services.map((service) => (
            <div key={service.id}>
              <div className="card card-compact rounded-md shadow shadow-stone-300 p-10 group hover:bg-secondary duration-700">
                <figure>
                  <div className="p-5 rounded-full bg-secondary border-2 border-white group-hover:bg-purple-600">
                    <img src={service.img} alt="Shoes" className="w-10" />
                  </div>
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-xl font-bold group-hover:text-white">
                    {service.name}
                  </h2>
                  <p className="text-[16px] text-gray-400 group-hover:text-gray-200">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
