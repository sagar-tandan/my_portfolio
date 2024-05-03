import React, { useState, useEffect, useContext } from "react";
import SkillData from "../user/Data/SkillData.jsx";
import { ThemeContext } from "../components/ThemeProvider.jsx";

export default function Professional() {
  const [skill, setSkill] = useState([]);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    setSkill(SkillData);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col justify-center items-center gap-3 max-w-screen-2xl 2xl:mx-auto mx-3 lg:mx-16 pt-16">
        <h1 className="uppercase font-SagarFont font-bold text-lg lg:text-3xl tracking-wider mt-5 text-black dark:text-white">
          Professional skills
        </h1>
        <h2 className="flex gap-1 items-center justify-center mb-5">
          <span className="uppercase font-SagarFont font-semibold text-[#29a587] underline">
            My
          </span>
          <span className="uppercase font-SagarFont font-semibold text-black dark:text-white">
            Talents
          </span>
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap">
          {skill.map((each) => (
            <div  key={each.id} className="flex flex-col w-full md:w-1/2 lg:w-1/3 justify-center items-center my-5">
              <div className=" flex justify-between items-center font-semibold font-SagarFont p-1 text-md w-[95%] text-black dark:text-white">
                <h3>{each.name}</h3>
                <div className="flex gap-1 text-black dark:text-white">
                  <span>{each.percentage}</span>
                  <span className="text-[#29a587]">%</span>
                </div>
              </div>

              <p className="w-[95%] p-2 flex text-black dark:text-white">
                {each.description}
              </p>

              <div className="relative w-[90%] lg:w-[80%] rounded-full mt-3 ">
                {/* border-[#e3d4c0] dark:border-[#1f1e1d] */}
                <div className="flex">
                  <div
                    className={`relative border-[1px] border-solid border-black ${each.width} h-1 bg-black rounded-full dark:bg-[#29a587] dark:border-[#29a587]`}
                  ></div>
                  <div
                    className={`absolute border-[2px] w-6 h-6 border-solid border-black rounded-full ${each.left} bg-[#29a587] z-10 -bottom-2 dark:bg-[#2f2e2e] dark:border-white`}
                  ></div>
                  <div
                    className={`absolute border-[1px] border-solid border-[#969593] ${each.rem} h-[1px] bg-[#a4a2a2] dark:bg-[#1f1e1d] rounded-full right-0 bottom-[2px]`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
