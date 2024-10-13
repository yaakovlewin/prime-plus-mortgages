"use client";
import { FormProvider } from "@/components/application/FormContext";
import FormContentRenderer from "@/components/application/form/FormContentRenderer";

export default function RenderForm({ config }) {
  const formSteps = config.steps;

  return (
    <div className="">
      <FormProvider initialSteps={formSteps}>
        <FormContentRenderer config={config} />
      </FormProvider>
    </div>
  );
}
