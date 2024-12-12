import { initAdmin } from "@/js/config/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";

initAdmin();
const db = getFirestore();

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({
          error: "Email is required",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Query users collection for the document with matching email
    const usersRef = db.collection("users");
    const snapshot = await usersRef.where("email", "==", email).get();

    if (snapshot.empty) {
      // Return false if no user found with this email
      return new Response(JSON.stringify({ isAdmin: false }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Check if any of the matching users has admin role
    let isAdmin = false;
    snapshot.forEach((doc) => {
      const userData = doc.data();
      if (userData.role === "admin") {
        isAdmin = true;
      }
    });

    return new Response(JSON.stringify({ isAdmin }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error checking admin email:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
