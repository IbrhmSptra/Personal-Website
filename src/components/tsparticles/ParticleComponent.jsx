/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from "react";
import ParticleConfig from "./particle-dark-config";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticleComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="w-screen h-screen bg-light dark:bg-dark-second -z-10 absolute"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={ParticleConfig}
    />
  );
};

export default ParticleComponent;
