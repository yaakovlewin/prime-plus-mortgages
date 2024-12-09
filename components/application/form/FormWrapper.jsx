"use client";

import { FormProvider as CustomFormProvider } from "@/components/application/FormContext";
import { FormProvider as RHFFormProvider } from "react-hook-form";

export default function FormWrapper({ children, methods, formSteps }) {
  return (
    <CustomFormProvider initialSteps={formSteps}>
      <RHFFormProvider {...methods}>{children}</RHFFormProvider>
    </CustomFormProvider>
  );
}
