"use client";
import useComponentUnregister from "@/app/hooks/useCheckBoxHandler";
import { ADDRESS_FIELDS } from "@/js/config/addressFieldsConfig";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

// components
import AddressForm from "@/components/application/sections/AddressForm";
import { Checkbox } from "../dynamicComponents/FormInputs";
import CompanyForm from "../sections/CompanyForm";

function CompanyDetails() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext({
    mode: "onBlur",
    defaultValues: {
      correspondentAddressDifferent: false,
    },
  });

  const { handleCheckboxChange } = useComponentUnregister(
    ADDRESS_FIELDS.map(
      (field) =>
        `correspondentAddress${field.charAt(0).toUpperCase()}${field.slice(1)}`,
    ),
  );

  const [correspondentAddressVisible, setCorrespondentAddressVisible] =
    useState(getValues("correspondentAddressDifferent") || false);

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
          onChange={(e) =>
            handleCheckboxChange(
              e,
              setCorrespondentAddressVisible,
              "correspondentAddressDifferent",
            )
          }
          checked={correspondentAddressVisible}
          register={register}
          registerOptions={{}}
          errors={errors}
          classes={"sm:col-span-6"}
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
