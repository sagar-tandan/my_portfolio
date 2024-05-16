import React, { useEffect, useState } from "react";
import ProjectData from "./Data/ProjectData.jsx";
import SlideUpComponent from "../components/SlideUpComponent.jsx";
import arrow from "../assets/arrow.png";
import { div } from "@tensorflow/tfjs";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ProjectData);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center gap-3 max-w-screen-2xl 2xl:mx-auto mx-3 lg:mx-16 pt-16">
        <SlideUpComponent>
          <h1 className="uppercase font-SagarFont font-bold text-lg lg:text-3xl tracking-wider mt-5 text-black dark:text-white">
            PORTFOLIO
          </h1>
        </SlideUpComponent>
        <SlideUpComponent>
          <h2 className="flex gap-2 items-center justify-center mb-5">
            <span className="uppercase font-SagarFont font-semibold text-[#29a587] underline">
              My
            </span>
            <span className="uppercase font-SagarFont font-semibold text-black dark:text-white">
              Projects
            </span>
          </h2>
        </SlideUpComponent>

        <SlideUpComponent>
          <div className="flex flex-col sm:flex-row flex-wrap">
            {data.map((each) => (
              <div
                key={each.id}
                className="flex flex-col rounded-3xl w-full sm:w-[90%] md:w-[45%] xl:w-[30%] justify-start items-center my-5 mx-auto bg-white dark:bg-[#1d222a] p-6 gap-3 group "
              >
                <SlideUpComponent>
                  <div className="w-full h-[220px] flex justify-center items-center rounded-2xl overflow-hidden">
                    <img
                      className="w-full h-[220px] rounded-2xl scale-105 group-hover:scale-[108%] transition-all ease-in-out duration-500 object-cover"
                      src={each.image}
                      alt={each.title}
                    />
                  </div>
                  <div className=" flex flex-col justify-center items-start font-SagarFont w-[95%] gap-2 mb-7">
                    <h3 className=" w-full font-semibold text-[#29a587] text-sm mt-3">
                      {each.category}
                    </h3>
                    <h3 className=" w-full font-semibold text-black text-md sm:text-lg dark:text-white">
                      {each.title}
                    </h3>
                    <p className=" w-full text-black dark:text-white font-light">
                      {each.desc.split("").slice(0, 193).join("") + "..."}
                    </p>

                    <div className="w-full flex flex-row justify-between items-center flex-wrap">
                      <a href={each.link} target="_blank">
                        <div className=" font-semibold text-black text-sm sm:text-md dark:text-white flex mt-2 justify-start items-center gap-3 hover:cursor-pointer group hover:underline active:scale-95 transition-all ease-in-out duration-300">
                          <h1>View Project</h1>
                          <img
                            className=" w-4 h-4  group-hover:translate-x-1 transition-all ease-linear duration-300"
                            src={arrow}
                            alt="arrow"
                          />
                        </div>
                      </a>
                      {each.github ?  (
                        <a href={each.github} target="_blank">
                          <div className=" font-semibold text-black text-sm sm:text-md dark:text-white flex mt-2 justify-start items-center gap-3 hover:cursor-pointer group hover:underline active:scale-95 transition-all ease-in-out duration-300">
                            <h1>Github Code</h1>
                            <img
                              className=" w-4 h-4  group-hover:translate-x-1 transition-all ease-linear duration-300"
                              src={arrow}
                              alt="arrow"
                            />
                          </div>
                        </a>
                      ):(
                        <div className=" font-semibold text-sm sm:text-md flex mt-2 justify-start items-center gap-3 text-red-500">
                            <h1>No Github Link</h1>

                          </div>
                      )}
                    </div>
                  </div>
                </SlideUpComponent>
              </div>
            ))}
          </div>
        </SlideUpComponent>
      </div>
    </div>
  );
}
