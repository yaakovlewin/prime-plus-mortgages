import * as admin from "firebase-admin";

// Initialize Firebase Admin only if it hasn't been initialized
if (!admin.apps.length) {
  try {
    const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY
      ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n")
      : undefined;

    if (!privateKey) {
      throw new Error("FIREBASE_ADMIN_PRIVATE_KEY is not defined");
    }

    if (!process.env.FIREBASE_ADMIN_CLIENT_EMAIL) {
      throw new Error("FIREBASE_ADMIN_CLIENT_EMAIL is not defined");
    }

    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      throw new Error("NEXT_PUBLIC_FIREBASE_PROJECT_ID is not defined");
    }

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });

    console.log("Firebase Admin initialized successfully");
  } catch (error) {
    console.error("Firebase admin initialization error:", error);
    throw error; // Re-throw to prevent silent failures
  }
}

export default admin;
