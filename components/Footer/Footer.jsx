import Link from "next/link";

import { FaGithub, FaLinkedin, FaBlogger } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterLink from "./FooterLink";
import servicesData from "@/js/servicesData";

export default function Footer() {
  return (
    <footer className="bg-footer-texture bg-contain bg-fixed bg-bottom bg-no-repeat">
      <div className=" bg-opacity-50 bg-gradient-to-b from-sky-700 to-transparent  px-6 py-12 text-sky-950 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white">Company</h2>
            <ul>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/about/#team">Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white">Services</h2>
            <ul>
              {servicesData.map((service) => (
                <FooterLink key={service.id} href={`/services/${service.url}`}>
                  {service.title}
                </FooterLink>
              ))}
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white">Resources</h2>
            <ul>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/#faq">FAQ</FooterLink>
              <FooterLink href="/#reviews">Reviews</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white">Follow Us</h2>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-gray-800"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-white transition-colors duration-300 hover:text-cyan-800"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-white transition-colors duration-300 hover:text-black"
              >
                <FaXTwitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://yourusername.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-white transition-colors duration-300 hover:text-orange-600"
              >
                <FaBlogger className="h-6 w-6" />
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
