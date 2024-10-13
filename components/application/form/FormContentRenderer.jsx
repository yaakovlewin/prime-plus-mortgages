"use client";
import { useFormContext as useCustomFormContext } from "@/components/application/FormContext";
import FormContainer from "@/components/shared/FormContainer";
import FormHeroSection from "@/components/shared/FormHeroSection";
import Heading2 from "@/components/shared/Heading2";
import { submit } from "@/js/formSubmission";
import applicationSchema from "@/js/zod/mortgageValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import NavigationButtons from "../navigation/NavigationButtons";
import ProgressIndicator from "../navigation/ProgressIndicator";
import DynamicFormBuilder from "./DynamicFormBuilder";

export default function FormContentRenderer({ config }) {
  const { currentStep, steps, nextStep } = useCustomFormContext();
  const router = useRouter();

  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      formType: config.formType,
      applicants: [{}],
    },
  });

  const currentStepConfig = config.steps.find(
    (step) => step.id === currentStep,
  );

  const onSubmit = async (data) => {
    console.log("Submitting data: ", data);
    if (currentStep === steps.length) {
      await submit(data, router, config.formType);
      console.log("Data: ", data);
    } else {
      nextStep();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormHeroSection>
          <ProgressIndicator />
          <Heading2>{currentStepConfig.name}</Heading2>
        </FormHeroSection>
        <FormContainer className="max-w-xl">
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
        </FormContainer>
      </form>
    </FormProvider>
  );
}
