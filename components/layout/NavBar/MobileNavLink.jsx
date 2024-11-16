import Link from "next/link";

export default function MobileNavLink({
  href,
  children,
  onClick,
  variant = "primary",
}) {
  const baseStyles =
    "block w-full p-3.5 rounded-lg transition-all duration-200 font-medium";
  const variants = {
    primary: `${baseStyles} text-cyan-50 bg-gradient-to-r from-sky-700/50 to-sky-800/50
              hover:from-sky-600/50 hover:to-sky-700/50 shadow-inner
              ring-1 ring-sky-400/20 active:scale-[0.99] transform`,
    secondary: `${baseStyles} text-cyan-100 hover:bg-sky-700/50 text-[0.95rem]
                active:scale-[0.99] transform`,
  };

  return (
    <Link href={href} className={variants[variant]} onClick={onClick}>
      {children}
    </Link>
  );
}
