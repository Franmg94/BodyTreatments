import React, { createContext, useContext, useState } from "react";

const FormContext = createContext(undefined);

export const FormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <FormContext.Provider value={{ isOpen, toggleForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
