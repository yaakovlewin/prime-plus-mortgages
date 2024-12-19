import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  onClick,
  "aria-label": ariaLabel,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium";

  const variants = {
    primary: `${baseStyles} bg-gradient-to-r from-cyan-600 to-cyan-500 
              hover:from-cyan-500 hover:to-cyan-400 text-white
              shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5
              active:translate-y-0 active:shadow-md`,
    secondary: `${baseStyles} text-cyan-50 bg-gradient-to-r from-sky-700/50 to-sky-800/50
                hover:from-sky-600/50 hover:to-sky-700/50 shadow-inner
                ring-1 ring-sky-400/20 active:scale-[0.99]`,
    outline: `${baseStyles} border-2 border-sky-800 bg-white text-cyan-500 
              shadow ring-2 ring-cyan-300 hover:bg-cyan-700 hover:text-white`,
  };

  return (
    <Link
      href={href}
      className={cn(variants[variant], className)}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Link>
  );
}
