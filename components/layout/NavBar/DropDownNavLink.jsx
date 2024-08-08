import Link from "next/link";
import React from "react";

export default function DropdownNavLink({
    href,
    children,
    className = "",
    ...props
}) {
    return (
        <button className="border-b-neutral-200 border-b min-w-max w-full">
            <Link
                href={href}
                {...props}
                className={` px-5 py-2 border-b-neutral-200 text-sm text-cyan-900 hover:bg-cyan-100 hover:text-cyan-600 w-full block text-start${className}`}
            >
                {children}
            </Link>
        </button>
    );
}
