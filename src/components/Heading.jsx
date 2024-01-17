/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Heading = ({ text, custom }) => {
  return (
    <h1
      className={`text-base dark:text-white text-headings font-semibold sm:text-lg md:text-2xl lg:text-5xl ${custom}`}
    >
      {text}
    </h1>
  );
};

export default Heading;
