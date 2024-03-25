"use client";
import React, { useState } from "react";
import { useForm, FormProvider as FormProviderRHF } from "react-hook-form";
import { FormProvider } from "@/components/application/FormConext";
import { useRouter } from "next/navigation";
import CompanyDetails from "@/components/application/CompanyDetails";
import PersonalDetails from "@/components/application/PersonalDetails";

export default function FormPage() {
  const methods = useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState([
    {
      id: 1,
      name: "Company Details",
      status: "current",
      href: "/company-details",
      component: CompanyDetails,
    },
    {
      id: 2,
      name: "Personal Details",
      status: "",
      href: "/personal-details",
      component: PersonalDetails,
    },
  ]);
  const router = useRouter();

  const nextStep = () => {
    const index = steps.findIndex((step) => step.id === currentStep);
    if (index < steps.length - 1) {
      let newSteps = [...steps];
      newSteps[index].status = "complete";
      newSteps[index + 1].status = "current";

      setSteps(newSteps);
      setCurrentStep(steps[index + 1].id);
    }
  };

  const prevStep = () => {
    const index = steps.findIndex((step) => step.id === currentStep);
    if (index > 0) {
      let newSteps = [...steps];
      newSteps[index].status = "";
      newSteps[index - 1].status = "current";

      setSteps(newSteps);
      setCurrentStep(steps[index - 1].id);
    }
  };

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
    <div className="container mx-auto p-4">
      <FormProviderRHF {...methods}>
        <FormProvider>
          <form
            name="application-form"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            netlify
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <nav aria-label="Progress">
              <ol
                role="list"
                className="space-y-4 md:flex md:space-x-8 md:space-y-0"
              >
                {steps.map((step) => (
                  <li key={step.name} className="md:flex-1">
                    {step.status === "complete" ? (
                      <a
                        href={step.href}
                        className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                      >
                        <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">
                          Step {step.id}
                        </span>
                        <span className="text-sm font-medium">{step.name}</span>
                      </a>
                    ) : step.status === "current" ? (
                      <a
                        href={step.href}
                        className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                        aria-current="step"
                      >
                        <span className="text-sm font-medium text-indigo-600">
                          Step {step.id}
                        </span>
                        <span className="text-sm font-medium">{step.name}</span>
                      </a>
                    ) : (
                      <a
                        href={step.href}
                        className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                      >
                        <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          Step {step.id}
                        </span>
                        <span className="text-sm font-medium">{step.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

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
            <div className="flex justify-between">
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
          </form>
        </FormProvider>
      </FormProviderRHF>
    </div>
  );
}
