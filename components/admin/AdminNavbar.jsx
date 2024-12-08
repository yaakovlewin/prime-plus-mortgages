import { logoutUser } from "js/services/authService";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    const { error } = await logoutUser();
    if (!error) {
      router.push("/login");
    }
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link
                href="/admin"
                className="text-xl font-bold text-sky-800 transition-colors hover:text-sky-600"
              >
                Admin Dashboard
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link
                href="/admin/applications"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive("/admin/applications")
                    ? "border-sky-600 text-sky-800"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900"
                }`}
              >
                Applications
              </Link>
              <Link
                href="/admin/contacts"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive("/admin/contacts")
                    ? "border-sky-600 text-sky-800"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900"
                }`}
              >
                Contacts
              </Link>
              <Link
                href="/admin/content"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive("/admin/content")
                    ? "border-sky-600 text-sky-800"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900"
                }`}
              >
                Content
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="inline-flex items-center rounded-lg border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          <Link
            href="/admin/applications"
            className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium transition-colors ${
              isActive("/admin/applications")
                ? "border-sky-600 bg-sky-50 text-sky-800"
                : "border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Applications
          </Link>
          <Link
            href="/admin/contacts"
            className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium transition-colors ${
              isActive("/admin/contacts")
                ? "border-sky-600 bg-sky-50 text-sky-800"
                : "border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Contacts
          </Link>
          <Link
            href="/admin/content"
            className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium transition-colors ${
              isActive("/admin/content")
                ? "border-sky-600 bg-sky-50 text-sky-800"
                : "border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Content
          </Link>
        </div>
      </div>
    </nav>
  );
}
