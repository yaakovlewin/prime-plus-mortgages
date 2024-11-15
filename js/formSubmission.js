import { db } from "@/js/services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { z } from "zod";
import applicationSchema from "./zod/mortgageValidationSchema";

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
  const enrichedData = addApplicationData(data, formType);
  console.log("Data: ", enrichedData);
  try {
    const validatedData = applicationSchema.parse(enrichedData);
    console.log("Validated Data: ", validatedData);

    const response = await addDoc(
      collection(db, "applicationForms1"),
      validatedData,
    );

    console.log("Document written with ID: ", response.id);
    console.log("Response: ", response);
    router.push("/success");
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation errors:");
      error.errors.forEach((err) => {
        console.error(`Path: ${err.path.join(".")}, Message: ${err.message}`);
      });
      alert("Validation error:", error.errors);
    } else {
      alert(error);
      console.error("Error adding document: ", error);
    }
  }
};
