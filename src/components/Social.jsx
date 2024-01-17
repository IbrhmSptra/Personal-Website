/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import githubDark from "../assets/img/Github-iconDark.png";
import linkedinDark from "../assets/img/Linkedin-iconDark.png";
import instagramDark from "../assets/img/Instagram-iconDark.png";
import githubLight from "../assets/img/Github-iconLight.png";
import linkedinLight from "../assets/img/Linkedin-iconLight.png";
import instagramLight from "../assets/img/Instagram-iconLight.png";

const Social = ({ darkMode }) => {
  return (
    <div className="flex gap-2 mt-4">
      <a
        className="z-10"
        href="https://github.com/IbrhmSptra"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-6 h-6 xl:w-10 xl:h-10"
          src={darkMode ? githubDark : githubLight}
          alt="Github Icon"
        />
      </a>
      <a
        className="z-10"
        href="https://www.linkedin.com/in/ibrahim-saputra/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-6 h-6 xl:w-10 xl:h-10"
          src={darkMode ? linkedinDark : linkedinLight}
          alt="Github Icon"
        />
      </a>
      <a
        className="z-10"
        href="https://www.instagram.com/ibrhmsptra/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-6 h-6 xl:w-10 xl:h-10"
          src={darkMode ? instagramDark : instagramLight}
          alt="Github Icon"
        />
      </a>
    </div>
  );
};

export default Social;
