import { useState, useEffect, useRef } from "react";
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
import aagym from "../src/assets/img/aagym.png";
import foodo from "../src/assets/img/foodo.png";
import iconsup from "../src/assets/img/iconsup.png";
import osom from "../src/assets/img/osom.png";
import suxz from "../src/assets/img/suxz.png";
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

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //sticky navbar
  const stickyRef = useRef(null);
  const handleScroll = () => {
    if (stickyRef.current) {
      const rect = stickyRef.current.getBoundingClientRect();
      const isElementSticky = rect.top <= 0;

      setIsSticky(isElementSticky);
    }
  };
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
  const techIconsup = [
    html,
    bootstrap,
    javascript,
    codeigniter,
    python,
    scikitlearn,
  ];
  const techAagym = [html, javascript, bootstrap, codeigniter];
  const techFoodo = [kotlin, Android, supabase];

  return (
    <div className="font-montserrat">
      <WelcomeComponent darkMode={darkmode} />
      <div className="relative">
        <NavbarComponents
          toggleMode={toggleMode}
          darkMode={darkmode}
          buttonMenuClick={buttonMenuClick}
          openSidebar={openSidebar}
          reference={stickyRef}
          isSticky={isSticky}
        />
        <Sidebar openSidebar={openSidebar} isSticky={isSticky} />

        {/* Home Page */}
        <section
          id="Home"
          className="container py-16 px-4 pt bg-light-first dark:bg-dark-first"
        >
          <div className="max-w-[200px] mx-auto">
            <img src={HeroImage} alt="HeroImage" />
          </div>

          <div className="mt-6">
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
              <Heading text="Tech Stack" custom="flex-1 max-w-24" />
              <Divider />
              <TechSlider />
            </div>
          </div>
        </section>

        {/* About Page */}
        <section
          id="About"
          className=" bg-light-second dark:bg-dark-second px-4 py-10"
        >
          <Heading text="About" custom="text-center" />
          <div className="max-w-[168px] m-auto rounded-md overflow-hidden mt-5">
            <img src={AboutImg} alt="About Image" />
          </div>
          <SubHeading
            text="A Dedicated Front-End Developer
Based in Jakarta, Indonesia"
            custom="mt-7"
          />
          <Paragraph
            text="Certified professional program Information of Technology for Economics at CCIT Faculty of Engineering University of Indonesia. Certified as a programmer from BNSP and LSPUI. Experienced in software maintenance and application development at PLN Iconplus and also involved in big data projects for Kominfo and Director General of Immigrants. Have the necessary skills of a front-end developer such as HTML, CSS, Javascript, Bootstrap, Tailwind and currently learning more about MERN stack."
            custom="mt-3"
          />
          <div className="mt-8 w-fit m-auto">
            <CTAButton text="Download CV" custom="px-10" />
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="Portfolio"
          className="bg-light-first dark:bg-dark-first px-4 py-10"
        >
          <Heading text="Portfolio" custom="text-center" />
          <Paragraph
            text="Here are a few past projects I've worked on"
            custom="mt-3 text-center mb-6"
          />
          <Card
            name="Suxz"
            thumbnail={suxz}
            tech={techSuxz}
            paragraph="This online course platform features Slicing Design challenge from codedesign.dev by Irham Shidiq."
          />
          <Card
            name="Osom"
            thumbnail={osom}
            tech={techOsom}
            paragraph="Osom is an android mobile-based paper rock scissors game with additional betting elements."
          />
          <Card
            name="IconSup"
            thumbnail={iconsup}
            tech={techIconsup}
            paragraph="Website for complaints and help requests for 14 services that integrated with machine learning. "
          />
          <Card
            name="AAGYM"
            thumbnail={aagym}
            tech={techAagym}
            paragraph="Website that provides exercise moves and calculates BMI"
          />
          <Card
            name="Foodo"
            thumbnail={foodo}
            tech={techFoodo}
            paragraph="Foodo is An android application about food recipes with a recipe ordering feature"
          />
        </section>
      </div>
    </div>
  );
}

export default App;
