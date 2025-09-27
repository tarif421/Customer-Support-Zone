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
  const [resolved, setResolved] = useState(0);
  const [completedTicket, setCompletedTicket] = useState([]);

  return (
    <>
      <body className="bg-[#F5F5F5]"></body>
      <Navbar></Navbar>

      <Banner progress={progress} resolved={resolved}></Banner>
      <Main
        ticketsPromise={ticketsPromise}
        selectedTicket={selectedTicket}
        setSelectedTicket={setSelectedTicket}
        setProgress={setProgress}
        progress={progress}
        setCompletedTicket={setCompletedTicket}
        completedTicket={completedTicket}
        resolved={resolved}
        setResolved={setResolved}
      ></Main>
    </>
  );
}

export default App;
