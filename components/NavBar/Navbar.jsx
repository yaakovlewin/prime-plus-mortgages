// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import CenteredNavLink from "./CenteredNavLink";
import Image from "next/image";
import LogoAndMobileMenu from "./LogoAndMobileMenu";
import DropdownNavLink from "./DropDownNavLink";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setServicesOpen] = useState(false);

    return (
        <nav className="fixed z-10 w-full bg-sky-800 border-b-8 border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="md:flex justify-between items-stretch">
                    <LogoAndMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

                    {/* Centered Navigation Links */}
                    <div className="hidden md:flex gap-14 lg:gap-20 justify-center items-center text-2xl font-exo2">
                        {/* Services Dropdown */}
                        <div
                            className="relative group h-full"
                            onMouseOver={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <CenteredNavLink href="/services">
                                Services
                            </CenteredNavLink>
                            <div
                                className={`absolute -left-4 top-22 bg-white shadow-lg rounded-md  z-20 ${
                                    isServicesOpen
                                        ? "animate-rollDown  group-hover:block"
                                        : "hidden"
                                }`}
                                onMouseOver={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <div className="p-4">
                                    <DropdownNavLink
                                        href="/first-time-home-buyer"
                                        className=""
                                    >
                                        First Time Home Buyer
                                    </DropdownNavLink>
                                    <DropdownNavLink href="/remortgage">
                                        Remortgage
                                    </DropdownNavLink>

                                    <DropdownNavLink href="/buy-to-let">
                                        Buy to Let
                                    </DropdownNavLink>
                                    <DropdownNavLink href="/commercial">
                                        Commercial
                                    </DropdownNavLink>
                                </div>
                            </div>
                        </div>
                        <CenteredNavLink href="/about">About</CenteredNavLink>
                        <CenteredNavLink href="/contact">
                            Contact
                        </CenteredNavLink>
                    </div>

                    {/* Optional Right-Side Component (e.g., CTA Button) */}
                    <div className="hidden md:flex justify-end items-center">
                        <Link
                            href="/get-started"
                            className="text-cyan-950 bg-cyan-100 hover:bg-cyan-700 hover:text-white border-2 border-cyan-950 rounded shadow px-3 py-2"
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
