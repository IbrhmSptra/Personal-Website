/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Lottie from "lottie-react";
import downdark from "./down-dark.json";
import downlight from "./down-light.json";

const DownLottie = ({ darkMode }) => {
  return (
    <a className="cursor-pointer" href="#home">
      <Lottie
        animationData={darkMode ? downdark : downlight}
        loop
        className="h-24 w-24"
      />
    </a>
  );
};

export default DownLottie;
