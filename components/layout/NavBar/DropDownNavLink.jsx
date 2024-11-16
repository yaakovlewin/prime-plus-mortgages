import Link from "next/link";

export default function DropdownNavLink({
  href,
  children,
  className = "",
  ...props
}) {
  return (
    <button className="w-full min-w-max border-b border-b-neutral-200">
      <Link
        href={href}
        {...props}
        className={` block w-full border-b-neutral-200 px-5 py-2 text-sm text-cyan-900 hover:bg-cyan-100 hover:text-cyan-600 text-start${className}`}
      >
        {children}
      </Link>
    </button>
  );
}
