import React from "react";
import {
  BsAlarm,
  BsChatLeftText,
  BsFileEarmark,
  BsShare
} from "react-icons/bs";
import { FiLock, FiSettings } from "react-icons/fi";
import mobile from "../../assets/feature.png";
const Features = () => {
  return (
    <section>
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
            <div className="flex flex-row gap-5">
              <span>
                <FiSettings className="text-5xl text-secondary" />
              </span>
              <div>
                <h3 className="text-2xl font-bold">Custom Shortcuts</h3>
                <p className="my-5 text-gray-500">
                  Semper a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus velna culpa expedita.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <span>
                <FiLock className="text-5xl text-secondary" />
              </span>
              <div>
                <h3 className="text-2xl font-bold">Secure Integration</h3>
                <p className="my-5 text-gray-500">
                  Semper a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus velna culpa expedita.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <span>
                <BsChatLeftText className="text-5xl text-secondary" />
              </span>
              <div>
                <h3 className="text-2xl font-bold">Free Live Chat</h3>
                <p className="my-5 text-gray-500">
                  Semper a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus velna culpa expedita.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={mobile} alt="" className="max-w-sm" />
          </div>
          <div className="grid grid-cols-1 gap-5 lg:w-5/6 p-5">
            <div className="flex flex-row gap-5">
              <span>
                <BsShare className="text-5xl text-secondary" />
              </span>
              <div>
                <h3 className="text-2xl font-bold">Social Share</h3>
                <p className="my-5 text-gray-500">
                  Semper a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus velna culpa expedita.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <span>
                <BsFileEarmark className="text-5xl text-secondary" />
              </span>
              <div>
                <h3 className="text-2xl font-bold">Merge Files</h3>
                <p className="my-5 text-gray-500">
                  Semper a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus velna culpa expedita.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <span>
                <BsAlarm className="text-5xl text-secondary" />
              </span>
              <div>
                <h3 className="text-2xl font-bold">Action Reminder</h3>
                <p className="my-5 text-gray-500">
                  Semper a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus velna culpa expedita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
