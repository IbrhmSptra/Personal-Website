/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ParticleComponent from "./tsparticles/ParticleComponent";
import ReactTyped from "react-typed";
import DownLottie from "./lottiecomponents/DownLottie/DownLottie";
import { motion } from "framer-motion";

const WelcomeComponent = ({ darkMode }) => {
  const PopUp = {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div className="h-screen overflow-x-hidden">
      <ParticleComponent darkMode={darkMode} />
      <div className="h-full flex flex-col items-center justify-center gap-24">
        <div className="text-center">
          <motion.h1
            className="text-3xl text-headings dark:text-white font-semibold mb-5 xl:text-5xl"
            variants={PopUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, type: "spring" }}
          >
            IBRAHIM SAPUTRA
          </motion.h1>
          <ReactTyped
            className="text-xl text-secondary  font-normal xl:text-2xl"
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
