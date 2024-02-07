"use client";
import { useFormContext } from "react-hook-form";

export default function CompanyDetailsAddress() {
    const {
        register,
        watch,
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

    return (
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
        </div>
    );
}