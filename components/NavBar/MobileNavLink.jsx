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
        className={`block rounded-md px-3 py-2 text-base font-medium ${
          pathname === href
            ? "bg-gray-900 text-white"
            : "text-gray-600 hover:bg-gray-700 hover:text-white"
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
