/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import moonpng from "../assets/img/moon.png";
import sunpng from "../assets/img/sun.png";

const ToggleModeComponents = () => {
  const [darkmode, setDarkmode] = useState(true);

  function toggleClick() {
    setDarkmode(!darkmode);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <>
      <div
        onClick={toggleClick}
        className="w-[75px] h-[30px] border border-secondary rounded-full flex items-center justify-between relative cursor-pointer"
      >
        <div
          className={
            darkmode
              ? "w-[25px] h-[25px] bg-white rounded-full  absolute ml-[2px] transition-all duration-300"
              : "w-[25px] h-[25px] bg-dark-first rounded-full  absolute ml-[2px] translate-x-[45px] transition-all duration-300"
          }
        ></div>
        <img
          className="w-[20px] z-10 -translate-y-[1px] ml-1"
          src={moonpng}
          alt=""
        />
        <img className="w-[20px] z-10 mr-1" src={sunpng} alt="" />
      </div>
    </>
  );
};

export default ToggleModeComponents;
