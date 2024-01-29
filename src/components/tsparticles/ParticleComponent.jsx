/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from "react";
import ParticleDarkConfig from "./particle-dark-config";
import ParticleLightConfig from "./particle-light-config";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticleComponent = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="w-screen h-screen bg-light-second dark:bg-dark-second -z-10 absolute"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={darkMode ? ParticleDarkConfig : ParticleLightConfig}
    />
  );
};

export default ParticleComponent;
