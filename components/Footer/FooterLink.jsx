import Link from "next/link";

export default function FooterLink({ href, children, className = "" }) {
    return (
        <li className="mb-4">
            <Link href={href} className={`hover:text-gray-100 ${className}`}>
                {children}
            </Link>
        </li>
    );
}
