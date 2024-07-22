"use client";
import { FormProvider } from "@/components/application/FormContext";
import InnerFormComponent from "@/components/application/inner2";
import { firstTimeBuyerConfig } from "@/js/config/applicationConfigs";
import { FormProvider as FormProviderRHF, useForm } from "react-hook-form";

const formSteps = firstTimeBuyerConfig.steps;

export default function BuyToLet() {
  const methods = useForm({
    defaultValues: {
      applicants: [{}],
    },
  });
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
