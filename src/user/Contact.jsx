import React, { useContext, useState } from "react";
import address from "../assets/Icons/address.png";
import addressW from "../assets/Icons/addressW.png";
import contact from "../assets/Icons/contact.png";
import contactW from "../assets/Icons/contactW.png";
import freela from "../assets/Icons/freela.png";
import freelaW from "../assets/Icons/freelaW.png";
import mail from "../assets/Icons/mail.png";
import mailW from "../assets/Icons/mailW.png";
import ContactForm from "../components/ContactForm.jsx";
import SlideLeftComponent from "../components/SlideLeftComponent.jsx";
import SlideUpComponent from "../components/SlideUpComponent.jsx";
import { ThemeContext } from "../components/ThemeProvider.jsx";

export default function Contact() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const makeCall = (phoneNumber) => {
    // Function to make a call
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = (emailAddress) => {
    // Function to open email client with pre-filled information
    window.location.href = `mailto:${emailAddress}`;
  };

  const openInMaps = (location) => {
    // Function to open location in Google Maps
    setTimeout(() => {
      const newWindow = window.open("location", "_blank"); // Open a blank new tab/window
      newWindow.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        location
      )}`; // Navigate to the desired URL after the delay
    }, 100);
  };

  return (
    <div>
      <div className="flex justify-center items-center w-full flex-col px-6">
        <div className="flex flex-col justify-center items-center gap-3 w-full max-w-screen-2xl 2xl:mx-auto md:mx-20 mx-10 lg:mx-5 pt-16">
          <SlideUpComponent>
            <h2 className="uppercase font-SagarFont font-bold text-lg lg:text-3xl tracking-wider mt-5 text-black dark:text-white">
              Contact me
            </h2>
          </SlideUpComponent>
          <SlideUpComponent>
            <div className="flex gap-2 justify-center items-center">
              <span className="font-SagarFont font-semibold text-sm lg:text-md uppercase text-[#29a587] underline">
                let's
              </span>
              <span className="font-SagarFont font-semibold text-sm lg:text-md text-black dark:text-white">
                Talk about ideas
              </span>
            </div>
          </SlideUpComponent>

          {/* div for both loc and contactform */}
          <div className="flex flex-col w-full md:flex-row ">
            {/* div to wrap up location */}
            <div className="mt-12 w-[95%] flex flex-col md:w-[60%] lg:w-[80%] lg:gap-12 gap-8 mx-auto">
              {/* ADDRESS START HERE */}
              <SlideLeftComponent>
                <div className="flex gap-6 lg:gap-20 w-full justify-start items-center ">
                  <div className="relative border-[2px] rounded-full w-9 h-9 lg:w-14 lg:h-14 border-black dark:border-white flex justify-center items-center">
                    <img
                      className="w-8 h-8 p-[5px] lg:w-11 lg:h-11 lg:p-[6px]"
                      src={darkMode ? addressW : address}
                      alt=""
                    />
                    <div className="absolute border-[1px] w-[50%] right-[-50%] lg:w-full lg:right-[-100%] dark:border-white border-black"></div>
                  </div>

                  <div className="flex flex-col mt-4">
                    <h3 className="font-SagarFont font-semibold text-black dark:text-white tracking-wider text-lg lg:text-xl">
                      Address
                    </h3>
                    <h4
                      className="font-SagarFont font-light dark:text-[#a4a6a9] text-[#79808b] text-sm lg:text-lg hover:cursor-pointer hover:underline active:scale-95 transition-all ease-in-out duration-300"
                      onClick={() => {
                        openInMaps("chhatrakot,Gulmi,Nepal");
                      }}
                    >
                      Chhatrakot, Gulmi, Nepal
                    </h4>
                  </div>
                </div>
              </SlideLeftComponent>

              {/* FREELANCE START HERE */}
              <SlideLeftComponent>
                <div className="flex gap-6 lg:gap-20 w-full justify-start items-center">
                  <div className="relative border-[2px] rounded-full w-9 h-9 lg:w-14 lg:h-14 border-black dark:border-white flex justify-center items-center">
                    <img
                      className="w-8 h-8 p-[5px] lg:w-11 lg:h-11 lg:p-[6px]"
                      src={darkMode ? freelaW : freela}
                      alt=""
                    />
                    <div className="absolute border-[1px] w-[50%] right-[-50%] lg:w-full lg:right-[-100%] dark:border-white border-black"></div>
                  </div>

                  <div className="flex flex-col mt-4">
                    <h3 className="font-SagarFont font-semibold text-black dark:text-white tracking-wider text-lg lg:text-xl">
                      Freelance
                    </h3>
                    <h4 className="font-SagarFont font-light dark:text-[#a4a6a9] text-[#79808b] text-sm lg:text-lg">
                      Available Right Now
                    </h4>
                  </div>
                </div>
              </SlideLeftComponent>

              <SlideLeftComponent>
                {/* EMAIL START HERE */}
                <div className="flex gap-6 lg:gap-20 w-full justify-start items-center">
                  <div className="relative border-[2px] rounded-full w-9 h-9 lg:w-14 lg:h-14 border-black dark:border-white flex justify-center items-center">
                    <img
                      className="w-8 h-8 p-[5px] lg:w-11 lg:h-11 lg:p-[6px]"
                      src={darkMode ? mailW : mail}
                      alt=""
                    />
                    <div className="absolute border-[1px] w-[50%] right-[-50%] lg:w-full lg:right-[-100%] dark:border-white border-black"></div>
                  </div>

                  <div className="flex flex-col mt-4">
                    <h3 className="font-SagarFont font-semibold text-black dark:text-white tracking-wider text-lg lg:text-xl">
                      Email
                    </h3>
                    <h4
                      className="font-SagarFont font-light dark:text-[#a4a6a9] text-[#79808b] text-sm lg:text-lg  hover:cursor-pointer hover:underline active:scale-95 transition-all ease-in-out duration-300"
                      onClick={() => {
                        sendEmail("sagarchhetry333@gmail.com");
                      }}
                    >
                      sagarchhetry333@gmail.com
                    </h4>
                  </div>
                </div>
              </SlideLeftComponent>

              <SlideLeftComponent>
                {/* PHONE START HERE */}
                <div className="flex gap-6 lg:gap-20 w-full justify-start items-center ">
                  <div className="relative border-[2px] rounded-full w-9 h-9 lg:w-14 lg:h-14 border-black dark:border-white flex justify-center items-center">
                    <img
                      className="w-8 h-8 p-[5px] lg:w-11 lg:h-11 lg:p-[6px]"
                      src={darkMode ? contactW : contact}
                      alt=""
                    />
                    <div className="absolute border-[1px] w-[50%] right-[-50%] lg:w-full lg:right-[-100%] dark:border-white border-black"></div>
                  </div>

                  <div className="flex flex-col mt-4">
                    <h3 className="font-SagarFont font-semibold text-black dark:text-white tracking-wider text-lg lg:text-xl">
                      Phone
                    </h3>
                    <h4
                      className="font-SagarFont font-light dark:text-[#a4a6a9] text-[#79808b] text-sm lg:text-lg hover:cursor-pointer hover:underline active:scale-95 transition-all ease-in-out duration-300"
                      onClick={() => {
                        makeCall("+977960788076");
                      }}
                    >
                      +977-9860788076
                    </h4>
                  </div>
                </div>
              </SlideLeftComponent>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
