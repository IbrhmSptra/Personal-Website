/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import brandDark from "../assets/img/brand-dark.png";
import brandLight from "../assets/img/brand-light.png";
import ToggleModeComponents from "./ToggleModeComponents";

const NavbarComponents = ({ toggleMode, darkMode }) => {
  return (
    <div className="container p-4 flex justify-between items-center">
      <div>
        <img
          className="h-8"
          src={darkMode ? brandDark : brandLight}
          alt="brand"
        />
      </div>
      <div>
        <ToggleModeComponents toggleMode={toggleMode} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default NavbarComponents;
