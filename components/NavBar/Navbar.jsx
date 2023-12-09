// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import CenteredNavLink from "./CenteredNavLink";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setServicesOpen] = useState(false);

    return (
        <nav className="bg-black border-b-2 border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="md:flex justify-between items-center py-3">
                    {/* Logo and Mobile Menu Button */}
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            className="text-xl font-semibold text-gray-700 hover:text-green-600"
                        >
                            <Image
                                src="/logo.png"
                                width={200}
                                height={50}
                                alt="MortgageCo Logo"
                            />
                        </Link>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="outline-none mobile-menu-button"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-500 hover:text-green-500"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Centered Navigation Links */}
                    <div className="hidden md:flex flex-grow justify-center items-center space-x-4">
                        {/* Services Dropdown */}
                        <div className="relative group px-2 ">
                            <button
                                className="text-gray-600 hover:text-green-600 font-medium p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                                onMouseOver={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                Services
                            </button>
                            <div
                                className={`absolute -left-4 top-24 bg-white shadow-lg rounded-md  z-20 ${
                                    isServicesOpen
                                        ? "animate-rollDown  group-hover:block"
                                        : "hidden"
                                }`}
                                onMouseOver={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <div className="p-4">
                                    <CenteredNavLink
                                        href="/first-time-home-buyer"
                                        className="border-t"
                                    >
                                        First Time Home Buyer
                                    </CenteredNavLink>
                                    <CenteredNavLink href="/remortgage">
                                        Remortgage
                                    </CenteredNavLink>

                                    <CenteredNavLink href="/buy-to-let">
                                        Buy to Let
                                    </CenteredNavLink>
                                    <CenteredNavLink href="/commercial">
                                        Commercial
                                    </CenteredNavLink>
                                </div>
                            </div>
                        </div>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-green-600 font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-green-600 font-medium"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Optional Right-Side Component (e.g., CTA Button) */}
                    <div className="hidden md:flex justify-end items-center">
                        <Link
                            href="/get-started"
                            className="text-green-600 hover:bg-green-600 hover:text-white border border-green-600 rounded px-3 py-1"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden ${
                    isOpen ? "block" : "hidden"
                } px-4 py-3 bg-white border-t-2 border-gray-100`}
            >
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-700">
                        Menu
                    </span>
                    <button onClick={() => setIsOpen(false)}>
                        <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <button
                    onClick={() => setServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:bg-gray-100 py-2"
                >
                    Services
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {isServicesOpen && (
                    <div className="pl-4 py-2">
                        <Link
                            href="/residential"
                            className="block text-sm text-gray-600 hover:bg-gray-100 py-1"
                        >
                            Residential
                        </Link>
                        <Link
                            href="/commercial"
                            className="block text-sm text-gray-600 hover:bg-gray-100 py-1"
                        >
                            Commercial
                        </Link>
                    </div>
                )}

                <Link
                    href="/about"
                    className="block text-sm text-gray-700 hover:bg-gray-100 py-2"
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    className="block text-sm text-gray-700 hover:bg-gray-100 py-2"
                >
                    Contact
                </Link>
                <Link
                    href="/get-started"
                    className="block text-sm text-gray-700 hover:bg-gray-100 py-2"
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
