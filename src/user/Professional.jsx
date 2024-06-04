import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider.jsx";
import SlideUpComponent from "../components/SlideUpComponent.jsx";

export default function Professional() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col justify-center items-center gap-3 max-w-screen-xl 2xl:mx-auto mx-3 lg:mx-5 pt-16">
        <SlideUpComponent>
          <h1 className="uppercase font-SagarFont font-bold text-lg lg:text-3xl tracking-wider mt-5 text-black dark:text-white">
            Professional skills
          </h1>
        </SlideUpComponent>

        <SlideUpComponent>
          <h2 className="flex gap-2 items-center justify-center mb-5">
            <span className="uppercase font-SagarFont font-semibold text-[#29a587] underline">
              My
            </span>
            <span className="uppercase font-SagarFont font-semibold text-black dark:text-white">
              Talents
            </span>
          </h2>
        </SlideUpComponent>

          <div className="w-[90%] lg:w-[100%] shadow-[#a6a097] dark:shadow-[#222f4d] shadow-sm p-8 flex flex-col gap-10 my-5">
            <div className="flex gap-3 justify-center sm:justify-between font-SagarFont font-semibold text-black dark:text-white">
              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                  alt="html"
                />
                <h1>HTML</h1>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/11516/11516361.png"
                  alt="css"
                />
                <h1>CSS</h1>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                  alt="js"
                />
                <h1>JavaScript</h1>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                  alt="react"
                />
                <h1>Reactjs</h1>
              </div>

              <div className="hidden md:flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                  alt="python"
                />
                <h1>Python</h1>
              </div>

              <div className="hidden md:flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/8637/8637091.png"
                  alt="ml"
                />
                <h1>ML</h1>
              </div>

              <div className="hidden md:flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2Ffirebase.png?alt=media&token=d76c211b-9795-4244-8065-8b1728626598"
                  alt="ml"
                />
                <h1>Firebase</h1>
              </div>

              <div className="hidden md:flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
                  alt="app"
                />
                <h1>Java</h1>
              </div>
            </div>

            <div className="flex md:hidden font-SagarFont font-semibold text-black dark:text-white gap-3 justify-center sm:justify-between">
              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                  alt="python"
                />
                <h1>Python</h1>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/8637/8637091.png"
                  alt="ml"
                />
                <h1>ML</h1>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2Ffirebase.png?alt=media&token=d76c211b-9795-4244-8065-8b1728626598"
                  alt="ml"
                />
                <h1>Firebase</h1>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
                  alt="app"
                />
                <h1>Java</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
