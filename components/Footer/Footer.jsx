import Link from "next/link";

import { FaGithub, FaLinkedin, FaBlogger } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterLink from "./FooterLink";

export default function Footer() {
    return (
        <footer
            className="bg-footer-texture bg-fixed bg-contain bg-no-repeat bg-bottom"
            // style={{
            //     backgroundImage: `url('/pp ad 2.jpg')`,
            //     backgroundRepeat: "no-repeat",
            //     backgroundSize: "cover",
            // }}
        >
            <div className=" bg-gradient-to-b from-sky-700 to-transparent bg-opacity-50  text-sky-950 px-6 lg:px-12 py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div>
                        <h2 className="mb-6 text-white text-lg font-semibold">
                            Company
                        </h2>
                        <ul>
                            <FooterLink href="/about">About</FooterLink>
                            <FooterLink href="/team">Team</FooterLink>
                            <FooterLink href="/careers">Careers</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div>
                        <h2 className="mb-6 text-white text-lg font-semibold">
                            Services
                        </h2>
                        <ul>
                            <FooterLink href="/mortgages">Mortgages</FooterLink>
                            <FooterLink href="/remortgages">
                                ReMortgages
                            </FooterLink>
                            <FooterLink href="/insurance">Insurance</FooterLink>
                            <FooterLink href="/bridging">Bridging</FooterLink>
                            <FooterLink href="/buy-to-let">
                                Buy To Let
                            </FooterLink>
                            <FooterLink href="/first-time-buyer">
                                First Time Buyer
                            </FooterLink>
                            <FooterLink href="/tools">
                                Mortgage Calculator
                            </FooterLink>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div>
                        <h2 className="mb-6 text-white text-lg font-semibold">
                            Resources
                        </h2>
                        <ul>
                            <FooterLink href="/blog">Blog</FooterLink>
                            <FooterLink href="/faq">FAQ</FooterLink>
                            <FooterLink href="/reviews">Reviews</FooterLink>
                            <FooterLink href="/terms">
                                Terms & Conditions
                            </FooterLink>
                            <FooterLink href="/privacy">
                                Privacy Policy
                            </FooterLink>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div>
                        <h2 className="mb-6 text-white text-lg font-semibold">
                            Follow Us
                        </h2>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-800 transition-colors duration-300"
                            >
                                <FaGithub className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-cyan-800 transition-colors duration-300 ml-4"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-black transition-colors duration-300 ml-4"
                            >
                                <FaXTwitter className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://yourusername.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-orange-600 transition-colors duration-300 ml-4"
                            >
                                <FaBlogger className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>
                        &copy; {new Date().getFullYear()} Prime Plus Mortgages.
                        All rights reserved.
                    </p>
                </div>
                {/* developed by */}
                <div className="text-center m-auto w-fit mt-8 px-2 rounded ">
                    <p className=" bg-white bg-opacity-70 ">
                        Developed by{" "}
                        <Link
                            href="https://www.linkedin.com/in/yaakov-lewin"
                            className="text-cyan-600 hover:text-cyan-500"
                        >
                            The Edge Thechnolgies
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
