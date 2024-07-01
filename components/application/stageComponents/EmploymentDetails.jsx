"use client";
import useDynamicFormConfig from "@/app/hooks/useDynamicFormConfig";
import createEmploymentConfig from "@/js/config/employmentFeildsConfig";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

// components
import FormField from "../dynamicComponents/FormField";

export default function EmploymentDetails() {
  const {
    getValues,
    register,
    unregister,
    control,
    formState: { errors },
  } = useFormContext();

  const initialConfig1 = useMemo(
    () => createEmploymentConfig("applicant1"),
    [],
  );
  const config1 = useDynamicFormConfig(
    initialConfig1,
    control,
    unregister,
    register,
  );

  const initialConfig2 = useMemo(
    () => createEmploymentConfig("applicant2"),
    [],
  );

  const config2 = useDynamicFormConfig(
    initialConfig2,
    control,
    unregister,
    register,
  );

  return (
    <section>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Financial Details Applicant 1:
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-8">
        {config1.map((field) => (
          <FormField
            key={field.id}
            field={field}
            register={register}
            errors={errors}
          />
        ))}
      </div>

      {getValues("applicant2") && (
        <>
          <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
            Financial Details Applicant 2:
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-8">
            {config2.map((field) => (
              <FormField
                key={field.id}
                field={field}
                register={register}
                errors={errors}
                prefix={"applicant2"}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
