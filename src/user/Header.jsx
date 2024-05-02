import React, { useState, useContext } from "react";
import moon from "../assets/dark.png";
import sun from "../assets/sun.png";
import { ThemeContext } from "../components/ThemeProvider.jsx";

export default function () {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
    <div className="relative z-40 w-full pb-36 max-w-screen-2xl 3xl:mx-auto">
      <div className="flex justify-between px-8 fixed w-full shadow-md bg-[#ebe6df] dark:bg-gray-900 sm:shadow-transparent sm:bg-transparent dark:sm:bg-transparent flex-wrap">
        <div className="relative flex gap-1 justify-start items-center p-5 ">
          <h2 className=" text-black uppercase font-SagarFont font-bold text-3xl dark:text-white ">
            sagar
          </h2>
          <span className="absolute border-[3px] border-solid border-[#29a587] w-2 h-2 rounded-full flex justify-center items-center left-[89%]"></span>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div  onClick={() => setDarkMode(!darkMode)} className="relative w-[65px] h-[28px] bg-[#e6d39f] rounded-2xl  dark:bg-[#4d5762]">
            {darkMode ? (
              <div className="absolute duration-500 dark:translate-x-[40px] translate-x-0 w-8 h-8 rounded-full bg-yellow-400 dark:bg-[#1e3048] flex justify-center items-center bottom-[-2px] left-0">
                <img src={moon} className=" w-8 h-8 p-1" alt="sun " />

              </div>
            ) : (
                <div className="absolute duration-500 dark:translate-x-[40px] translate-x-0  w-8 h-8 rounded-full bg-yellow-400 flex justify-center items-center bottom-[-2px] left-0">
                <img src={sun} className=" w-8 h-8 p-1 " alt="sun " />
              </div>
            )}
          </div>

          <div>menu</div>
        </div>

        {/* <div className='flex p-5 gap-8 hidden'>

            <div className='font-SagarFont font-semibold'>
                <h3>Home</h3>
            </div>
            <div className='font-SagarFont font-semibold'>
                <h3>Home</h3>
            </div>
            <div className='font-SagarFont font-semibold'>
                <h3>Home</h3>
            </div>
            <div className='font-SagarFont font-semibold'>
                <h3>Home</h3>
            </div>
            <div className='font-SagarFont font-semibold'>
                <h3>Home</h3>
            </div>

            </div> */}
      </div>
    </div>
    </div>
/* <div className={darkMode ? "dark" : ""}>
  <div className="max-w-screen-2xl 2xl:mx-auto">
    <div className="relative z-40 w-full pb-36">
      <div className="flex justify-between px-8 fixed left-0 right-0 shadow-md bg-[#ebe6df] dark:bg-[#232932] sm:shadow-transparent sm:bg-transparent dark:sm:bg-transparent flex-wrap">
        <div className="relative flex gap-1 justify-start items-center p-5">
          <h2 className="text-black uppercase font-SagarFont font-bold text-3xl dark:text-white">
            sagar
          </h2>
          <span className="absolute border-[3px] border-solid border-[#29a587] w-2 h-2 rounded-full flex justify-center items-center left-[89%]"></span>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div onClick={() => setDarkMode(!darkMode)} className="relative w-[65px] h-[28px] bg-[#e6d39f] rounded-2xl dark:bg-[#4d5762]">
            {darkMode ? (
              <div className="absolute duration-500 dark:translate-x-[40px] translate-x-0 w-8 h-8 rounded-full bg-yellow-400 dark:bg-[#1e3048] flex justify-center items-center bottom-[-2px] left-0">
                <img src={moon} className="w-8 h-8 p-1" alt="sun " />
              </div>
            ) : (
              <div className="absolute duration-500 dark:translate-x-[40px] translate-x-0  w-8 h-8 rounded-full bg-yellow-400 flex justify-center items-center bottom-[-2px] left-0">
                <img src={sun} className="w-8 h-8 p-1" alt="sun " />
              </div>
            )}
          </div>

          <div>menu</div>
        </div>
      </div>
    </div>
  </div>
</div> */


  );
}
