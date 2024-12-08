require("dotenv").config({ path: ".env.local" });
const { google } = require("googleapis");

// Create OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground",
);

// Generate the URL for manual authorization
const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: ["https://mail.google.com/"],
  prompt: "consent", // Force to generate a new refresh token
});

console.log("\nFollow these steps to generate a new refresh token:\n");
console.log(
  "1. Go to Google OAuth Playground: https://developers.google.com/oauthplayground\n",
);
console.log("2. Click the gear icon (⚙️) in the top right\n");
console.log('3. Check "Use your own OAuth credentials"\n');
console.log("4. Enter these credentials:");
console.log(`   Client ID: ${process.env.GMAIL_CLIENT_ID}`);
console.log(`   Client Secret: ${process.env.GMAIL_CLIENT_SECRET}\n`);
console.log("5. In the left panel:");
console.log('   - Find "Gmail API v1"');
console.log("   - Select ONLY this scope: https://mail.google.com/\n");
console.log('6. Click "Authorize APIs"\n');
console.log("7. Sign in with your Google account (yaakovlewin@gmail.com)\n");
console.log('8. Click "Exchange authorization code for tokens"\n');
console.log("9. Copy the refresh token (NOT the access token)\n");
console.log("10. Update your .env.local file with the new refresh token\n");

// Also display current configuration for verification
console.log("\nCurrent configuration:");
console.log(
  "Client ID:",
  process.env.GMAIL_CLIENT_ID?.substring(0, 15) + "...",
);
console.log(
  "Client Secret:",
  process.env.GMAIL_CLIENT_SECRET?.substring(0, 15) + "...",
);
console.log(
  "Current Refresh Token:",
  process.env.GMAIL_REFRESH_TOKEN?.substring(0, 15) + "...",
);
console.log("Email:", process.env.GMAIL_USER);
