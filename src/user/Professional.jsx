import React,{useState,useEffect} from "react";
import SkillData from '../user/Data/SkillData.jsx';

export default function Professional() {
    const [skill,setSkill]= useState([]);

    useEffect(()=>{
        setSkill(SkillData)
    },[])

  return (
    <div className="flex flex-col justify-center items-center gap-3 max-w-screen-2xl 2xl:mx-auto md:mx-20 mx-10 lg:mx-16">
      <h1 className="uppercase font-SagarFont font-bold text-3xl tracking-wider mt-5">
        Professional skills
      </h1>
      <h2 className="flex gap-1 items-center justify-center mb-5">
        <span className="uppercase font-SagarFont font-semibold text-[#29a587] underline">
          My
        </span>
        <span className="uppercase font-SagarFont font-semibold">Talents</span>
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap">

      {skill.map(each => (
                <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 justify-center items-center my-5">
                <div className=" flex justify-between items-center font-semibold font-SagarFont p-1 text-md w-[80%]">
                  <h3>{each.name}</h3>
                  <div className="flex gap-1">
                    <span>{each.percentage}</span>
                    <span className="text-[#29a587]">%</span>
                  </div>
                </div>
      
                <p className="w-[80%] p-2 flex">
                 {each.description}
                </p>
      
                <div className="relative border-[1px] border-solid w-[95%] rounded-full mt-4 border-[#c4bfb8]">
                  <div className={`absolute border-[1px] border-solid border-black ${each.width} bottom-0 left-0 rounded-full`}></div>
                  <div className={`absolute border-[2px] w-6 h-6 border-solid border-black rounded-full -bottom-[9px] ${each.left} bg-[#29a587]`}></div>
                </div>
              </div>
            ))}

         
      </div>
    </div>
  );
}
