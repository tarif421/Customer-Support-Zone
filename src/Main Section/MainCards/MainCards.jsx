import React from "react";

import Aside from "../../AsideBox/Aside";
import { toast } from "react-toastify";

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
    toast("in-progress");
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
          <span className="">
            <i
              class={`fa-solid fa-circle  text-[8px]  ${
                status === "Open"
                  ? "text-[#02A53B]"
                  : status === "In-Progress"
                  ? "text-[#9C7700]"
                  : ""
              }`}
            ></i>
          </span>
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
