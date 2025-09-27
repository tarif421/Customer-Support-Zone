import React, { use } from "react";
import MainCards from "./MainCards/MainCards";
import Aside from "../AsideBox/Aside";

const Main = ({
  ticketsPromise,
  selectedTicket,
  setSelectedTicket,
  setProgress,
  progress,
}) => {
  const ticketsData = use(ticketsPromise);

  return (
    <section className="mt-[22px] max-w-[1280px] mx-auto grid grid-cols-12 px-8 ">
      <div className=" p-2  col-span-8  ">
        <h1 className="font-bold mb-3">Customer Tickets</h1>
        <div className=" grid grid-cols-2 w-full gap-4 ">
          {ticketsData.map((ticket) => (
            <MainCards
              ticket={ticket}
              selectedTicket={selectedTicket}
              setSelectedTicket={setSelectedTicket}
              setProgress={setProgress}
              progress={progress}
            ></MainCards>
          ))}
          {/*  */}
        </div>
      </div>
      <Aside selectedTicket={selectedTicket}></Aside>
    </section>
  );
};

export default Main;
