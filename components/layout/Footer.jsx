import Link from "next/link";

import servicesData from "@/js/servicesData";
import Image from "next/image";
import FooterLink from "./FooterLink";

export default function Footer() {
  // Split services into two columns
  const midPoint = Math.ceil(servicesData.length / 2);
  const servicesColumn1 = servicesData.slice(0, midPoint);
  const servicesColumn2 = servicesData.slice(midPoint);

  return (
    <footer className="bg-footer-texture bg-contain bg-fixed bg-bottom bg-no-repeat">
      <div className=" bg-opacity-50 bg-gradient-to-b from-sky-700 to-transparent  px-6 py-12 text-sky-950 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-5">
          {/* Column 1 */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white">Company</h2>
            <ul>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/about/#team">Team</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          {/* Column 2 - Services (First Half) */}
          <div className="col-span-2">
            <h2 className="mb-6 text-center text-lg font-semibold text-white">
              Services
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Left Services Column */}
              <ul>
                {servicesColumn1.map((service) => (
                  <FooterLink
                    key={service.id}
                    href={`/services/${service.url}`}
                  >
                    {service.title}
                  </FooterLink>
                ))}
              </ul>
              {/* Right Services Column */}
              <ul>
                {servicesColumn2.map((service) => (
                  <FooterLink
                    key={service.id}
                    href={`/services/${service.url}`}
                  >
                    {service.title}
                  </FooterLink>
                ))}
              </ul>
            </div>
          </div>
          {/* Column 4 */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white">Resources</h2>
            <ul>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>
          {/* Column 5 */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white">
              Associated with
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="https://www.fca.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-white px-2 text-white transition-colors duration-300 hover:text-gray-800"
              >
                <Image
                  src="/images/logos/fca-logo.png"
                  alt="FCA Logo"
                  width={120}
                  height={120}
                />
              </Link>
              <Link
                href="https://www.fiba.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-white px-2 text-white transition-colors duration-300 hover:text-cyan-800"
              >
                <Image
                  src="/images/logos/fiba-logo.png"
                  alt="FIBA Logo"
                  width={150}
                  height={150}
                />
              </Link>
              <Link
                href="https://www.finova.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-white px-2 text-white transition-colors duration-300 hover:text-cyan-800"
              >
                <Image
                  src="/images/logos/finova-logo.svg"
                  alt="Finova Logo"
                  width={150}
                  height={150}
                />
              </Link>
              <Link
                href="https://www.paradigm.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-white px-2 text-white transition-colors duration-300 hover:text-cyan-800"
              >
                <Image
                  src="/images/logos/paradigm-logo.svg"
                  alt="Paradigm Logo"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 w-fit text-center">
          <p className=" rounded bg-white bg-opacity-70 px-2 text-shadow-white-border">
            &copy; {new Date().getFullYear()} Prime Plus Mortgages. All rights
            reserved.
          </p>
        </div>
        {/* developed by */}
        <div className="m-auto mt-8 w-fit rounded px-2 text-center ">
          <p className=" rounded bg-white bg-opacity-70 px-2 text-shadow-white-border">
            Developed by{" "}
            <Link
              href="https://www.yaakovlewin.co.uk"
              className="text-cyan-700 hover:text-cyan-800 "
            >
              The Edge Thechnolgies
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
