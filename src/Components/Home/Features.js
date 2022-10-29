import React from "react";
import mobile from "../../assets/feature.png";
import clock from "../../assets/icons/alarm-clock.png";
import comment from "../../assets/icons/comment.png";
import file from "../../assets/icons/file.png";
import lock from "../../assets/icons/padlock.png";
import setting from "../../assets/icons/settings.png";
import share from "../../assets/icons/share.png";
const Features = () => {
  const features = [
    {
      id: 1,
      name: "Custom Shortcuts",
      description:
        "Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.",
      img: setting,
    },
    {
      id: 2,
      name: "Secure Integration",
      description:
        "Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.",
      img: lock,
    },
    {
      id: 3,
      name: "Free Live Chat",
      description:
        "Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.",
      img: comment,
    },
  ];
  const features2 = [
    {
      id: 1,
      name: "Social Share",
      description:
        "Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.",
      img: share,
    },
    {
      id: 2,
      name: "Merge Files",
      description:
        "Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.",
      img: file,
    },
    {
      id: 3,
      name: "Action Reminder",
      description:
        "Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.",
      img: clock,
    },
  ];
  return (
    <section id="features">
      <div className="container mx-auto py-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Awesome Features</h2>
          <p className="my-3 text-lg text-gray-400">
            Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
            fames ac <br className="hidden lg:inline-block" /> ante ipsum primis
            in faucibus.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 my-10 items-center justify-items-center">
          <div className="grid grid-cols-1 gap-5 lg:w-5/6 p-5">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-row gap-5">
                <span>
                  <img src={feature.img} alt="" className="w-24" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold">{feature.name}</h3>
                  <p className="my-5 text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img src={mobile} alt="" className="max-w-sm" />
          </div>
          <div className="grid grid-cols-1 gap-5 lg:w-5/6 p-5">
            {features2.map((feature) => (
              <div key={feature.id} className="flex flex-row gap-5">
                <span>
                  <img src={feature.img} alt="" className="w-24" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold">{feature.name}</h3>
                  <p className="my-5 text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
