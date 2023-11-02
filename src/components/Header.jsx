import React from "react";
import Navbar from "./Navbar";
import { FaWalking } from "react-icons/fa";

function Header() {
  return (
    <div className="h-[45rem] bg-fixed bg-no-repeat bg-cover bg-center bg-header border text-center">
      <Navbar />
      <h1 className="text-6xl mt-[10%] backdrop-blur text-center text-white uppercase">
        You are now in Thailand
      </h1>
      <div className="flex justify-center mt-[40px]">
        <FaWalking className="text-white mt-14 text-7xl " />
      </div>
    </div>
  );
}

export default Header;
