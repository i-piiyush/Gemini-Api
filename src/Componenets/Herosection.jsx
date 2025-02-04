import React, { useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5"

const Herosection = () => {
    const [hidden,setHidden] = useState(false)
  return (
    <div className="   w-full h-screen flex flex-col justify-between items-center  py-[10%]">
      <div className={`${hidden === false ? `flex flex-col justify-between items-center gap-5` : `hidden`} `}>

        <h1 className="text-7xl font-bold">Hello, Admin</h1>
        <p className="font-semibold">
          are you worried about some thing?I am always here to help you😊💙
        </p>
        <code className="text-center w-[60%] opacity-75 font-extralight leading-[1.2]">
          "Feeling overwhelmed or just need someone to listen?
          <br />
          I'm here to support you—whether it's understanding your thoughts,
          finding clarity, or simply offering guidance. Let's navigate this
          together. 😊"
        </code>
      </div>
      <div className={`${hidden ? "block":"hidden"}`}>textt hunnn</div>
      <div className="flex flex-col">
        <textarea
          
          placeholder="You can share your feelings with me :)"
          className=" text-white px-5 w-md h-20 text-sm rounded-lg font-extralight "
        ></textarea>
        <div className="px-7 py-2 w-md h-15 text-sm rounded-lg chatEnter flex justify-end items-center">
            <span className=" text-black rounded-full " onClick={()=>{
                setHidden(true)
  
            }}>
                <IoArrowUpOutline size={42} className="bg-gray-50 hover:bg-gray-300  rounded-full p-3 cursor-pointer"/>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
