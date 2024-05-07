"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm, FormProvider as FormProviderRHF } from "react-hook-form";
import {
  useFormContext,
  FormProvider,
} from "@/components/application/FormContext";
import { useRouter } from "next/navigation";
import FormHeroSection from "@/components/FormHeroSection";
import Heading2 from "@/components/Heading2";
import FormContainer from "@/components/FormContainer";

export default function FormPage() {
  const methods = useForm();
  return (
    <div className="">
      <FormProviderRHF {...methods}>
        <FormProvider>
          <InnerFormComponent />
        </FormProvider>
      </FormProviderRHF>
    </div>
  );
}

function InnerFormComponent() {
  const { currentStep, steps, nextStep } = useFormContext();
  const methods = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    if (currentStep === steps.length) {
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({ "form-name": "application-form", ...data }),
      })
        .then(() => {
          console.log("Form submitted successfully");
          router.push("/success");
        })
        .catch((error) => alert(error));
    } else {
      nextStep();
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

function ProgressIndicator() {
  const { steps, currentStep } = useFormContext();
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.status === "complete" ? (
              <div className="group flex flex-col border-l-4 border-sky-700 py-2 pl-4 hover:border-sky-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-sky-700 group-hover:text-sky-800">
                  Step {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : step.status === "current" ? (
              <div
                className="flex flex-col border-l-4 border-sky-700 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                aria-current="step"
              >
                <span className="text-sm font-medium text-sky-700">
                  Step {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : (
              <div className="group flex flex-col border-l-4 border-neutral-400 py-2 pl-4 hover:border-gray-400 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-neutral-500">
                  Step {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function NavigationButtons() {
  const { currentStep, steps, prevStep, nextStep } = useFormContext();
  return (
    <div className="container flex justify-between">
      <button
        type="button"
        onClick={prevStep}
        className={`rounded bg-gray-200 px-4 py-2 font-bold text-gray-700 hover:bg-gray-300  ${
          currentStep === 1 ? "invisible" : ""
        }`}
      >
        Previous
      </button>
      <button
        type="submit"
        className={`rounded bg-cyan-500 px-4 py-2 font-bold text-white hover:bg-cyan-600 `}
      >
        {currentStep === steps.length ? "Submit" : "Next"}
      </button>
    </div>
  );
}
