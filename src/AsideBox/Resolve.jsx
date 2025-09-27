const Resolve = ({ completedTicket }) => {
  return (
    <div>
      <h1 className="font-bold">Resolve Task</h1>
      <div>
        {completedTicket.map((ticket) => (
          <div className=" w-auto bg-white p-2 rounded-xs">
            <h2 className="font-semibold my-3" key={ticket.id}>
              {ticket.title}
            </h2>
            <button className="bg-[#7280ad] text-white w-full p-1 mb-1 rounded-md ">
              <i class="fa-regular fa-circle-check"></i> Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resolve;
