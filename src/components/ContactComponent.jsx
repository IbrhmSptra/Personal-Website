/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "./Heading";
import { Button } from "react-scroll";

const ContactComponent = () => {
  return (
    <form action="">
      <div className="p-5 border-2 border-secondary sm:flex-1">
        <Heading text="Contact Me" />
        <div className="mt-8 space-y-5">
          <div className="space-y-2">
            <label
              className="text-headings dark:text-white text-sm font-medium "
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full dark:bg-dark-second bg-light-second  text-headings dark:text-white px-4 py-2 border border-secondary rounded-lg text-xs"
              id="name"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-headings dark:text-white text-sm font-medium "
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full dark:bg-dark-second bg-light-second  text-headings dark:text-white px-4 py-2 border border-secondary rounded-lg text-xs"
              id="email"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-headings dark:text-white text-sm font-medium "
              htmlFor="Message"
            >
              Message
            </label>
            <textarea
              className="w-full dark:bg-dark-second bg-light-second  text-headings dark:text-white px-4 py-2 border border-secondary rounded-lg text-xs"
              name="Message"
              id="Message"
              cols="33"
              rows="10"
            ></textarea>
          </div>
        </div>
        <button
          className="py-2 px-8 block w-fit border border-secondary rounded-lg text-secondary mx-auto mt-6 hover:border-white hover:text-white active:text-white active:border-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactComponent;
