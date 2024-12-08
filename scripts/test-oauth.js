require("dotenv").config({ path: ".env.local" });
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

async function testOAuth() {
  try {
    console.log("Starting OAuth2 test...\n");

    // Log environment variables (safely)
    console.log("Environment check:", {
      clientIdExists: !!process.env.GMAIL_CLIENT_ID,
      clientIdLength: process.env.GMAIL_CLIENT_ID?.length,
      clientSecretExists: !!process.env.GMAIL_CLIENT_SECRET,
      refreshTokenExists: !!process.env.GMAIL_REFRESH_TOKEN,
      userEmail: process.env.GMAIL_USER,
    });

    // Create OAuth2 client
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground",
    );

    console.log("\nOAuth2 client created");

    // Set credentials
    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    console.log("\nCredentials set, attempting to get access token...");

    try {
      // Try to get an access token
      const { token } = await oauth2Client.getAccessToken();
      console.log(
        "\nSuccess! Access token received:",
        token.substring(0, 10) + "...",
      );

      // Initialize Gmail API
      const gmail = google.gmail({ version: "v1", auth: oauth2Client });

      // Try to get user profile to verify everything works
      const profile = await gmail.users.getProfile({
        userId: "me",
      });

      console.log("\nGmail API test successful!");
      console.log("Connected as:", profile.data.emailAddress);
    } catch (tokenError) {
      console.error("\nError getting access token:", {
        name: tokenError.name,
        message: tokenError.message,
        code: tokenError.code,
        details: tokenError.response?.data,
      });
    }
  } catch (error) {
    console.error("\nGeneral error:", {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack,
    });
  }
}

testOAuth().catch(console.error);
