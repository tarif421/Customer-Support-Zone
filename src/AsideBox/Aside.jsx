import Resolve from "./AsideCard";
import AsideCard from "./AsideCard";

const Aside = ({
  selectedTicket,
  completedTicket,
  setCompletedTicket,
  setResolved,
  resolved,
  setSelectedTicket,
  setProgress,
  progress,
}) => {
  const handleCompletedTicket = (id) => {
    const completeTicket = selectedTicket.find((tickets) => tickets.id === id);
    const updatedTicket = selectedTicket.filter((tickets) => tickets.id !== id);

    setCompletedTicket((prev) => [...prev, completeTicket]);
    setSelectedTicket(updatedTicket);
    setResolved(resolved + 1);
    setProgress(progress - 1);
  };
  return (
    <aside className="col-span-4 w-full p-3 ">
      <h1 className="font-bold">Task Status</h1>
      {selectedTicket.length == 0 && (
        <p className="text-xs mb-3">Select a ticket to add to Task Status</p>
      )}
      {selectedTicket.map((tickets) => (
        <AsideCard
          tickets={tickets}
          handleCompleted={handleCompletedTicket}
        ></AsideCard>
      ))}
      <Resolve completedTicket={completedTicket}></Resolve>
    </aside>
  );
};

export default Aside;
