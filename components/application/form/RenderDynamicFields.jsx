"use client";
import useFormFieldsConfig from "@/hooks/useFormFieldsConfig";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
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
          <button
            type="button"
            className="col-span-8 mb-8 ml-5 items-center text-red-500 hover:text-red-700"
            onClick={() => remove(index)}
          >
            <AiOutlineClose className="mx-auto" />
            Delete Applicant
          </button>
        )}
      </div>
    </section>
  );
}
