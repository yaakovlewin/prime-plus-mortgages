require("dotenv").config({ path: ".env.local" });
const { google } = require("googleapis");

async function testOAuth() {
  console.log("Starting OAuth test...");

  try {
    // Create OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground",
    );

    // Log configuration (safely)
    console.log("\nConfiguration:", {
      hasClientId: !!process.env.GMAIL_CLIENT_ID,
      clientIdPrefix: process.env.GMAIL_CLIENT_ID?.substring(0, 15) + "...",
      hasClientSecret: !!process.env.GMAIL_CLIENT_SECRET,
      hasRefreshToken: !!process.env.GMAIL_REFRESH_TOKEN,
      refreshTokenPrefix:
        process.env.GMAIL_REFRESH_TOKEN?.substring(0, 15) + "...",
      userEmail: process.env.GMAIL_USER,
    });

    // Set credentials
    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    console.log("\nAttempting to get access token...");

    // Get access token
    const tokenResponse = await oauth2Client.getAccessToken();

    console.log("\nAccess token response:", {
      success: !!tokenResponse.token,
      tokenPrefix: tokenResponse.token
        ? tokenResponse.token.substring(0, 15) + "..."
        : null,
      res: tokenResponse.res
        ? {
            status: tokenResponse.res.status,
            statusText: tokenResponse.res.statusText,
          }
        : null,
    });

    return "Success!";
  } catch (error) {
    console.error("\nError details:", {
      name: error.name,
      message: error.message,
      response: error.response?.data,
      stack: error.stack,
    });
    throw error;
  }
}

// Run the test
testOAuth()
  .then((result) => console.log("\nFinal result:", result))
  .catch((error) => console.log("\nTest failed:", error.message));
