import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="logo">
        <a href="">Elemental</a>
      </div>
      <ul className="menu">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
