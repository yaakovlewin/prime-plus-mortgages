import admin from "@/js/config/firebaseAdmin";
import { sendEmail } from "@/js/services/emailService";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();
    console.log("Processing password reset for email:", email);

    // Check if user exists in Firebase Auth
    try {
      const userRecord = await admin.auth().getUserByEmail(email);
      console.log("User found in Firebase Auth:", userRecord.email);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        console.log("User not found in Firebase Auth");
        return NextResponse.json(
          { error: "Email not registered" },
          { status: 404 },
        );
      }
      throw error;
    }

    console.log("User verified, generating reset link...");

    // Generate a password reset link using Firebase Admin SDK
    const link = await admin.auth().generatePasswordResetLink(email, {
      // Specify our custom action code handler URL
      url: process.env.NEXT_PUBLIC_BASE_URL,
      handleCodeInApp: true,
    });

    // Extract the oobCode from the Firebase reset link
    const resetUrl = new URL(link);
    const oobCode = resetUrl.searchParams.get("oobCode");

    // Create our custom reset URL
    const customResetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?oobCode=${oobCode}`;

    // Send the reset link via email
    const emailResult = await sendEmail({
      to: email,
      subject: "Reset Your Password - Prime Plus Mortgages",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Password Reset Request</h2>
          <p>We received a request to reset your password. Click the link below to set a new password:</p>
          <p style="margin: 20px 0;">
            <a href="${customResetLink}" style="background-color: #0284c7; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Reset Password
            </a>
          </p>
          <p>If you didn't request this password reset, you can safely ignore this email.</p>
          <p>This link will expire in 1 hour for security reasons.</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            This is an automated email from Prime Plus Mortgages. Please do not reply to this email.
          </p>
        </div>
      `,
      text: `
        Password Reset Request
        
        We received a request to reset your password. Click the link below to set a new password:
        
        ${customResetLink}
        
        If you didn't request this password reset, you can safely ignore this email.
        
        This link will expire in 1 hour for security reasons.
        
        This is an automated email from Prime Plus Mortgages. Please do not reply to this email.
      `,
    });

    if (!emailResult.success) {
      throw new Error(emailResult.error || "Failed to send reset email");
    }

    return NextResponse.json({
      success: true,
      message: "Password reset email sent successfully",
    });
  } catch (error) {
    console.error("Password reset error:", error);
    return NextResponse.json(
      { error: "Failed to process password reset request" },
      { status: 500 },
    );
  }
}
