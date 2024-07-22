"use client";
import useDynamicFormConfig from "@/app/hooks/useDynamicFormConfig";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import FormField from "./dynamicComponents/FormField";

export default function RenderDynamicFields({
  prefix,
  configType,
  fields,
  index,
  remove,
}) {
  const {
    register,
    unregister,
    control,
    formState: { errors },
  } = useFormContext();

  const initialConfig = useMemo(() => fields, [fields]);
  const config = useDynamicFormConfig(
    initialConfig,
    control,
    unregister,
    register,
  );
  return (
    <section key={index !== undefined ? `${prefix}[${index}]` : undefined}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-8">
        {config.map((field) => (
          <FormField
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
