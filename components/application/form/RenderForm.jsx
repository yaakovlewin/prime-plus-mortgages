"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import FormContentRenderer from "components/application/form/FormContentRenderer";
import applicationSchema from "js/zod/mortgageValidationSchema";
import { useForm } from "react-hook-form";
import FormWrapper from "./FormWrapper";

export default function RenderForm({ config }) {
  const formSteps = config.steps;

  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      formType: config.formType,
      applicants: [{}],
    },
  });

  return (
    <div className="">
      <FormWrapper methods={methods} formSteps={formSteps}>
        <FormContentRenderer config={config} />
      </FormWrapper>
    </div>
  );
}
