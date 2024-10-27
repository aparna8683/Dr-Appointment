import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className=" flex flex-col md:flex-row flex-wrap bg-primary rounded-lg md:px-left">
      <div className=" md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semoibold leading-tight md:mb-[-30px]">
          Book Appointmentb <br />
          with Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>
            Simply Browse here and find the one <br />
            who is more likely to resolve your disease
          </p>
        </div>
        <a href="">
          Book Appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      <div>
        <img src={assets.header_img} alt="" />
        <p></p>
      </div>
    </div>
  );
};

export default Header;
