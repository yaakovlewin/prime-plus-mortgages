"use client";
import FormContentRenderer from "@/components/application/form/FormContentRenderer";
import { FormProvider } from "@/components/application/FormContext";
import { FormProvider as FormProviderRHF, useForm } from "react-hook-form";

export default function RenderForm({ config }) {
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
          <FormContentRenderer config={config} />
        </FormProvider>
      </FormProviderRHF>
    </div>
  );
}
