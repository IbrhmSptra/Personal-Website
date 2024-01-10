import { useState, useEffect, useRef } from "react";
import NavbarComponents from "./components/NavbarComponents";
import WelcomeComponent from "./components/WelcomeComponent";
import Sidebar from "./components/Sidebar";
import HeroImage from "./assets/img/hero-img.png";
import Divider from "./components/divider";
import TechSlider from "./components/TechSlider";

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);

  //sticky navbar
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
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
        <section
          id="Home"
          className="container py-16 px-4 pt bg-light-first dark:bg-dark-first"
        >
          <img
            className="w-[200px] h-[200px] mx-auto"
            src={HeroImage}
            alt="HeroImage"
          />
          <div className="mt-6">
            <div>
              <h2 className="text-sm font-normal text-headings dark:text-white ">
                Hi, I am
              </h2>
              <h1 className="text-base font-bold text-headings dark:text-white">
                Ibrahim Saputra
              </h1>
              <h2 className="text-sm font-normal text-secondary">
                Front-End Developer
              </h2>
              <p className="text-xs font-normal dark:text-white text-paragraphs mt-2">
                Have experience in Web and Android development and an interest
                in Machine Learning. Certified as a Programmer by BNSP and LSPUI
              </p>
            </div>
            <div className="flex items-center mt-4">
              <h1 className="text-base font-bold flex-1 max-w-24 text-headings dark:text-white">
                Tech Stack
              </h1>
              <Divider />
              <TechSlider />
            </div>
          </div>
        </section>
        <section className="h-screen bg-light-second dark:bg-dark-second"></section>
      </div>
    </div>
  );
}

export default App;
