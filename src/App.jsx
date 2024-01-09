// import { useState } from 'react'
import NavbarComponents from "./components/NavbarComponents";
import WelcomeComponent from "./components/WelcomeComponent";

function App() {
  return (
    <div className="font-montserrat">
      <WelcomeComponent />
      <section className="h-screen bg-light dark:bg-dark-first">
        <NavbarComponents />
      </section>
    </div>
  );
}

export default App;
