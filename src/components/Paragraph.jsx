/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Paragraph = ({ text, custom }) => {
  return (
    <p
      className={`text-xs font-normal dark:text-white text-paragraphs ${custom}`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
