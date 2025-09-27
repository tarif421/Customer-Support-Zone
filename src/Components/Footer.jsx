import React from "react";

const Footer = () => {
  return (
    <div className="bg-black my-10 ">
      <div className="text-white flex justify-between p-3 max-w-[1280px] mx-auto">
        <div>
          <h1>CS — Ticket System</h1>
          <p className="font-xs text-[#f5f5f597] text-xs ">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry. Lorem Ipsum has been the <br /> industry's
            standard dummy text ever since the 1500s,
            <br /> when an unknown printer took a galley of type and <br />
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h1>Company</h1>
          <div className="font-xs text-[#f5f5f597] text-xs ">
            <p>About us</p>
            <p>Our mission</p>
            <p>Contact Saled</p>
          </div>
        </div>
        <div>
          <h1>Information</h1>
          <div className="font-xs text-[#f5f5f597] text-xs ">
            <p>Privecy policy</p>
            <p>Terms & Condition</p>
            <p>Join Us</p>
          </div>
        </div>
        <div>
          <h1>Services</h1>
          <div className="font-xs text-[#f5f5f597] text-xs ">
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1>Socila Links</h1>
          <div className="font-xs text-[#f5f5f597] text-xs flex flex-col ">
            <span>
              {" "}
              <i class="fa-brands fa-facebook"></i> @CS — Ticket System
            </span>
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
    </div>
  );
};

export default Footer;
