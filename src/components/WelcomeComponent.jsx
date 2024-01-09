/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ParticleComponent from "./tsparticles/ParticleComponent";
import ReactTyped from "react-typed";
import DownLottie from "./lottiecomponents/DownLottie";

const WelcomeComponent = ({ darkMode }) => {
  return (
    <div className="h-screen">
      <ParticleComponent />
      <div className="h-full flex flex-col items-center justify-center gap-24">
        <div className="text-center">
          <h1 className="text-3xl text-headings dark:text-white font-semibold mb-5">
            IBRAHIM SAPUTRA
          </h1>
          <ReactTyped
            className="text-xl text-secondary  font-normal"
            strings={[
              "Front-End Developer",
              "Android Developer",
              "Machine Learning Enthusiast",
              "UI Designer",
            ]}
            typeSpeed={50}
            backSpeed={10}
            loop
          />
        </div>
        <div className="flex flex-col items-center">
          <DownLottie darkMode={darkMode} />
          <p className=" text-base text-headings dark:text-white animate-pulse">
            Let's Start
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
