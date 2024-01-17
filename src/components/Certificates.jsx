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
    <>
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5 lg:mt-8">
        <img
          className="h-full w-full object-cover sm:row-span-2"
          src={CBNSP}
          alt="Sertif-BNSP"
        />
        <img
          className="h-full w-full object-cover"
          src={CCCIT}
          alt="Sertif-CCIT"
        />
        <img
          className="h-full w-full object-cover"
          src={CFCC}
          alt="Sertif-FCC"
        />

        <img
          className="h-full w-full object-cover lg:hidden"
          src={CAlumni}
          alt="Sertif-Alumni"
        />
        <img
          className="h-full w-full object-cover lg:hidden"
          src={CAndroid}
          alt="Sertif-Android"
        />
        <img
          className="h-full w-full object-cover lg:hidden"
          src={CUX}
          alt="Sertif-UX"
        />
        <img
          className="h-full w-full object-cover lg:hidden"
          src={CRevou}
          alt="Sertif-Revou"
        />
        <img
          className="h-full w-full object-cover sm:col-span-2 lg:col-span-1 lg:hidden"
          src={CIconplus}
          alt="Sertif-Iconplus"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-5 mt-5">
        <img
          className="h-full w-full object-cover"
          src={CAlumni}
          alt="Sertif-Alumni"
        />
        <img
          className="h-full w-full object-cover"
          src={CAndroid}
          alt="Sertif-Android"
        />
        <img className="h-full w-full object-cover" src={CUX} alt="Sertif-UX" />
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-5 mt-5">
        <img
          className="h-full w-full object-cover "
          src={CRevou}
          alt="Sertif-Revou"
        />
        <img
          className="h-full w-full object-cover sm:col-span-2 lg:col-span-1 "
          src={CIconplus}
          alt="Sertif-Iconplus"
        />
      </div>
    </>
  );
};

export default Certificates;
