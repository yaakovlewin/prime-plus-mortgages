import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MobileNavLink({
  href,
  toggleMenu,
  children,
  key = 0,
  setServicesOpen = () => {},
}) {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        key={key}
        className={`block rounded-md border-b-neutral-200 px-3 py-2 text-base font-medium text-cyan-900 ${
          pathname === href
            ? "bg-sky-900 text-white"
            : " hover:bg-cyan-100 hover:text-cyan-600"
        }`}
        aria-current={pathname === href ? "page" : undefined}
        onClick={() => {
          toggleMenu();
          setServicesOpen(false);
        }}
      >
        {children}
      </Link>
    </>
  );
}
