import { google } from "googleapis";
import nodemailer from "nodemailer";

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  try {
    console.log("Starting OAuth2 setup...");

    if (
      !process.env.GMAIL_CLIENT_ID ||
      !process.env.GMAIL_CLIENT_SECRET ||
      !process.env.GMAIL_REFRESH_TOKEN ||
      !process.env.GMAIL_USER
    ) {
      throw new Error(
        "Missing required environment variables for Gmail OAuth2",
      );
    }

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

    try {
      const { token: accessToken } = await oauth2Client.getAccessToken();
      console.log("Access token received:", accessToken ? "success" : "failed");

      if (!accessToken) {
        throw new Error("Failed to obtain access token");
      }

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
        tls: {
          rejectUnauthorized: true,
        },
      });

      console.log("Verifying transporter configuration...");
      await transporter.verify();
      console.log("Transporter verified successfully");

      return transporter;
    } catch (error) {
      console.error("OAuth2/Transporter error:", {
        name: error.name,
        message: error.message,
        code: error.code,
        response: error.response?.data,
      });
      throw new Error(`OAuth2/Transporter setup failed: ${error.message}`);
    }
  } catch (error) {
    console.error("createTransporter error:", {
      name: error.name,
      message: error.message,
      code: error.code,
    });
    throw error;
  }
};

export const sendEmail = async ({ to, subject, text, html }) => {
  console.log("Starting email send process...");

  try {
    if (!to || !subject || (!text && !html)) {
      console.error("Missing required fields:", {
        to,
        subject,
        hasText: !!text,
        hasHtml: !!html,
      });
      throw new Error("Missing required email fields");
    }

    console.log("Environment check:", {
      hasClientId: !!process.env.GMAIL_CLIENT_ID,
      clientIdType: process.env.GMAIL_CLIENT_ID?.includes(
        "apps.googleusercontent.com",
      )
        ? "web"
        : "unknown",
      hasClientSecret: !!process.env.GMAIL_CLIENT_SECRET,
      hasRefreshToken: !!process.env.GMAIL_REFRESH_TOKEN,
      hasUser: !!process.env.GMAIL_USER,
      user: process.env.GMAIL_USER,
    });

    console.log("Creating email transporter...");
    const emailTransporter = await createTransporter();
    console.log("Email transporter created successfully");

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
      html,
    };

    console.log("Sending email...");
    await emailTransporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return { success: true };
  } catch (error) {
    console.error("Email send error:", {
      name: error.name,
      message: error.message,
      code: error.code,
      response: error.response?.data,
      stack: error.stack,
    });

    return {
      success: false,
      error: error.message,
      setup: {
        note: "If you're seeing OAuth2 errors, please verify:",
        step1: "Your GMAIL_CLIENT_ID and GMAIL_CLIENT_SECRET are correct",
        step2:
          "Your GMAIL_REFRESH_TOKEN was generated using the OAuth playground",
        step3: "The Gmail API is enabled in your Google Cloud Console",
        step4: "Your OAuth consent screen is properly configured",
        step5: "Your Gmail account (GMAIL_USER) is added as a test user",
        step6: "You are using Web Application credentials (not Desktop)",
        step7:
          "The OAuth playground redirect URI is authorized in your Google Cloud Console",
      },
    };
  }
};
