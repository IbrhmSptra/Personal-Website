/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import linkIcon from "../assets/img/link-icon.png";
import githubIcon from "../assets/img/Github-iconDark.png";
import Divider from "./Divider";

const Card = ({
  thumbnail,
  name,
  tech,
  paragraph,
  customCard,
  customImg,
  customBody,
  githubLink,
  width,
  aos,
  delay,
  dur,
}) => {
  const [cardClicked, setCardClicked] = useState(false);
  const handleclick = () => {
    if (width < 1024) {
      setCardClicked(!cardClicked);
    }
  };

  return (
    <div
      data-aos={aos}
      data-aos-delay={delay}
      data-aos-duration={dur}
      onClick={handleclick}
      className={`" bg-headings dark:bg-dark-first rounded-md border-2 border-secondary overflow-hidden mt-4 relative group lg:z-20
      max-w-[470px] m-auto cursor-pointer sm:m-0 sm:w-[270px] md:w-[330px] lg:w-[400px] xl:w-[305px] ${customCard}`}
    >
      <img
        className={`w-full max-h-[150px] lg:max-h-fit lg:h-[200px] xl:max-h-[150px] object-cover ${customImg}`}
        src={thumbnail}
        alt="Thumbnail Porto"
      />

      <div className={`p-5 ${customBody}`}>
        <div className="flex items-center">
          <h2 className="text-white text-sm font-semibold">{name}</h2>
          <Divider />
          {tech.map((value, i) => (
            <img
              className="h-[18px] mr-4"
              src={value}
              alt="Tech Stack"
              key={i}
            />
          ))}
        </div>
        <div>
          <p className=" text-white text-xs mt-4">{paragraph}</p>
        </div>
      </div>

      {/* card hover / click */}
      <div
        className={
          cardClicked
            ? "absolute z-10 backdrop-blur-sm bg-card-hover translate-y-0 lg:group-hover:translate-y-0 transition-all duration-300 top-0 bottom-0 left-0 right-0 flex justify-center items-center"
            : "absolute z-10 backdrop-blur-sm bg-card-hover translate-y-full lg:group-hover:translate-y-0 transition-all duration-300 top-0 bottom-0 left-0 right-0 flex justify-center items-center"
        }
      >
        {/* Button github */}
        <a href={githubLink} target="_blank" rel="noreferrer">
          <div className="bg-headings dark:bg-dark-first border-2 border-white rounded-xl px-6 py-3 flex justify-evenly items-center gap-10">
            <img className="w-8 h-8" src={githubIcon} alt="GithubIcon" />
            <p className="text-base font-semibold text-white">Github</p>
            <img className="w-6 h-6" src={linkIcon} alt="Link Icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
