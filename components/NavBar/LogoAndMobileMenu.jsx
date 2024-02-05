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
          src="/logo-01.png"
          width={150}
          height={150}
          alt="Prime Plus Mortgages Logo"
          className=" 2xl:h-22 my-3 h-20 2xl:w-44"
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
