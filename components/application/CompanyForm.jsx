"use client";
import { useFormContext } from "react-hook-form";
import companyDetailsConfig from "@/js/config/companyDetailsConfig";
import FormField from "./FormField";

const CompanyForm = () => {
  const defaultValues = companyDetailsConfig.reduce((acc, field) => {
    acc[field.id] = field.defaultValue;
    return acc;
  }, {});

  const {
    register,
    formState: { errors },
  } = useFormContext({
    defaultValues,
  });

  return (
    <>
      {companyDetailsConfig.map((field) => (
        <FormField
          key={field.id}
          field={field}
          register={register}
          errors={errors}
        />
      ))}
    </>
  );
};

export default CompanyForm;
