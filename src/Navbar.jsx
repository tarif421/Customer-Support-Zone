import React from "react";

const Navbar = () => {
  return (
    <div class="navbar  shadow-sm max-w-[1280px] mx-auto px-4 md:px-8 bg-white">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">CS — Ticket System</a>
      </div>
      <div class="hidden md:flex">
        <ul className="flex gap-4 text-sm items-center">
          <li className="  flex gap-3 text-xs items-center">
            <a>Home</a>
            <a>FAQ</a>
            <a>Changelog</a>
            <a>Blog</a>
            <a>Download</a>
            <a>Contact</a>
            <button className="text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 ">
              + New Ticket
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
