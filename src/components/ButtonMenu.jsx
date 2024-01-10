/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const ButtonMenu = ({ buttonMenuClick, openSidebar }) => {
  const variants = {
    hidden: { opacity: 0 },
    clickedTop: { rotate: -48 },
    clickedBot: { rotate: 48 },
  };

  return (
    <>
      <a href="#Home">
        <div
          onClick={buttonMenuClick}
          className="w-10 h-fit flex flex-col gap-2 p-1 items-end rounded-sm z-20 cursor-pointer"
        >
          <motion.div
            variants={variants}
            animate={openSidebar ? "clickedTop" : ""}
            style={{ originY: 0.5, originX: 1 }}
            className="bg-secondary w-full h-[4px] rounded-full"
          ></motion.div>
          <motion.div
            variants={variants}
            animate={openSidebar ? "hidden" : ""}
            className="bg-secondary w-full h-[4px] rounded-full"
          ></motion.div>
          <motion.div
            variants={variants}
            animate={openSidebar ? "clickedBot" : ""}
            style={{ originY: 0.5, originX: 1 }}
            className="bg-secondary w-full h-[4px] rounded-full"
          ></motion.div>
        </div>
      </a>
    </>
  );
};

export default ButtonMenu;
