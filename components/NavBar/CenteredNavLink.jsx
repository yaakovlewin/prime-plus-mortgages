import Link from "next/link";
import React from "react";

export default function CenteredNavLink({
    href,
    children,
    className = "",
    ...props
}) {
    return (
        <div className="border-b-neutral-200 border-b">
            <Link
                href={href}
                {...props}
                className={`block px-5 py-2 min-w-fit border-b-neutral-200 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 ${className}`}
            >
                {children}
            </Link>
        </div>
    );
}
