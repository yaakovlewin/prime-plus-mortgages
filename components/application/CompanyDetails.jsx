"use client";
import { useFormContext as useFormContextRHForm } from "react-hook-form";
import { useFormContext } from "@/components/application/FormContext";
import { useState } from "react";
import prefixAddressFields from "@/js/utils/prefixAddressFields";

// components
import { TextInput, DateInput, Checkbox } from "./FormComponents";

function CompanyDetails() {
  const [temporaryAddressData, setTemporaryAddressData] = useState({});

  const {
    formData: { companyDetails },
    updateFormData,
  } = useFormContext();

  const {
    register,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useFormContextRHForm({
    mode: "onBlur",
    defaultValues: {
      // Spread operator to populate fields directly from companyDetails object
      ...companyDetails,
      // Destructure nested addresses into separate prefixed fields
      ...prefixAddressFields("companyAddress", companyDetails.companyAddress),
      ...prefixAddressFields(
        "correspondentAddress",
        companyDetails.correspondentAddress,
      ),
    },
  });

  const handleCheckboxChange = (event) => {
    updateFormData((prevState) => ({
      ...prevState,
      isCorrespondentAddressVisible: event.target.checked,
    }));
  };

  let isCorrespondentAddressVisible = watch("isCorrespondentAddressCheckbox");

  const toggleAddressVisibility = (e) => {
    if (e.target.checked) {
      const currentValues = getValues();
      setTemporaryAddressData(currentValues);
      setValue("correspondentBuildingNumber", "");
      setValue("correspondentStreet", "");
      setValue("correspondentLocality", "");
      setValue("correspondentTownCity", "");
      setValue("correspondentCounty", "");
      setValue("correspondentPostcode", "");
    } else {
      if (temporaryAddressData) {
        setValue(
          "correspondentBuildingNumber",
          temporaryAddressData.correspondentBuildingNumber,
        );
        setValue(
          "correspondentStreet",
          temporaryAddressData.correspondentStreet,
        );
        setValue(
          "correspondentLocality",
          temporaryAddressData.correspondentLocality,
        );
        setValue(
          "correspondentTownCity",
          temporaryAddressData.correspondentTownCity,
        );
        setValue(
          "correspondentCounty",
          temporaryAddressData.correspondentCounty,
        );
        setValue(
          "correspondentPostcode",
          temporaryAddressData.correspondentPostcode,
        );
      }
    }
    isCorrespondentAddressVisible = e.target.checked;
  };

  return (
    <section
      className="
            space-y-18 py-12
        "
    >
      <p className="text-center text-gray-500">
        Please enter the details of your company.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* Company Name */}
        <TextInput
          label="Company Name"
          id="companyName"
          register={register}
          registerOptions={{
            required: "Company name is required",
          }}
          errors={errors}
          span={3}
        />

        {/* Company Registration Number */}
        <TextInput
          label="Company Registration Number"
          id="registrationNumber"
          register={register}
          registerOptions={{
            required: "Registration number is required",
          }}
          errors={errors}
          span={3}
        />

        {/* Date of Incorporation */}
        <DateInput
          label="Date of Incorporation"
          id="incorporationDate"
          register={register}
          registerOptions={{
            required: "Incorporation date is required",
          }}
          errors={errors}
          span={3}
        />

        {/* Registered Address */}
        <div className="sm:col-span-6">
          <label
            htmlFor="registered-address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Registered Address
          </label>
          {/* Building Number */}
          {/* <div className="mt-2">
            <input
              type="text"
              id="building-number"
              {...register("buildingNumber", {
                required: "Building number is required",
              })}
              placeholder="Building Number"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.buildingNumber && (
              <p className="text-xs italic text-red-500">
                {errors.buildingNumber.message}
              </p>
            )}
          </div> */}

          {/* Street */}
          <TextInput
            label="Street"
            id="companyAddress.street"
            register={register}
            registerOptions={{
              required: "Street is required",
            }}
            errors={errors}
          />

          {/* Locality */}
          <TextInput
            label="Locality"
            id="companyAddress.locality"
            register={register}
          />

          {/* Town/City, County and Postcode */}
          <div className="mt-2 grid grid-cols-1 gap-x-6 sm:grid-cols-3">
            <TextInput
              label="Town/City"
              id="companyAddress.townCity"
              register={register}
              registerOptions={{
                required: "Town/City is required",
              }}
              errors={errors}
              span={2}
            />

            <TextInput
              label="County"
              id="companyAddress.county"
              register={register}
              span={1}
            />
            <TextInput
              label="Postcode"
              id="companyAddress.postcode"
              register={register}
              registerOptions={{
                required: "Postcode is required",
              }}
              errors={errors}
              span={1}
            />
          </div>
        </div>
        <Checkbox
          label="Correspondent Address is the same as Registered Address"
          id="isCorrespondentAddressCheckbox"
          onChange={toggleAddressVisibility}
          checked={isCorrespondentAddressVisible}
          register={register}
          registerOptions={{}}
          errors={errors}
          span={6}
        />

        {isCorrespondentAddressVisible && (
          <div className="sm:col-span-6">
            <label
              htmlFor="correspondent-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Correspondent Address (if different)
            </label>

            {/* Street */}
            <TextInput
              label="Street"
              id="correspondentAddress.street"
              register={register}
              registerOptions={{
                required: isCorrespondentAddressVisible
                  ? "Street is required"
                  : false,
              }}
              errors={errors}
            />

            {/* Locality */}
            <TextInput
              label="Locality"
              id="correspondentAddress.locality"
              register={register}
            />

            {/* Town/City, County and Postcode */}
            <TextInput
              label="Town/City"
              id="correspondentAddress.townCity"
              register={register}
              registerOptions={{
                required: isCorrespondentAddressVisible
                  ? "Town/City is required"
                  : false,
              }}
              errors={errors}
              span={2}
            />
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-3">
              <TextInput
                label="County"
                id="correspondentAddress.county"
                register={register}
                registerOptions={{
                  required: isCorrespondentAddressVisible
                    ? "County is required"
                    : false,
                }}
                errors={errors}
                span={1}
              />
              <TextInput
                label="Postcode"
                id="correspondentAddress.postcode"
                register={register}
                registerOptions={{
                  required: isCorrespondentAddressVisible
                    ? "Postcode is required"
                    : false,
                }}
                errors={errors}
                span={1}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CompanyDetails;
