import { db } from "@/js/services/firebase";
import applicationSchema from "@/js/zod/mortgageValidationSchema";
import { addDoc, collection } from "firebase/firestore";
import nodemailer from "nodemailer";
import { z } from "zod";

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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
    submittedAt: new Date().toISOString(),
    name: `${FirstName.trim()} ${LastName.trim()}`,
    email: Email.trim(),
    status: "Pending",
    formType,
    updatedAt: new Date().toISOString(),
  };
};

export async function POST(request) {
  try {
    const { data, formType } = await request.json();

    // Process and validate application data
    const enrichedData = addApplicationData(data, formType);
    const validatedData = applicationSchema.parse(enrichedData);

    // Save to Firebase
    const docRef = await addDoc(
      collection(db, "applicationForms1"),
      validatedData,
    );

    if (!docRef?.id) {
      throw new Error("Failed to get confirmation of submission");
    }

    // Send email notification
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Mortgage Application Submission",
      html: `
        <h2>New Mortgage Application Submission</h2>
        <p><strong>Name:</strong> ${enrichedData.name}</p>
        <p><strong>Email:</strong> ${enrichedData.email}</p>
        <p><strong>Form Type:</strong> ${formType}</p>
        <p><strong>Submission ID:</strong> ${docRef.id}</p>
      `,
    });

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
