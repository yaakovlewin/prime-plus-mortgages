"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Heading2 from "../Heading2";

function CompanyDetails() {
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext();

    const watchFields = watch([
        "correspondentBuildingNumber",
        "correspondentStreet",
        "correspondentLocality",
        "correspondentTownCity",
        "correspondentCounty",
        "correspondentPostcode",
    ]);
    const isFieldFilled = watchFields.some(
        (field) => field && field.length > 0
    );

    const [isAddressVisible, setAddressVisible] = useState(false);

    const toggleAddressVisibility = (e) => {
        if (!e.target.checked) {
            setValue("correspondentBuildingNumber", "");
            setValue("correspondentStreet", "");
            setValue("correspondentLocality", "");
            setValue("correspondentTownCity", "");
            setValue("correspondentCounty", "");
            setValue("correspondentPostcode", "");
        }
        setAddressVisible(!isAddressVisible);
    };

    return (
        <section
            className="
            py-12 space-y-18
        "
        >
            <Heading2>Company Details</Heading2>
            <p className="text-gray-500 text-center">
                Please enter the details of your company.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Company Name */}
                <div className="sm:col-span-2">
                    <label
                        htmlFor="company-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Company Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="company-name"
                            {...register("companyName", {
                                required: "Company name is required",
                            })}
                            placeholder="Company Name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.companyName && (
                            <p className="text-red-500 text-xs italic">
                                {errors.companyName.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Add more input fields in a similar fashion for other company details */}
                {/* Company Registration Number */}
                <div className="sm:col-span-2">
                    <label
                        htmlFor="company-registration-number"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Company Registration Number
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="company-registration-number"
                            {...register("registrationNumber", {
                                required: "Registration number is required",
                            })}
                            placeholder="Company Registration Number"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.registrationNumber && (
                            <p className="text-red-500 text-xs italic">
                                {errors.registrationNumber.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Date of Incorporation */}
                <div className="sm:col-span-2">
                    <label
                        htmlFor="date-of-incorporation"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Date of Incorporation
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            id="date-of-incorporation"
                            {...register("incorporationDate", {
                                required: "Incorporation date is required",
                            })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.incorporationDate && (
                            <p className="text-red-500 text-xs italic">
                                {errors.incorporationDate.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Registered Address */}
                <div className="sm:col-span-6">
                    <label
                        htmlFor="registered-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Registered Address
                    </label>
                    {/* Building Number */}
                    <div className="mt-2">
                        <input
                            type="text"
                            id="building-number"
                            {...register("buildingNumber", {
                                required: "Building number is required",
                            })}
                            placeholder="Building Number"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                        />
                        {errors.buildingNumber && (
                            <p className="text-red-500 text-xs italic">
                                {errors.buildingNumber.message}
                            </p>
                        )}
                    </div>

                    {/* Street */}
                    <div className="mt-2">
                        <label
                            htmlFor="street"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Street
                        </label>
                        <input
                            type="text"
                            id="street"
                            {...register("street", {
                                required: "Street is required",
                            })}
                            placeholder="Street"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                        />
                        {errors.street && (
                            <p className="text-red-500 text-xs italic">
                                {errors.street.message}
                            </p>
                        )}
                    </div>

                    {/* Locality */}
                    <div className="mt-2">
                        <label
                            htmlFor="locality"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Locality
                        </label>
                        <input
                            type="text"
                            id="locality"
                            {...register("locality")}
                            placeholder="Locality"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                        />
                    </div>

                    {/* Town/City, County and Postcode */}
                    <div className="mt-2 grid grid-cols-1 gap-x-6 sm:grid-cols-3">
                        <div className="col-span-2 mt-2">
                            <label
                                htmlFor="town-city"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Town/City
                            </label>

                            <input
                                type="text"
                                id="town-city"
                                {...register("townCity", {
                                    required: "Town/City is required",
                                })}
                                placeholder="Town/City"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 "
                            />
                            {errors.townCity && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.townCity.message}
                                </p>
                            )}
                        </div>
                        <div className="col-span-1 mt-2">
                            <label
                                htmlFor="county"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                County
                            </label>
                            <input
                                type="text"
                                id="county"
                                {...register("county")}
                                placeholder="County"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            />
                        </div>
                        <div className="col-span-1 mt-2">
                            <label
                                htmlFor="postcode"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Postcode
                            </label>
                            <input
                                type="text"
                                id="postcode"
                                {...register("postcode", {
                                    required: "Postcode is required",
                                })}
                                placeholder="Postcode"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            />
                            {errors.postcode && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.postcode.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <label className="flex items-center space-x-3 bg-gray-100 p-2 rounded-lg">
                    <input
                        type="checkbox"
                        onClick={toggleAddressVisibility}
                        checked={!isAddressVisible}
                        className="form-checkbox h-5 w-5 text-gray-600 mr-2"
                    />
                    <span className="text-gray-700 text-sm">
                        Correspondent Address is the same as Registered Address
                    </span>
                </label>

                {isAddressVisible && (
                    <div className="sm:col-span-6">
                        <label
                            htmlFor="correspondent-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Correspondent Address (if different)
                        </label>

                        {/* Building Number */}
                        <div className="mt-2">
                            <input
                                type="text"
                                id="correspondent-building-number"
                                {...register("correspondentBuildingNumber", {
                                    required: isFieldFilled
                                        ? "Building number is required"
                                        : false,
                                })}
                                placeholder="Building Number"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            />
                            {errors.correspondentBuildingNumber && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.correspondentBuildingNumber.message}
                                </p>
                            )}
                        </div>

                        {/* Street */}
                        <div className="mt-2">
                            <label
                                htmlFor="correspondent-street"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Street
                            </label>
                            <input
                                type="text"
                                id="correspondent-street"
                                {...register("correspondentStreet", {
                                    required: isFieldFilled
                                        ? "Street is required"
                                        : false,
                                })}
                                placeholder="Street"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            />
                            {errors.correspondentStreet && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.correspondentStreet.message}
                                </p>
                            )}
                        </div>

                        {/* Locality */}
                        <div className="mt-2">
                            <label
                                htmlFor="correspondent-locality"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Locality
                            </label>
                            <input
                                type="text"
                                id="correspondent-locality"
                                {...register("correspondentLocality")}
                                placeholder="Locality"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            />
                        </div>

                        {/* Town/City, County and Postcode */}
                        <div className="mt-2 grid grid-cols-1 gap-x-6 sm:grid-cols-3">
                            <div className="col-span-2 mt-2">
                                <label
                                    htmlFor="correspondent-town-city"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Town/City
                                </label>
                                <input
                                    type="text"
                                    id="correspondent-town-city"
                                    {...register("correspondentTownCity", {
                                        required: isFieldFilled
                                            ? "Town/City is required"
                                            : false,
                                    })}
                                    placeholder="Town/City"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 "
                                />
                                {errors.correspondentTownCity && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.correspondentTownCity.message}
                                    </p>
                                )}
                            </div>
                            <div className="col-span-1 mt-2">
                                <label
                                    htmlFor="correspondent-county"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    County
                                </label>
                                <input
                                    type="text"
                                    id="correspondent-county"
                                    {...register("correspondentCounty", {
                                        required: isFieldFilled
                                            ? "County is required"
                                            : false,
                                    })}
                                    placeholder="County"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                                />
                                {errors.correspondentCounty && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.correspondentCounty.message}
                                    </p>
                                )}
                            </div>
                            <div className="col-span-1 mt-2">
                                <label
                                    htmlFor="correspondent-postcode"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Postcode
                                </label>
                                <input
                                    type="text"
                                    id="correspondent-postcode"
                                    {...register("correspondentPostcode", {
                                        required: isFieldFilled
                                            ? "Postcode is required"
                                            : false,
                                    })}
                                    placeholder="Postcode"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                                />
                                {errors.correspondentPostcode && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.correspondentPostcode.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default CompanyDetails;
