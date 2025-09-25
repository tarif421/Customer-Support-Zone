import React, { use } from "react";
import MainCards from "./MainCards/MainCards";

const Main = ({ ticketsPromise }) => {
  const ticketsData = use(ticketsPromise);
  return (
    <section className="mt-[22px] max-w-[1280px] mx-auto grid grid-cols-12 px-8 ">
      <div className=" p-2  col-span-8  ">
        <div className=" grid grid-cols-2 w-full gap-4 ">
          {ticketsData.map((ticket) => (
            <MainCards ticket={ticket}></MainCards>
          ))}
          {/*  */}
        </div>
      </div>
      <aside className="col-span-4 bg-amber-600 w-full p-3">
        <div className="h-[100px] w-auto bg-black"></div>
      </aside>
    </section>
  );
};

export default Main;
