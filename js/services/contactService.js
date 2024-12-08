import { z } from "zod";

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Contact form validation schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .regex(EMAIL_REGEX, "Invalid email format"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long")
    .trim(),
});

// Submit contact form function
export const submitContactForm = async (formData) => {
  try {
    // Validate form data
    contactSchema.parse(formData);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle rate limiting
      if (response.status === 429) {
        return {
          success: false,
          errors: {
            submit: "Too many requests. Please try again later.",
          },
        };
      }

      // Handle validation errors
      if (response.status === 400 && data.details) {
        const fieldErrors = {};
        data.details.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        return {
          success: false,
          errors: fieldErrors,
        };
      }

      // Handle other errors
      return {
        success: false,
        errors: {
          submit: data.error || "Failed to submit form",
        },
      };
    }

    return {
      success: true,
      id: data.id,
    };
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      const fieldErrors = {};
      error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      return {
        success: false,
        errors: fieldErrors,
      };
    }

    // Handle other errors
    return {
      success: false,
      errors: {
        submit: "An unexpected error occurred. Please try again.",
      },
    };
  }
};
