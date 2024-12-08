"use client";

import AdminNavbar from "@/components/admin/AdminNavbar";
import { FullPageSpinner } from "@/components/UI/LoadingSpinner";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const { user, loading, isAdmin } = useAuth(true);
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push("/login");
    }
  }, [loading, user, isAdmin, router]);

  if (loading) {
    return <FullPageSpinner />;
  }

  if (!user || !isAdmin) {
    return null; // Router will handle redirect
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
