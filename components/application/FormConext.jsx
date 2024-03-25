import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function useFormContext() {
  return useContext(FormContext);
}

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    companyDetails: {
      companyName: "",
      registrationNumber: "",
      incorporationDate: "",
      companyAddress: {
        street: "",
        locality: "",
        townCity: "",
        county: "",
        postCode: "",
      },
      correspondentAddress: {
        street: "",
        locality: "",
        townCity: "",
        county: "",
        postCode: "",
      },
    },
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    isCorrespondentAddressVisible: false,
  });

  const updateFormData = (newData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...newData,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
