import { useState } from "react";
import NavbarComponents from "./components/NavbarComponents";
import WelcomeComponent from "./components/WelcomeComponent";

function App() {
  const [darkmode, setDarkmode] = useState(true);

  function toggleMode() {
    setDarkmode(!darkmode);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div className="font-montserrat">
      <WelcomeComponent darkMode={darkmode} />
      <section id="home" className="h-screen bg-light-first dark:bg-dark-first">
        <NavbarComponents toggleMode={toggleMode} darkMode={darkmode} />
      </section>
    </div>
  );
}

export default App;
