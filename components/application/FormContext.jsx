import CompanyDetails from "@/components/application/stageComponents/CompanyDetails";
import PersonalDetails from "@/components/application/stageComponents/PersonalDetails";
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
}

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState([
    {
      id: 1,
      name: "Company Details",
      status: "current",
      href: "/company-details",
      component: CompanyDetails,
    },
    {
      id: 2,
      name: "Personal Details",
      status: "",
      href: "/personal-details",
      component: PersonalDetails,
    },
  ]);

  const nextStep = () => {
    const index = steps.findIndex((step) => step.id === currentStep);
    if (index < steps.length - 1) {
      let newSteps = [...steps];
      newSteps[index].status = "complete";
      newSteps[index + 1].status = "current";

      setSteps(newSteps);
      setCurrentStep(steps[index + 1].id);
    }
  };

  const prevStep = () => {
    const index = steps.findIndex((step) => step.id === currentStep);
    if (index > 0) {
      let newSteps = [...steps];
      newSteps[index].status = "";
      newSteps[index - 1].status = "current";

      setSteps(newSteps);
      setCurrentStep(steps[index - 1].id);
    }
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        steps,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
