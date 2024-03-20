import Link from "next/link";

export default function FooterLink({ href, children, className = "" }) {
  return (
    <li className="mb-4 text-shadow-white-lg ">
      <Link
        href={href}
        className={` rounded  bg-white bg-opacity-40 px-2 hover:text-gray-100 ${className}`}
      >
        {children}
      </Link>
    </li>
  );
}
