"use client";

import FormHeroSection from "@/components/shared/FormHeroSection";
import Heading2 from "@/components/shared/Heading2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ERROR_TYPES = {
  NOT_FOUND: "NOT_FOUND",
  VALIDATION: "VALIDATION",
  SERVER: "SERVER",
  UNKNOWN: "UNKNOWN",
};

const getErrorType = (error) => {
  if (error.status === 404) return ERROR_TYPES.NOT_FOUND;
  if (error.message?.includes("validation")) return ERROR_TYPES.VALIDATION;
  if (error.status >= 500) return ERROR_TYPES.SERVER;
  return ERROR_TYPES.UNKNOWN;
};

const getErrorMessage = (error, errorType) => {
  switch (errorType) {
    case ERROR_TYPES.NOT_FOUND:
      return "We couldn't find the form you're looking for.";
    case ERROR_TYPES.VALIDATION:
      return "There was an issue with the form data.";
    case ERROR_TYPES.SERVER:
      return "We're experiencing technical difficulties.";
    default:
      return "An unexpected error occurred.";
  }
};

export default function Error({ error, reset }) {
  const router = useRouter();
  const [errorType, setErrorType] = useState(ERROR_TYPES.UNKNOWN);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Log error to monitoring service
    const logError = async () => {
      const errorDetails = {
        type: errorType,
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      };

      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.error("Application error:", errorDetails);
      }

      // Here you would typically send to your error tracking service
      // await errorTrackingService.logError(errorDetails);
    };

    const type = getErrorType(error);
    setErrorType(type);
    setErrorMessage(getErrorMessage(error, type));
    logError();
  }, [error, errorType]);

  const handleReset = async () => {
    try {
      await reset();
    } catch (resetError) {
      // If reset fails, redirect to home
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <FormHeroSection>
        <Heading2 className="text-4xl tracking-wider text-red-500">
          {errorType === ERROR_TYPES.NOT_FOUND
            ? "404 - Page Not Found"
            : "Error"}
        </Heading2>
      </FormHeroSection>

      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {errorMessage}
            </h2>

            <p className="mb-8 text-gray-600">
              {errorType === ERROR_TYPES.NOT_FOUND ? (
                <span>
                  Please check our{" "}
                  <Link
                    href="/"
                    className="text-sky-500 underline hover:text-sky-700"
                  >
                    available forms
                  </Link>{" "}
                  for valid options.
                </span>
              ) : (
                <span>You can try again or return to the previous page.</span>
              )}
            </p>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleReset}
                className="rounded-md bg-sky-500 px-6 py-2 text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                aria-label="Try again"
              >
                Try Again
              </button>

              <button
                onClick={() => router.back()}
                className="rounded-md border border-sky-500 px-6 py-2 text-sky-500 transition-colors hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                aria-label="Go back to previous page"
              >
                Go Back
              </button>
            </div>

            {errorType === ERROR_TYPES.SERVER && (
              <p className="mt-8 text-sm text-gray-500">
                If this problem persists, please{" "}
                <Link
                  href="/contact"
                  className="text-sky-500 underline hover:text-sky-700"
                >
                  contact our support team
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
