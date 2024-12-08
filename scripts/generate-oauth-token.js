require("dotenv").config({ path: ".env.local" });
const { google } = require("googleapis");
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const OAuth2 = google.auth.OAuth2;

try {
  console.log("Starting OAuth2 token generation...\n");

  // Get the absolute path to the client secret file
  const clientSecretPath = path.join(process.cwd(), "credentials.json");
  console.log("Reading client secret file from:", clientSecretPath);

  if (!fs.existsSync(clientSecretPath)) {
    throw new Error(`Client secret file not found at: ${clientSecretPath}`);
  }

  // Read the client secret file
  const clientSecretContent = fs.readFileSync(clientSecretPath, "utf8");
  console.log("Successfully read client secret file\n");

  const clientSecret = JSON.parse(clientSecretContent);
  if (!clientSecret.web) {
    throw new Error(
      'Invalid client secret file format: missing "web" property',
    );
  }

  const { client_id, client_secret, redirect_uris } = clientSecret.web;
  if (
    !client_id ||
    !client_secret ||
    !redirect_uris ||
    redirect_uris.length === 0
  ) {
    throw new Error("Invalid client secret file: missing required properties");
  }

  // Use the OAuth Playground redirect URI
  const redirectUri = "https://developers.google.com/oauthplayground";

  // Create a new OAuth2 client
  const oauth2Client = new OAuth2(client_id, client_secret, redirectUri);

  // Generate the authorization URL
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://mail.google.com"],
    prompt: "consent", // Force to generate a new refresh token
  });

  console.log("\n=== OAuth2 Authorization Steps ===\n");
  console.log(
    "\n1. Go to the OAuth Playground: https://developers.google.com/oauthplayground\n",
  );
  console.log("\n2. Click the gear icon in the top right\n");
  console.log('\n3. Check "Use your own OAuth credentials"\n');
  console.log("\n4. Enter these credentials:");
  console.log(`   Client ID: ${client_id}`);
  console.log(`   Client Secret: ${client_secret}\n`);
  console.log(
    '\n5. On the left side, find "Gmail API v1" and select https://mail.google.com/\n',
  );
  console.log('\n6. Click "Authorize APIs"\n');
  console.log("\n7. Sign in with your Google account and grant access\n");
  console.log('\n8. Click "Exchange authorization code for tokens"\n');
  console.log("\n9. Copy the refresh token (NOT the access token)\n");

  // Create readline interface for user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Get the refresh token from user input
  rl.question("\n10. Enter the refresh token here: ", async (refreshToken) => {
    try {
      console.log("\n=== OAuth2 Configuration Values ===\n");
      console.log("\nAdd these values to your .env.local file:\n");
      console.log(`GMAIL_REFRESH_TOKEN=${refreshToken}`);
      console.log(`GMAIL_CLIENT_ID=${client_id}`);
      console.log(`GMAIL_CLIENT_SECRET=${client_secret}`);
      console.log(`GMAIL_REDIRECT_URI=${redirectUri}`);
      console.log("\nAlso add your Gmail address:");
      console.log("GMAIL_USER=your.email@gmail.com");
    } catch (error) {
      console.error("\nError occurred:", error.message);
      if (error.response) {
        console.error("Error details:", error.response.data);
      }
    }
    rl.close();
  });
} catch (error) {
  console.error("Error during setup:", error.message);
  process.exit(1);
}
