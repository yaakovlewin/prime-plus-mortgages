"use client";
import { useFormContext } from "@/components/application/FormContext";

export default function NavigationButtons() {
  const { currentStep, steps, prevStep } = useFormContext();
  return (
    <div className="container flex justify-between py-3">
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
