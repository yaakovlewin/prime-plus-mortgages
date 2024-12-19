import { ContactFormEmail } from "@/components/email/ContactFormEmail";
import admin from "@/js/config/firebaseAdmin";
import { contactSchema } from "@/js/services/contactService";
import { sendEmail } from "@/js/services/emailService";
import { rateLimit } from "@/lib/rate-limit";

// Helper to sanitize input
const sanitizeInput = (str) => {
  return str
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .trim();
};

export async function POST(request) {
  try {
    // Check request size
    const contentLength = parseInt(
      request.headers.get("content-length") || "0",
    );
    if (contentLength > 5000) {
      return new Response(
        JSON.stringify({
          error: "Request too large",
        }),
        {
          status: 413,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Apply rate limiting
    try {
      await rateLimit.check(request); // 5 requests per minute
    } catch {
      return new Response(
        JSON.stringify({
          error: "Too many requests. Please try again later.",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const data = await request.json();

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(data.name || ""),
      email: sanitizeInput(data.email || ""),
      message: sanitizeInput(data.message || ""),
    };

    // Validate data against schema
    try {
      contactSchema.parse(sanitizedData);
    } catch (validationError) {
      return new Response(
        JSON.stringify({
          error: "Validation failed",
          details: validationError.errors,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Add metadata
    const formData = {
      ...sanitizedData,
      timestamp: admin.firestore.Timestamp.now(),
      ip:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip"),
      userAgent: request.headers.get("user-agent"),
    };

    // Save to Firebase using Admin SDK
    const docRef = await admin.firestore().collection("contacts").add(formData);

    // Generate email HTML using the new component
    const emailHtml = ContactFormEmail({
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message,
      ip: formData.ip,
      referenceId: docRef.id,
    });

    // Send email notification using our email service directly
    const emailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: emailHtml,
    });

    if (!emailResult.success) {
      console.error(
        "Failed to send email notification:",
        emailResult.error,
        emailResult.setup,
      );
      // Return error response since email sending failed
      return new Response(
        JSON.stringify({
          error: "Failed to send email notification. Please try again later.",
          details: emailResult.error,
          setup: emailResult.setup,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        id: docRef.id,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        error:
          "An error occurred while processing your request. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
