import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../components/ThemeProvider.jsx";
import SlideUpComponent from "../components/SlideUpComponent.jsx";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { easeIn } from "framer-motion";

export default function Professional() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [width, setWidth] = useState(window.innerWidth);

  // const elementRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const screenwidth = window.innerWidth;
      setWidth(screenwidth);
    };

    //event listener
    window.addEventListener("resize", handleResize);

    //clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useGSAP(() => {
  //   const element = elementRef.current;

  //   gsap.fromTo(
  //     element,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       ease: "bounce.out", // Apply bounce effect
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "top 80%", // start when the top of the element is 80% from the top of the viewport
  //         end: "top 20%", // end when the top of the element is 20% from the top of the viewport
  //         scrub: true, // smooth scrubbing
  //       },
  //     }
  //   );
  // }, []);

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

        {width < 400 && (
          <div className="w-[90%] my-5">
            <SlideUpComponent>
              <div className="w-full p-8 flex flex-col gap-10 shadow-[#a6a097] dark:shadow-[#222f4d] shadow-sm  ">
                <div className="flex justify-between font-SagarFont font-semibold text-black dark:text-white">
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                        alt="html"
                      />
                      <h1>HTML</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/11516/11516361.png"
                        alt="css"
                      />
                      <h1>CSS</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                        alt="js"
                      />
                      <h1>JavaScript</h1>
                    </div>
                  </SlideUpComponent>
                </div>

                <div className="flex font-SagarFont font-semibold text-black dark:text-white justify-between">
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                        alt="react"
                      />
                      <h1>React</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                        alt="python"
                      />
                      <h1>Python</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/8637/8637091.png"
                        alt="ml"
                      />
                      <h1>ML</h1>
                    </div>
                  </SlideUpComponent>
                </div>

                <div className="flex font-SagarFont font-semibold text-black dark:text-white justify-between">
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2Ffirebase.png?alt=media&token=d76c211b-9795-4244-8065-8b1728626598"
                        alt="ml"
                      />
                      <h1>Firebase</h1>
                    </div>
                  </SlideUpComponent>

                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
                        alt="app"
                      />
                      <h1>Java</h1>
                    </div>
                  </SlideUpComponent>

                  <div className="w-8 h-8 lg:w-14 lg:h-14 flex flex-col gap-2 justify-center items-center"></div>
                </div>
              </div>
            </SlideUpComponent>
          </div>
        )}

        {width >= 400 && width <= 800 && (
          <div className="w-[90%] my-5">
            <SlideUpComponent>
              <div className="w-full shadow-[#a6a097] dark:shadow-[#222f4d] shadow-sm p-8 flex flex-col gap-10">
                <div className="flex justify-between font-SagarFont font-semibold text-black dark:text-white">
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14 img1"
                        src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                        alt="html"
                      />
                      <h1>HTML</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/11516/11516361.png"
                        alt="css"
                      />
                      <h1>CSS</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                        alt="js"
                      />
                      <h1>JavaScript</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                        alt="react"
                      />
                      <h1>React</h1>
                    </div>
                  </SlideUpComponent>
                </div>

                <div className="flex font-SagarFont font-semibold text-black dark:text-white justify-between">
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                        alt="python"
                      />
                      <h1>Python</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/8637/8637091.png"
                        alt="ml"
                      />
                      <h1>ML</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2Ffirebase.png?alt=media&token=d76c211b-9795-4244-8065-8b1728626598"
                        alt="ml"
                      />
                      <h1>Firebase</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
                        alt="app"
                      />
                      <h1>Java</h1>
                    </div>
                  </SlideUpComponent>
                </div>
              </div>
            </SlideUpComponent>
          </div>
        )}

        {width > 800 && (
          <div className="w-[90%] lg:w-[100%] my-5 ">
            <SlideUpComponent>
              <div className="w-full shadow-[#a6a097] dark:shadow-[#222f4d] shadow-sm px-8 py-10 flex flex-col gap-10">
                <div className="flex justify-between font-SagarFont font-semibold text-black dark:text-white">
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14 img1"
                        src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                        alt="html"
                      />
                      <h1>HTML</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/11516/11516361.png"
                        alt="css"
                      />
                      <h1>CSS</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                        alt="js"
                      />
                      <h1>JavaScript</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                        alt="react"
                      />
                      <h1>React</h1>
                    </div>
                  </SlideUpComponent>

                  <SlideUpComponent>
                    <div className="hidden md:flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                        alt="python"
                      />
                      <h1>Python</h1>
                    </div>
                  </SlideUpComponent>

                  <SlideUpComponent>
                    <div className="hidden md:flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/8637/8637091.png"
                        alt="ml"
                      />
                      <h1>ML</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="hidden md:flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2Ffirebase.png?alt=media&token=d76c211b-9795-4244-8065-8b1728626598"
                        alt="ml"
                      />
                      <h1>Firebase</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="hidden md:flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
                        alt="app"
                      />
                      <h1>Java</h1>
                    </div>
                  </SlideUpComponent>
                </div>

                <div className="flex md:hidden font-SagarFont font-semibold text-black dark:text-white justify-between">
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                        alt="python"
                      />
                      <h1>Python</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/8637/8637091.png"
                        alt="ml"
                      />
                      <h1>ML</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2Ffirebase.png?alt=media&token=d76c211b-9795-4244-8065-8b1728626598"
                        alt="ml"
                      />
                      <h1>Firebase</h1>
                    </div>
                  </SlideUpComponent>
                  <SlideUpComponent>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-8 h-8 lg:w-14 lg:h-14"
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
                        alt="app"
                      />
                      <h1>Java</h1>
                    </div>
                  </SlideUpComponent>
                </div>
              </div>
            </SlideUpComponent>
          </div>
        )}
      </div>
    </div>
  );
}
