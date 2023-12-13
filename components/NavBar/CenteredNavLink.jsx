import Link from "next/link";
export default function CenteredNavLink({
    href,
    children,
    className = "",
    ...props
}) {
    return (
        <button className="h-full">
            <Link
                href={href}
                {...props}
                className={`text-cyan-300 hover:text-cyan-100 font-medium ${className}`}
            >
                {children}
            </Link>
        </button>
    );
}
