import React from "react";
import profileImage from "../assets/images/profile-3.jpg";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <section id="about" className="bg-white p-12">
      <div className="container mx-auto px-4 flex flex-col-reverse gap-7 md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative ">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 font-raleway">About Me</h2>
          <p className="text-lg mb-4 font-heebo leading-relaxed">
            {ABOUT.text1}
          </p>
          <p className="text-lg font-heebo leading-relaxed">{ABOUT.text2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
