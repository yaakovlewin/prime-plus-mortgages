"use client";

import SearchBar from "@/components/admin/SerachBar";
import StatusHandler from "@/components/UI/applications/StatusHandler";
import { useFetchApplications } from "@/hooks/useFetchApplications";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const AdminPage = () => {
  const { applications, loading, error } = useFetchApplications();
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const goToApplication = useCallback(
    (id) => {
      router.push(`/admin/applications/${id}`);
    },
    [router],
  );

  if (loading || error)
    return <StatusHandler loading={loading} error={error} />;

  // const filteredApplications = applications.filter(
  //   (app) =>
  //     app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     app.applicationType.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     app.status.toLowerCase().includes(searchQuery.toLowerCase()),
  // );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Admin Dashboard - Applications
      </h1>

      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Application Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {applications.map((app) => (
              <tr
                key={app.id}
                onClick={() => goToApplication(app.id)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="px-6 py-4">{app.id}</td>
                <td className="px-6 py-4">{app.name || "N/A"}</td>
                <td className="px-6 py-4">{app.email || "N/A"}</td>
                <td className="px-6 py-4">{app.formType || "N/A"}</td>
                <td className="px-6 py-4">{app.status || "Pending"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
