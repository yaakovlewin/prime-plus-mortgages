import admin from "@/js/config/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();
    console.log("Checking user status for email:", email);

    if (!email) {
      console.log("No email provided");
      return NextResponse.json(
        {
          error: "Email is required",
        },
        { status: 400 },
      );
    }

    try {
      const userRecord = await admin.auth().getUserByEmail(email);
      console.log("User found in Firebase Auth:", userRecord.email);
      return NextResponse.json({ isAdmin: true }, { status: 200 });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        console.log("User not found in Firebase Auth");
        return NextResponse.json({ isAdmin: false }, { status: 200 });
      }
      throw error;
    }
  } catch (error) {
    console.error("Error checking email:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
