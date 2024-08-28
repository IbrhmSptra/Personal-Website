/* eslint-disable no-unreachable */
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Element } from "react-scroll";
import NavbarComponents from "./components/NavbarComponents";
import WelcomeComponent from "./components/WelcomeComponent";
import Sidebar from "./components/Sidebar";
import HeroImage from "./assets/img/hero-img.png";
import Divider from "./components/Divider";
import TechSlider from "./components/TechSlider";
import AboutImg from "./assets/img/about.png";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import Paragraph from "./components/Paragraph";
// import CTAButton from "./components/CTAButton";
import Card from "./components/Card";
import Certificates from "./components/Certificates";
import ContactComponent from "./components/ContactComponent";
import Social from "./components/Social";
import Footer from "./components/FooterComponent";
import EmailLottie from "./components/lottiecomponents/EmailLottie/EmailLottie";

import aagym from "../src/assets/img/project/aagym.webp";
import foodo from "../src/assets/img/project/foodo.webp";
import iconsup from "../src/assets/img/project/iconsup.webp";
import osom from "../src/assets/img/project/osom.webp";
import suxz from "../src/assets/img/project/suxz.webp";
import uwatch from "./assets/img/project/uwatch.png";
import eisenmatrix from "./assets/img/project/eisenmatrix.png";
import foodoweb from "./assets/img/project/foodo-web.png";

//timeline
import harisenin from "./assets/img/Harisenin.png";
import ui from "./assets/img/Ui.png";
import iconplus from "./assets/img/IconPlus.png";
import Mandiri from "./assets/img/Mandiri.png";

import Android from "../src/assets/img/tech-logo/android.png";
import bootstrap from "../src/assets/img/tech-logo/bootstrap.png";
import codeigniter from "../src/assets/img/tech-logo/codeigniter.png";
import html from "../src/assets/img/tech-logo/html.png";
import javascript from "../src/assets/img/tech-logo/javascript.png";
import kotlin from "../src/assets/img/tech-logo/kotlin.png";
import python from "../src/assets/img/tech-logo/python.png";
import tailwind from "../src/assets/img/tech-logo/tailwind.png";
import supabase from "../src/assets/img/tech-logo/supabase.png";
import scikitlearn from "../src/assets/img/tech-logo/scikitlearn.png";
import redux from "./assets/img/tech-logo/redux.png";
import firebase from "./assets/img/tech-logo/firebase.png";
import react from "./assets/img/tech-logo/react.png";
import typescript from "./assets/img/tech-logo/typescript.png";
import nodeicon from "./assets/img/tech-logo/node.png";
import expressDark from "./assets/img/tech-logo/dark-light/expressdark.png";
import prismaDark from "./assets/img/tech-logo/dark-light/prismadark.png";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [width, setWidth] = useState(0);

  //sticky navbar
  const stickyRef = useRef(null);
  //div wraper / body
  const body = useRef(null);

  const handleScroll = () => {
    if (stickyRef.current) {
      const rect = stickyRef.current.getBoundingClientRect();
      const isElementSticky = rect.top <= 0;
      setIsSticky(isElementSticky);
    }
  };

  //get width window
  useLayoutEffect(() => {
    setWidth(body.current.offsetWidth);
  }, []);

  //add effect to scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //aos init
  useEffect(() => {
    AOS.init();
  }, []);

  function buttonMenuClick() {
    setOpenSidebar(!openSidebar);
  }
  function toggleMode() {
    setDarkmode(!darkmode);
    document.documentElement.classList.toggle("dark");
  }

  //portfolio tech logo
  const techSuxz = [html, javascript, tailwind];
  const techOsom = [kotlin, Android, supabase];
  const techIconsup = [codeigniter, python, scikitlearn];
  const techAagym = [html, javascript, bootstrap, codeigniter];
  const techFoodo = [kotlin, Android, supabase];
  const techUWatch = [react, redux, tailwind, firebase];
  const techEisenMatrix = [typescript, react, redux];
  const techWebFoodo = [react, nodeicon, expressDark, prismaDark];

  return (
    <div ref={body} className="font-montserrat overflow-x-hidden">
      <WelcomeComponent darkMode={darkmode} />
      <div ref={stickyRef} className="relative">
        <NavbarComponents
          toggleMode={toggleMode}
          darkMode={darkmode}
          buttonMenuClick={buttonMenuClick}
          openSidebar={openSidebar}
          isSticky={isSticky}
          width={width}
        />
        <Sidebar openSidebar={openSidebar} isSticky={isSticky} />

        {/* Home Page */}
        <Element name="Home" className="Home">
          <section id="Home" className=" bg-light-first dark:bg-dark-first">
            <div className="container m-auto pt-16 pb-20 px-4 sm:px-8 md:px-10 md:flex md:pb-32 md:pt-24 lg:justify-center lg:px-12 lg:gap-10 lg:items-center xl:px-40">
              <div
                data-aos="fade-left"
                className="max-w-[200px] mx-auto sm:max-w-[250px] md:order-2 md:flex-1 md:max-w-fit xl:max-w-[400px]"
              >
                <img src={HeroImage} alt="HeroImage" />
              </div>

              <div
                data-aos="fade-right"
                className="mt-6 md:max-w-96 lg:max-w-[455px] xl:max-w-[600px]"
              >
                <div>
                  <SubHeading
                    aos="fade-up"
                    dur="500"
                    delay="200"
                    text="Hi, I am"
                    custom="text-headings dark:text-white"
                  />
                  <Heading
                    aos="fade-up"
                    dur="500"
                    delay="300"
                    text="Ibrahim Saputra"
                    custom="font-bold"
                  />
                  <SubHeading
                    aos="fade-up"
                    dur="500"
                    delay="400"
                    text="Software Quality Assurance"
                  />
                  <Paragraph
                    aos="fade-up"
                    dur="500"
                    delay="500"
                    text="Have experience in Web and Android development and an interest
                in Machine Learning. Certified as a Programmer by BNSP and LSPUI"
                    custom="mt-2"
                  />
                </div>
                <div className="flex items-center mt-4">
                  <h2 className="text-base dark:text-white text-headings font-semibold sm:text-lg flex-1 max-w-24 sm:max-w-40 md:max-w-28 ">
                    Tech Stack
                  </h2>
                  <Divider />
                  <TechSlider darkMode={darkmode} />
                </div>
              </div>
            </div>
          </section>
        </Element>

        {/* About Page */}
        <Element name="About" className="About">
          <section id="About" className=" bg-light-second dark:bg-dark-second ">
            <div className="container m-auto px-4 py-10 sm:px-8 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-32 xl:px-40">
              <Heading
                aos="fade-up"
                dur="500"
                delay="200"
                text="About"
                custom="text-center sm:hidden"
              />
              <div
                data-aos="zoom-in"
                className="max-w-[168px] m-auto rounded-md overflow-hidden mt-5 sm:max-w-fit sm:mt-0"
              >
                <img
                  className="sm:h-[600px] object-cover "
                  src={AboutImg}
                  alt="About Image"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="500">
                <Heading
                  aos="fade-up"
                  dur="500"
                  delay="200"
                  text="About"
                  custom="hidden sm:block "
                />
                <SubHeading
                  aos="fade-up"
                  dur="500"
                  delay="300"
                  text="A Dedicated Software Quality Assurance
Based in Jakarta, Indonesia"
                  custom="mt-7 sm:mt-3"
                />
                <Paragraph
                  aos="fade-up"
                  dur="500"
                  delay="400"
                  text="Certified professional program Information of Technology for Economics at CCIT Faculty of Engineering University of Indonesia. Certified as a programmer from BNSP and LSPUI. Graduated from Harisenin Full-Stack Developer Bootcamp. Experienced in software maintenance and application development at PLN Iconplus. Currently, I am working as Software Quality Assurance at PT Bank Mandiri to analyze and test NBDS (New Branch Delivery System) and Smart Branch Development. Have the necessary skills of a fullstack developer such as HTML, CSS, Javascript, React, Redux, Nextjs, SQL, NodeJS, ExpressJS, Prisma, Supabase, Firebase. Also have necessary skills of Quality Assurance such as creating test scenario & test case and able to perform white/black box testing"
                  custom="mt-3 sm:leading-loose md:leading-loose lg:leading-loose xl:leading-loose"
                />

                {/* <div className="mt-8 sm:mt-6 md:mt-16 lg:mt-10 xl:mt-20 text-center lg:text-start">
                  <CTAButton
                    href="/CV_Ibrahim-Saputra.pdf"
                    text="Download CV"
                  />
                </div> */}
              </div>
            </div>
            <div className="container m-auto px-10 pb-10 sm:px-12 sm:pb-20 md:px-16 md:pb-24 lg:px-16 lg:pb-32 xl:px-48">
              <ol className="relative border-s border-secondary dark:border-gray-700">
                <li
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="mb-10 ms-9"
                >
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-headings rounded-full -start-14 ring-8 ring-white dark:ring-dark-first dark:bg-dark-second p-1">
                    <img src={Mandiri} alt="Bank Mandiri logo" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-headings dark:text-white">
                    PT Bank Mandiri (Persero) Tbk.
                    <span className="bg-headings text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-headings dark:text-white ms-3">
                      Current
                    </span>
                  </h3>
                  <time className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    Software Quality Assurance | Jul, 2024 - Now
                  </time>
                  <ul className="mb-4 ml-4 text-sm font-normal text-gray-500 dark:text-gray-400 list-disc md:text-base">
                    <li>
                      NBDS (New Branch Delivery System) and Smart Branch
                      Development- DSG (Distribution Strategy Group)
                    </li>
                    <li>
                      Create Test Scenarios & Test Cases by analyzing the
                      business logic from UST (Jira) & UI (Figma)
                    </li>
                    <li>Perform UAT, Regression, Smoke Test, BVT and TVT</li>
                    <li>
                      Handle testing for Debit Card Maintenance (DCM) &
                      Wholesale Banking on NBDS (Non-Perorangan)
                    </li>
                  </ul>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="mb-10 ms-9"
                >
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-headings rounded-full -start-14 ring-8 ring-white dark:ring-dark-first dark:bg-dark-second p-1">
                    <img src={harisenin} alt="Harisenin logo" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-headings dark:text-white">
                    Harisenin.com
                  </h3>
                  <time className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    Fullstack Developer Bootcamp | Dec, 2023 - May, 2024
                  </time>
                  <ul className="mb-4 ml-4 text-sm font-normal text-gray-500 dark:text-gray-400 list-disc md:text-base">
                    <li>Student with highest achiever GPA score</li>
                    <li>Become most active student</li>
                    <li>
                      Best group for final project award as PIC / leader team
                    </li>
                  </ul>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="mb-10 ms-9"
                >
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-headings rounded-full -start-14 ring-8 ring-white dark:ring-dark-first dark:bg-dark-second p-1">
                    <img src={iconplus} alt="Iconplus logo" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-headings dark:text-white">
                    PLN IconPlus
                  </h3>
                  <time className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    Software Maintenance and Application Development | May -
                    Jul, 2023
                  </time>
                  <ul className="mb-4 ml-4 text-sm font-normal text-gray-500 dark:text-gray-400 list-disc md:text-base">
                    <li>
                      Developed websites for complaints and help requests for 14
                      services that integrated with machine learning.
                    </li>
                    <li>
                      Researched the tech stack for the Kominfo big data
                      project.
                    </li>
                  </ul>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="mb-10 ms-9"
                >
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-headings rounded-full -start-14 ring-8 ring-white dark:ring-dark-first dark:bg-dark-second p-1">
                    <svg
                      viewBox="0 0 512 512"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="text-white"
                    >
                      <g id="SVGRepo_iconCarrier">
                        <title>work-case</title>
                        <g id="Page-1" stroke="none" fill="none">
                          <g
                            id="Combined-Shape"
                            fill="currentColor"
                            transform="translate(42.666667, 64.000000)"
                          >
                            <path d="M277.333333,1.42108547e-14 L298.666667,21.3333333 L298.666,64 L426.666667,64 L426.666667,362.666667 L3.55271368e-14,362.666667 L3.55271368e-14,64 L128,64 L128,21.3333333 L149.333333,1.42108547e-14 L277.333333,1.42108547e-14 Z M42.6664912,220.935181 L42.6666667,320 L384,320 L384.000468,220.935097 C341.375319,233.130501 298.701692,240.759085 256.000479,243.809455 L256,277.333333 L170.666667,277.333333 L170.666323,243.809465 C127.965163,240.759108 85.2915887,233.130549 42.6664912,220.935181 Z M384,106.666667 L42.6666667,106.666667 L42.6668606,176.433085 C99.6386775,193.933257 156.507113,202.666667 213.333333,202.666667 C270.159803,202.666667 327.028489,193.933181 384.000558,176.432854 L384,106.666667 Z M256,42.6666667 L170.666667,42.6666667 L170.666667,64 L256,64 L256,42.6666667 Z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-headings dark:text-white">
                    Python Class Tutor
                  </h3>
                  <time className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    Freelance | Mar - Apr, 2023
                  </time>
                  <ul className="mb-4 ml-4 text-sm font-normal text-gray-500 dark:text-gray-400 list-disc md:text-base">
                    <li>
                      Became a tutor and manager of learning the basics of
                      python programming with online meet facility, learning
                      videos, assignments and source code.
                    </li>
                    <li>
                      video Playlist :{" "}
                      <a
                        className="text-secondary hover:underline"
                        href="https://www.youtube.com/playlist?list=PLjd3ym4j8YN1lJB7H173ns9HRol1SMSXm "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Youtube
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="ms-9"
                >
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-headings rounded-full -start-14 ring-8 ring-white dark:ring-dark-first dark:bg-dark-second p-1">
                    <img src={ui} alt="Universitas Indonesia logo" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-headings dark:text-white">
                    University of Indonesia
                  </h3>
                  <time className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    Professional Program in Information of Technology for
                    Economics | Aug, 2021 – Nov, 2023
                  </time>
                  <ul className="mb-4 ml-4 text-sm font-normal text-gray-500 dark:text-gray-400 list-disc md:text-base">
                    <li>
                      Thesis: Website for PT. Iconplus service complaints with
                      urgency classification using K-Nearest Neighbors (KNN)
                      algorithm
                    </li>
                    <li>
                      Student with the 2nd highest GPA in the field of study
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>
        </Element>

        {/* Portfolio */}
        <Element name="Portfolio" className="Portfolio">
          <section
            id="Portfolio"
            className=" bg-light-first dark:bg-dark-first "
          >
            <div className="container m-auto px-4 py-10 sm:py-20 sm:px-8 md:px-10 md:py-24 lg:py-32 lg:px-12 xl:px-40">
              <Heading
                aos="fade-up"
                dur="500"
                text="Portfolio"
                custom="text-center"
              />
              <Paragraph
                aos="fade-up"
                dur="500"
                text="Here are a few past projects I've worked on"
                custom="mt-3 text-center mb-6"
              />
              <div className="sm:flex sm:flex-wrap sm:gap-5 sm:justify-center lg:mt-8">
                <Card
                  aos="zoom-out-up"
                  delay="200"
                  name="Foodo Website"
                  thumbnail={foodoweb}
                  tech={techWebFoodo}
                  paragraph="A website both front-end and back-end about food recipes with a recipe ordering feature"
                  width={width}
                  githubLink="https://github.com/HSBC-Kelompok-1/React-FrontEnd"
                />
                <Card
                  aos="zoom-out-up"
                  delay="200"
                  name="EisenMatrix"
                  thumbnail={eisenmatrix}
                  tech={techEisenMatrix}
                  paragraph="Todo list website with Eisenhower Matrix with drag and drop. Using redux-persist to keep data"
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/EisenMatrix"
                />
                <Card
                  aos="zoom-out-up"
                  delay="200"
                  name="UWatch"
                  thumbnail={uwatch}
                  tech={techUWatch}
                  paragraph="UWatch is a website movie with TMDB API for users to create their own watchlist"
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/UWatch"
                />

                <Card
                  aos="zoom-out-up"
                  delay="200"
                  name="Suxz"
                  thumbnail={suxz}
                  tech={techSuxz}
                  paragraph="This online course platform features Slicing Design challenge from codedesign.dev by Irham Shidiq."
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/Suxz"
                />
                <Card
                  aos="zoom-out-up"
                  delay="200"
                  name="Osom"
                  thumbnail={osom}
                  tech={techOsom}
                  paragraph="Osom is an android mobile-based paper rock scissors game with additional betting elements."
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/Osom"
                />
                <Card
                  aos="zoom-out-up"
                  delay="200"
                  name="IconSup"
                  thumbnail={iconsup}
                  tech={techIconsup}
                  paragraph="Website for complaints and help requests for 14 services that integrated with machine learning. "
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/IconSup"
                />
                <Card
                  aos="zoom-out-up"
                  delay="200"
                  name="AAGYM"
                  thumbnail={aagym}
                  tech={techAagym}
                  paragraph="Website that provides exercise moves and calculates BMI"
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/AAGym"
                />
                <Card
                  aos="zoom-out-up"
                  delay="200"
                  name="Foodo"
                  thumbnail={foodo}
                  tech={techFoodo}
                  paragraph="Foodo is An android application about food recipes with a recipe ordering feature"
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/Foodo"
                />
              </div>
            </div>
          </section>
        </Element>

        {/* Certification */}
        <Element name="Certification" className="Certification">
          <section
            id="Certification"
            className=" bg-light-second dark:bg-dark-second "
          >
            <div className="container m-auto px-4 py-10 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-32 xl:px-40">
              <Heading
                aos="fade-up"
                dur="500"
                text="Certification"
                custom="text-center"
              />
              <Paragraph
                aos="fade-up"
                dur="500"
                text="Here are my certifications in the field of Information Technologies and Programming."
                custom="mt-3 text-center mb-6"
              />
              <Certificates />
            </div>
          </section>
        </Element>

        {/* Contact */}
        <Element name="Contact" className="Contact">
          <section id="Contact" className=" bg-light-first dark:bg-dark-first ">
            <div className="container m-auto px-4 py-10 sm:px-8 sm:py-20 sm:flex gap-5 md:px-10 md:py-24 lg:px-12 lg:py-32 lg:justify-center xl:px-40">
              <ContactComponent />
              <div className="sm:w-[250px]  lg:w-[400px]">
                <EmailLottie darkMode={darkmode} />
                <div className="sm:mt-20 lg:mt-10">
                  <h2 className=" dark:text-white text-headings  text-sm font-medium mt-8 sm:text-base xl:text-xl">
                    Or you can reach me via :
                  </h2>
                  <p className="text-xs dark:text-white text-paragraphs font-light mt-4 xl:text-base">
                    IbrhmSptra@gmail.com | +62 85156127143
                  </p>
                </div>

                <Social darkMode={darkmode} />
              </div>
            </div>
          </section>
        </Element>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
