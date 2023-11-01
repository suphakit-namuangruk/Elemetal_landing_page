import React from "react";
import Navbar from "./Navbar";
import { FaLongArrowAltDown } from "react-icons/fa";

function Header() {
  return (
    <div className="h-[45rem] bg-fixed bg-cover bg-center bg-header border text-center">
      <Navbar />
      <h1 className="text-6xl mt-20 text-center text-white uppercase">
        Welcome to Elemental City
      </h1>
      <div className="flex justify-center mt-[40px]">
        <FaLongArrowAltDown className="text-white text-7xl" />
      </div>
    </div>
  );
}

export default Header;
