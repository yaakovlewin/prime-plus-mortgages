import { db } from "@/js/services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { z } from "zod";
import applicationSchema from "./zod/mortgageValidationSchema";

class ApplicationError extends Error {
  constructor(message, type, details = null) {
    super(message);
    this.name = "ApplicationError";
    this.type = type;
    this.details = details;
  }
}

const addApplicationData = (data, formType) => {
  try {
    if (!data.applicants?.[0]?.personalDetails) {
      throw new ApplicationError(
        "Invalid applicant data structure",
        "DATA_STRUCTURE_ERROR",
      );
    }

    const { FirstName, LastName, Email } = data.applicants[0].personalDetails;

    if (!FirstName || !LastName || !Email) {
      throw new ApplicationError(
        "Missing required personal details",
        "MISSING_FIELDS_ERROR",
      );
    }

    return {
      ...data,
      submittedAt: new Date().toISOString(),
      name: `${FirstName.trim()} ${LastName.trim()}`,
      email: Email.trim(),
      status: "Pending",
      formType,
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw error;
    }
    throw new ApplicationError(
      "Failed to process application data",
      "DATA_PROCESSING_ERROR",
      error.message,
    );
  }
};

const getErrorMessage = (error) => {
  if (error instanceof z.ZodError) {
    return error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
  }
  if (error instanceof ApplicationError) {
    return [
      {
        type: error.type,
        message: error.message,
        details: error.details,
      },
    ];
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
    // Process application data
    const enrichedData = addApplicationData(data, formType);

    // Validate data against schema
    const validatedData = applicationSchema.parse(enrichedData);

    // Submit to Firestore
    const docRef = await addDoc(
      collection(db, "applicationForms1"),
      validatedData,
    );

    if (!docRef?.id) {
      throw new ApplicationError(
        "Failed to get confirmation of submission",
        "SUBMISSION_ERROR",
      );
    }

    // Only redirect on confirmed success
    router.push("/success");

    // Return success response
    return {
      success: true,
      applicationId: docRef.id,
      message: "Application submitted successfully",
    };
  } catch (error) {
    // Get formatted error message
    const errorDetails = getErrorMessage(error);

    // Log error for monitoring (but with sensitive data removed)
    console.error("Application submission error:", {
      type: error.type || "UNKNOWN_ERROR",
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
