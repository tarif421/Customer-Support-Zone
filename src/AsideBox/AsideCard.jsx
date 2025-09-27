import React from "react";

const AsideCard = ({ tickets }) => {
  return (
    <div className="mb-2 mt-2 shadow-xs">
      <div className=" w-auto bg-white p-2 rounded-xs">
        <h2 className="font-semibold my-3">{tickets.title}</h2>
        <button className="bg-[#02A53B] text-white w-full p-1 mb-1 rounded-md ">
          Complete
        </button>
      </div>
    </div>
  );
};

export default AsideCard;
