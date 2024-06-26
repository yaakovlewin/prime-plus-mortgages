"use client";
import useComponentUnregister from "@/app/hooks/useCheckBoxHandler";
import createFinancialDetailsConfig from "@/js/config/financialFieldsConfig";
import { useFormContext } from "react-hook-form";

// components
import useDynamicFormConfig from "@/app/hooks/useDynamicFormConfig";
import createPersonalDetailsConfig from "@/js/config/personalDetailsConfig";
import { useMemo, useState } from "react";
import FormField from "../dynamicComponents/FormField";
import { Checkbox } from "../dynamicComponents/FormInputs";
import AddressForm from "../sections/AddressForm";

export default function PersonalDetails() {
  const {
    register,
    unregister,
    control,
    getValues,
    formState: { errors },
  } = useFormContext({
    mode: "onBlur",
    defaultValues: {
      applicant2: false,
    },
  });

  const initialConfig = useMemo(
    () => createFinancialDetailsConfig("applicant1"),
    [],
  );

  const config = useDynamicFormConfig(
    initialConfig,
    control,
    unregister,
    register,
  );

  const { handleCheckboxChange } = useComponentUnregister(
    createPersonalDetailsConfig("applicant2").map((field) => field.id),
  );

  const [applicant2Visible, setApplicant2Visible] = useState(
    getValues("applicant2") || false,
  );

  return (
    <section>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Personal Details Applicant 1:
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-8">
        {config.map((field) => {
          return (
            <FormField
              key={field.id}
              field={field}
              register={register}
              errors={errors}
            />
          );
        })}
        <AddressForm prefix={"applicant1"} isVisible={true} />
      </div>

      <Checkbox
        label="Add Applicant 2"
        id="applicant2"
        onChange={(e) =>
          handleCheckboxChange(e, setApplicant2Visible, "applicant2")
        }
        checked={applicant2Visible}
        register={register}
        registerOptions={{}}
        errors={errors}
      />
      {applicant2Visible && (
        <>
          <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
            Personal Details Applicant 2:
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-8">
            {createPersonalAndFinancialDetailsConfig("applicant2").map(
              (field) => {
                return (
                  <FormField
                    key={field.id}
                    field={field}
                    register={register}
                    errors={errors}
                    prefix={"applicant2"}
                  />
                );
              },
            )}
            <AddressForm prefix={"applicant2"} isVisible={true} />
          </div>
        </>
      )}
    </section>
  );
}
