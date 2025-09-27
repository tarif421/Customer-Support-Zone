import { useState } from "react";
import "./App.css";
import Banner from "./Banner";
import Main from "./Main Section/Main";

import Navbar from "./Navbar";

const fetchTickets = async () => {
  const res = await fetch("tickets.json");
  return res.json();
};
const ticketsPromise = fetchTickets();
function App() {
  const [progress, setProgress] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState([]);

  return (
    <>
      <body className="bg-[#F5F5F5]"></body>
      <Navbar></Navbar>

      <Banner progress={progress}></Banner>
      <Main
        ticketsPromise={ticketsPromise}
        selectedTicket={selectedTicket}
        setSelectedTicket={setSelectedTicket}
        setProgress={setProgress}
        progress={progress}
      ></Main>
    </>
  );
}

export default App;
