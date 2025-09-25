import React from "react";
import circle from "./../../assets/Ellipse 22.png";

const MainCards = ({ ticket }) => {
  console.log(ticket);
  const { id, title, description, status, customer, priority, createdAt } =
    ticket;
  return (
    <div className=" h-[100px] bg-white p-2 border-2 border-gray-100 shadow-xs">
      <div className="flex justify-between ">
        <h2 className="font-bold text-[13px]">{title}</h2>
        <p className=" bg-[#B9F8CF] px-2 flex gap-1 items-center rounded-full">
          <img className="text-[4px] h-[13px] w-[12px]" src={circle} alt="" />
          {status}
        </p>
      </div>
      <p className="text-[12px]">{description}</p>
      <div className="flex justify-between  text-xs mt-2">
        <div className="flex gap-3 ">
          <p className="font-medium opacity-90">{id}</p>
          <h2 className="text-red-500 text-[12px] font-medium">{priority}</h2>
        </div>
        <div className="flex gap-3 ">
          <p className="font-semibold opacity-90 text-[14px]">{customer}</p>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
