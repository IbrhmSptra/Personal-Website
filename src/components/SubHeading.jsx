/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SubHeading = ({ text, custom }) => {
  return (
    <h2 className={`text-sm font-normal text-secondary ${custom}`}>{text}</h2>
  );
};

export default SubHeading;
