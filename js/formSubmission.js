import { db } from "@/js/services/firebase";
import { addDoc, collection } from "firebase/firestore";

const addApplicationData = (data, formType) => {
  return {
    ...data,
    submittedAt: new Date().toISOString(),
    name:
      data.applicants[0].personalDetails.FirstName +
      " " +
      data.applicants[0].personalDetails.LastName,
    email: data.applicants[0].personalDetails.Email,
    status: "Pending",
    formType,
  };
};

export const submit = async (data, router, formType) => {
  data = addApplicationData(data, formType);
  console.log("Data: ", data);
  try {
    const response = await addDoc(collection(db, "applicationForms1"), data);

    console.log("Document written with ID: ", response.id);
    console.log("Response: ", response);
    router.push("/success");
  } catch (error) {
    alert(error);
  }
};
