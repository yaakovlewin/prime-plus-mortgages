import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Timeout promise wrapper
const withTimeout = (promise, timeout = 10000) => {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout),
    ),
  ]);
};

export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await withTimeout(
      signInWithEmailAndPassword(auth, email, password),
    );

    // Check admin status before creating session
    const isAdmin = await isUserAdmin(userCredential.user);
    if (!isAdmin) {
      return {
        user: null,
        error: {
          code: "auth/insufficient-permissions",
          message:
            "Access denied. Only administrators can log in to this portal.",
        },
      };
    }

    // Create session after successful login and admin verification
    const idToken = await withTimeout(userCredential.user.getIdToken());
    const sessionResult = await createSession(idToken);

    if (sessionResult.error) {
      return {
        user: null,
        error: sessionResult.error,
      };
    }

    return { user: userCredential.user, error: null };
  } catch (error) {
    return {
      user: null,
      error: {
        code: error.code || "auth/unknown",
        message: error.message || "An unknown error occurred",
      },
    };
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await withTimeout(signInWithPopup(auth, googleProvider));

    // Check admin status before creating session
    const isAdmin = await isUserAdmin(result.user);
    if (!isAdmin) {
      return {
        user: null,
        error: {
          code: "auth/insufficient-permissions",
          message:
            "Access denied. Only administrators can log in to this portal.",
        },
      };
    }

    // Create session after successful Google login and admin verification
    const idToken = await withTimeout(result.user.getIdToken());
    const sessionResult = await createSession(idToken);

    if (sessionResult.error) {
      return {
        user: null,
        error: sessionResult.error,
      };
    }

    return { user: result.user, error: null };
  } catch (error) {
    // Handle specific Firebase popup errors
    if (error.code === "auth/popup-closed-by-user") {
      return {
        user: null,
        error: {
          code: error.code,
          message: "Sign in cancelled. Please try again.",
        },
      };
    }

    if (error.code === "auth/popup-blocked") {
      return {
        user: null,
        error: {
          code: error.code,
          message:
            "Pop-up was blocked by your browser. Please enable pop-ups and try again.",
        },
      };
    }

    // Handle timeout error
    if (error.message === "Request timed out") {
      return {
        user: null,
        error: {
          code: "auth/timeout",
          message:
            "The request timed out. Please check your internet connection and try again.",
        },
      };
    }

    return {
      user: null,
      error: {
        code: error.code || "auth/unknown",
        message: error.message || "An unknown error occurred",
      },
    };
  }
};

export const logoutUser = async () => {
  try {
    // Sign out from Firebase with timeout
    await withTimeout(signOut(auth));

    // Clear session cookie with timeout
    await withTimeout(
      fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    return { error: null };
  } catch (error) {
    return {
      error: {
        code: error.code || "auth/unknown",
        message: error.message || "An unknown error occurred",
      },
    };
  }
};

// Admin check helper
export const isUserAdmin = async (user) => {
  if (!user) return false;

  try {
    const token = await withTimeout(user.getIdTokenResult());
    return !!token.claims.admin;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};

// Session management with retry mechanism
export const createSession = async (idToken, retryCount = 0) => {
  const maxRetries = 3;
  const timeout = 10000; // 10 seconds

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch("/api/auth/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to create session");
    }

    return { error: null };
  } catch (error) {
    // If aborted due to timeout
    if (error.name === "AbortError") {
      error.message = "Request timed out";
    }

    // Retry logic for network errors or timeouts
    if (
      retryCount < maxRetries &&
      (error.message === "Request timed out" ||
        error.message.includes("network"))
    ) {
      // Exponential backoff
      const delay = Math.pow(2, retryCount) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
      return createSession(idToken, retryCount + 1);
    }

    return {
      error: {
        code: "session-error",
        message: error.message,
      },
    };
  }
};