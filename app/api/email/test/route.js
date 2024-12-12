import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  try {
    console.log("Starting OAuth2 setup...");

    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground",
    );

    console.log("OAuth2 client created with:", {
      clientIdPrefix: process.env.GMAIL_CLIENT_ID?.substring(0, 10) + "...",
      hasClientSecret: !!process.env.GMAIL_CLIENT_SECRET,
      redirectUri: "https://developers.google.com/oauthplayground",
    });

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    console.log("Credentials set, requesting access token...");

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.error("Detailed OAuth2 error:", {
            name: err.name,
            message: err.message,
            code: err.code,
            stack: err.stack,
          });
          reject(`Failed to create access token: ${err.message}`);
          return;
        }
        console.log("Access token obtained successfully");
        resolve(token);
      });
    });

    console.log("Creating nodemailer transporter...");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        accessToken,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      },
      debug: true, // Enable debug logs
      logger: true, // Enable logger
    });

    console.log("Verifying transporter configuration...");
    await transporter.verify();
    console.log("Transporter verified successfully");

    return transporter;
  } catch (error) {
    console.error("Error in createTransporter:", {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack,
    });
    throw error;
  }
};

export async function GET() {
  try {
    console.log("Starting test email process...");
    console.log("Environment check:", {
      hasClientId: !!process.env.GMAIL_CLIENT_ID,
      clientIdType: process.env.GMAIL_CLIENT_ID?.includes("desktop")
        ? "desktop"
        : "web",
      hasClientSecret: !!process.env.GMAIL_CLIENT_SECRET,
      hasRefreshToken: !!process.env.GMAIL_REFRESH_TOKEN,
      hasUser: !!process.env.GMAIL_USER,
      user: process.env.GMAIL_USER,
    });

    const emailTransporter = await createTransporter();

    console.log("Sending test email...");
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "Test Email",
      text: "This is a test email from your Next.js application.",
      html: `
        <h1>Test Email</h1>
        <p>This is a test email from your Next.js application.</p>
        <p>If you're seeing this, your email service is working correctly!</p>
      `,
    };

    await emailTransporter.sendMail(mailOptions);
    console.log("Test email sent successfully");

    return NextResponse.json(
      { message: "Test email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Final error:", {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        error: "Failed to send test email",
        details: error.message,
        setup: {
          note: "OAuth2 Error Details:",
          errorType: error.name,
          errorCode: error.code,
          suggestion:
            "Please ensure you're using a Desktop application OAuth client, not a Web application client.",
          steps: [
            "1. Go to Google Cloud Console",
            "2. Delete the current OAuth client",
            "3. Create a new OAuth client of type 'Desktop application'",
            "4. Update your .env.local with the new client ID and secret",
            "5. Generate a new refresh token using the OAuth playground",
          ],
        },
      },
      { status: 500 },
    );
  }
}
