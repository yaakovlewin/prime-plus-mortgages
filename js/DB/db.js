import { app } from "@/js/services/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

const db = getFirestore(app);

export async function getCollection(applicationForms) {
  const col = collection(db, applicationForms);
  const snapshot = await getDocs(col);
  console.log(snapshot.docs.map((doc) => doc.data()));
  return snapshot.docs.map((doc) => doc.data());
}

export default db;
