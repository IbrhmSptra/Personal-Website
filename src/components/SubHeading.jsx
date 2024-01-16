/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SubHeading = ({ text, custom }) => {
  return (
    <h2
      className={`text-sm font-normal text-secondary sm:text-base md:text-lg ${custom}`}
    >
      {text}
    </h2>
  );
};

export default SubHeading;
