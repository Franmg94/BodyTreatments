import React from "react";
import profileImage from "../assets/images/profile-3.jpg";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <section id="about" className="relative bg-white p-0 md:p-12">
      <div
        className="relative   md:h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${profileImage})` }}
      >
        {/* Overlay for darkening the background image if needed */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text Container */}
        <div className="relative z-10 text-white p-4 md:p-8 w-full md:w-2/3 lg:w-1/2">
          <h2 className="title-section text-2xl md:text-3xl">About Me</h2>
          <p className="text-md md:text-lg mb-4 font-heebo leading-relaxed">
            {ABOUT.text1}
          </p>
          <p className="text-md md:text-lg font-heebo leading-relaxed">
            {ABOUT.text2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
