import { db } from "@/js/services/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await deleteDoc(doc(db, "contacts", id));

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact submission deleted successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error deleting contact:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to delete contact submission",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
