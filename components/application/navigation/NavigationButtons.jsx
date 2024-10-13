"use client";
import { useFormContext } from "@/components/application/FormContext";

export default function NavigationButtons() {
  const { currentStep, steps, prevStep, nextStep } = useFormContext();

  const onNext = () => {
    if (currentStep === steps.length) {
      // submit form
    } else {
      // next step
    }
  };

  return (
    <div className="container flex justify-between py-3">
      <button
        type="submit"
        onClick={prevStep}
        className={`rounded bg-gray-200 px-4 py-2 font-bold text-gray-700 hover:bg-gray-300  ${
          currentStep === 1 ? "invisible" : ""
        }`}
      >
        Previous
      </button>
      {currentStep === steps.length ? (
        <button
          type="submit"
          className={`rounded bg-cyan-500 px-4 py-2 font-bold text-white hover:bg-cyan-600 `}
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          onClick={nextStep}
          className={`rounded bg-cyan-500 px-4 py-2 font-bold text-white hover:bg-cyan-600 `}
        >
          Next
        </button>
      )}
    </div>
  );
}
