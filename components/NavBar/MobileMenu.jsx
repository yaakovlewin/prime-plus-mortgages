"use client";
import Link from "next/link";
import MobileNavLink from "./MobileNavLink";
export default function MobileMenu({
  menuOpen,
  toggleMenu,
  services,
  isServicesOpen,
  setServicesOpen,
}) {
  return (
    <div
      className={`md:hidden ${
        menuOpen ? "block" : "hidden"
      } border-t-2 border-gray-100 bg-white px-4 py-3`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-700">Menu</span>
        <button onClick={toggleMenu}>
          <svg
            className="h-6 w-6 text-gray-600"
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
        className=" flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900"
      >
        Services
        <svg
          className="h-4 w-4"
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
        <div className="py-2 pl-4">
          {services.map((service) => (
            <MobileNavLink
              href={`/services/${service.url}`}
              key={service.id}
              toggleMenu={toggleMenu}
              setServicesOpen={setServicesOpen}
              className="block py-1 text-sm text-gray-600 hover:bg-gray-100"
            >
              {service.title}
            </MobileNavLink>
          ))}
        </div>
      )}
      <MobileNavLink href="/" toggleMenu={toggleMenu}>
        Home
      </MobileNavLink>
      <MobileNavLink href="/about" toggleMenu={toggleMenu}>
        About
      </MobileNavLink>
      <MobileNavLink href="/contact" toggleMenu={toggleMenu}>
        Contact
      </MobileNavLink>
      <hr className="my-2 border-gray-200" />
      <MobileNavLink
        toggleMenu={toggleMenu}
        href="tel:0123456789"
        className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Call Us
      </MobileNavLink>
      <MobileNavLink
        toggleMenu={toggleMenu}
        href="/get-started"
        className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Get Started
      </MobileNavLink>
    </div>
  );
}
