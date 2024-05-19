"use client";
import React from "react";
import { useFormContext as useFormContextRHForm } from "react-hook-form";
import { useFormContext } from "@/components/application/FormContext";
import { useRouter } from "next/navigation";

// components
import FormHeroSection from "@/components/FormHeroSection";
import Heading2 from "@/components/Heading2";
import FormContainer from "@/components/FormContainer";
import NavigationButtons from "./NavigationButtons";
import ProgressIndicator from "./ProgressIndicator";

export default function InnerFormComponent() {
  const { currentStep, steps, nextStep, updateFormData, formData } =
    useFormContext();
  const methods = useFormContextRHForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    updateFormData(data);
    console.log(data);
    const isValid = await methods.trigger();
    if (isValid) {
      if (currentStep === steps.length) {
        await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: encode({ "form-name": "application-form", ...formData }),
        })
          .then(() => {
            console.log("Form submitted successfully");
            router.push("/success");
          })
          .catch((error) => alert(error));
      } else {
        nextStep();
      }
    }
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  }

  return (
    <form
      name="application-form"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      netlify
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <FormHeroSection>
        <ProgressIndicator />
        <Heading2>
          {steps.find((step) => step.id === currentStep).name}
        </Heading2>
      </FormHeroSection>
      <FormContainer className="max-w-xl">
        <>
          {steps.map(
            (step) =>
              currentStep === step.id && (
                <React.Fragment key={step.id}>
                  <step.component />
                </React.Fragment>
              ),
          )}

          <div className="hidden">
            <label>
              Don’t fill this out if you&apos;re human:{" "}
              <input name="bot-field" />
            </label>
          </div>
          <input type="hidden" name="form-name" value="contact" />
          <NavigationButtons />
        </>
      </FormContainer>
    </form>
  );
}
