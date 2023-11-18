import React from "react";

function NavbarPurple() {
  return (
    <>
      <div className="h-16 bg-[#9C29B2] z-9999 text-center text-white  flex flex-col md:flex-row justify-center items-center md:gap-[150px] md:text-lg">
        <div className="flex gap-3 justify-center">
          {" "}
          <h3>Phone:</h3>
          <a href="tel: +91 8657420227" className="z-99999 ">
            +91 9920453561
          </a>
        </div>

        <div className="flex justify-center gap-3">
          {" "}
          <h3>email:</h3>
          <a href="mailto: info@littledotscdc.com">info@littledotscdc.com</a>
        </div>
        <div className="hidden md:flex gap-3">
          <h3>Session:</h3>
         <p>Tues to Sun</p>
         <span>-</span>
         <p>12PM to 7PM</p>
        </div>
      </div>
    </>
  );
}

export default NavbarPurple;
