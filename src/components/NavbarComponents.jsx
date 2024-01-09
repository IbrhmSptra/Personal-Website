/* eslint-disable no-unused-vars */
import React from "react";
import brand from "../assets/img/Brand.png";
import ToggleModeComponents from "./ToggleModeComponents";

const NavbarComponents = () => {
  return (
    <div className="container p-4 flex justify-between items-center">
      <div>
        <img className="h-8" src={brand} alt="brand" />
      </div>
      <div>
        <ToggleModeComponents />
      </div>
    </div>
  );
};

export default NavbarComponents;
