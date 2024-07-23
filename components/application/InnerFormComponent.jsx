"use client";
import { useFormContext } from "@/components/application/FormContext";
import { useRouter } from "next/navigation";
import { useFormContext as useFormContextRHForm } from "react-hook-form";

// components
import FormContainer from "@/components/FormContainer";
import FormHeroSection from "@/components/FormHeroSection";
import Heading2 from "@/components/Heading2";
import { submit } from "@/js/formSubmission";
import DynamicForm from "./DynamicForm";
import NavigationButtons from "./sections/NavigationButtons";
import ProgressIndicator from "./sections/ProgressIndicator";

export default function InnerFormComponent({ config }) {
  const { currentStep, steps, nextStep } = useFormContext();

  const currentStepConfig = config.steps.find(
    (step) => step.id === currentStep,
  );
  const methods = useFormContextRHForm({
    mode: "onTouched",
    defaultValues: {
      //   ...config.sections.reduce((acc, section) => {
      //     acc[section.id] = section.fields.reduce((acc, field) => {
      //       acc[field.id] = field.defaultValue;
      //       return acc;
      //     }, {});
      //     return acc;
      //   }, {}),
    },
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    if (currentStep === steps.length) {
      //   console.log(encode({ ...data }));
      submit(data, router);
    } else {
      nextStep();
    }
  };

  //   function encode(data, parentKey) {
  //     const queryString = Object.keys(data)
  //       .map((key) => {
  //         const fullKey = parentKey ? `${parentKey}[${key}]` : key;
  //         if (typeof data[key] === "object" && data[key] !== null) {
  //           return encode(data[key], fullKey);
  //         } else {
  //           return (
  //             encodeURIComponent(fullKey) + "=" + encodeURIComponent(data[key])
  //           );
  //         }
  //       })
  //       .join("&");

  //     return queryString;
  //   }

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
              <DynamicForm
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
