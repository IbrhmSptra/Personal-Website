/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import brandDark from "../assets/img/brand-dark.png";
import brandLight from "../assets/img/brand-light.png";
import ToggleModeComponents from "./ToggleModeComponents";
import ButtonMenu from "./ButtonMenu";

const NavbarComponents = ({
  toggleMode,
  darkMode,
  buttonMenuClick,
  openSidebar,
  reference,
  isSticky,
}) => {
  return (
    <nav
      ref={reference}
      className={
        isSticky
          ? "container sticky top-0 bg-slate-100 dark:bg-navbar p-4 flex justify-between items-center z-20"
          : "container sticky top-0 p-4 flex bg-light-first dark:bg-dark-first justify-between items-center z-20"
      }
    >
      <div>
        <img
          className="h-8"
          src={darkMode ? brandDark : brandLight}
          alt="brand"
        />
      </div>
      <div className="flex items-center gap-2">
        <ToggleModeComponents toggleMode={toggleMode} darkMode={darkMode} />
        <ButtonMenu
          buttonMenuClick={buttonMenuClick}
          openSidebar={openSidebar}
          isSticky={isSticky}
        />
      </div>
    </nav>
  );
};

export default NavbarComponents;
