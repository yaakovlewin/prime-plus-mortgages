// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* Website Logo */}
                            <Link
                                href="/"
                                className="flex items-center py-4 px-2"
                            >
                                <span className="font-semibold text-gray-500 text-lg">
                                    MortgageCo
                                </span>
                            </Link>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                                href="/services"
                                className="py-4 px-2 text-gray-500 font-semibold
                                hover:text-green-500 transition duration-300"
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="py-4 px-2 text-gray-500 font-semibold
                                hover:text-green-500 transition duration-300"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="py-4 px-2 text-gray-500 font-semibold
                                hover:text-green-500 transition duration-300"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
