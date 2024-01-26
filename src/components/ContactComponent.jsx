/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Heading from "./Heading";
import { Button } from "react-scroll";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6j35te4",
        "template_nbyvt8u",
        form.current,
        "XV_Edl4eU3hMJe_Ab"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message has been sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error something wrong 😟", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        }
      );
    e.target.reset();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <form ref={form} onSubmit={sendEmail}>
        <div className="p-5 border-2 border-secondary sm:flex-1 lg:p-10 lg:w-[500px]">
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
                name="name"
                type="text"
                placeholder="Enter your name..."
                required
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
                name="email"
                type="text"
                placeholder="Enter your email..."
                required
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-headings dark:text-white text-sm font-medium "
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full dark:bg-dark-second bg-light-second  text-headings dark:text-white px-4 py-2 border border-secondary rounded-lg text-xs"
                name="message"
                id="message"
                cols="33"
                rows="10"
              ></textarea>
            </div>
          </div>
          <button
            className="py-2 px-8 block w-fit border border-secondary rounded-lg text-secondary mx-auto mt-6 hover:border-headings hover:text-headings active:border-headings active:text-headings dark:hover:border-white dark:hover:text-white dark:active:text-white dark:active:border-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactComponent;
