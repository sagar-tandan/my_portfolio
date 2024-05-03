import React, { useState, useContext } from "react";
import fb from "../assets/fb.png";
import fbhover from "../assets/fbhover.png";
import insta from "../assets/insta.png";
import instah from "../assets/instah.png";
import twitter from "../assets/twitter.png";
import wfb from "../assets/fbwhite.png";
import twitterh from "../assets/twitterh.png";
import winsta from "../assets/instawhite.png";
import wtwi from "../assets/twitterwhite.png";
import { ThemeContext } from "../components/ThemeProvider.jsx";

export default function () {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col justify-center items-center gap-5 mb-16 max-w-screen-2xl 2xl:mx-auto w-full mt-10">
        <div className="border-solid border-black border-[1px] opacity-10 w-full mb-16 dark:border-white"></div>

        <div className="flex w-full justify-center gap-5">
          <a
            href="https://www.facebook.com/sagartandan333"
            target="_blank"
            rel="noreferrer "
          >
            <div class="group relative hover:cursor-pointer">
              {darkMode ? (
                <img
                  src={wfb}
                  alt="Normal Image"
                  class="w-6 h-5  transition duration-500 ease-in-out group-hover:opacity-0"
                />
              ) : (
                <img
                  src={fb}
                  alt="Normal Image"
                  class="w-6 h-5  transition duration-500 ease-in-out group-hover:opacity-0"
                />
              )}
              <img
                src={fbhover}
                alt="Normal Image"
                class="w-6 h-5 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
              />
            </div>
          </a>

          <a
            href="https://twitter.com/SagarTanda882"
            target="_blank"
            rel="noreferrer "
          >
            <div class="group relative hover:cursor-pointer">
              {darkMode ? (
                <img
                  src={wtwi}
                  alt="Normal Image"
                  class="w-6 h-6 transition duration-500 ease-in-out group-hover:opacity-0"
                />
              ) : (
                <img
                  src={twitter}
                  alt="Normal Image"
                  class="w-6 h-6 transition duration-500 ease-in-out group-hover:opacity-0"
                />
              )}

              <img
                src={twitterh}
                alt="Hover Image"
                class="w-6 h-6 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/sagartandan_/"
            target="_blank"
            rel="noreferrer "
          >
            <div class="group relative hover:cursor-pointer">
              {darkMode ? (
                <img
                  src={winsta}
                  alt="Normal Image"
                  class="w-6 h-6 transition duration-500 ease-in-out group-hover:opacity-0"
                />
              ) : (
                <img
                  src={insta}
                  alt="Normal Image"
                  class="w-6 h-6 transition duration-500 ease-in-out group-hover:opacity-0"
                />
              )}

              <img
                src={instah}
                alt="Hover Image"
                class="w-6 h-6 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
              />
            </div>
          </a>
        </div>

        <div className="font-SagarFont uppercase font-semibold text-sm w-full text-black dark:text-white gap-[6px] flex justify-center flex-wrap">
          <div>
            <span>&copy; 2024 </span>
            <span className="text-[#29a587]">Sagar Tandan</span>
            <span>.</span>
          </div>
          <span>all rights reserved</span>
        </div>
      </div>
    </div>
  );
}
