import React, { useEffect, useState } from "react";
import ProjectData from "./Data/ProjectData.jsx";
import arrow from "../assets/arrow.png";

export default function Projects() {
  const [data, setData] = useState([]);
  const [proj, setProj] = useState("All");

  useEffect(() => {
    setData(ProjectData);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center gap-3 max-w-screen-2xl 2xl:mx-auto mx-3 lg:mx-16 pt-16">
        <h1 className="uppercase font-SagarFont font-bold text-lg lg:text-3xl tracking-wider mt-5 text-black dark:text-white">
          PORTFOLIO
        </h1>
        <h2 className="flex gap-2 items-center justify-center mb-5">
          <span className="uppercase font-SagarFont font-semibold text-[#29a587] underline">
            My
          </span>
          <span className="uppercase font-SagarFont font-semibold text-black dark:text-white">
            Projects
          </span>
        </h2>

        <div className="relative w-[70%] px-10 gap-10 flex justify-center items-center font-SagarFont text-lg font-semibold mx-auto tracking-widest">
          <h1 onClick={()=>setProj("All")} className={`hover:cursor-pointer ${proj == "All"? "text-[#29a587]":"text-black dark:text-white"} transition-all ease-in-out duration-300`}>All</h1>
          <h1 onClick={()=>setProj("Web")} className={`hover:cursor-pointer ${proj == "Web"? "text-[#29a587]":"text-black dark:text-white"} transition-all ease-in-out duration-300`}>Web</h1>
          <h1 onClick={()=>setProj("Android")} className={`hover:cursor-pointer ${proj == "Android"? "text-[#29a587] ":"text-black dark:text-white"} transition-all ease-in-out duration-300`}>Android</h1>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap">
          {data.map((each) => (
            <div
              key={each.id}
              className="flex flex-col rounded-3xl w-[90%] sm:w-[90%] md:w-[45%] xl:w-[30%] justify-start items-center my-5 mx-auto bg-white dark:bg-[#1d222a] p-6 gap-3 group "
            >
              <div className="w-full h-[220px] flex justify-center items-center rounded-2xl overflow-hidden">
                <img
                  className="w-full h-[220px] rounded-2xl scale-105 group-hover:scale-[108%] transition-all ease-in-out duration-500"
                  src={each.image}
                  alt=""
                />
              </div>
              <div className=" flex flex-col justify-center items-start font-SagarFont w-[95%] gap-2 mb-7">
                <h3 className=" w-full font-semibold text-[#29a587] text-sm">
                  {each.category}
                </h3>
                <h3 className=" w-full font-semibold text-black text-lg dark:text-white">
                  {each.title}
                </h3>
                <p className=" w-full text-black dark:text-white font-light">
                  {each.desc.split("").slice(0, 193).join("") + "..."}
                </p>

                <a
                  href="https://youtubecommentsanalyzer.netlify.app/"
                  target="_blank"
                >
                  <div className=" font-semibold text-black text-sm sm:text-md dark:text-white flex mt-2 justify-start items-center gap-3 hover:cursor-pointer group hover:underline active:scale-95 transition-all ease-in-out duration-300">
                    <h1>View Project</h1>
                    <img
                      className=" w-4 h-4  group-hover:translate-x-1 transition-all ease-linear duration-300"
                      src={arrow}
                      alt="arrow"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
