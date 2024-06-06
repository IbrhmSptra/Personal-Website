/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Android from "../assets/img/tech-logo/android.png";
import bootstrap from "../assets/img/tech-logo/bootstrap.png";
import codeigniter from "../assets/img/tech-logo/codeigniter.png";
import css from "../assets/img/tech-logo/css.png";
import html from "../assets/img/tech-logo/html.png";
import javascript from "../assets/img/tech-logo/javascript.png";
import kotlin from "../assets/img/tech-logo/kotlin.png";
import php from "../assets/img/tech-logo/php.png";
import python from "../assets/img/tech-logo/python.png";
import react from "../assets/img/tech-logo/react.png";
import tailwind from "../assets/img/tech-logo/tailwind.png";
import figma from "../assets/img/tech-logo/figma.png";
import nodeicon from "../assets/img/tech-logo/node.png";
import typescript from "../assets/img/tech-logo/typescript.png";
import expressDark from "../assets/img/tech-logo/dark-light/expressdark.png";
import expressLight from "../assets/img/tech-logo/dark-light/expresslight.png";
import prismaLight from "../assets/img/tech-logo/dark-light/prismalight.png";
import prismaDark from "../assets/img/tech-logo/dark-light/prismadark.png";
import nextDark from "../assets/img/tech-logo/dark-light/nextdark.png";
import nextLight from "../assets/img/tech-logo/dark-light/nextlight.png";

const TechSlider = ({ darkMode }) => {
  const tech = [
    css,
    javascript,
    typescript,
    bootstrap,
    tailwind,
    react,
    nodeicon,
    darkMode ? expressDark : expressLight,
    darkMode ? prismaDark : prismaLight,
    darkMode ? nextDark : nextLight,
    php,
    codeigniter,
    kotlin,
    Android,
    python,
    figma,
  ];

  return (
    <div className="w-full overflow-hidden relative max-w-[197px]">
      <div className="absolute -left-1 top-0 w-8 h-full bg-gradient-to-r from-light-first dark:from-dark-first to-transparent z-10"></div>
      <div className="flex overflow-hidden">
        <div className="flex space-x-4 animate-loop-scroll">
          {tech.map((val, i) => (
            <img className="h-[25px]" src={val} alt="Icon logo" key={i} />
          ))}
        </div>
        <div
          className="flex ml-[450px] space-x-4 animate-loop-scroll"
          aria-hidden="true"
        >
          {tech.map((val, i) => (
            <img className="h-[25px]" src={val} alt="Icon logo" key={i} />
          ))}
        </div>
      </div>
      <div className="absolute -right-1 top-0 w-8 h-full bg-gradient-to-l from-light-first dark:from-dark-first to-transparent"></div>
    </div>
  );
};

export default TechSlider;
