import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Element } from "react-scroll";
import NavbarComponents from "./components/NavbarComponents";
import WelcomeComponent from "./components/WelcomeComponent";
import Sidebar from "./components/Sidebar";
import HeroImage from "./assets/img/hero-img.png";
import Divider from "./components/divider";
import TechSlider from "./components/TechSlider";
import AboutImg from "./assets/img/about.png";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import Paragraph from "./components/Paragraph";
import CTAButton from "./components/CTAButton";
import Card from "./components/Card";
import aagym from "../src/assets/img/aagym.webp";
import foodo from "../src/assets/img/foodo.webp";
import iconsup from "../src/assets/img/iconsup.webp";
import osom from "../src/assets/img/osom.webp";
import suxz from "../src/assets/img/suxz.webp";
import Android from "../src/assets/img/android.png";
import bootstrap from "../src/assets/img/bootstrap.png";
import codeigniter from "../src/assets/img/codeigniter.png";
import html from "../src/assets/img/html.png";
import javascript from "../src/assets/img/javascript.png";
import kotlin from "../src/assets/img/kotlin.png";
import python from "../src/assets/img/python.png";
import tailwind from "../src/assets/img/tailwind.png";
import supabase from "../src/assets/img/supabase.png";
import scikitlearn from "../src/assets/img/scikitlearn.png";
import Certificates from "./components/Certificates";
import ContactComponent from "./components/ContactComponent";
import Social from "./components/Social";
import Footer from "./components/FooterComponent";
import EmailLottie from "./components/lottiecomponents/EmailLottie/EmailLottie";

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

  return (
    <div ref={body} className="font-montserrat">
      <WelcomeComponent darkMode={darkmode} />
      <div className="relative">
        <NavbarComponents
          toggleMode={toggleMode}
          darkMode={darkmode}
          buttonMenuClick={buttonMenuClick}
          openSidebar={openSidebar}
          reference={stickyRef}
          isSticky={isSticky}
          width={width}
        />
        <Sidebar openSidebar={openSidebar} isSticky={isSticky} />

        {/* Home Page */}
        <Element name="Home" className="Home">
          <section id="Home" className=" bg-light-first dark:bg-dark-first">
            <div className="container m-auto pt-16 pb-20 px-4 sm:px-8 md:px-10 md:flex md:pb-32 md:pt-24 lg:px-12 lg:gap-10 lg:items-center">
              <div className="max-w-[200px] mx-auto sm:max-w-[250px] md:order-2 md:flex-1 md:max-w-fit xl:max-w-[400px]">
                <img src={HeroImage} alt="HeroImage" />
              </div>

              <div className="mt-6 md:max-w-96 lg:max-w-[455px] xl:max-w-[600px]">
                <div>
                  <SubHeading
                    text="Hi, I am"
                    custom="text-headings dark:text-white"
                  />
                  <Heading text="Ibrahim Saputra" custom="font-bold" />
                  <SubHeading text="Front-End Developer" />
                  <Paragraph
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
                  <TechSlider />
                </div>
              </div>
            </div>
          </section>
        </Element>

        {/* About Page */}
        <Element name="About" className="About">
          <section id="About" className=" bg-light-second dark:bg-dark-second ">
            <div className="container m-auto px-4 py-10 sm:px-8 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-32">
              <Heading text="About" custom="text-center sm:hidden" />
              <div className="max-w-[168px] m-auto rounded-md overflow-hidden mt-5 sm:max-w-fit sm:mt-0">
                <img
                  className="sm:h-[500px] object-cover "
                  src={AboutImg}
                  alt="About Image"
                />
              </div>
              <div>
                <Heading text="About" custom="hidden sm:block " />
                <SubHeading
                  text="A Dedicated Front-End Developer
Based in Jakarta, Indonesia"
                  custom="mt-7 sm:mt-3"
                />
                <Paragraph
                  text="Certified professional program Information of Technology for Economics at CCIT Faculty of Engineering University of Indonesia. Certified as a programmer from BNSP and LSPUI. Experienced in software maintenance and application development at PLN Iconplus and also involved in big data projects for Kominfo and Director General of Immigrants. Have the necessary skills of a front-end developer such as HTML, CSS, Javascript, Bootstrap, Tailwind and currently learning more about MERN stack."
                  custom="mt-3"
                />

                <div className="mt-8 sm:mt-6 md:mt-16 lg:mt-10 xl:mt-20 text-center lg:text-start">
                  <CTAButton
                    href="/CV_Ibrahim-Saputra.pdf"
                    text="Download CV"
                  />
                </div>
              </div>
            </div>
          </section>
        </Element>

        {/* Portfolio */}
        <Element name="Portfolio" className="Portfolio">
          <section
            id="Portfolio"
            className=" bg-light-first dark:bg-dark-first "
          >
            <div className="container m-auto px-4 py-10 sm:py-20 sm:px-8 md:px-10 md:py-24 lg:py-32 lg:px-12">
              <Heading text="Portfolio" custom="text-center" />
              <Paragraph
                text="Here are a few past projects I've worked on"
                custom="mt-3 text-center mb-6"
              />
              <div className="sm:flex sm:flex-wrap sm:gap-5 sm:justify-center lg:mt-8">
                <Card
                  name="Suxz"
                  thumbnail={suxz}
                  tech={techSuxz}
                  paragraph="This online course platform features Slicing Design challenge from codedesign.dev by Irham Shidiq."
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/Suxz"
                />
                <Card
                  name="Osom"
                  thumbnail={osom}
                  tech={techOsom}
                  paragraph="Osom is an android mobile-based paper rock scissors game with additional betting elements."
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/Osom"
                />
                <Card
                  name="IconSup"
                  thumbnail={iconsup}
                  tech={techIconsup}
                  paragraph="Website for complaints and help requests for 14 services that integrated with machine learning. "
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/IconSup"
                />
                <Card
                  name="AAGYM"
                  thumbnail={aagym}
                  tech={techAagym}
                  paragraph="Website that provides exercise moves and calculates BMI"
                  width={width}
                  githubLink="https://github.com/IbrhmSptra/AAGym"
                />
                <Card
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
            <div className="container m-auto px-4 py-10 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-32">
              <Heading text="Certification" custom="text-center" />
              <Paragraph
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
            <div className="container m-auto px-4 py-10 sm:px-8 sm:py-20 sm:flex gap-5 md:px-10 md:py-24 lg:px-12 lg:py-32 lg:justify-center">
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
