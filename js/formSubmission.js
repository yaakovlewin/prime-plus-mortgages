import { z } from "zod";
import applicationSchema from "./zod/mortgageValidationSchema";

// Helper function to validate data without submitting
export const validateApplicationData = (data) => {
  try {
    applicationSchema.parse(data);
    return { isValid: true };
  } catch (error) {
    return {
      isValid: false,
      errors: getErrorMessage(error),
    };
  }
};

// Helper function to format validation errors for display
export const formatValidationErrors = (errors) => {
  if (!errors || !Array.isArray(errors)) return "";

  return errors
    .map((err) => {
      const path = err.path ? `${err.path}: ` : "";
      return `${path}${err.message}`;
    })
    .join("\n");
};

const getErrorMessage = (error) => {
  if (error instanceof z.ZodError) {
    return error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
  }
  return [
    {
      type: "UNKNOWN_ERROR",
      message: "An unexpected error occurred. Please try again later.",
    },
  ];
};

export const submit = async (data, router, formType) => {
  try {
    // Client-side validation before sending to API
    applicationSchema.parse(data);

    // Submit to API
    const response = await fetch("/api/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, formType }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to submit application");
    }

    if (!result.success || !result.applicationId) {
      throw new Error("Failed to get confirmation of submission");
    }

    // Only redirect on confirmed success
    router.push("/success");

    return {
      success: true,
      applicationId: result.applicationId,
      message: result.message || "Application submitted successfully",
    };
  } catch (error) {
    // Get formatted error message
    const errorDetails = getErrorMessage(error);

    // Log error for monitoring
    console.error("Application submission error:", {
      message: error.message,
      timestamp: new Date().toISOString(),
    });

    // Return error response
    return {
      success: false,
      errors: errorDetails,
      message: "Failed to submit application",
    };
  }
};
