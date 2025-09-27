import React from "react";
import AsideCard from "./AsideCard";
import Resolve from "../Components/Resolve";

const Aside = ({ selectedTicket }) => {
  return (
    <aside className="col-span-4 w-full p-3 ">
      <h1 className="font-bold">Task Status</h1>
      {selectedTicket.length == 0 && (
        <p className="text-xs mb-3">Select a ticket to add to Task Status</p>
      )}
      {selectedTicket.map((tickets) => (
        <AsideCard tickets={tickets}></AsideCard>
      ))}
      <Resolve></Resolve>
    </aside>
  );
};

export default Aside;
