/* eslint-disable no-unused-vars */
import React from "react";
import CAlumni from "../assets/img/c-Alumni.png";
import CAndroid from "../assets/img/c-Android.png";
import CBNSP from "../assets/img/c-BNSP.png";
import CCCIT from "../assets/img/c-CCIT.png";
import CFCC from "../assets/img/c-FCC.png";
import CIconplus from "../assets/img/c-Iconplus.png";
import CRevou from "../assets/img/c-Revou.png";
import CUX from "../assets/img/c-UX.png";

const Certificates = () => {
  return (
    <div className="space-y-4">
      <img src={CBNSP} alt="Sertif-BNSP" />
      <img src={CCCIT} alt="Sertif-CCIT" />
      <img src={CFCC} alt="Sertif-FCC" />
      <img src={CAlumni} alt="Sertif-Alumni" />
      <img src={CAndroid} alt="Sertif-Android" />
      <img src={CUX} alt="Sertif-UX" />
      <img src={CRevou} alt="Sertif-Revou" />
      <img src={CIconplus} alt="Sertif-Iconplus" />
    </div>
  );
};

export default Certificates;
