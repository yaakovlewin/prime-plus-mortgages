// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        {/* Website Logo */}
                        <Link
                            href="/"
                            className="flex items-center py-4 px-2 text-xl font-bold text-gray-700 hover:text-green-600"
                        >
                            MortgageCo
                        </Link>

                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                                href="/services"
                                className="py-4 px-2 text-gray-700 hover:text-green-600"
                            >
                                Services
                            </Link>

                            {/* Dropdown Menu */}
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        setDropdownOpen(!isDropdownOpen)
                                    }
                                    className="py-4 px-2 text-gray-700 hover:text-green-600"
                                >
                                    More <i className="fa fa-caret-down"></i>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute bg-white shadow-lg rounded-lg py-2 mt-2">
                                        <Link
                                            href="/team"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Our Team
                                        </Link>
                                        <Link
                                            href="/blog"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Blog
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/about"
                                className="py-4 px-2 text-gray-700 hover:text-green-600"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="py-4 px-2 text-gray-700 hover:text-green-600"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center space-x-3">
                        <div className="bg-white shadow rounded flex">
                            <input
                                type="text"
                                className="px-4 py-2 w-80"
                                placeholder="Search..."
                            />
                            <button className="px-4 text-white bg-green-600 hover:bg-green-500 rounded-r-lg">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
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
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <Link
                    href="/services"
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                >
                    Services
                </Link>
                <Link
                    href="/about"
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                >
                    Contact
                </Link>
                <Link
                    href="/team"
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                >
                    Our Team
                </Link>
                <Link
                    href="/blog"
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                >
                    Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
