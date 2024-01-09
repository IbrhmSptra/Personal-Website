/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ParticleComponent from "./tsparticles/ParticleComponent";
import ReactTyped from "react-typed";
import DownLottie from "./lottiecomponents/DownLottie";

const WelcomeComponent = () => {
  return (
    <div className="h-screen">
      <ParticleComponent />
      <div className="h-full flex flex-col items-center justify-center gap-24">
        <div className="text-center">
          <h1 className="text-3xl dark:text-white font-semibold mb-5">
            Ibrahim Saputra
          </h1>
          <ReactTyped
            className="text-xl dark:text-white font-normal"
            strings={[
              "Front-End Developer",
              "Android Developer",
              "Machine Learning Enthusiast",
              "UI Design",
            ]}
            typeSpeed={50}
            backSpeed={10}
            loop
          />
        </div>
        <div className="flex flex-col items-center">
          <DownLottie />
          <p className=" text-base dark:text-white">Let's Start</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
