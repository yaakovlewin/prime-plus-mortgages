// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import CenteredNavLink from "./CenteredNavLink";
import LogoAndMobileMenu from "./LogoAndMobileMenu";
import DropdownNavLink from "./DropDownNavLink";
import services from "@/js/servicesData";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed z-10 w-full bg-sky-800  ">
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
              className="rounded border-2 border-white px-3 py-2 text-white shadow"
            >
              Contact Us
            </Link>

            <Link
              href="/get-started"
              className="rounded border-2 border-cyan-300 bg-white px-3 py-2 text-cyan-500 shadow hover:bg-cyan-700 hover:text-white"
            >
              Get Started
            </Link>
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
