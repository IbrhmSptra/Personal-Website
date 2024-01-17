/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CTAButton = ({ text, custom }) => {
  return (
    <a
      href="#"
      className={`py-2 px-10 rounded-full border border-headings dark:border-secondary hover:animate-pulse dark:text-secondary text-sm text-headings cursor-pointer md:px-10   lg:px-12 xl:px-14${custom}`}
    >
      {text}
    </a>
  );
};

export default CTAButton;
