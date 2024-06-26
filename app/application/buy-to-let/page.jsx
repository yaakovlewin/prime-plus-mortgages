"use client";
import { FormProvider } from "@/components/application/FormContext";
import InnerFormComponent from "@/components/application/InnerFormComponent";
import CompanyDetails from "@/components/application/stageComponents/CompanyDetails";
import PersonalDetails from "@/components/application/stageComponents/PersonalDetails";
import { FormProvider as FormProviderRHF, useForm } from "react-hook-form";

const formSteps = [
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
];

export default function BuyToLet() {
  const methods = useForm();
  return (
    <div className="">
      <FormProviderRHF {...methods}>
        <FormProvider initialSteps={formSteps}>
          <InnerFormComponent />
        </FormProvider>
      </FormProviderRHF>
    </div>
  );
}
