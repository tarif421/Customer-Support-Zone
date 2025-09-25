import React from "react";
import vector1 from "./assets/vector1.png";

const Banner = () => {
  return (
    <div className=" p-8 max-w-[1280px] mx-auto grid grid-cols-2 gap-5">
      <div className="h-[180px] w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center  relative ">
        <div className=" absolute left-0 top-0 h-auto ">
          <img className="" src={vector1} alt="" />
        </div>
        <div className=" absolute right-0 top-0 h-auto scale-x-[-1]">
          <img className="" src={vector1} alt="" />
        </div>

        <h1 className="text-2xl text-white">In-Progress</h1>
        <p className="text-white text-2xl">0</p>
      </div>

      <div className="h-150px w-full bg-gradient-to-r from-[#54CF68] to-[#00827A] flex flex-col justify-center items-center relative">
        <div className=" absolute left-0 top-0 h-auto">
          <img className="" src={vector1} alt="" />
        </div>
        <div className=" absolute right-0 top-0 h-auto scale-x-[-1]">
          <img className="" src={vector1} alt="" />
        </div>
        <h1 className="text-2xl text-white">Resolved</h1>
        <p className="text-white text-2xl">0</p>
      </div>
    </div>
  );
};

export default Banner;
