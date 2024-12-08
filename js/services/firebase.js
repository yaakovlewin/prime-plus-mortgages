import { firebaseConfig } from "@/js/config/firebaseConfig";
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

class FirebaseError extends Error {
  constructor(message, type, details = null) {
    super(message);
    this.name = "FirebaseError";
    this.type = type;
    this.details = details;
  }
}

// Validate Firebase configuration
const validateFirebaseConfig = (config) => {
  const requiredFields = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];

  for (const field of requiredFields) {
    if (!config[field]) {
      throw new FirebaseError(
        `Missing required Firebase configuration field: ${field}`,
        "CONFIG_ERROR",
      );
    }
  }
};

// Initialize Firebase with error handling
let app;
let db;

try {
  // Validate config before initialization
  validateFirebaseConfig(firebaseConfig);

  // Check if Firebase is already initialized
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize Firestore
  db = getFirestore(app);
} catch (error) {
  throw new FirebaseError(
    "Failed to initialize Firebase",
    "INITIALIZATION_ERROR",
    error.message,
  );
}

// Initialize App Check in browser environment
const initializeAppCheck = async () => {
  if (typeof window === "undefined") return;

  const siteKey = process.env.NEXT_PUBLIC_reCAPTCHA_site_key;
  const debugToken = process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_DEBUG_TOKEN;

  if (!siteKey) {
    throw new FirebaseError(
      "reCAPTCHA site key is not defined",
      "RECAPTCHA_CONFIG_ERROR",
    );
  }

  try {
    // Enable debug tokens in development
    if (process.env.NODE_ENV === "development" && debugToken) {
      window.FIREBASE_APPCHECK_DEBUG_TOKEN = debugToken;
    }

    const { initializeAppCheck, ReCaptchaV3Provider } = await import(
      "firebase/app-check"
    );

    return initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(siteKey),
      isTokenAutoRefreshEnabled: true,
      // Debug mode for development
      debug:
        process.env.NODE_ENV === "development" ? { forceRefresh: true } : false,
    });
  } catch (error) {
    throw new FirebaseError(
      "Failed to initialize Firebase App Check",
      "APP_CHECK_ERROR",
      error.message,
    );
  }
};

// Initialize App Check with error handling
if (typeof window !== "undefined") {
  initializeAppCheck().catch((error) => {
    // Log error but don't throw to prevent app from crashing
    console.error("App Check initialization error:", {
      type: error.type || "UNKNOWN_ERROR",
      message: error.message,
      timestamp: new Date().toISOString(),
    });
  });
}

export { app, db, FirebaseError };

// Helper function to check Firebase connection
export const checkFirebaseConnection = async () => {
  try {
    const timestamp = await db.collection("_health").doc("ping").set({
      timestamp: new Date(),
    });
    return { connected: true };
  } catch (error) {
    return {
      connected: false,
      error: {
        type: error instanceof FirebaseError ? error.type : "CONNECTION_ERROR",
        message: error.message,
      },
    };
  }
};
