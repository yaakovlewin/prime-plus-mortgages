"use client";
import { FormProvider } from "@/components/application/FormContext";
import InnerFormComponent from "@/components/application/InnerFormComponent";
// import CompanyDetails from "@/components/application/stageComponents/CompanyDetails";
import FinancialDetails from "@/components/application/stageComponents/FinancialDetails";
import PersonalDetails from "@/components/application/stageComponents/PersonalDetails";
import { FormProvider as FormProviderRHF, useForm } from "react-hook-form";

const formSteps = [
  {
    id: 1,
    name: "Personal Details",
    status: "",
    href: "/personal-details",
    component: PersonalDetails,
  },
  {
    id: 2,
    name: "Financial Details",
    status: "",
    href: "/financial-details",
    component: FinancialDetails,
  },
  // {
  //   id: 3,
  //   name: "Property Details",
  //   status: "",
  //   href: "/property-details",
  //   component: PersonalDetails,
  // },
  // {
  //   id: 4,
  //   name: "Mortgage Details",
  //   status: "",
  //   href: "/mortgage-details",
  //   component: PersonalDetails,
  // },
  // {
  //   id: 5,
  //   name: "Summary",
  //   status: "",
  //   href: "/summary",
  //   component: PersonalDetails,
  // },
];

export default function FirstTimeBuyer() {
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
