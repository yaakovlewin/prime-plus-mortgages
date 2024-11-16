import { Menu } from "lucide-react";
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
          src="/images/logos/prime-plus-mortgages-logo.png"
          width={175}
          height={100}
          alt="Prime Plus Mortgages Logo"
          className="light-shadow-md my-2 rounded bg-opacity-70 bg-gradient-to-r from-sky-800 via-cyan-500 to-sky-800 px-4 hover:bg-gradient-to-r hover:from-sky-700 hover:via-cyan-500 hover:to-sky-700"
        />
      </Link>

      <button
        onClick={toggleMenu}
        className="my-auto transform rounded-lg p-2.5 text-cyan-50 
                   ring-2 ring-sky-400/30 transition-colors duration-150 
                   hover:bg-sky-700/50 active:scale-95 md:hidden"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
    </div>
  );
}
