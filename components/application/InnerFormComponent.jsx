"use client";
import { useFormContext } from "@/components/application/FormContext";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormContext as useFormContextRHForm } from "react-hook-form";

// components
import FormContainer from "@/components/FormContainer";
import FormHeroSection from "@/components/FormHeroSection";
import Heading2 from "@/components/Heading2";
import NavigationButtons from "./sections/NavigationButtons";
import ProgressIndicator from "./sections/ProgressIndicator";

export default function InnerFormComponent() {
  const { currentStep, steps, nextStep } = useFormContext();
  const methods = useFormContextRHForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    if (currentStep === steps.length) {
      console.log(encode({ ...data }));
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: encode({ "form-name": "application-form", ...data }),
        });
        if (response.ok) {
          console.log("Form submitted successfully");
          router.push("/success");
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        alert(error);
      }
    } else {
      nextStep();
    }
  };

  function encode(data, parentKey) {
    const queryString = Object.keys(data)
      .map((key) => {
        const fullKey = parentKey ? `${parentKey}[${key}]` : key;
        if (typeof data[key] === "object" && data[key] !== null) {
          return encode(data[key], fullKey);
        } else {
          return (
            encodeURIComponent(fullKey) + "=" + encodeURIComponent(data[key])
          );
        }
      })
      .join("&");

    return queryString;
  }

  return (
    <form
      name="application-form"
      data-netlify="true"
      // netlify-honeypot="bot-field"
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

          {/* <div className="hidden">
            <label>
              Don’t fill this out if you&apos;re human:{" "}
              <input name="bot-field" />
            </label>
          </div> */}
          <input type="hidden" name="form-name" value="application-form" />
          <NavigationButtons />
        </>
      </FormContainer>
    </form>
  );
}
