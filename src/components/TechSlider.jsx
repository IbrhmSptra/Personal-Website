/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Android from "../assets/img/android.png";
import bootstrap from "../assets/img/bootstrap.png";
import codeigniter from "../assets/img/codeigniter.png";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import javascript from "../assets/img/javascript.png";
import kotlin from "../assets/img/kotlin.png";
import php from "../assets/img/php.png";
import python from "../assets/img/python.png";
import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import figma from "../assets/img/figma.png";
import nodeicon from "../assets/img/node.png";

const TechSlider = () => {
  const tech = [
    css,
    javascript,
    bootstrap,
    tailwind,
    react,
    nodeicon,
    php,
    codeigniter,
    kotlin,
    Android,
    python,
    figma,
  ];

  return (
    <div className="w-full overflow-hidden relative whitespace-nowrap max-w-[197px]">
      <div className="absolute -left-1 top-0 w-8 h-full bg-gradient-to-r from-light-first dark:from-dark-first to-transparent z-10"></div>

      <div className="whitespace-nowrap inline-block animate-slider">
        {tech.map((value, i) => (
          <img
            className="h-[25px] mx-4 inline-block"
            key={i}
            src={value}
            alt={value}
          />
        ))}
      </div>
      <div className="whitespace-nowrap inline-block animate-slider ml-[335px]">
        {tech.map((value, i) => (
          <img
            className="h-[25px] mx-4 inline-block"
            key={i}
            src={value}
            alt={value}
          />
        ))}
      </div>

      <div className="absolute -right-1 top-0 w-8 h-full bg-gradient-to-l from-light-first dark:from-dark-first to-transparent"></div>
    </div>
  );
};

export default TechSlider;
