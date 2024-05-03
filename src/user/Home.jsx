import React, { useState, useEffect, useContext } from "react";
import sagar from "../assets/sagarpng.png";
import fb from "../assets/fb.png";
import fbhover from "../assets/fbhover.png";
import insta from "../assets/insta.png";
import instah from "../assets/instah.png";
import twitter from "../assets/twitter.png";
import wfb from "../assets/fbwhite.png";
import twitterh from "../assets/twitterh.png";
import winsta from "../assets/instawhite.png";
import wtwi from "../assets/twitterwhite.png";
import Professional from "./Professional";
import Contact from "./Contact.jsx";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext } from "../components/ThemeProvider.jsx";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // useEffect to set initial screen size and add event listener
  useEffect(() => {
    // Function to check if screen is small
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1023); // Example threshold for small screens
    };

    // Initial check
    checkScreenSize();

    // Event listener to update screen size when window is resized
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }); // Removed the empty dependency array

  return (
    <div className={darkMode ? "dark" : ""}>
      {isSmallScreen && (
        <div className="flex flex-col justify-center items-center max-w-screen-lg pt-6">
          {/* beginning of intro */}
          <div className="w-full justify-center items-center flex gap-2">
            <span className="font-SagarFont font-semibold uppercase dark:text-white">
              Hello,
            </span>
            <span className="font-SagarFont font-semibold uppercase text-[#29a587]">
              My name is
            </span>
          </div>
          <div className="w-full flex gap-3 justify-center items-center font-extrabold uppercase text-[#29a587] font-SagarFont text-4xl my-2 font-outline-2 drop-shadow-[0_1.2px_1.2px_rgba(93,136,83,0.9)]">
            <span>sagar </span> <span className="text-white">tandan</span>
          </div>
          <div className="flex gap-1 w-full justify-center items-center">
            <span className="uppercase font-SagarFont font-semibold dark:text-white ">
              i am
            </span>

            <span className="uppercase font-SagarFont font-semibold text-[#29a587]">
              <TypeAnimation
                sequence={[
                  "Web developer",
                  1000,
                  "App developer",
                  1000,
                  "Gym instructor",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* intro ended here */}

          <div className="flex flex-col justify-center items-center lg:flex-row-reverse w-full ">
            <div
              className={`w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative flex justify-center items-center mt-4`}
            >
              <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden relative">
                <div className="relative w-[250px] h-[250px] bg-[#29a587] rounded-full top-[55px] left-[25px] md:w-[400px] md:h-[400px] md:top-[109px] md:left-[50px]"></div>
                <img
                  src={sagar}
                  alt="Your Image"
                  class="w-[370px] h-[370px] z-20 md:w-[500px] md:h-[590px] object-cover object-center rounded-full absolute top-[43%] left-[55%] md:top-[45%] md:left-[54%] transform -translate-x-1/2 -translate-y-1/2"
                ></img>
              </div>
              <div className="border-[1px] border-black bg-white w-[160px] h-[55px] md:w-[200px] md:h-[70px] rounded-full z-30 absolute bottom-13 left-[-10px] md:left-[-30px] dark:bg-gray-800 dark:border-white"></div>
              <div className="border-[1px] border-black bg-white w-[160px] h-[55px] md:w-[200px] md:h-[70px]  rounded-full z-30 absolute bottom-2 right-[1px] md:right-2 dark:bg-gray-800 dark:border-white"></div>
            </div>

            <div className="flex flex-col justify-center items-center mt-12 w-[80%] md:w-1/2">
              <div className="font-SagarFont text-[#655b4b] dark:text-white">
                From France, Paris. I have rich experience in web design, also I
                am good at wordpress. I love to talk with you about our unique.
              </div>

              <div className="flex w-full sm:w-1/2  justify-around mt-6 ">
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
                        class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    ) : (
                      <img
                        src={fb}
                        alt="Normal Image"
                        class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    )}

                    <img
                      src={fbhover}
                      alt="Hover Image"
                      class="w-7 h-6  absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
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
                        class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    ) : (
                      <img
                        src={twitter}
                        alt="Normal Image"
                        class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    )}
                    <img
                      src={twitterh}
                      alt="Hover Image"
                      class="w-7 h-7 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
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
                        class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    ) : (
                      <img
                        src={insta}
                        alt="Normal Image"
                        class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    )}
                    <img
                      src={instah}
                      alt="Hover Image"
                      class="w-7 h-7 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                    />
                  </div>
                </a>
              </div>

              <div className="w-full flex justify-center items-center mt-2">
                <div className="group relative w-full sm:w-[70%] my-5 flex justify-center items-center">
                  <span className="w-full flex justify-center items-center uppercase font-SagarFont border-[2px] rounded-full border-black dark:border-white py-3 px-10 font-semibold text-sm z-10 group-hover:text-white dark:text-white dark:group-hover:text-black transition ease-in-out duration-500 group-hover:cursor-pointer active:scale-[95%]">
                    Download Cv
                  </span>
                  <span className="absolute w-full bg-[#29a587] rounded-full py-[22px] px-[93px] invisible group-hover:visible transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-[95%]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* for large devices */}
      {!isSmallScreen && (
        <div className="flex flex-row justify-center items-center max-w-screen-2xl mx-auto">
          {/* beginning of intro */}
          <div className=" ml-32 w-full">
            <div className="w-full justify-start items-center flex gap-2 ">
              <span className="font-SagarFont font-semibold uppercase dark:text-white">
                Hello,
              </span>
              <span className="font-SagarFont font-semibold uppercase text-[#29a587]">
                My name is
              </span>
            </div>
            <div className="w-full flex gap-3 justify-start items-center font-extrabold uppercase text-[#29a587] font-SagarFont text-5xl my-2 font-outline-2 drop-shadow-[0_1.2px_1.2px_rgba(93,136,83,0.9)]">
              <span>sagar </span> <span className="text-white">tandan</span>
            </div>
            <div className="flex gap-1 w-full justify-start items-start">
              <span className="uppercase font-SagarFont font-semibold dark:text-white">
                i am
              </span>
              <span className="uppercase font-SagarFont font-semibold text-[#29a587]">
                <TypeAnimation
                  sequence={[
                    "Web developer",
                    1000,
                    "App developer",
                    1000,
                    "Gym instructor",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 ">
              <div className="font-SagarFont text-[#423a2f] dark:text-white">
                From France, Paris. I have rich experience in web design, also I
                am good at wordpress. I love to talk with you about our unique.
              </div>

              <div className="flex w-full justify-start gap-5 mt-6 ">
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
                        class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    ) : (
                      <img
                        src={fb}
                        alt="Normal Image"
                        class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    )}
                    <img
                      src={fbhover}
                      alt="Normal Image"
                      class="w-7 h-6 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
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
                        class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    ) : (
                      <img
                        src={twitter}
                        alt="Normal Image"
                        class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    )}

                    <img
                      src={twitterh}
                      alt="Hover Image"
                      class="w-7 h-7 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
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
                        class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    ) : (
                      <img
                        src={insta}
                        alt="Normal Image"
                        class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                      />
                    )}
                    <img
                      src={instah}
                      alt="Hover Image"
                      class="w-7 h-7 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                    />
                  </div>
                </a>
              </div>

              <div className="w-full flex justify-start items-center mt-2">
                <div className="group relative w-full xl:w-[70%] my-5 flex justify-center items-center">
                  <span className="w-full flex justify-center items-center uppercase font-SagarFont border-[2px] rounded-full border-black dark:border-white py-3 px-10 font-semibold text-sm z-10 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition ease-in-out duration-500 group-hover:cursor-pointer active:scale-[95%]">
                    Download Cv
                  </span>
                  <span className="absolute w-full bg-[#29a587] rounded-full py-[22px] px-[93px] invisible group-hover:visible transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-[95%]"></span>
                </div>
              </div>
            </div>
          </div>

          {/* intro ended here */}

          <div className="flex flex-col lg:flex-row-reverse w-full mb-4 mr-32">
            <div className="w-[500px] h-[500px] relative flex justify-center items-center">
              <div className="w-[500px] h-[500px] rounded-full overflow-hidden relative">
                <div className="relative w-[400px] h-[400px] bg-[#29a587] rounded-full top-[109px] left-[50px]"></div>
                <img
                  src={sagar}
                  alt="Your Image"
                  class="w-[500px] h-[590px] z-20 object-cover object-center rounded-full absolute top-[45%] left-[54%] transform -translate-x-1/2 -translate-y-1/2"
                ></img>
              </div>
              <div className="border-[1px] border-black bg-white w-[200px] h-[70px] rounded-full z-30 absolute bottom-13 left-[-30px] dark:bg-gray-800 dark:border-white transition-all ease-in-out duration-300"></div>
              <div className="border-[1px] border-black bg-white w-[200px] h-[70px] rounded-full z-30 absolute bottom-2 right-3 dark:bg-gray-800 dark:border-white transition-all ease-in-out duration-300"></div>
            </div>
          </div>
        </div>
      )}

      <div id="skills" className="">
        <Professional />
      </div>

      <div id="contact" className="">
        <Contact />
      </div>
    </div>
  );
}
