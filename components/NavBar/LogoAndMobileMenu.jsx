import Image from "next/image";
import Link from "next/link";

export default function LogoAndMobileMenu({ toggleMenu }) {
  return (
    <div className="flex items-stretch justify-between">
      <Link
        href="/"
        className="text-cyan-0 text-xl font-semibold hover:text-cyan-600"
      >
        <Image
          src="/images/logo-01.png"
          width={170}
          height={100}
          alt="Prime Plus Mortgages Logo"
          className="light-shadow-md my-2 rounded bg-opacity-70 bg-gradient-to-r from-sky-800 via-cyan-500 to-sky-800 px-4  hover:bg-gradient-to-r hover:from-sky-700 hover:via-cyan-500 hover:to-sky-700"
        />
      </Link>

      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMenu}
          className="mobile-menu-button outline-none"
        >
          <svg
            className="h-6 w-6 text-gray-500 hover:text-cyan-500"
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
