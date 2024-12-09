import { sendEmail } from "@/js/services/emailService";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json().catch((error) => {
      console.error("JSON parse error:", error);
      throw new Error("Invalid JSON in request body");
    });

    const emailResult = await sendEmail(body);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: emailResult.error,
          setup: emailResult.setup,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email API error:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error.message,
      },
      { status: 500 },
    );
  }
}
