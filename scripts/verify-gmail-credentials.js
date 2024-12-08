require("dotenv").config({ path: ".env.local" });
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

async function verifyGmailCredentials() {
  console.log("Starting Gmail API credentials verification...\n");

  // 1. Verify environment variables exist
  const requiredVars = [
    "GMAIL_CLIENT_ID",
    "GMAIL_CLIENT_SECRET",
    "GMAIL_REFRESH_TOKEN",
    "GMAIL_USER",
  ];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error("❌ Missing required environment variables:", missingVars);
    return;
  }
  console.log("✅ All required environment variables are present");

  try {
    // 2. Create OAuth2 client
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground",
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    console.log("\nAttempting to get access token...");

    // 3. Test getting an access token
    const { token: accessToken } = await oauth2Client.getAccessToken();
    if (!accessToken) {
      throw new Error("Failed to obtain access token");
    }
    console.log("✅ Successfully obtained access token");

    // 4. Test Gmail API access
    const gmail = google.gmail({ version: "v1", auth: oauth2Client });
    const profile = await gmail.users.getProfile({ userId: "me" });

    console.log("\n✅ Successfully connected to Gmail API");
    console.log(`✅ Verified access for email: ${profile.data.emailAddress}`);
    console.log(
      "\nAll checks passed! Your Gmail API credentials are working correctly.",
    );
  } catch (error) {
    console.error("\n❌ Error during verification:", {
      name: error.name,
      message: error.message,
      details: error.response?.data || "No additional details",
    });

    // Provide specific guidance based on common errors
    if (error.message.includes("invalid_grant")) {
      console.log("\nTroubleshooting steps for invalid_grant:");
      console.log("1. Generate a new refresh token in the OAuth playground");
      console.log(
        "2. Ensure your Gmail account is added as a test user in OAuth consent screen",
      );
      console.log(
        "3. Check if you've enabled the Gmail API in Google Cloud Console",
      );
    } else if (error.message.includes("invalid_client")) {
      console.log("\nTroubleshooting steps for invalid_client:");
      console.log("1. Verify your client ID and secret are correct");
      console.log(
        "2. Ensure you're using Web Application credentials (not Desktop)",
      );
      console.log(
        "3. Check if https://developers.google.com/oauthplayground is added as an authorized redirect URI",
      );
    }
  }
}

verifyGmailCredentials();
