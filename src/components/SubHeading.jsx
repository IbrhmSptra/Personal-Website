/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SubHeading = ({ text, custom, aos, delay, dur }) => {
  return (
    <h2
      data-aos={aos}
      data-aos-delay={delay}
      data-aos-duration={dur}
      className={`text-sm font-normal text-secondary sm:text-base md:text-lg lg:text-2xl ${custom}`}
    >
      {text}
    </h2>
  );
};

export default SubHeading;
