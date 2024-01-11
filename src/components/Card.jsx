/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import Divider from "./divider";

const Card = ({
  thumbnail,
  name,
  tech,
  paragraph,
  customCard,
  customImg,
  customBody,
}) => {
  return (
    <div
      className={`" bg-headings dark:bg-dark-first rounded-md border-2 border-secondary overflow-hidden mt-4 ${customCard}`}
    >
      <img
        className={`w-full max-h-[150px] object-cover ${customImg}`}
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
    </div>
  );
};

export default Card;
