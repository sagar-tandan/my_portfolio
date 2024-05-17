import React, { useEffect, useState } from "react";
import back from "../assets/Icons/back.png";
import TerminalDesign from "./TerminalDesign1";
import arrow2 from "../assets/Icons/arrow2.png";
import gmail from "../assets/Icons/gmaildev.png";
import twitter from "../assets/twitterh.png";
import insta from "../assets/instah.png";
const FitnessMode = ({ sendDataToParent }) => {
  const [currentCommand, setCurrentCommand] = useState("");
  const [isRight, setRight] = useState("true");
  const [outputs, setOutputs] = useState([
    <div>
      <TerminalDesign />
      <div>
        <img
          className="w-5 h-5 sm:w-7 sm:h-7 mx-4 sm:mx-8 mt-3 mb-1"
          src={arrow2}
          alt=""
        />
        <h1 className="text-white font-SagarFont text-lg sm:text-2xl font-semibold px-4 sm:px-8 mb-4">
          Welcome to Club !!
        </h1>
      </div>
    </div>,
  ]);
  const [galleryy, setGallery] = useState([
    {
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Gym%20Gallery%2F6c403e4a-6fe8-4e8b-a4c3-9f6db8378f97.jpeg?alt=media&token=e843b7fa-09d7-4e5e-a8cb-0a00d421a672",
    },
    {
      id: 2,
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Gym%20Gallery%2Ff0d6842e-5432-4371-9703-2f686890b7b8.jpeg?alt=media&token=738e3c07-e190-494d-b877-4b81c1594246",
    },
    {
      id: 3,
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Gym%20Gallery%2Fa70a443e-0687-4a60-8bd6-c81887c0b347.jpeg?alt=media&token=a6d2a710-60cd-46ff-8423-b453b35bba60",
    },
    {
      id: 4,
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Gym%20Gallery%2FScreenshot_17-5-2024_144010_www.instagram.com.jpeg?alt=media&token=5fd57d45-cc79-4c89-9b31-62f9100bb64a",
    },
    {
      id: 5,
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Gym%20Gallery%2F6cdea603-1fe4-4f85-8b86-f534166eba44.jpeg?alt=media&token=055b7b7f-478d-46a9-83e5-fc8c1a15c014",
    },
    {
      id: 6,
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Gym%20Gallery%2F43c7d168-ffb1-4f1a-bef5-18377619aae0.jpeg?alt=media&token=774a1dce-711d-41de-906a-92aaa11211a3",
    },
    {
      id: 7,
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Gym%20Gallery%2F4df51f4e-62c7-4031-8658-0d39cecb96dd.jpeg?alt=media&token=3249b67c-f456-4a40-aca2-294a3267716d",
    },
    {
      id: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Gym%20Gallery%2FScreenshot_17-5-2024_144112_www.instagram.com.jpeg?alt=media&token=b526250f-8fe6-40db-942b-f40e0183bc4c",
    },
  ]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      processCommand();
    }
  };

  const handleKeyPress1 = (event) => {
    if (event.key === "Enter") {
      setRight("false");
      processCommand1();
    }
  };

  const handleClick = () => {
    // Send data to parent component
    setTimeout(() => {
      sendDataToParent(false);
    }, 300);
  };

  useEffect(() => {
    // Prevent scrolling on background when Developer component is mounted
    document.body.classList.add("overflow-hidden");

    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    const outputDiv = document.getElementById("outputDiv");
    if (outputDiv) {
      outputDiv.scrollIntoView({ behavior: "smooth" });
    }
  }, [outputs]);

  const processCommand1 = () => {
    let newOutput;
    switch (currentCommand.toLowerCase()) {
      case "60":
        newOutput = (
          <div className="flex flex-col w-full my-8">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-green-600 outline-none bg-black opacity-95 w-full text-sm sm:text-lg font-SagarFont font-semibold mt-3">
                Yaaa buddy ! Light weight ..
              </h1>
            </div>

            <div className="flex flex-row gap-6 px-4 sm:px-8 mt-3">
              <div className="flex flex-col gap-1 justify-start items-start font-SagarFont font-semibold text-sm sm:text-lg text-green-600">
                <h1>bw</h1>
                <h1>pr</h1>
                <h1>split</h1>
                <h1>diet</h1>
                <h1>gallery</h1>
                <h1>contact</h1>
                <h1>clear</h1>
                <h1>exit</h1>
              </div>

              <div className="flex flex-col gap-1 justify-start items-start font-SagarFont font-medium text-sm sm:text-lg text-white">
                <h1>Show my current bodyweight and age</h1>
                <h1>Show my personal records on Gym</h1>
                <h1>Show my workout splits in details</h1>
                <h1>Display my whole day of eating</h1>
                <h1>Display some of my gym pictures</h1>
                <h1>Show my contact details</h1>
                <h1>Clear the Terminal</h1>
                <h1>Exit the Terminal</h1>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;

      default:
        newOutput = (
          <div className="flex flex-col w-full mt-8 mb-4">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-red-600 outline-none bg-black opacity-95 w-full font-SagarFont font-semibold text-lg mt-3">
                I think you need to hit the gym!
              </h1>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="font-SagarFont sm:font-semibold font-medium px-4 sm:px-8 text-white">
                Please try 'spot' to get help
              </h2>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;
    }
    setCurrentCommand("");
  };

  const processCommand = () => {
    let newOutput;
    switch (currentCommand.toLowerCase()) {
      case "spot":
        newOutput = (
          <div className="flex flex-col w-full my-8">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg font-SagarFont font-semibold mt-3">
                spot
              </h1>
            </div>

            <div className="flex flex-row gap-6 px-4 sm:px-8 mt-3">
              <div className="flex flex-col gap-1 justify-start items-start font-SagarFont font-semibold text-sm sm:text-lg text-green-600">
                <h1>bw</h1>
                <h1>pr</h1>
                <h1>split</h1>
                <h1>diet</h1>
                <h1>gallery</h1>
                <h1>contact</h1>
                <h1>clear</h1>
                <h1>exit</h1>
              </div>

              <div className="flex flex-col gap-1 justify-start items-start font-SagarFont font-medium text-sm sm:text-lg text-white">
                <h1>Show my current bodyweight and age</h1>
                <h1>Show my personal records on Gym</h1>
                <h1>Show my workout splits in details</h1>
                <h1>Display my whole day of eating</h1>
                <h1>Display some of my gym pictures</h1>
                <h1>Show my contact details</h1>
                <h1>Clear the Terminal</h1>
                <h1>Exit the Terminal</h1>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;

      case "bw":
        newOutput = (
          <div className="flex flex-col w-full my-8">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-semibold">
                bw
              </h1>
            </div>
            <div className="flex flex-row gap-4 justify-start items-start text-white mt-3 px-4 sm:px-8">
              <div className="flex flex-col font-SagarFont font-medium text-lg gap-2">
                <h1>Age</h1>
                <h1>Weight</h1>
              </div>

              <div className="text-red-600 flex flex-col font-SagarFont font-medium text-lg gap-2">
                <h1>24 years</h1>
                <h1>78Kg</h1>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;

      case "pr":
        newOutput = (
          <div className="flex flex-col w-full my-8">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-semibold">
                pr
              </h1>
            </div>
            <div className="flex flex-row gap-4 justify-start items-start text-white mt-3 px-4 sm:px-8">
              <div className="flex flex-col font-SagarFont font-medium text-lg gap-2">
                <h1>Squat</h1>
                <h1>Bench</h1>
                <h1>Dead</h1>
              </div>

              <div className="text-red-600 flex flex-col font-SagarFont font-medium text-lg gap-2">
                <h1>190Kg</h1>
                <h1>105Kg</h1>
                <h1>200Kg</h1>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;

      case "split":
        newOutput = (
          <div className="flex flex-col w-full my-8">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-semibold">
                split
              </h1>
            </div>

            <div className="w-full text-white flex flex-col gap-4 px-4 sm:px-8 mt-5">
              <div className="flex flex-col">
                <h1 className="font-SagarFont text-lg font-semibold">
                  Day 1: Push Day
                </h1>
                <div className="flex flex-row gap-4 font-SagarFont font-light">
                  <div className="flex flex-col ">
                    <h1>1. Incline DB Press</h1>
                    <h1>2. Flat Machine Press</h1>
                    <h1>3. Cable Chest Fly</h1>
                    <h1>4. DB Shoulder Press</h1>
                    <h1>5. Triceps Pushdown</h1>
                    <h1>6. Skull Crusher </h1>
                    <h1>6. Lateral Raise </h1>
                  </div>

                  <div className="flex flex-col">
                    <h1>3 sets X 12 reps</h1>
                    <h1>3 sets X 12 reps</h1>
                    <h1>2 sets X 15 reps</h1>
                    <h1>2 sets X 12 reps</h1>
                    <h1>3 sets X 15 reps</h1>
                    <h1>3 sets X 12 reps</h1>
                    <h1>120 reps</h1>
                  </div>
                </div>

                <h1 className="font-SagarFont text-lg font-semibold mt-5">
                  Day 2: Pull Day
                </h1>
                <div className="flex flex-row gap-4 font-SagarFont font-light">
                  <div className="flex flex-col ">
                    <h1>1. PullUps</h1>
                    <h1>2. Cable rows</h1>
                    <h1>3. Lats Pulldown</h1>
                    <h1>4. Rear Delt Fly</h1>
                    <h1>5. DB Shrugs</h1>
                    <h1>6. DB Alternate Curl </h1>
                    <h1>6. Hammer Curl </h1>
                  </div>

                  <div className="flex flex-col">
                    <h1>3 sets X AMRSP</h1>
                    <h1>3 sets X 12 reps</h1>
                    <h1>3 sets X 12 reps</h1>
                    <h1>2 sets X 12 reps</h1>
                    <h1>2 sets X 15 reps</h1>
                    <h1>3 sets X 12 reps</h1>
                    <h1>3 sets X 12 reps</h1>
                  </div>
                </div>

                <h1 className="font-SagarFont text-lg font-semibold mt-5">
                  Day 3: Leg Day
                </h1>
                <div className="flex flex-row gap-4 font-SagarFont font-light">
                  <div className="flex flex-col ">
                    <h1>1. Squats</h1>
                    <h1>2. Hamstring Curl</h1>
                    <h1>3. Leg Extension</h1>
                    <h1>4. Calves Raises</h1>
                  </div>

                  <div className="flex flex-col">
                    <h1>4 sets X 8reps (Heavy)</h1>
                    <h1>3 sets X 12 reps</h1>
                    <h1>3 sets X 12 reps</h1>
                    <h1>4 sets X 12 reps</h1>
                  </div>
                </div>

                <h1 className="font-SagarFont text-lg font-semibold mt-5">
                  Repeat for day 4,5,6 and day 7 Rest
                </h1>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;

      case "diet":
        newOutput = (
          <div className="flex flex-col w-full my-8">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-semibold">
                diet
              </h1>
            </div>

            <div className="w-full text-white flex flex-col gap-4 px-4 sm:px-8 mt-5">
              <div className="flex flex-col">
                <h1 className="font-SagarFont text-lg font-semibold">
                  Meal 1 : 600 Calories
                </h1>
                <div className="flex flex-row gap-4 font-SagarFont font-light">
                  <div className="flex flex-col ">
                    <h1>1. Brown Bread (4 slices)</h1>
                    <h1>2. Eggs (2) </h1>
                    <h1>3. Peanut Butter (16 gm)</h1>
                    <h1>4. Banana (1) </h1>
                  </div>

                  <div className="flex flex-col">
                    <h1>260 cal</h1>
                    <h1>144 cal</h1>
                    <h1>100 cal</h1>
                    <h1>100 cal</h1>
                  </div>
                </div>

                <h1 className="font-SagarFont text-lg font-semibold mt-5">
                  Meal 2 : 512 Calories
                </h1>
                <div className="flex flex-row gap-4 font-SagarFont font-light">
                  <div className="flex flex-col ">
                    <h1>1. Rice (150gm)</h1>
                    <h1>2. Yellow Moong Dal </h1>
                    <h1>3. Chana (50gm)</h1>
                  </div>

                  <div className="flex flex-col">
                    <h1>200 cal</h1>
                    <h1>162 cal</h1>
                    <h1>150 cal</h1>
                  </div>
                </div>

                <h1 className="font-SagarFont text-lg font-semibold mt-5">
                  Meal 3 : 650 Calories
                </h1>
                <div className="flex flex-row gap-4 font-SagarFont font-light">
                  <div className="flex flex-col ">
                    <h1>1. Soya Chunks (50gm)</h1>
                    <h1>2. Eggs (2) </h1>
                    <h1>3. Peanut Butter (16 gm)</h1>
                    <h1>4. Banana (1) </h1>
                    <h1>5. Brown Bread (2 Slices) </h1>
                  </div>

                  <div className="flex flex-col">
                    <h1>170 cal</h1>
                    <h1>144 cal</h1>
                    <h1>100 cal</h1>
                    <h1>100 cal</h1>
                    <h1>130 cal</h1>
                  </div>
                </div>

                <h1 className="font-SagarFont text-lg font-semibold mt-5">
                  Meal 4 : 456 cal
                </h1>
                <div className="flex flex-row gap-4 font-SagarFont font-light">
                  <div className="flex flex-col ">
                    <h1>1. White Oats (100gm)</h1>
                    <h1>2. Banana (1) </h1>
                  </div>

                  <div className="flex flex-col">
                    <h1>356 cal</h1>
                    <h1>100 cal</h1>
                  </div>
                </div>

                <h1 className="font-SagarFont text-lg font-semibold mt-5">
                  Meal 5 : 250 Calories
                </h1>
                <div className="flex flex-row gap-4 font-SagarFont font-light">
                  <div className="flex flex-col ">
                    <h1>1. Rice (100gm)</h1>
                    <h1>2. Chicken (200gm) </h1>
                    <h1>3. Veggies </h1>
                  </div>

                  <div className="flex flex-col">
                    <h1>129 cal</h1>
                    <h1>220 cal</h1>
                    <h1>--</h1>
                  </div>
                </div>

                <h1 className="font-SagarFont text-sm font-medium mt-5">
                  Nearly <span className="text-red-600"> 2700</span> Calories
                  (including oils and all) with{" "}
                  <span className="text-red-600"> 140gm + </span> protein , not
                  ignoring good fats and carbs
                </h1>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;

      case "contact":
        newOutput = (
          <div className="flex flex-col w-full my-8">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-semibold">
                contact
              </h1>
            </div>

            <div className="w-full flex flex-col gap-4 px-4 sm:px-8 mt-5">
              <div className="flex flex-row gap-2 justify-start items-center">
                <img className="w-7 h-7 p-[2px]" src={insta} alt="" />

                <h2
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open(
                        "https://www.instagram.com/sagartandan_/",
                        "_blank"
                      ); // Open the link in a new tab after 0.3 second
                    }, 300);
                  }}
                  className="text-lg hover:underline  font-SagarFont font-medium text-white hover:cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
                >
                  Sagartandan_
                </h2>
              </div>

              <div className="flex flex-row gap-2 justify-start items-center">
                <img className="w-7 h-7 p-1" src={twitter} alt="" />
                <h2
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open(
                        "https://twitter.com/SagarTanda882",
                        "_blank"
                      ); // Open the link in a new tab after 0.3 second
                    }, 300);
                  }}
                  className="text-lg hover:underline  font-SagarFont font-medium text-white hover:cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
                >
                  SagarTanda882
                </h2>
              </div>

              <div className="flex flex-row gap-2 justify-start items-center">
                <img className="w-7 h-7 p-1" src={gmail} alt="" />
                <h2
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("mailto:sagarchhetry333@gmail.com", "_blank"); // Open the link in a new tab after 0.3 second
                    }, 300);
                  }}
                  className="hover:underline text-lg font-SagarFont font-medium text-white hover:cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
                >
                  sagarchhetry333@gmail.com
                </h2>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);
        break;

      case "gallery":
        newOutput = (
          <div className="flex flex-col w-full my-8">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-semibold">
                gallery
              </h1>
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center gap-1 mt-6">
              {galleryy.map((items) => (
                <div key={items.id}>
                  <div>
                    <img
                      className="sm:w-[250px] sm:h-[250px] w-[500px] h-[250px] object-cover"
                      src={items.image}
                      alt={items.id}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);
        break;

      case "clear":
        setOutputs([]);
        break;

      case "exit":
        handleClick();
        break;

      default:
        newOutput = (
          <div className="flex flex-col w-full mb-4">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-semibold">
                {currentCommand}
              </h1>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="text-red-600 font-SagarFont sm:font-semibold font-medium px-4 sm:px-8 ">
                Invalid Command
              </h1>
              <h2 className="font-SagarFont sm:font-semibold font-medium px-4 sm:px-8 text-white">
                Please try 'spot' to get help
              </h2>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;
    }
    setCurrentCommand("");
  };

  return (
    <div className="w-full">
      <div className="fixed top-0 z-40 left-0 w-full h-full bg-slate-600 flex transition-opacity ease-in-out duration-1000 justify-center items-center opacity-[98%]">
        <div className="absolute flex items-center gap-2 justify-between mb-5 bg-slate-700 p-4 shadow-lg rounded-t-2xl top-[8%] w-[90%] max-w-screen-xl z-50 flex-wrap">
          <div className="flex flex-row gap-2">
            <div className="flex justify-center items-center border-[6px] sm:border-[9px] border-solid border-[#d45752] rounded-full w-[12px] h-[12px] sm:w-[18px] sm:h-[18px]"></div>
            <div className="border-[6px] sm:border-[9px] border-solid border-[#fbc20c] rounded-full w-[12px] h-[12px] sm:w-[18px] sm:h-[18px]"></div>
            <div className="border-[6px] sm:border-[9px] border-solid border-[#13d024] rounded-full w-[12px] h-[12px] sm:w-[18px] sm:h-[18px]"></div>
          </div>
          <h1 className="font-SagarFont font-medium text-md sm:text-lg text-white">
            Yoo!! Gym Buddy
          </h1>
          <img
            onClick={handleClick}
            className="w-5 h-5 sm:w-8 sm:h-8 hover:cursor-pointer active:scale-75 ease-in-out duration-500"
            src={back}
            alt="exit"
          />
        </div>
        <div className="bg-black overflow-auto z-40 absolute top-[10%] bottom-[10%] w-[90%] max-w-screen-xl rounded-b-2xl opacity-[100%] pt-20 pb-10 ">
          {outputs && (
            <div className="flex flex-col my-1">
              <div className="  mb-2">{outputs}</div>
              <TerminalDesign />
              <div className="flex flex-row gap-2 justify-start items-center">
                <img
                  className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                  src={arrow2}
                  alt="arrow"
                />
                {isRight == "true" ? (
                  <input
                    id="outputDiv"
                    className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-medium "
                    type="text"
                    value={currentCommand}
                    placeholder="How much is 20 + 20 ?"
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyPress={handleKeyPress1}
                  />
                ) : (
                  <input
                    id="outputDiv"
                    className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-medium "
                    type="text"
                    value={currentCommand}
                    placeholder="type 'spot' to get help"
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FitnessMode;
