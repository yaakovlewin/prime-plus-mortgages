"use client";
import personalDetailsConfig from "@/js/config/personalDetailsConfig";
import { useFormContext } from "react-hook-form";

// components
import FormField from "../dynamicComponents/FormField";

export default function PersonalDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Personal Details Applicant 1:
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {personalDetailsConfig("aplicant1").map((field) => {
          return (
            <FormField
              key={field.id}
              field={field}
              register={register}
              errors={errors}
            />
          );
        })}
        {/* <AddressForm prefix={"applicant1"} isVisible={true} /> */}
      </div>

      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Personal Details Applicant 2:
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {personalDetailsConfig("aplicant2").map((field) => {
          return (
            <FormField
              key={field.id}
              field={field}
              register={register}
              errors={errors}
              prefix={"applicant2"}
            />
          );
        })}
        {/* <AddressForm prefix={"applicant2"} isVisible={true} /> */}
      </div>
    </section>
  );
}
