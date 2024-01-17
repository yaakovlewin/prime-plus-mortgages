"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Heading2 from "../Heading2";

export default function PersonalDetails({ setSteps = null, type }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        {...register(`${type}FirstName`, { required: true })}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors[`${type}FirstName`] && (
                        <span className="text-red-500 text-xs">
                            First name is required
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        {...register(`${type}LastName`, { required: true })}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors[`${type}LastName`] && (
                        <span className="text-red-500 text-xs">
                            Last name is required
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        {...register(`${type}Email`, { required: true })}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors[`${type}Email`] && (
                        <span className="text-red-500 text-xs">
                            Email is required
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        {...register(`${type}Phone`, { required: true })}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors[`${type}Phone`] && (
                        <span className="text-red-500 text-xs">
                            Phone is required
                        </span>
                    )}
                </div>
            </div>

            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-10">
                Personal Details Applicant 1:
            </h2>

            <div className="col-span-full">
                <label
                    htmlFor="applicant-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Full Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="applicant-name"
                        id="applicant-name"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            {/* // More fields go here... */}

            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-10">
                Personal Details Applicant 2:
            </h2>

            <div className="col-span-full">
                <label
                    htmlFor="applicant-name2"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Full Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="applicant-name2"
                        id="applicant-name2"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            {/* // More fields go here... */}

            <div className="sm:col-span-2 sm:col-start-1">
                <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    City
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="sm:col-span-2">
                <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    County
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="sm:col-span-2">
                <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Postcode
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="sm:col-span-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </section>
    );
}
