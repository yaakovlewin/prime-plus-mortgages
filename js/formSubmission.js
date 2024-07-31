import { db } from "@/js/services/firebase";
import { addDoc, collection } from "firebase/firestore";

export const submit = async (data, router) => {
  try {
    const response = await addDoc(collection(db, "applicationForms1"), data);

    console.log("Document written with ID: ", response.id);
    console.log("Response: ", response);
    router.push("/success");
  } catch (error) {
    alert(error);
  }
};
