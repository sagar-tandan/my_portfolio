import React, { useEffect, useState } from "react";
import back from "../assets/Icons/back.png";
import TerminalDesign from "./TerminalDesign";
import sagar from "../assets/tandan.jpeg";
import arrow2 from "../assets/Icons/arrow2.png";
import github from "../assets/Icons/github.png";
import gmail from "../assets/Icons/gmaildev.png";
import twitter from "../assets/twitterh.png";
import insta from "../assets/instah.png";
import SkillDeveloper from "./SkillDeveloper";
const Developer = ({ sendDataToParent }) => {
  const [currentCommand, setCurrentCommand] = useState("");
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
          Welcome to my Terminal !!
        </h1>
      </div>
    </div>,
  ]);
  const [project, SetProject] = useState([
    {
      id: 0,
      title: "YT Comments Analyzer",
      category: "Machine Learning, Web Development",
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2FExperience.png?alt=media&token=5ba0574d-ec02-4f08-b652-cbff9f142dc6",
      link: "https://youtubecommentsanalyzer.netlify.app/",
      github: "https://github.com/sagar-tandan/Yt-Comment-Analyzer",
    },
    {
      id: 1,
      title: "Veshraj Portfolio",
      category: "Web Development",
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2FExperience%20(1).png?alt=media&token=c9ba121c-4d07-4ad1-bf06-9cd57a3c9d7a",
      link: "https://veshrajpangeni.com.np/",
      github: "https://github.com/sagar-tandan/vesh_portfolio",
    },
    {
      id: 2,
      title: "Project K",
      category: "App Development",
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2FProjectK.png?alt=media&token=3f62600a-853d-429a-a8bf-5e1064ca7614",
      link: "https://drive.google.com/file/d/12KS0GsNzcVNOqLH5UdfKPjADuDsOg89o/view?usp=sharing",
      github: "https://github.com/sagar-tandan/projectK",
    },
    {
      id: 3,
      title: "Life Hacks Ultimate",
      category: "App Development",
      image:
        "https://firebasestorage.googleapis.com/v0/b/images-bf03f.appspot.com/o/Uploads%2FExperience%20(2).png?alt=media&token=1efca77f-1f36-406d-9101-61b3de494af9",
      link: "https://drive.google.com/file/d/1Sa8-4KG0wLjnQrhAh_jDboQhQuT9EWMI/view?usp=drive_link",
    },
  ]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      processCommand();
    }
  };

  const handleClick = () => {
    // Send data to parent component
    setTimeout(() => {
      sendDataToParent(false);
    }, 300);
  };

  useEffect(() => {
    const outputDiv = document.getElementById("outputDiv");
    if (outputDiv) {
      outputDiv.scrollIntoView({ behavior: "smooth" });
    }
  }, [outputs]);

  const processCommand = () => {
    let newOutput;
    switch (currentCommand.toLowerCase()) {
      case "help":
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
                help
              </h1>
            </div>

            <div className="flex flex-row gap-6 px-4 sm:px-8 mt-3">
              <div className="flex flex-col gap-1 justify-start items-start font-SagarFont font-semibold text-sm sm:text-lg text-green-600">
                <h1>bio</h1>
                <h1>skills</h1>
                <h1>projects</h1>
                <h1>contact</h1>
                <h1>clear</h1>
                <h1>exit</h1>
              </div>

              <div className="flex flex-col gap-1 justify-start items-start font-SagarFont font-medium text-sm sm:text-lg text-white">
                <h1>Show my bio information</h1>
                <h1>List out all my skills</h1>
                <h1>List out my projects</h1>
                <h1>Show my contact details</h1>
                <h1>Clear the Terminal</h1>
                <h1>Exit the Terminal</h1>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;
      case "bio":
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
                bio
              </h1>
            </div>
            <div className="flex flex-col gap-1 justify-start items-start text-white px-4 sm:px-8">
              <div className="flex w-full h-[100px] justify-start items-center overflow-hidden mt-2 gap-3">
                <img
                  className="w-[100px] h-[100px] rounded-full object-cover"
                  src={sagar}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="font-SagarFont font-medium text-sm sm:text-lg">
                    Sagar Tandan
                  </h1>
                  <h2 className="font-light font-SagarFont text-sm">
                    A computer engineer
                  </h2>
                </div>
              </div>
              <p className="font-SagarFont font-light text-sm sm:font-medium">
                👋Hello there! I am Sagar Tandan. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Earum, obcaecati.
              </p>
              <div className="flex flex-col sm:flex-row justify-between sm:w-full md:w-[60%] flex-wrap max-w-screen-xl">
                <div className="flex gap-0 justify-start items-center">
                  <img className="w-7 h-7 p-1" src={insta} alt="" />
                  <a
                    href="https://www.instagram.com/sagartandan_/"
                    target="_blank"
                  >
                    <h2 className="text-sm font-SagarFont font-medium text-[#2da689] hover:cursor-pointer active:scale-95 transition-all duration-300 ease-in-out">
                      Sagartandan_
                    </h2>
                  </a>
                </div>

                <div className="flex gap-0 justify-start items-center">
                  <img className="w-7 h-7 p-1" src={github} alt="" />
                  <a href="https://github.com/sagar-tandan" target="_blank">
                    <h2 className="text-sm font-SagarFont font-medium text-[#2da689] hover:cursor-pointer active:scale-95 transition-all duration-300 ease-in-out">
                      sagar-tandan
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;

      case "projects":
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
                projects
              </h1>
            </div>

            <div className="w-full flex flex-col gap-4 px-4 sm:px-8 mt-5">
              {project.map((items) => (
                <div key={items.id}>
                  <div className="flex flex-row gap-4 justify-start items-start  w-full sm:w-[70%] max-w-screen-lg">
                    <div className="flex w-[70%] sm:w-[80%] gap-2 overflow-hidden rounded-xl">
                      <img
                        className="w-full h-[100px] sm:h-[120px] md:h-[130px] lg:h-[150px] object-cover"
                        src={items.image}
                        alt=""
                      />
                    </div>
                    <div className=" font-SagarFont font-light sm:font-medium text-sm sm:text-lg w-full mt-3 flex-col">
                      <a
                        // href={items.link}
                        onClick={(e) => {
                          e.preventDefault();
                          setTimeout(() => {
                            window.open(items.link, "_blank"); // Open the link in a new tab after 0.3 second
                          }, 300);
                        }}
                      >
                        <h1 className="text-white w-full hover:cursor-pointer hover:underline active:scale-95 transition-all  ease-in-out duration-500">
                          {items.title}
                        </h1>
                      </a>
                      <h2 className="text-[#2da689] w-full">
                        {items.category}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
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
                <img className="w-7 h-7 p-1" src={github} alt="" />

                <h2
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("https://github.com/sagar-tandan", "_blank"); // Open the link in a new tab after 0.3 second
                    }, 300);
                  }}
                  className="text-lg font-SagarFont font-medium text-[#2da689] hover:cursor-pointer hover:underline active:scale-95 transition-all duration-300 ease-in-out"
                >
                  sagar-tandan
                </h2>
              </div>

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
                  className="text-lg hover:underline  font-SagarFont font-medium text-[#2da689] hover:cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
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
                  className="text-lg hover:underline  font-SagarFont font-medium text-[#2da689] hover:cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
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
                  className="hover:underline text-lg font-SagarFont font-medium text-[#2da689] hover:cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
                >
                  sagarchhetry333@gmail.com
                </h2>
              </div>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);
        break;

      case "skills":
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
                skills
              </h1>
            </div>
            <SkillDeveloper />
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
          <div className="flex flex-col w-full mt-8 mb-4">
            <TerminalDesign />
            <div className="flex flex-row gap-2 justify-start items-center">
              <img
                className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                src={arrow2}
                alt=""
              />
              <h1 className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3">
                {currentCommand}
              </h1>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="text-red-600 font-SagarFont sm:font-semibold font-medium px-4 sm:px-8 ">
                Invalid Command
              </h1>
              <h2 className="font-SagarFont sm:font-semibold font-medium px-4 sm:px-8 text-white">
                Please try 'help' to view the command
              </h2>
            </div>
          </div>
        );
        setOutputs([...outputs, newOutput]);

        break;
    }
    setCurrentCommand("");
  };

  useEffect(() => {
    // Prevent scrolling on background when Developer component is mounted
    document.body.classList.add("overflow-hidden");

    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="w-full">
      <div className="fixed top-0 z-40 left-0 w-full h-full bg-slate-600 flex transition-opacity ease-in-out duration-1000 justify-center items-center opacity-[98%]">
        <div className="absolute flex items-center gap-2 justify-between mb-5 bg-slate-700 p-4 shadow-lg rounded-t-2xl top-[9%] w-[90%] max-w-screen-xl z-50 flex-wrap">
          <div className="flex flex-row gap-2">
            <div className="flex justify-center items-center border-[6px] sm:border-[9px] border-solid border-[#d45752] rounded-full w-[12px] h-[12px] sm:w-[18px] sm:h-[18px]"></div>
            <div className="border-[6px] sm:border-[9px] border-solid border-[#fbc20c] rounded-full w-[12px] h-[12px] sm:w-[18px] sm:h-[18px]"></div>
            <div className="border-[6px] sm:border-[9px] border-solid border-[#13d024] rounded-full w-[12px] h-[12px] sm:w-[18px] sm:h-[18px]"></div>
          </div>
          <h1 className="font-SagarFont font-medium text-md sm:text-lg text-white">
            Sagar Tandan
          </h1>
          <img
            onClick={handleClick}
            className="w-5 h-5 sm:w-8 sm:h-8 hover:cursor-pointer active:scale-75 ease-in-out duration-500"
            src={back}
            alt="exit"
          />
        </div>
        <div className="bg-black  overflow-auto no-scrollbar z-40 absolute top-[10%] bottom-[10%] w-[90%] max-w-screen-xl rounded-2xl opacity-[100%] pt-20 pb-10 ">
          {/* <TerminalDesign />
          <div>
            <img
              className="w-5 h-5 sm:w-8 sm:h-8 mx-4 sm:mx-8 mt-3 mb-1"
              src={arrow2}
              alt=""
            />
            <h1 className="text-white font-SagarFont text-2xl font-semibold px-4 sm:px-8 ">
              Hi there!
            </h1>
          </div> */}

          {outputs && (
            <div className="flex flex-col my-4">
              <div className="  mb-2">{outputs}</div>
              <TerminalDesign />
              <div className="flex flex-row gap-2 justify-start items-center">
                <img
                  className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 mt-3 mb-1"
                  src={arrow2}
                  alt="arrow"
                />
                <input
                  id="outputDiv"
                  className="bg-none text-white outline-none bg-black opacity-95 w-full text-sm sm:text-lg mt-3 font-SagarFont font-medium "
                  type="text"
                  value={currentCommand}
                  placeholder="type 'help' for viewing commands"
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Developer;
