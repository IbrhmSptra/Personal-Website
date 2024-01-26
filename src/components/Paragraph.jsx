/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Paragraph = ({ text, custom, aos, delay, dur }) => {
  return (
    <p
      data-aos={aos}
      data-aos-delay={delay}
      data-aos-duration={dur}
      className={`text-xs font-normal dark:text-white text-paragraphs md:text-sm lg:text-base ${custom}`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
