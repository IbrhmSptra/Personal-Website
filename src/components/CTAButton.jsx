/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CTAButton = ({ text, custom }) => {
  return (
    <a
      className={`py-2 px-4 rounded-full border border-headings dark:border-secondary hover:animate-pulse dark:text-secondary text-sm text-headings ${custom}`}
    >
      {text}
    </a>
  );
};

export default CTAButton;
