import Link from "next/link";

export default function FooterLink({ href, children, className = "" }) {
    return (
        <li className="mb-4 text-shadow-white-lg ">
            <Link
                href={href}
                className={` hover:text-gray-100  bg-white bg-opacity-30 rounded px-2 ${className}`}
            >
                {children}
            </Link>
        </li>
    );
}
