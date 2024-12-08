"use client";
import services from "@/js/servicesData";
import Link from "next/link";
import { useState } from "react";
import CenteredNavLink from "./CenteredNavLink";
import DropdownNavLink from "./DropDownNavLink";
import LogoAndMobileMenu from "./LogoAndMobileMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed z-30 w-full bg-sky-800 sm:h-24 ">
      <div className="mx-auto max-w-6xl px-4">
        <div className="items-stretch justify-between md:flex">
          <LogoAndMobileMenu toggleMenu={toggleMenu} />

          {/* Centered Navigation Links */}
          <div className="hidden items-center justify-center gap-14 font-exo2 text-2xl md:flex lg:gap-20">
            <CenteredNavLink href="/">Home</CenteredNavLink>
            <div
              className="group relative h-full"
              onMouseOver={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <CenteredNavLink href="/services">Services</CenteredNavLink>
              <div
                className={`top-22 absolute -left-4 z-20 rounded-md bg-white  shadow-lg ${
                  isServicesOpen
                    ? "animate-rollDown  group-hover:block"
                    : "hidden"
                }`}
                onMouseOver={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="p-4">
                  {services.map((service) => (
                    <DropdownNavLink
                      href={`/services/${service.url}`}
                      key={service.id}
                    >
                      {service.title}
                    </DropdownNavLink>
                  ))}
                </div>
              </div>
            </div>
            <CenteredNavLink href="/about">About</CenteredNavLink>
          </div>
          <div className="hidden items-center justify-end gap-6 md:flex">
            <Link
              href="/contact"
              className="rounded border-2 border-sky-800 bg-white px-3 py-2 text-cyan-500 shadow ring-2 ring-cyan-300 hover:bg-cyan-700 hover:text-white"
            >
              Contact Us
            </Link>

            {/* <Link
              href="/application"
              className="rounded border-2 border-sky-800 bg-white px-3 py-2 text-cyan-500 shadow ring-2 ring-cyan-300 hover:bg-cyan-700 hover:text-white"
            >
              Apply Now
            </Link> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        services={services}
        isServicesOpen={isServicesOpen}
        setServicesOpen={setServicesOpen}
      />
    </nav>
  );
};

export default Navbar;
