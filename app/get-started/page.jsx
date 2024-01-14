"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import CompanyDetails from "@/components/application/CompanyDetails"; // Import your CompanyDetails component
import PersonalDetails from "@/components/application/PersonalDetails"; // Import your PersonalDetails component
// Import other components as needed

export default function FormPage() {
    const methods = useForm(); // Initialize React Hook Form
    const [currentStep, setCurrentStep] = useState(1);
    const TOTAL_STEPS = 2; // Update this based on your total number of steps

    const nextStep = () => {
        if (currentStep < TOTAL_STEPS) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit = (data) => {
        if (currentStep === TOTAL_STEPS) {
            // Submit your form data
            console.log(data);
        } else {
            nextStep();
        }
    };

    return (
        <div className="container mx-auto p-4">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {/* Render the component based on the current step */}
                    {currentStep === 1 && <CompanyDetails />}
                    {currentStep === 2 && <PersonalDetails />}
                    {/* Add other components corresponding to different steps here */}

                    {/* Navigation Buttons */}
                    {currentStep > 1 && (
                        <button type="button" onClick={prevStep}>
                            Previous
                        </button>
                    )}
                    <button type="submit">
                        {currentStep === TOTAL_STEPS ? "Submit" : "Next"}
                    </button>

                    {/* Optional: Display current step for user reference */}
                    <p>
                        Step {currentStep} of {TOTAL_STEPS}
                    </p>
                </form>
            </FormProvider>
        </div>
    );
}
