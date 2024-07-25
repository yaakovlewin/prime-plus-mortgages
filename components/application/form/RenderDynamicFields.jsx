"use client";
import useFormFieldsConfig from "@/app/hooks/useFormFieldsConfig";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import DynamicFormField from "./FormInputs/DynamicFormField";

export default function RenderDynamicFields({
  prefix,
  configType,
  index,
  remove,
}) {
  const {
    register,
    unregister,
    control,
    formState: { errors },
  } = useFormContext();

  const initialConfig = useMemo(() => configType(prefix), [prefix, configType]);

  const config = useFormFieldsConfig(
    initialConfig,
    control,
    unregister,
    register,
  );
  return (
    <section key={index !== undefined ? `${prefix}[${index}]` : undefined}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-8">
        {config.map((field) => (
          <DynamicFormField
            key={field.id}
            field={field}
            register={register}
            errors={errors}
          />
        ))}
        {remove && (
          <button type="button" onClick={() => remove(index)}>
            Delete Applicant
          </button>
        )}
      </div>
    </section>
  );
}
