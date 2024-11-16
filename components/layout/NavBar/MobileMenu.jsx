"use client";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import MobileNavLink from "./MobileNavLink";

export default function MobileMenu({
  menuOpen,
  toggleMenu,
  services,
  isServicesOpen,
  setServicesOpen,
}) {
  // Add scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={toggleMenu}
      />

      {/* Menu Content */}
      <div className="relative h-full w-[85%] max-w-md bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sky-700/50 p-4">
          <Link
            href="/"
            className="relative"
            onClick={() => {
              toggleMenu();
              setServicesOpen(false);
            }}
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
            className="transform rounded-lg p-2.5 text-cyan-50 ring-2 ring-sky-400/30 transition-colors duration-150 hover:bg-sky-700/50 active:scale-95"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="max-h-[calc(100vh-80px)] space-y-4 overflow-y-auto px-4 py-6">
          {/* Primary Nav Links */}
          <NavSection>
            <MobileNavLink
              href="/"
              onClick={() => {
                toggleMenu();
                setServicesOpen(false);
              }}
            >
              Home
            </MobileNavLink>

            {/* Services Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setServicesOpen(!isServicesOpen)}
                className="flex w-full transform items-center justify-between rounded-lg bg-gradient-to-r 
                           from-sky-700/50 to-sky-800/50 p-4 text-cyan-50 shadow-inner
                           ring-1 ring-sky-400/20 transition-all duration-200 hover:from-sky-600/50
                           hover:to-sky-700/50 active:scale-[0.99]"
              >
                <span className="text-lg font-medium">Services</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Services Submenu */}
              <div
                className={`space-y-2 overflow-hidden pl-4 transition-all duration-300 ${
                  isServicesOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-2 border-l-2 border-sky-600/30 py-2 pl-4">
                  {services.map((service) => (
                    <MobileNavLink
                      key={service.id}
                      href={`/services/${service.url}`}
                      onClick={() => {
                        toggleMenu();
                        setServicesOpen(false);
                      }}
                      variant="secondary"
                    >
                      {service.title}
                    </MobileNavLink>
                  ))}
                </div>
              </div>
            </div>

            <MobileNavLink
              href="/about"
              onClick={() => {
                toggleMenu();
                setServicesOpen(false);
              }}
            >
              About
            </MobileNavLink>

            <MobileNavLink
              href="/contact"
              onClick={() => {
                toggleMenu();
                setServicesOpen(false);
              }}
            >
              Contact
            </MobileNavLink>
          </NavSection>
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-sky-700/50 bg-sky-900/90 p-4 backdrop-blur-sm">
          <Link
            href="/contact"
            onClick={() => {
              toggleMenu();
              setServicesOpen(false);
            }}
            className="block w-full transform rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-500
                     px-6 py-3.5 text-center font-medium text-white
                     shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-cyan-500
                     hover:to-cyan-400 hover:shadow-cyan-500/25
                     active:translate-y-0 active:shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helper Components
const NavSection = ({ children }) => (
  <div className="space-y-3">{children}</div>
);
