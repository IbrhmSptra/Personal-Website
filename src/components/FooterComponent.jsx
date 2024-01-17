/* eslint-disable no-unused-vars */
import React from "react";
import reactIcon from "../assets/img/react.png";
import tailwindIcon from "../assets/img/tailwind.png";
import figma from "../assets/img/figma.png";

const footer = () => {
  return (
    <div className="bg-light-second dark:bg-dark-second flex items-center justify-center py-8 gap-2 lg:gap-4">
      <p className="text-[10px] text-headings dark:text-white sm:text-xs sm:font-extralight lg:text-sm">
        Made with
      </p>
      <img className="w-5" src={reactIcon} alt="react Icon" />
      <img className="w-5" src={tailwindIcon} alt="Tailwind Icon" />
      <img className="w-5" src={figma} alt="Tailwind Icon" />
      <p className="text-[10px] text-headings dark:text-white sm:text-xs sm:font-extralight lg:text-sm">
        By Ibrahim Saputra
      </p>
    </div>
  );
};

export default footer;
