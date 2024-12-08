const admin = require("firebase-admin");
const path = require("path");
const fs = require('fs');

// Get absolute path to service account file
const serviceAccountPath = path.resolve(__dirname, "..", "mortgage-application-for-81765-firebase-adminsdk-5mce1-7e8fd0dcb1.json");

console.log("Checking service account file...");
if (!fs.existsSync(serviceAccountPath)) {
    console.error("Service account file not found at:", serviceAccountPath);
    process.exit(1);
}

console.log("Loading service account from:", serviceAccountPath);
console.log("Current directory:", __dirname);

let serviceAccount;
try {
    const rawContent = fs.readFileSync(serviceAccountPath, 'utf8');
    serviceAccount = JSON.parse(rawContent);
    console.log("Service account loaded successfully");
    console.log("Project ID:", serviceAccount.project_id);
} catch (error) {
    console.error("Error loading service account:", error);
    process.exit(1);
}

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        console.log("Firebase Admin initialized successfully");
    } catch (error) {
        console.error("Firebase Admin initialization error:", error);
        process.exit(1);
    }
}

// Function to get user and current claims
async function getUserAndClaims(email) {
    try {
        const user = await admin.auth().getUserByEmail(email);
        console.log("Current user claims:", user.customClaims);
        return user;
    } catch (error) {
        console.error("Error getting user:", error);
        throw error;
    }
}

// Function to set admin claim
async function setAdminClaim(email) {
    try {
        console.log(`Attempting to get user by email: ${email}`);
        // Get user by email
        const user = await admin.auth().getUserByEmail(email);
        console.log("Found user:", user.uid);

        // Set admin custom claim
        console.log("Setting admin claim...");
        await admin.auth().setCustomUserClaims(user.uid, { admin: true });
        console.log("Admin claim set successfully");

        // Verify the claims were set
        const updatedUser = await admin.auth().getUser(user.uid);
        console.log("Updated user claims:", updatedUser.customClaims);

        if (!updatedUser.customClaims?.admin) {
            throw new Error("Admin claim was not set properly");
        }

        console.log(`Successfully set and verified admin claim for user: ${email}`);
        return true;
    } catch (error) {
        console.error("Error setting admin claim:", error);
        if (error.code === 'auth/user-not-found') {
            console.error(`No user found with email: ${email}`);
            console.error("Please ensure the user has been created in Firebase Authentication first.");
        }
        throw error;
    }
}

// Get email from command line argument
const email = process.argv[2];

if (!email) {
    console.error("Please provide an email address as an argument");
    console.log("Usage: node scripts/set-initial-admin.js admin@example.com");
    process.exit(1);
}

console.log(`Setting admin claim for email: ${email}`);

// First check current claims
getUserAndClaims(email)
    .then(() => setAdminClaim(email))
    .then(() => {
        console.log("Operation completed successfully");
        process.exit(0);
    })
    .catch((error) => {
        console.error("Operation failed:", error);
        process.exit(1);
    });
