import React, { useState } from "react";
import { useFormContext } from "./FormContext";

const Contact = () => {
  const { toggleForm, setStep } = useFormContext();

  const handleMessage = () => {
    setStep(2);
    toggleForm();
  };

  return (
    <section id="contact" className="bg-white py-12">
      <hr className="mb-10 w-full" />
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-raleway">I'd love to hear from you!</p>
        <h2 className="text-3xl mb-10 font-abril">Contact Me</h2>

        <div className="flex flex-col md:justify-center items-center">
          <div className="mb-10">
            <p className="text-lg font-heebo leading-relaxed">
              If you have any questions or would like to <strong>Book</strong> a
              session, please don't heasitate to reach out!
              <br /> As a <strong>Web Developer</strong>, I would love to
              receive your feedback on this webpage:
            </p>
          </div>
          <button
            onClick={handleMessage}
            className="next-buttonmt-10 border-2 border-black tracking-wider font-bold uppercase py-5 px-8 hover:text-white hover:bg-black   transform transition-transform duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
