"use client";

import useAuth from "hooks/useAuth";
import { logoutUser } from "js/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const { user } = useAuth(true);
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await logoutUser();
    if (!error) {
      router.push("/login");
    }
  };

  const adminSections = [
    {
      title: "Applications",
      description: "View and manage mortgage applications",
      href: "/admin/applications",
      icon: (
        <svg
          className="h-8 w-8 text-sky-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Contacts",
      description: "Manage contact form submissions",
      href: "/admin/contacts",
      icon: (
        <svg
          className="h-8 w-8 text-sky-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Content",
      description: "Edit website content and pages",
      href: "/admin/content",
      icon: (
        <svg
          className="h-8 w-8 text-sky-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h1 className="text-3xl font-bold text-sky-800">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome back, <span className="font-medium">{user?.email}</span>
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adminSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group block rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg hover:ring-2 hover:ring-sky-500/50"
            >
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-sky-50 p-3 transition-colors group-hover:bg-sky-100">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-sky-800 group-hover:text-sky-600">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{section.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-6 text-xl font-semibold text-sky-800">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/admin/applications"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              View Latest Applications
            </Link>
            <Link
              href="/admin/contacts"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Check Recent Contacts
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
