import React from "react";

// Quelle für animiertes Burger Icon: https://codepen.io/designcouch/pen/ExvwPY
// (für React und Tailwind angepasst)

const Burgermenu = ({ mobileMenuOpen, toggler }) => {
  return (
    <div
      className="w-[80px] tablet:w-[50px] h-[40px] relative my-0 mx-auto z-[1000] block transform rotate-0 transition duration-500 ease-in-out cursor-pointer"
      onClick={toggler}
      aria-label="Gehe zur mobilen Navigation"
    >
      <span className={`block absolute h-[6px] w-full bg-[#333] rounded-md left-0 transition-all ease-in-out
        ${mobileMenuOpen ? "top-[12px] w-[0px] left-[50%] bg-[#f0f0f0] duration-200 opacity-0" : "top-0 block opacity-100 duration-500"}
      `}></span>

      <span className={`block absolute h-[6px] w-full bg-[#333] rounded-md opacity-100 left-0 transition-all ease-in-out
        ${mobileMenuOpen ? "rotate-45 top-[12px] bg-[#f0f0f0] duration-200" : "top-[12px] duration-500"}
      `}></span>

      <span className={`block absolute h-[6px] w-full bg-[#333] rounded-md opacity-100 left-0 transition-all ease-in-out
        ${mobileMenuOpen ? "-rotate-45 top-[12px] bg-[#f0f0f0] duration-200" : "top-[12px] duration-500"}
      `}></span>

      <span className={`block absolute h-[6px] w-full bg-[#333] rounded-md left-0 transition-all  ease-in-out
        ${mobileMenuOpen ? "top-[12px] w-[0px] left-[50%] bg-[#f0f0f0] duration-200 opacity-0" : "top-[24px] opacity-100 duration-500"}
      `}></span>
    </div>
  );
};

export default Burgermenu;
