/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Lottie from "lottie-react";
import emailLight from "./email-anim-light.json";

const EmailLottie = () => {
  return (
    <Lottie
      animationData={emailLight}
      loop
      className="min-h-64 min-w-64 m-auto hidden sm:block"
    />
  );
};

export default EmailLottie;
