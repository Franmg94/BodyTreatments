import React, { useState } from "react";
import { useFormContext } from "./FormContext";
import { FaTimes, FaBars } from "react-icons/fa";
import { LOCATIONS } from "../constants";
import ContactForm from "./ContactForm";
ContactForm;

const SlidingForm = () => {
  const { isOpen, toggleForm } = useFormContext();
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="title-form ">Select Location</h2>
            <div className="flex flex-col mt-20 gap-10">
              {LOCATIONS.map((location, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 text-center my-5 italic "
                  >
                    <button
                      className="next-button"
                      onClick={() => {
                        if (location.name === "Centro Delfino") {
                          window.open(
                            "https://schoeneberg.centro-delfino.com/online-buchung/",
                            "_blank"
                          );
                        } else {
                          setStep(2);
                        }
                      }}
                    >
                      {location.name}
                    </button>
                    <p clas>{location.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="title-form">Let's Connect</h2>
            <div className="flex flex-col mt-20 gap-10"></div>
            <ContactForm />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 "
          onClick={toggleForm}
        ></div>
      )}
      <div className="relative ">
        <div
          className={`fixed inset-y-0 right-0 bg-white z-50 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col p-8 sm:p-4 lg:p-8 `}
        >
          <button
            onClick={() => {
              toggleForm();
              setStep(1);
            }}
            className="absolute top-4 right-4 text-white"
            aria-label="Close"
          >
            <FaTimes className="m-2 h-6 w-5 text-black" />
          </button>
          <div className="p-8 ">{renderStep(1)}</div>
        </div>
      </div>
    </>
  );
};

export default SlidingForm;
