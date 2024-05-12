"use client";
import React from "react";
import { useFormContext } from "@/components/application/FormContext";


export default function NavigationButtons() {
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
