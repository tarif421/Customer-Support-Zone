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
  return (
    <>
      <body className="bg-[#F5F5F5]"></body>
      <Navbar></Navbar>

      <Banner></Banner>
      <Main ticketsPromise={ticketsPromise}></Main>
    </>
  );
}

export default App;
