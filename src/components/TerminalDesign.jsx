import React from "react";
import back from "../assets/Icons/back.png";
import folder from "../assets/Icons/folder.png";
import branch from "../assets/Icons/branch.png";
import crown from "../assets/Icons/crown.png";


const TerminalDesign = () => {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="flex flex-row bg-green-600 py-1 pr-6 pl-2 sm:pr-12 sm:pl-4 rounded-full ml-4 gap-1 sm:gap-3">
          <img className="w-5 h-5 sm:w-8 sm:h-8" src={crown} alt="" />
          <h1 className="text-white font-SagarFont font-semibold text-sm sm:text-lg">
            Sagar
          </h1>
        </div>

        <div className=" absolute flex flex-row -z-10 bg-blue-600 py-1 px-4 sm:px-8  rounded-full ml-4 gap-1 sm:gap-3 left-[85px] sm:left-[135px]">
          <img className="w-5 h-5 sm:w-8 sm:h-8" src={folder} alt="" />
          <h1 className="text-white font-SagarFont font-semibold text-sm sm:text-lg">
            Portfolio
          </h1>
        </div>

        <div className="flex flex-row bg-red-600 -z-20 py-1 px-4 sm:px-8 rounded-full ml-4 gap-1 sm:gap-3 absolute left-[183px] sm:left-[289px]">
          <img className="w-5 h-5 sm:w-8 sm:h-8" src={branch} alt="" />
          <h1 className="text-white font-SagarFont font-semibold text-sm sm:text-lg">
            Is
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TerminalDesign;
