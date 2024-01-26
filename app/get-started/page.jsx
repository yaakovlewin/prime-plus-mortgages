"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import CompanyDetails from "@/components/application/CompanyDetails"; // Import your CompanyDetails component
import PersonalDetails from "@/components/application/PersonalDetails"; // Import your PersonalDetails component
// Import other components as needed

export default function FormPage() {
    const methods = useForm(); // Initialize React Hook Form
    const [currentStep, setCurrentStep] = useState(1);
    const [steps, setSteps] = useState([
        {
            id: "Step 1",
            name: "Company Details",
            href: "#",
            status: "complete",
        },
        {
            id: "Step 2",
            name: "Personal Details",
            href: "#",
            status: "current",
        },
        // Add other steps here
    ]);
    // Update this based on your total number of steps

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit = (data) => {
        if (currentStep === steps.length) {
            // Submit your form data
            console.log(data);
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "contact", ...data }),
            })
                .then(() => alert("Success!"))
                .catch((error) => alert(error));
        } else {
            nextStep();
        }
    };

    return (
        <div className="container mx-auto p-4">
            <FormProvider {...methods}>
                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    netlify
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    {/* Render the component based on the current step */}
                    {currentStep === 1 && <CompanyDetails />}
                    {currentStep === 2 && (
                        <PersonalDetails type="primary" setSteps={setSteps} />
                    )}
                    {/* {showAdditionalPersonalDetails && currentStep === 3 && (
                        <PersonalDetails type="additional" />
                    )} */}

                    {/* Navigation Buttons */}
                    {currentStep > 1 && (
                        <button type="button" onClick={prevStep}>
                            Previous
                        </button>
                    )}
                    <button type="submit">
                        {currentStep === steps.length ? "Submit" : "Next"}
                    </button>

                    {/* Optional: Display current step for user reference */}

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
                                                {step.id}
                                            </span>
                                            <span className="text-sm font-medium">
                                                {step.name}
                                            </span>
                                        </a>
                                    ) : step.status === "current" ? (
                                        <a
                                            href={step.href}
                                            className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                            aria-current="step"
                                        >
                                            <span className="text-sm font-medium text-indigo-600">
                                                {step.id}
                                            </span>
                                            <span className="text-sm font-medium">
                                                {step.name}
                                            </span>
                                        </a>
                                    ) : (
                                        <a
                                            href={step.href}
                                            className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                        >
                                            <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                                {step.id}
                                            </span>
                                            <span className="text-sm font-medium">
                                                {step.name}
                                            </span>
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </form>
            </FormProvider>
        </div>
    );
}
