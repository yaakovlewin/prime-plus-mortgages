"use client";

import { useFormContext } from "react-hook-form";

// components
import useDynamicFormConfig from "@/app/hooks/useDynamicFormConfig";
import CreateCompanyConfig from "@/js/config/companyDetailsConfig";
import { useMemo } from "react";
import FormField from "../dynamicComponents/FormField";

function CompanyDetails() {
  const {
    register,
    unregister,
    control,
    formState: { errors },
  } = useFormContext();

  const initialConfig = useMemo(() => CreateCompanyConfig("company"), []);
  const config = useDynamicFormConfig(
    initialConfig,
    control,
    unregister,
    register,
  );

  return (
    <section>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Company Details
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

export default CompanyDetails;
