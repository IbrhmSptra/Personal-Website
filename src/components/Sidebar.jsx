/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Sidebar = ({ openSidebar, isSticky }) => {
  const links = ["Home", "About", "Portfolio", "Certification", "Contact"];

  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    close: { x: 200, opacity: 0 },
  };

  return (
    <motion.div
      className={`bg-slate-100 dark:bg-navbar fixed w-1/2 h-screen right-0 top-0 z-20 lg:z-10 ${
        isSticky ? "block" : "hidden"
      }`}
      variants={variants}
      animate={isSticky && openSidebar ? "open" : "close"}
    >
      <motion.ul className="h-full flex flex-col items-center gap-10 py-28">
        {links.map((link) => (
          <motion.li key={link} variants={variants}>
            <Link
              className="text-headings dark:text-white cursor-pointer"
              to={link}
              offset={-50}
            >
              {link}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Sidebar;
