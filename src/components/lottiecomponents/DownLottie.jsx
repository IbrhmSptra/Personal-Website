/* eslint-disable no-unused-vars */
import React from "react";
import Lottie from "lottie-react";
import downjson from "./down-dark.json";

const DownLottie = () => {
  return <Lottie animationData={downjson} loop className="h-24 w-24" />;
};

export default DownLottie;
