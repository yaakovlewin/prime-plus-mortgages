import admin from "@/js/config/firebaseAdmin";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const contactRef = admin.firestore().collection("contacts").doc(id);
    const contactSnap = await contactRef.get();

    if (!contactSnap.exists) {
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
    await admin.firestore().collection("contacts").doc(id).delete();

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
