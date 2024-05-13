import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HamburgerIconWhite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimation, setAnimation] = useState("left-[100%]");
  const [activeMenuItem, setActiveMenuItem] = useState("home");

  const toggleIcon = () => {
    setIsOpen(!isOpen);
    setAnimation("animate-slide-out");
  };

  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 m-3 hover:cursor-pointer active:scale-90 ease-linear transition-all duration-300 relative z-50"
        onClick={toggleIcon}
      >
        {isOpen ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 6L18 18M6 18L18 6L6 18Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
            fill="white"
          />
        )}
      </svg>
      <ul
        className={`absolute p-5 flex flex-col gap-6 w-[80%] md:w-[30%] h-[100vh] top-0 items-center font-SagarFont font-semibold text-xl text-white bg-[#31363c] right-0 ${
          isOpen ? "animate-slide-in" : `${isAnimation}`
        }`}
      >
        <Link to="/">
          <li
            className={`pt-10 uppercase hover:text-[#29a587]  ${
              activeMenuItem === "home" ? "text-[#29a587]" : "text-white"
            }`}
            onClick={() => {
              setActiveMenuItem("home");
              toggleIcon();
            }}
          >
            Home
          </li>
        </Link>
        <a href="#skills">
          <li
            className={`hover:text-[#29a587] uppercase ${
              activeMenuItem === "Skills" ? "text-[#29a587]" : "text-white"
            }`}
            onClick={() => {
              setActiveMenuItem("Skills");
              toggleIcon();
            }}
          >
            Skills
          </li>
        </a>

        <a href="#projects">
          <li
            className={`hover:text-[#29a587] uppercase ${
              activeMenuItem === "projects" ? "text-[#29a587]" : "text-white"
            }`}
            onClick={() => {
              setActiveMenuItem("projects");
              toggleIcon();
            }}
          >
            Projects
          </li>
        </a>

        <a href="#contact">
          <li
            className={`hover:text-[#29a587] uppercase ${
              activeMenuItem === "contact" ? "text-[#29a587]" : "text-white"
            }`}
            onClick={() => {
              setActiveMenuItem("contact");
              toggleIcon();
            }}
          >
            Contact
          </li>
          </a>

      
      </ul>
    </div>
  );
};

    
    export default HamburgerIconWhite;
    