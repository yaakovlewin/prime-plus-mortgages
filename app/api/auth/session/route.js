import admin from "@/js/config/firebaseAdmin";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    // Validate request body
    const body = await request.json();
    if (!body || typeof body.idToken !== "string") {
      return Response.json(
        {
          error: "Invalid request body",
          code: "invalid-request",
        },
        { status: 400 },
      );
    }

    const { idToken } = body;

    try {
      // Get auth instance
      const auth = admin.auth();

      // Verify the ID token with short expiration check
      const decodedToken = await auth.verifyIdToken(idToken, true);

      // Check token expiration
      const tokenExp = decodedToken.exp * 1000; // Convert to milliseconds
      const now = Date.now();
      if (tokenExp <= now) {
        return Response.json(
          {
            error: "Token has expired",
            code: "token-expired",
          },
          { status: 401 },
        );
      }

      // Create session cookie
      const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
      const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn,
      });

      // Get domain for cookie
      const domain = process.env.COOKIE_DOMAIN || undefined; // Falls back to current domain if not set

      // Set cookie with enhanced security
      cookies().set("session", sessionCookie, {
        maxAge: expiresIn,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        domain,
        // Prevent cookie from being accessed by client-side scripts
        priority: "high",
      });

      return Response.json({ status: "success" });
    } catch (verifyError) {
      // Handle specific Firebase Admin auth errors
      if (verifyError.code === "auth/id-token-expired") {
        return Response.json(
          {
            error: "Token has expired",
            code: "token-expired",
          },
          { status: 401 },
        );
      }

      if (verifyError.code === "auth/id-token-revoked") {
        return Response.json(
          {
            error: "Token has been revoked",
            code: "token-revoked",
          },
          { status: 401 },
        );
      }

      if (verifyError.code === "auth/invalid-id-token") {
        return Response.json(
          {
            error: "Invalid token",
            code: "invalid-token",
          },
          { status: 401 },
        );
      }

      throw verifyError; // Re-throw other verification errors
    }
  } catch (error) {
    console.error("Session creation error:", error);

    // Don't expose internal error details in production
    const errorMessage =
      process.env.NODE_ENV === "production"
        ? "An error occurred while creating the session"
        : error.message;

    return Response.json(
      {
        error: errorMessage,
        code: "session-error",
        ...(process.env.NODE_ENV !== "production" && {
          details: error.message,
        }),
      },
      { status: 500 },
    );
  }
}
