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
import git from "../assets/github.png";
import wgit from "../assets/wgithub.png";
import ggit from "../assets/Ggithub.png";
import linked from "../assets/linkedin.png";
import glinked from "../assets/Glinkedin.png";
import wlinked from "../assets/wlinkedin.png";

import Professional from "./Professional";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext } from "../components/ThemeProvider.jsx";
import Developer from "../components/Developer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import FitnessMode from "../components/FitnessMode.jsx";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [display1, setDisplay1] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleDataFromChild = (data) => {
    // Update parent component state with data from child
    setDisplay(data);
  };

  const handleDataFromChild1 = (data) => {
    // Update parent component state with data from child
    setDisplay1(data);
  };

  // useEffect to set initial screen size and add event listener
  useEffect(() => {
    // Function to check if screen is small
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1023);
    };

    // Initial check
    checkScreenSize();

    // Event listener to update screen size when window is resized
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }); // Removed the empty dependency array

  const loadDeveloper = () => {
    setTimeout(() => {
      setDisplay(true);
    }, 300);
  };

  const loadFitness = () => {
    setTimeout(() => {
      setDisplay1(true);
    }, 300);
  };

  const handleLink = (link, title) => {
    // console.log(link);
    const newWindow = window.open(title, "_blank"); // Open a blank new tab/window
    newWindow.location.href = link; // Navigate to the desired URL after the delay
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {isSmallScreen && (
        <div
          className={`flex flex-col justify-center items-center w-full max-w-screen-lg pt-6`}
        >
          {/* beginning of intro */}
          <div className="w-full justify-center items-center flex gap-2 mx-auto">
            <span className="font-SagarFont font-semibold uppercase dark:text-white">
              Hello,
            </span>
            <span className="font-SagarFont font-semibold uppercase text-[#29a587]">
              My name is
            </span>
          </div>
          <div className="w-full flex gap-3 justify-center items-center font-extrabold uppercase text-[#29a587] font-SagarFont text-4xl my-2 font-outline-2 drop-shadow-[0_1.2px_1.2px_rgba(93,136,83,0.9)] flex-wrap">
            <span>sagar </span> <span className="text-white">tandan</span>
          </div>
          <div className="flex gap-1 w-full justify-center items-center">
            <span className="uppercase font-SagarFont font-semibold dark:text-white ">
              i am
            </span>

            <span className="uppercase font-SagarFont font-semibold text-[#29a587]">
              <TypeAnimation
                sequence={[
                  "Computer Engineer ",
                  1000,
                  "Web developer ",
                  1000,
                  "App developer ",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* intro ended here */}

          <div className="flex flex-col justify-center items-center lg:flex-row-reverse w-[90%] mx-auto">
            <div
              className={`w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative flex justify-center items-center mt-4 mx-auto`}
            >
              <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden relative">
                <div className="relative w-[250px] h-[250px] bg-[#29a587] rounded-full top-[55px] left-[25px] md:w-[400px] md:h-[400px] md:top-[109px] md:left-[50px]"></div>
                <img
                  src={sagar}
                  alt="Your Image"
                  class="w-[370px] h-[370px] z-20 md:w-[500px] md:h-[590px] object-cover object-center rounded-full absolute top-[43%] left-[55%] md:top-[45%] md:left-[54%] transform -translate-x-1/2 -translate-y-1/2"
                ></img>
              </div>

              <div className="flex flex-col rounded-full absolute bottom-13 -left-[30px] md:left-[-30px] transition-all ease-in-out duration-300 justify-center items-center z-40 hover:scale-105 active:scale-100">
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-[#2fc29e] opacity-20 rounded-full animate-pulse" />
                  <div
                    className="w-full rounded-full bg-[#2fc29e/90] h-full p-1 flex cursor-pointer"
                    onClick={loadDeveloper}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-[#29a587] to-[#2fc29e] rounded-full opacity-90 flex justify-center items-center">
                      <h1 className="text-white font-SagarFont font-semibold py-3 text-md transition-all ease-in-out duration-300 px-3">
                        &lt;Developer Mode /&gt;
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[160px] md:w-[200px] rounded-full absolute bottom-2 right-[1px] md:right-2 transition-all ease-in-out duration-300 justify-center items-center z-40 hover:scale-105 active:scale-100">
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-[#2fc29e] opacity-20 rounded-full animate-pulse" />

                  <div
                    className="w-full rounded-full bg-[#2fc29e/90] h-full p-1 flex cursor-pointer"
                    onClick={loadFitness}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-[#29a587] to-[#2fc29e] rounded-full opacity-90 flex justify-center items-center">
                      <h1 className="text-white font-SagarFont font-semibold py-3 text-md transition-all ease-in-out duration-300">
                        &lt;Fit Mode /&gt;
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-12 w-[95%]">
              <div className="font-SagarFont text-[#655b4b] dark:text-white flex flex-col gap-2 mb-3">
                <p>
                  From Gulmi, Nepal. I have good experience in web development,
                  building web apps from scratch with a strong grasp of both
                  frontend and backend. However, my expertise and passion lie
                  primarily in frontend development.
                </p>

                <p>
                  When I'm not coding, you'll find me at the gym, lifting
                  weights and staying fit. I focus on balancing both bytes and
                  biceps.
                </p>
              </div>

              <div className="flex w-full sm:w-1/2  justify-around mt-6 ">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      handleLink(
                        "https://github.com/sagar-tandan/",
                        "Sagar Tandan"
                      );
                    }, 300);
                  }}
                  class="group relative hover:cursor-pointer active:scale-95 transition-all ease-in-out duration-300"
                >
                  {darkMode ? (
                    <img
                      src={wgit}
                      alt="Normal Image"
                      class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                  ) : (
                    <img
                      src={git}
                      alt="Normal Image"
                      class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                  )}

                  <img
                    src={ggit}
                    alt="Hover Image"
                    class="w-7 h-6  absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>

                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      handleLink(
                        "https://www.linkedin.com/in/sagar-tandan-a1b3b2298/",
                        "Sagar Tandan"
                      );
                    }, 300);
                  }}
                  class="group relative hover:cursor-pointer active:scale-95 transition-all ease-in-out duration-300"
                >
                  {darkMode ? (
                    <img
                      src={wlinked}
                      alt="Normal Image"
                      class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                  ) : (
                    <img
                      src={linked}
                      alt="Normal Image"
                      class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                  )}

                  <img
                    src={glinked}
                    alt="Hover Image"
                    class="w-7 h-6  absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>

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

                {/* <div
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
                </div> */}

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
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setTimeout(() => {
                    handleLink(
                      "https://drive.google.com/file/d/1qCI_q0SKQxzs0lkd3XNNnRVtMbLLlTMH/view?usp=sharing",
                      "Sagar Tandan"
                    );
                  }, 100);
                }}
                className="w-full flex justify-center items-center mt-2"
              >
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
                    "Computer Engineer ",
                    1000,
                    "Web developer ",
                    1000,
                    "App developer ",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 w-[90%]">
              <div className="font-SagarFont text-[#655b4b] dark:text-white flex flex-col gap-2 mb-4">
                <p>
                  From Gulmi, Nepal. I have good experience in web development,
                  building web apps from scratch with a strong grasp of both
                  frontend and backend. However, my expertise and passion lie
                  primarily in frontend development.
                </p>

                <p>
                  When I'm not coding, you'll find me at the gym, lifting
                  weights and staying fit. I focus on balancing both bytes and
                  biceps.
                </p>
              </div>

              <div className="flex w-full justify-start gap-5 mt-6 ">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      handleLink(
                        "https://github.com/sagar-tandan/",
                        "Sagar Tandan"
                      );
                    }, 300);
                  }}
                  class="group relative hover:cursor-pointer active:scale-95 transition-all ease-in-out duration-300"
                >
                  {darkMode ? (
                    <img
                      src={wgit}
                      alt="Normal Image"
                      class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                  ) : (
                    <img
                      src={git}
                      alt="Normal Image"
                      class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                  )}

                  <img
                    src={ggit}
                    alt="Hover Image"
                    class="w-7 h-6  absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>

                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      handleLink(
                        "https://www.linkedin.com/in/sagar-tandan-a1b3b2298/",
                        "Sagar Tandan"
                      );
                    }, 300);
                  }}
                  class="group relative hover:cursor-pointer active:scale-95 transition-all ease-in-out duration-300"
                >
                  {darkMode ? (
                    <img
                      src={wlinked}
                      alt="Normal Image"
                      class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                  ) : (
                    <img
                      src={linked}
                      alt="Normal Image"
                      class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                  )}

                  <img
                    src={glinked}
                    alt="Hover Image"
                    class="w-7 h-6  absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>

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
              </div>

              <div className="w-full flex justify-start items-center mt-2">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      handleLink(
                        "https://drive.google.com/file/d/1qCI_q0SKQxzs0lkd3XNNnRVtMbLLlTMH/view?usp=sharing",
                        "Sagar Tandan"
                      );
                    }, 100);
                  }}
                  className="group relative w-full xl:w-[70%] my-5 flex justify-center items-center"
                >
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

              <div className="flex flex-col w-[200px] rounded-full absolute bottom-13 left-[-30px] transition-all ease-in-out duration-300 justify-center items-center z-40 hover:scale-105 active:scale-100">
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-[#2fc29e] opacity-20 rounded-full animate-pulse" />

                  <div
                    className="w-full rounded-full bg-[#2fc29e/90] h-full p-1 flex cursor-pointer"
                    onClick={loadDeveloper}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-[#29a587] to-[#2fc29e] rounded-full opacity-90 flex justify-center items-center">
                      <h1 className="text-white font-SagarFont font-semibold py-3 text-md transition-all ease-in-out duration-300">
                        &lt;Developer Mode /&gt;
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[200px] rounded-full absolute bottom-2 right-3 transition-all ease-in-out duration-300 justify-center items-center z-40 hover:scale-105 active:scale-100">
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-[#2fc29e] opacity-20 rounded-full animate-pulse" />

                  <div
                    className="w-full rounded-full bg-[#2fc29e/90] h-full p-1 flex cursor-pointer"
                    onClick={loadFitness}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-[#29a587] to-[#2fc29e] rounded-full opacity-90 flex justify-center items-center">
                      <h1 className="text-white font-SagarFont font-semibold py-3 text-md transition-all ease-in-out duration-300">
                        &lt;Fit Mode /&gt;
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {display && (
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 50,
            }}
          >
            <Developer sendDataToParent={handleDataFromChild} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {display1 && (
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 50,
            }}
          >
            <FitnessMode sendDataToParent={handleDataFromChild1} />
          </motion.div>
        )}
      </AnimatePresence>

      <div id="skills" className="max-w-screen-xl mx-auto">
        <Professional />
      </div>

      <div id="projects" className="max-w-screen-xl mx-auto">
        <Projects />
      </div>

      <div id="contact" className="max-w-screen-xl mx-auto">
        <Contact />
      </div>
    </div>
  );
}
