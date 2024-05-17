import React from "react";
import weights from "../assets/Icons/weights.png";
import chicken from "../assets/Icons/chicken.png";
import gym from "../assets/Icons/gym.png";


const TerminalDesign1 = () => {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="flex flex-row bg-green-600 py-1 pr-6 pl-2 sm:pr-12 sm:pl-4 rounded-full ml-4 gap-1 sm:gap-3">
          <img className="w-5 h-5 sm:w-8 sm:h-8" src={weights} alt="" />
          <h1 className="text-white font-SagarFont font-semibold text-sm sm:text-lg">
            Gym
          </h1>
        </div>

        <div className=" absolute flex flex-row -z-10 bg-blue-600 py-1 px-4 sm:px-8  rounded-full ml-4 gap-1 sm:gap-3 left-[75px] sm:left-[125px]">
          <img className="w-5 h-5 sm:w-8 sm:h-8" src={chicken} alt="" />
          <h1 className="text-white font-SagarFont font-semibold text-sm sm:text-lg">
            diet
          </h1>
        </div>

        <div className="flex flex-row bg-red-600 -z-20 py-1 px-4 sm:px-8 rounded-full ml-4 gap-1 sm:gap-3 absolute left-[145px] sm:left-[240px]">
          <img className="w-5 h-5 sm:w-8 sm:h-8" src={gym} alt="" />
          <h1 className="text-white font-SagarFont font-semibold text-sm sm:text-lg">
            Muscle
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TerminalDesign1;