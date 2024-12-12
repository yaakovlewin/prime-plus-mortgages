import { firebaseConfig } from "@/js/config/firebaseConfig";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

  console.log("Validating Firebase config:", {
    config: {
      apiKey: config.apiKey ? "present" : "missing",
      authDomain: config.authDomain,
      projectId: config.projectId,
      storageBucket: config.storageBucket ? "present" : "missing",
      messagingSenderId: config.messagingSenderId ? "present" : "missing",
      appId: config.appId ? "present" : "missing",
    },
  });

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
let auth;

try {
  console.log("Starting Firebase initialization...");

  // Log the full Firebase config for debugging
  console.log("Firebase Config:", {
    apiKey: firebaseConfig.apiKey ? "present" : "missing",
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket ? "present" : "missing",
    messagingSenderId: firebaseConfig.messagingSenderId ? "present" : "missing",
    appId: firebaseConfig.appId ? "present" : "missing",
  });

  // Validate config before initialization
  validateFirebaseConfig(firebaseConfig);

  // Check if Firebase is already initialized
  if (!getApps().length) {
    console.log("Initializing new Firebase instance...");
    app = initializeApp(firebaseConfig);
  } else {
    console.log("Using existing Firebase instance...");
    app = getApp();
  }

  // Initialize Firebase Auth with detailed logging
  console.log("Initializing Firebase Auth...");
  auth = getAuth(app);

  // Log Auth initialization status
  console.log("Firebase Auth initialization status:", {
    initialized: !!auth,
    currentUser: auth?.currentUser ? "exists" : "null",
    config: {
      apiKey: auth?.config?.apiKey ? "configured" : "missing",
      authDomain: auth?.config?.authDomain,
    },
  });

  // Initialize Firestore
  console.log("Initializing Firestore...");
  db = getFirestore(app);

  console.log("Firebase initialization complete");
} catch (error) {
  console.error("Firebase initialization error:", {
    message: error.message,
    type: error.type || "UNKNOWN_ERROR",
    stack: error.stack,
    config: {
      hasApp: !!app,
      hasAuth: !!auth,
      hasDb: !!db,
    },
  });

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
    console.error("App Check initialization error:", {
      message: error.message,
      type: error.type || "UNKNOWN_ERROR",
      stack: error.stack,
    });

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

// Helper function to check Firebase connection
export const checkFirebaseConnection = async () => {
  try {
    console.log("Checking Firebase connection...");
    console.log("Auth state:", {
      initialized: !!auth,
      currentUser: auth?.currentUser ? "exists" : "null",
      config: {
        apiKey: auth?.config?.apiKey ? "configured" : "missing",
        authDomain: auth?.config?.authDomain,
      },
    });

    const timestamp = await db.collection("_health").doc("ping").set({
      timestamp: new Date(),
    });
    console.log("Firebase connection successful");
    return { connected: true };
  } catch (error) {
    console.error("Firebase connection check failed:", {
      type: error instanceof FirebaseError ? error.type : "CONNECTION_ERROR",
      message: error.message,
      stack: error.stack,
    });

    return {
      connected: false,
      error: {
        type: error instanceof FirebaseError ? error.type : "CONNECTION_ERROR",
        message: error.message,
      },
    };
  }
};

// Export initialized instances
export { app, auth, db, FirebaseError };

// Export a function to check auth status
export const getAuthStatus = () => {
  return {
    initialized: !!auth,
    currentUser: auth?.currentUser
      ? {
          uid: auth.currentUser.uid,
          email: auth.currentUser.email,
          emailVerified: auth.currentUser.emailVerified,
        }
      : null,
    config: {
      apiKey: auth?.config?.apiKey ? "configured" : "missing",
      authDomain: auth?.config?.authDomain,
    },
  };
};
