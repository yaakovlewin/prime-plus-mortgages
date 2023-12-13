import Image from "next/image";
import Link from "next/link";

export default function LogoAndMobileMenu({ isOpen, setIsOpen }) {
    return (
        <div className="flex justify-between items-stretch">
            <Link
                href="/"
                className="text-xl font-semibold text-cyan-0 hover:text-cyan-600"
            >
                <Image
                    src="/logo-01.png"
                    width={200}
                    height={50}
                    alt="MortgageCo Logo"
                    className="w-44 h-22 my-3"
                />
            </Link>

            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="outline-none mobile-menu-button"
                >
                    <svg
                        className="w-6 h-6 text-gray-500 hover:text-cyan-500"
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
    );
}
