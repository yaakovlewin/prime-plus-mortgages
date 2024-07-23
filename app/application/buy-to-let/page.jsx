"use client";
import { FormProvider } from "@/components/application/FormContext";
import InnerFormComponent from "@/components/application/InnerFormComponent2";
import CompanyDetails from "@/components/application/stageComponents/CompanyDetails";
import EmploymentDetails from "@/components/application/stageComponents/EmploymentDetails";
import FinancialDetails from "@/components/application/stageComponents/FinancialDetails";
import PersonalDetails from "@/components/application/stageComponents/PersonalDetails";
import PortfolioDetails from "@/components/application/stageComponents/PortfolioDetails";
import PropertyDetails from "@/components/application/stageComponents/PropertyDetails";
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
  {
    id: 3,
    name: "Financial Details",
    status: "",
    href: "/financial-details",
    component: FinancialDetails,
  },
  {
    id: 4,
    name: "Employment Details",
    status: "",
    href: "/employment-details",
    component: EmploymentDetails,
  },
  {
    id: 5,
    name: "Portfolio Details",
    status: "",
    href: "/portfolio-details",
    component: PortfolioDetails,
  },
  {
    id: 6,
    name: "Property Details",
    status: "",
    href: "/property-details",
    component: PropertyDetails,
  },
  // {
  //   id: 5,
  //   name: "Mortgage Details",
  //   status: "",
  //   href: "/mortgage-details",
  //   component: MortgageDetails,
  // },
  // {
  //   id: 6,
  //   name: "Summary",
  //   status: "",
  //   href: "/summary",
  //   component: Summary,
  // },
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
