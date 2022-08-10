import React from "react";
import Navitem from "./Navitem";

function Navbar() {
  return (
    <nav className="flex justify-between py-5 px-20 shadow-md">
      <h3 className="font-bold">GobeJoint</h3>
      <ul className="flex gap-5">
        <Navitem menu="Home" />
        <Navitem menu="Products" />
        <Navitem menu="Services" />
        <Navitem menu="About" />
        <Navitem menu="Contact" />
      </ul>
    </nav>
  );
}

export default Navbar;
