import admin from "@/js/config/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Verify the request is authorized
    const authHeader = request.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Only allow existing admins to set admin claims
    if (!decodedToken.admin) {
      return NextResponse.json(
        { error: "Forbidden: Requires admin privileges" },
        { status: 403 },
      );
    }

    const { uid } = await request.json();
    if (!uid) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 },
      );
    }

    // Set admin claim
    await admin.auth().setCustomUserClaims(uid, { admin: true });

    return NextResponse.json({
      success: true,
      message: "Admin claim set successfully",
    });
  } catch (error) {
    console.error("Error setting admin claim:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
