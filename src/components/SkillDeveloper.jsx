import React from "react";

const SkillDeveloper = () => {
  return (
    <div>
      <div className="relative text-white w-full flex flex-col gap-2 px-4 sm:px-8 mt-5">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-SagarFont font-medium">Python</h1>
          <h1 className="font-SagarFont font-medium">60%</h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full h-3 bg-gray-200 overflow-x-auto relative rounded-lg shadow-lg">
            {/* animate-scroll is defined in index.css */}
            <div className="absolute inset-0 w-[60%] bg-gradient-to-r  from-[#3573a4] to-[#ffd13e] animate-scroll rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="relative text-white w-full flex flex-col gap-2 px-4 sm:px-8 mt-5">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-SagarFont font-medium">Machine Learning</h1>
          <h1 className="font-SagarFont font-medium">50%</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-3 bg-gray-200 overflow-x-auto relative rounded-lg shadow-lg">
            {/* animate-scroll is defined in index.css */}
            <div className="absolute inset-0 w-[50%] bg-gradient-to-r  from-[#b8fefe] to-[#6edbac] animate-scroll rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="relative text-white w-full flex flex-col gap-2 px-4 sm:px-8 mt-5">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-SagarFont font-medium">React</h1>
          <h1 className="font-SagarFont font-medium">50%</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-3 bg-gray-200 overflow-x-auto relative rounded-lg shadow-lg">
            {/* animate-scroll is defined in index.css */}
            <div className="absolute inset-0 w-[50%] bg-gradient-to-r  from-[#5adafd] to-[#aab0c4] animate-scroll rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="relative text-white w-full flex flex-col gap-2 px-4 sm:px-8 mt-5">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-SagarFont font-medium">Android Develpment</h1>
          <h1 className="font-SagarFont font-medium">60%</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-3 bg-gray-200 overflow-x-auto relative rounded-lg shadow-lg">
            {/* animate-scroll is defined in index.css */}
            <div className="absolute inset-0 w-[60%] bg-gradient-to-r  from-[#c13332] to-[#c1bc31] animate-scroll rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="relative text-white w-full flex flex-col gap-2 px-4 sm:px-8 mt-5">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-SagarFont font-medium">Javascript</h1>
          <h1 className="font-SagarFont font-medium">60%</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-3 bg-gray-200 overflow-x-auto relative rounded-lg shadow-lg">
            {/* animate-scroll is defined in index.css */}
            <div className="absolute inset-0 w-[60%] bg-gradient-to-r  from-yellow-500 to-sky-700 animate-scroll rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="relative text-white w-full flex flex-col gap-2 px-4 sm:px-8 mt-5">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-SagarFont font-medium">Fitness</h1>
          <h1 className="font-SagarFont font-medium">80%</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-3 bg-gray-200 overflow-x-auto relative rounded-lg shadow-lg">
            {/* animate-scroll is defined in index.css */}
            <div className="absolute inset-0 w-[80%] bg-gradient-to-r  from-[#ddaf7e] to-[#6ab3d7] animate-scroll rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="relative text-white w-full flex flex-col gap-2 px-4 sm:px-8 mt-5">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-SagarFont font-medium">Video Editing</h1>
          <h1 className="font-SagarFont font-medium">70%</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-3 bg-gray-200 overflow-x-auto relative rounded-lg shadow-lg">
            {/* animate-scroll is defined in index.css */}
            <div className="absolute inset-0 w-[70%] bg-gradient-to-r  from-green-500 to-teal-700 animate-scroll rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDeveloper;
