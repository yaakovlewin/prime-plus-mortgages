"use client";
import { useFormContext } from "@/components/application/FormContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFormContext as useFormContextRHForm } from "react-hook-form";

// components
import FormContainer from "@/components/shared/FormContainer";
import FormHeroSection from "@/components/shared/FormHeroSection";
import Heading2 from "@/components/shared/Heading2";
import { submit } from "@/js/formSubmission";
import applicationSchema from "@/js/zod/mortgageValidationSchema";
import NavigationButtons from "../navigation/NavigationButtons";
import ProgressIndicator from "../navigation/ProgressIndicator";
import DynamicFormBuilder from "./DynamicFormBuilder";

export default function FormContentRenderer({ config }) {
  const { currentStep, steps, nextStep } = useFormContext();

  const currentStepConfig = config.steps.find(
    (step) => step.id === currentStep,
  );
  const methods = useFormContextRHForm({
    mode: "onTouched",
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      formType: config.formType,
      //   ...config.sections.reduce((acc, section) => {
      //     acc[section.id] = section.fields.reduce((acc, field) => {
      //       acc[field.id] = field.defaultValue;
      //       return acc;
      //     }, {});
      //     return acc;
      //   }, {}),
    },
  });

  console.log("formType: ", config.formType);

  const router = useRouter();

  const onSubmit = async (data) => {
    if (currentStep === steps.length) {
      await submit(data, router, config.formType);
      // try {
      //   // Validate the entire form data
      //   applicationSchema.parse(data);
      //   // If validation passes, submit the form
      //   await submit(data, router, config.formType);
      // } catch (error) {
      //   // Handle Zod validation errors
      //   console.error("Validation error:", error.errors);
      //   // You might want to display these errors to the user
      // }
    } else {
      nextStep();
    }
  };

  return (
    <form
      name="application-form"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <input type="hidden" name="form-name" value="application-form" />
      <div className="hidden">
        <label>
          Don’t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </div>
      <FormHeroSection>
        <ProgressIndicator />
        <Heading2>{currentStepConfig.name}</Heading2>
      </FormHeroSection>
      <FormContainer className="max-w-xl">
        <>
          {currentStepConfig.sections.map((sectionId) => {
            const sectionConfig = config.sections.find(
              (section) => section.id === sectionId,
            );
            return (
              <DynamicFormBuilder
                key={sectionId}
                configs={{ sections: [sectionConfig] }}
              />
            );
          })}
          <NavigationButtons />
        </>
      </FormContainer>
    </form>
  );
}
