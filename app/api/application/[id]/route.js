import { db } from "@/js/services/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await deleteDoc(doc(db, "applicationForms1", id));

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submission deleted successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error deleting application submission:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to delete application submission",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
