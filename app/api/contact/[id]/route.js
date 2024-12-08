import { db } from "@/js/services/firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const contactRef = doc(db, "contacts", id);
    const contactSnap = await getDoc(contactRef);

    if (!contactSnap.exists()) {
      return new Response(JSON.stringify({ error: "Contact not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const contact = {
      id: contactSnap.id,
      ...contactSnap.data(),
    };

    return new Response(JSON.stringify(contact), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching contact:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch contact" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await deleteDoc(doc(db, "contacts", id));

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact deleted successfully",
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
        error: "Failed to delete contact",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
