import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between px-[10rem] py-[3rem]">
      <div className="logo">
        <a href="#" className="text-white font-bold text-3xl">
          Elemental
        </a>
      </div>
      <ul className="menu flex text-white items-center">
        <li className="mx-[40px]">
          <a href="#">About</a>
        </li>
        <li className="mx-[40px]">
          <a href="#">Services</a>
        </li>
        <li className="mx-[40px]">
          <a href="#">Projects</a>
        </li>
        <li className="mx-[40px] bg-white text-black rounded-full w-[100px] h-[45px] flex justify-center items-center">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
