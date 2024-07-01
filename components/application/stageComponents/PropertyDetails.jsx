"use client";
import useDynamicFormConfig from "@/app/hooks/useDynamicFormConfig";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

// components
import createPropertyDetailsConfig from "@/js/config/propertyFieldsConfig";
import FormField from "../dynamicComponents/FormField";

export default function EmploymentDetails() {
  const {
    register,
    unregister,
    control,
    formState: { errors },
  } = useFormContext();

  const initialConfig = useMemo(
    () => createPropertyDetailsConfig("applicant1"),
    [],
  );
  const config = useDynamicFormConfig(
    initialConfig,
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
        {config.map((field) => (
          <FormField
            key={field.id}
            field={field}
            register={register}
            errors={errors}
          />
        ))}
      </div>
    </section>
  );
}
