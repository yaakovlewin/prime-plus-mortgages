"use client";
import { CORRESPONDENT_FIELDS } from "@/js/config/addressFieldsConfig";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";

// components
import AddressForm from "./AddressForm";
import CompanyForm from "./CompanyForm";
import { Checkbox } from "./FormInputs";

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

  const handleCheckboxChange = (e) => {
    const visible = e.target.checked;
    setValue("correspondentAddressDifferent", visible);
    if (visible) {
      restorePreviousValues();
    } else {
      saveAndClearCurrentValues();
    }
  };

  const restorePreviousValues = () => {
    Object.entries(previousAddressData.current).forEach(([key, value]) => {
      setValue(`correspondentAddress.${key}`, value);
    });
  };

  const saveAndClearCurrentValues = () => {
    previousAddressData.current = CORRESPONDENT_FIELDS.reduce((acc, field) => {
      acc[field] = getValues(`correspondentAddress.${field}`);
      return acc;
    }, {});
    CORRESPONDENT_FIELDS.forEach((field) => {
      unregister(`correspondentAddress.${field}`);
    });
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
          className=" col-span-6 text-sm font-medium leading-6 text-gray-900"
        >
          Registered Address
        </label>
        <AddressForm prefix="companyAdddress" isVisible={true} />
        <Checkbox
          label="Correspondent Address is different to Registered Address"
          id="correspondentAddressDifferent"
          onChange={handleCheckboxChange}
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
