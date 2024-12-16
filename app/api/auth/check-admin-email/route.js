import admin from "@/js/config/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

// Initialize Firestore using the admin instance
const db = getFirestore(admin.apps[0]);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        {
          error: "Email is required",
        },
        { status: 400 },
      );
    }

    // Query users collection for the document with matching email
    const usersRef = db.collection("users");
    const snapshot = await usersRef.where("email", "==", email).get();

    if (snapshot.empty) {
      // Return false if no user found with this email
      return NextResponse.json({ isAdmin: false }, { status: 200 });
    }

    // Check if any of the matching users has admin role
    let isAdmin = false;
    snapshot.forEach((doc) => {
      const userData = doc.data();
      if (userData.role === "admin") {
        isAdmin = true;
      }
    });

    return NextResponse.json({ isAdmin }, { status: 200 });
  } catch (error) {
    console.error("Error checking admin email:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
