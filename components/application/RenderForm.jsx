"use client";
import { FormProvider } from "@/components/application/FormContext";
import InnerFormComponent from "@/components/application/innerFormComponent";
import { FormProvider as FormProviderRHF, useForm } from "react-hook-form";

export default function MainForm({ config }) {
  console.log("config", config);
  const methods = useForm({
    defaultValues: {
      applicants: [{}],
    },
  });

  const formSteps = config.steps;

  return (
    <div className="">
      <FormProviderRHF {...methods}>
        <FormProvider initialSteps={formSteps}>
          <InnerFormComponent config={config} />
        </FormProvider>
      </FormProviderRHF>
    </div>
  );
}
