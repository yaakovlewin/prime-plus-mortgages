import admin from "@/js/config/firebaseAdmin";
import applicationSchema from "@/js/zod/mortgageValidationSchema";
import { z } from "zod";

const addApplicationData = (data, formType) => {
  if (!data.applicants?.[0]?.personalDetails) {
    throw new Error("Invalid applicant data structure");
  }

  const { FirstName, LastName, Email } = data.applicants[0].personalDetails;

  if (!FirstName || !LastName || !Email) {
    throw new Error("Missing required personal details");
  }

  return {
    ...data,
    submittedAt: admin.firestore.Timestamp.now(),
    name: `${FirstName.trim()} ${LastName.trim()}`,
    email: Email.trim(),
    status: "Pending",
    formType,
    updatedAt: admin.firestore.Timestamp.now(),
  };
};

export async function POST(request) {
  try {
    const { data, formType } = await request.json();

    // Process and validate application data
    const enrichedData = addApplicationData(data, formType);
    const validatedData = applicationSchema.parse(enrichedData);

    // Save to Firebase using Admin SDK
    const docRef = await admin
      .firestore()
      .collection("applications")
      .add(validatedData);

    if (!docRef?.id) {
      throw new Error("Failed to get confirmation of submission");
    }

    // Send email notification using our email API route
    const emailResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: process.env.ADMIN_EMAIL,
          subject: `New ${formType} Mortgage Application`,
          html: `
          <h2>New Mortgage Application Submission</h2>
          <p><strong>Application Type:</strong> ${formType}</p>
          <p><strong>Name:</strong> ${enrichedData.name}</p>
          <p><strong>Email:</strong> ${enrichedData.email}</p>
          <p><strong>Submission ID:</strong> ${docRef.id}</p>
          <p><strong>Submission Date:</strong> ${enrichedData.submittedAt
            .toDate()
            .toISOString()}</p>
          <hr>
          <h3>Application Details:</h3>
          <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
${JSON.stringify(validatedData, null, 2)}
          </pre>
        `,
        }),
      },
    );

    if (!emailResponse.ok) {
      console.error(
        "Failed to send email notification:",
        await emailResponse.text(),
      );
      // Continue with success response since the form data was saved
    }

    return new Response(
      JSON.stringify({
        success: true,
        applicationId: docRef.id,
        message: "Application submitted successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Application submission error:", {
      message: error.message,
      timestamp: new Date().toISOString(),
    });

    let errorMessage = "Internal server error";
    let statusCode = 500;

    if (error instanceof z.ZodError) {
      errorMessage = error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));
      statusCode = 400;
    }

    return new Response(
      JSON.stringify({
        success: false,
        errors: errorMessage,
        message: "Failed to submit application",
      }),
      {
        status: statusCode,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
