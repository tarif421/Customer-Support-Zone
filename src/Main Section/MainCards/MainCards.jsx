import React from "react";
import circle from "./../../assets/Ellipse 22.png";
import Aside from "../../AsideBox/Aside";

const MainCards = ({
  ticket,
  selectedTicket,
  setSelectedTicket,
  setProgress,
  progress,
}) => {
  const { id, title, description, status, customer, priority, createdAt } =
    ticket;

  const handleSelectedTicket = (sideBarTicket) => {
    setSelectedTicket([...selectedTicket, sideBarTicket]);
    setProgress(progress + 1);
  };
  return (
    <div
      onClick={() => {
        handleSelectedTicket(ticket);
      }}
      className=" h-[100px] bg-white p-2 border-2 border-gray-100 shadow-xs"
    >
      <div className="flex justify-between ">
        <h2 className="font-bold text-[13px]">{title}</h2>
        <p
          className={` ${
            status === "Open"
              ? "bg-[#B9F8CF]"
              : status === "In-Progress"
              ? "bg-[#F8F3B9] text-[#9C7700]   "
              : ""
          } px-2 flex gap-1 items-center rounded-full text-[8px]`}
        >
          <img
            className="text-[4px] h-[8px] w-[8px] text-[#9c770090]"
            src={circle}
            alt=""
          />
          {status}
        </p>
      </div>
      <p className="text-[12px]">{description}</p>
      <div className="flex justify-between  text-xs mt-2">
        <div className="flex gap-3 ">
          <p className="font-medium opacity-90">{id}</p>
          <h2
            className={`${
              priority === "High"
                ? "text-[#F83044]"
                : priority === "Medium"
                ? "text-[#FEBB0C]"
                : "text-[#02A53B]"
            } text-[12px] font-medium`}
          >
            {priority}
          </h2>
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
