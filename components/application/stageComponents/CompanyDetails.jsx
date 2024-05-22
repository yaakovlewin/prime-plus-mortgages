"use client";
import { CORRESPONDENT_FIELDS } from "@/js/config/addressFieldsConfig";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

// components
import AddressForm from "@/components/application/sections/AddressForm";
import { Checkbox } from "../dynamicComponents/FormInputs";
import CompanyForm from "../sections/CompanyForm";

function CompanyDetails() {
  const [correspondentAddressVisible, setCorrespondentAddressVisible] =
    useState(false);

  const {
    register,
    unregister,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext({
    mode: "onBlur",
    defaultValues: {
      correspondentAddressDifferent: false,
    },
  });

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
    if (correspondentAddressVisible) {
      restorePreviousValues();
    } else {
      saveAndClearCurrentValues();
    }
  }, [
    correspondentAddressVisible,
    restorePreviousValues,
    saveAndClearCurrentValues,
  ]);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setValue("correspondentAddressDifferent", checked);
    setCorrespondentAddressVisible(checked);
  };

  return (
    <section className="space-y-18 py-12">
      <p className="text-center text-gray-500">
        Please enter the details of your company.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <CompanyForm />
        <label
          htmlFor="registered-address"
          className=" text-sm font-medium leading-6 text-gray-900 sm:col-span-6"
        >
          Registered Address
        </label>
        <AddressForm prefix="companyAdddress" isVisible={true} />
        <Checkbox
          label="Correspondent Address is different to Registered Address"
          id="correspondentAddressDifferent"
          onChange={handleCheckboxChange}
          checked={correspondentAddressVisible}
          register={register}
          registerOptions={{}}
          errors={errors}
          span={6}
        />
        {correspondentAddressVisible && (
          <>
            <label
              htmlFor="correspondent-address"
              className="col-span-6 text-sm font-medium leading-6 text-gray-900"
            >
              Correspondent Address (if different)
            </label>
            <AddressForm
              prefix="correspondentAddress"
              isVisible={correspondentAddressVisible}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default CompanyDetails;
