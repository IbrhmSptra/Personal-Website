/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import brandDark from "../assets/img/brand-dark.png";
import brandLight from "../assets/img/brand-light.png";
import ToggleModeComponents from "./ToggleModeComponents";
import ButtonMenu from "./ButtonMenu";
import { Link } from "react-scroll";

const NavbarComponents = ({
  toggleMode,
  darkMode,
  buttonMenuClick,
  openSidebar,
  isSticky,
  width,
}) => {
  const links = ["Home", "About", "Portfolio", "Certification", "Contact"];

  //set offset
  let offset = 0;
  if (width < 768) {
    offset = -50;
  } else if (width >= 768) {
    offset = -40;
  }
  return (
    <>
      <div className={isSticky ? "block" : "hidden"}>
        <nav
          className={
            isSticky
              ? " bg-slate-100 dark:bg-navbar z-40"
              : " bg-light-first dark:bg-dark-first z-40"
          }
        >
          <div className="container m-auto p-4 flex justify-between items-center  sm:px-8 md:px-10 lg:px-12 xl:px-40">
            <div>
              <Link to="Home" offset={offset}>
                <img
                  className="h-8 cursor-pointer"
                  src={darkMode ? brandDark : brandLight}
                  alt="brand"
                />
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
              <ul className="gap-6 hidden md:flex">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      className="text-headings dark:text-white cursor-pointer md:text-sm"
                      to={link}
                      offset={offset}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <ToggleModeComponents
                toggleMode={toggleMode}
                darkMode={darkMode}
              />
              <ButtonMenu
                buttonMenuClick={buttonMenuClick}
                openSidebar={openSidebar}
                isSticky={isSticky}
              />
            </div>
          </div>
        </nav>
      </div>
      <nav
        className={
          isSticky
            ? "fixed top-0 left-0 right-0 bg-slate-100 dark:bg-navbar z-40"
            : "static bg-light-first dark:bg-dark-first z-40"
        }
      >
        <div className="container m-auto p-4 flex justify-between items-center  sm:px-8 md:px-10 lg:px-12 xl:px-40">
          <div>
            <Link to="Home" offset={offset}>
              <img
                className="h-8 cursor-pointer"
                src={darkMode ? brandDark : brandLight}
                alt="brand"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <ul className="gap-6 hidden md:flex">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    className="text-headings dark:text-white cursor-pointer md:text-sm"
                    to={link}
                    offset={offset}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <ToggleModeComponents toggleMode={toggleMode} darkMode={darkMode} />
            <ButtonMenu
              buttonMenuClick={buttonMenuClick}
              openSidebar={openSidebar}
              isSticky={isSticky}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponents;
