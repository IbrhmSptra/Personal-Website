/* eslint-disable no-unused-vars */
import React from "react";
import CAlumni from "../assets/img/certificate/c-Alumni.png";
import CAndroid from "../assets/img/certificate/c-Android.png";
import CBNSP from "../assets/img/certificate/c-BNSP.png";
import CCCIT from "../assets/img/certificate/c-CCIT.png";
import CFCC from "../assets/img/certificate/c-FCC.png";
import CIconplus from "../assets/img/certificate/c-Iconplus.png";
import CRevou from "../assets/img/certificate/c-Revou.png";
import CUX from "../assets/img/certificate/c-UX.png";
import Niit from "../assets/img/certificate/NIIT-Cert.jpg";
import CAHarisenin from "../assets/img/certificate/c-AwardHS.png";
import CCHarisenin from "../assets/img/certificate/c-CompletionHS.png";

const Certificates = () => {
  return (
    <>
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5 lg:mt-8">
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover sm:row-span-2"
          src={CBNSP}
          alt="Sertif-BNSP"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover"
          src={CCCIT}
          alt="Sertif-CCIT"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover"
          src={CFCC}
          alt="Sertif-FCC"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover"
          src={CCHarisenin}
          alt="Sertif-Award Harisenin"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover"
          src={CAHarisenin}
          alt="Sertif-Completion Harisenin"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover"
          src={Niit}
          alt="Sertif-NIIT"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover"
          src={CAlumni}
          alt="Sertif-Alumni"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover "
          src={CAndroid}
          alt="Sertif-Android"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover "
          src={CUX}
          alt="Sertif-UX"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover "
          src={CRevou}
          alt="Sertif-Revou"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover "
          src={CIconplus}
          alt="Sertif-Iconplus"
        />
      </div>
      {/* <div className="hidden lg:grid grid-cols-3 gap-5 mt-5">
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover"
          src={CAlumni}
          alt="Sertif-Alumni"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover"
          src={CAndroid}
          alt="Sertif-Android"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover"
          src={CUX}
          alt="Sertif-UX"
        />
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-5 mt-5">
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover "
          src={CRevou}
          alt="Sertif-Revou"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="200"
          className="h-full w-full object-cover sm:col-span-2 lg:col-span-1 "
          src={CIconplus}
          alt="Sertif-Iconplus"
        />
      </div> */}
    </>
  );
};

export default Certificates;
