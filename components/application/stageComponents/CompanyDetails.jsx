"use client";
import { CORRESPONDENT_FIELDS } from "@/js/config/addressFieldsConfig";
import { useCallback, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

// components
import AddressForm from "@/components/application/sections/AddressForm";
import { Checkbox } from "../dynamicComponents/FormInputs";
import CompanyForm from "../sections/CompanyForm";

function CompanyDetails() {
  const {
    register,
    unregister,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext({
    mode: "onBlur",
    defaultValues: {
      correspondentAddressDifferent: false,
    },
  });

  const isCorrespondentAddressVisible = watch("correspondentAddressDifferent");
  const previousAddressData = useRef({});

  const restorePreviousValues = useCallback(() => {
    Object.entries(previousAddressData.current).forEach(([key, value]) => {
      setValue(`correspondentAddress.${key}`, value);
    });
  }, [setValue]);

  const saveAndClearCurrentValues = useCallback(() => {
    previousAddressData.current = CORRESPONDENT_FIELDS.reduce((acc, field) => {
      acc[field] = getValues(`correspondentAddress.${field}`);
      return acc;
    }, {});
    CORRESPONDENT_FIELDS.forEach((field) => {
      unregister(`correspondentAddress.${field}`);
    });
  }, [getValues, unregister]);

  useEffect(() => {
    if (isCorrespondentAddressVisible) {
      restorePreviousValues();
    } else {
      saveAndClearCurrentValues();
    }
  }, [
    isCorrespondentAddressVisible,
    restorePreviousValues,
    saveAndClearCurrentValues,
  ]);

  return (
    <section className="space-y-18 py-12">
      <p className="text-center text-gray-500">
        Please enter the details of your company.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <CompanyForm />
        <label
          htmlFor="registered-address"
          className=" col-span-6 text-sm font-medium leading-6 text-gray-900"
        >
          Registered Address
        </label>
        <AddressForm prefix="companyAdddress" isVisible={true} />
        <Checkbox
          label="Correspondent Address is different to Registered Address"
          id="correspondentAddressDifferent"
          onChange={(e) =>
            setValue("correspondentAddressDifferent", e.target.checked)
          }
          checked={isCorrespondentAddressVisible}
          register={register}
          registerOptions={{}}
          errors={errors}
          span={6}
        />
        {isCorrespondentAddressVisible && (
          <>
            <label
              htmlFor="correspondent-address"
              className="col-span-6 text-sm font-medium leading-6 text-gray-900"
            >
              Correspondent Address (if different)
            </label>
            <AddressForm
              prefix="correspondentAddress"
              isVisible={isCorrespondentAddressVisible}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default CompanyDetails;
