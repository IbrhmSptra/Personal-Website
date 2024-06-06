/* eslint-disable no-unused-vars */
import React from "react";
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
import express from "../assets/img/tech-logo/express.png";
import prisma from "../assets/img/tech-logo/prisma.png";
import next from "../assets/img/tech-logo/next.png";

const TechSlider = () => {
  const tech = [
    css,
    javascript,
    typescript,
    bootstrap,
    tailwind,
    react,
    nodeicon,
    express,
    prisma,
    next,
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
          className="flex ml-[475px] space-x-4 animate-loop-scroll"
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
