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
import SlideUpComponent from "../components/SlideUpComponent.jsx";
import { ThemeContext } from "../components/ThemeProvider.jsx";

export default function () {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleLink = (link, title) => {
    // console.log(link);
    const newWindow = window.open(title, "_blank"); // Open a blank new tab/window
    newWindow.location.href = link; // Navigate to the desired URL after the delay
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col justify-center items-center gap-5 mb-28 max-w-screen-2xl 2xl:mx-auto w-full mt-10">
        <div className="border-solid border-black border-[1px] opacity-10 w-full mb-16 dark:border-white"></div>

        <SlideUpComponent>
          <div className="flex w-full justify-center gap-5">
            <div
              onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                  handleLink(
                    "https://www.facebook.com/sagartandan333",
                    "Sagar Tandan"
                  );
                }, 300);
              }}
              class="group relative hover:cursor-pointer active:scale-95 transition-all ease-in-out duration-300"
            >
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

            <div
              onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                  handleLink(
                    "https://twitter.com/SagarTanda882",
                    "Sagar Tandan"
                  );
                }, 300);
              }}
              class="group relative hover:cursor-pointer active:scale-95 transition-all ease-in-out duration-300"
            >
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

            <div
              onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                  handleLink(
                    "https://www.instagram.com/sagartandan_/",
                    "Sagar Tandan"
                  );
                }, 300);
              }}
              class="group relative hover:cursor-pointer active:scale-95 transition-all ease-in-out duration-300"
            >
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
          </div>
          <div className="font-SagarFont uppercase font-semibold text-sm w-full text-black dark:text-white gap-[6px] flex justify-center flex-wrap mt-5">
            <div>
              <span>&copy; 2024 </span>
              <span className="text-[#29a587]">Sagar Tandan</span>
              <span>.</span>
            </div>
            <span>all rights reserved</span>
          </div>
        </SlideUpComponent>
      </div>
    </div>
  );
}
