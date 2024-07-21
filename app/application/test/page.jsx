"use client";
import { FormProvider } from "@/components/application/FormContext";
import InnerFormComponent from "@/components/application/inner2";
import { buyToLetConfig } from "@/js/config/applicationConfigs";
import { FormProvider as FormProviderRHF, useForm } from "react-hook-form";

const formSteps = [buyToLetConfig.steps];

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
