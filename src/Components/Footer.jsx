import React from "react";

const Footer = () => {
  return (
    <div className="bg-black my-10 ">
      <div className="text-white flex gap-5 md:justify-between p-3 max-w-[1280px] mx-auto">
        <div>
          <h1 className="text-[9px] md:text-xs">CS — Ticket System</h1>
          <p className="text-[5px] md:font-xs text-[#f5f5f597] md:text-[10px] md:text-xs ">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry. Lorem Ipsum has been the <br /> industry's
            standard dummy text ever since the 1500s,
            <br /> when an unknown printer took a galley of type and <br />
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h1 className="text-[9px] md:text-xs">Company</h1>
          <div className="text-[5px] md:font-xs text-[#f5f5f597] text-xs ">
            <p>About us</p>
            <p>Our mission</p>
            <p>Contact Saled</p>
          </div>
        </div>
        <div>
          <h1 className="text-[9px] md:text-xs">Information</h1>
          <div className="text-[5px] md:font-xs text-[#f5f5f597] text-xs ">
            <p>Privecy policy</p>
            <p>Terms & Condition</p>
            <p>Join Us</p>
          </div>
        </div>
        <div>
          <h1 className="text-[9px] md:text-xs">Services</h1>
          <div className="text-[5px] font-sm md:font-xs text-[#f5f5f597] text-xs ">
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-[9px] md:text-xs">Socila Links</h1>
          <div className="text-[5px] md:font-xs text-[#f5f5f597] text-xs flex flex-col ">
            <span>Ticket System</span>
            <span>
              <i class="fa-brands fa-linkedin-in"></i> @CS — Ticket System
            </span>
            <span>
              <i class="fa-brands fa-twitter"></i> @CS — Ticket System
            </span>
            <span>
              <i class="fa-brands fa-instagram"></i> @CS — Ticket System
            </span>
          </div>
        </div>
      </div>

      <div className=" flex justify-center max-w-[1280px] mx-auto p-5">
        <h1 className="text-[#f5f5f595]">
          © 2025 CS — Ticket System. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
