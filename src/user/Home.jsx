import React, { useState, useEffect } from "react";
import sagartandan from "../assets/Experience.png";
import sagar from "../assets/sagarpng.png";
import sagartext from "../assets/sagartandanpng.png";
import TypedText from "../components/typedjs";
import fb from "../assets/fb.png";
import fbhover from "../assets/fbhover.png";
import insta from "../assets/insta.png";
import instah from "../assets/instah.png";
import twitter from "../assets/twitter.png";
import twitterh from "../assets/twitterh.png";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
  }, []);

  return (
    <div className="bg-[#ebe6df]">
      {isSmallScreen && (
        <div className="flex flex-col justify-center items-center max-w-screen-lg pt-10">
          {/* beginning of intro */}
          <div className="w-full justify-center items-center flex gap-2">
            <span className="font-SagarFont font-semibold uppercase">
              Hello,
            </span>
            <span className="font-SagarFont font-semibold uppercase text-[#29a587]">
              My name is
            </span>
          </div>
          <div className="w-full flex justify-center items-center font-extrabold uppercase text-[#29a587] font-SagarFont text-4xl my-2 font-outline-2 drop-shadow-[0_1.2px_1.2px_rgba(93,136,83,0.9)]">
            sagar tandan
          </div>
          <div className="flex gap-1 w-full justify-center items-center">
            <span className="uppercase font-SagarFont font-semibold ">
              i am{" "}
            </span>
            <TypedText />
          </div>

          {/* intro ended here */}

          <div className="flex flex-col justify-center items-center lg:flex-row-reverse w-full ">
            <div className={`w-[380px] h-[380px] md:w-[500px] md:h-[500px] relative flex justify-center items-center mt-4`}>
              <div className="w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden relative">
                <div className="relative w-[300px] h-[300px] bg-[#29a587] rounded-full top-[89px] left-[40px] md:w-[400px] md:h-[400px] md:top-[109px] md:left-[50px]"></div>
                <img
                  src={sagar}
                  alt="Your Image"
                  class="w-[470px] h-[470px] z-20 md:w-[500px] md:h-[590px] object-cover object-center rounded-full absolute top-[46%] left-[55%] md:top-[45%] md:left-[54%] transform -translate-x-1/2 -translate-y-1/2"
                ></img>
              </div>
              <div className="border-[1px] border-black bg-white w-[180px] h-[60px] md:w-[200px] md:h-[70px] rounded-full z-30 absolute bottom-13 left-[-30px] md:left-[-30px] " ></div>
              <div className="border-[1px] border-black bg-white w-[180px] h-[60px] md:w-[200px] md:h-[70px]  rounded-full z-30 absolute bottom-2 right-[1px] md:right-2"></div>
            </div>

            <div className="flex flex-col justify-center items-center mt-12 w-[80%] md:w-1/2">
              <div className="font-SagarFont text-[#655b4b]">
                From France, Paris. I have rich experience in web design, also I
                am good at wordpress. I love to talk with you about our unique.
              </div>

              <div className="flex w-full sm:w-1/2  justify-around mt-6 ">
                <div class="group relative hover:cursor-pointer">
                  <img
                    src={fb}
                    alt="Normal Image"
                    class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={fbhover}
                    alt="Hover Image"
                    class="w-7 h-6  absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>
                <div class="group relative hover:cursor-pointer">
                  <img
                    src={twitter}
                    alt="Normal Image"
                    class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={twitterh}
                    alt="Hover Image"
                    class="w-7 h-7 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>

                <div class="group relative hover:cursor-pointer">
                  <img
                    src={insta}
                    alt="Normal Image"
                    class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={instah}
                    alt="Hover Image"
                    class="w-7 h-7 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>
              </div>

              <div className="w-full flex justify-center items-center mt-2">
                <div className="group relative w-full sm:w-[70%] my-5 flex justify-center items-center">
                  <span className="w-full flex justify-center items-center uppercase font-SagarFont border-[2px] rounded-full border-black py-3 px-10 font-semibold text-sm z-10 group-hover:text-white transition ease-in-out duration-500 group-hover:cursor-pointer active:scale-[95%]">
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
          <div className=" ml-32 pt-10w-full">
            <div className="w-full justify-start items-center flex gap-2 ">
              <span className="font-SagarFont font-semibold uppercase">
                Hello,
              </span>
              <span className="font-SagarFont font-semibold uppercase text-[#29a587]">
                My name is
              </span>
            </div>
            <div className="w-full flex justify-start items-center font-extrabold uppercase text-[#29a587] font-SagarFont text-5xl my-2 font-outline-2 drop-shadow-[0_1.2px_1.2px_rgba(93,136,83,0.9)]">
              sagar tandan
            </div>
            <div className="flex gap-1 w-full justify-start items-start">
              <span className="uppercase font-SagarFont font-semibold ">
                i am
              </span>
              <TypedText />
            </div>

            <div className="flex flex-col justify-center items-center mt-8 ">
              <div className="font-SagarFont text-[#655b4b]">
                From France, Paris. I have rich experience in web design, also I
                am good at wordpress. I love to talk with you about our unique.
              </div>

              <div className="flex w-full justify-start gap-5 mt-6 ">
                <div class="group relative hover:cursor-pointer">
                  <img
                    src={fb}
                    alt="Normal Image"
                    class="w-7 h-6  transition duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={fbhover}
                    alt="Hover Image"
                    class="w-7 h-6  absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>
                <div class="group relative hover:cursor-pointer">
                  <img
                    src={twitter}
                    alt="Normal Image"
                    class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={twitterh}
                    alt="Hover Image"
                    class="w-7 h-7 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>

                <div class="group relative hover:cursor-pointer">
                  <img
                    src={insta}
                    alt="Normal Image"
                    class="w-7 h-7 transition duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={instah}
                    alt="Hover Image"
                    class="w-7 h-7 absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>
              </div>

              <div className="w-full flex justify-start items-center mt-2">
                <div className="group relative w-full xl:w-[70%] my-5 flex justify-center items-center">
                  <span className="w-full flex justify-center items-center uppercase font-SagarFont border-[2px] rounded-full border-black py-3 px-10 font-semibold text-sm z-10 group-hover:text-white transition ease-in-out duration-500 group-hover:cursor-pointer active:scale-[95%]">
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
              <div className="border-[1px] border-black bg-white w-[200px] h-[70px] rounded-full z-30 absolute bottom-13 left-[-30px]"></div>
              <div className="border-[1px] border-black bg-white w-[200px] h-[70px] rounded-full z-30 absolute bottom-2 right-3"></div>
            </div>
          </div>
        </div>
      )}
   </div>
  );
}
