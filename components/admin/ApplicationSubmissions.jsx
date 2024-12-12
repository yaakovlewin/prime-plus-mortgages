"use client";

import { useFetchApplications } from "@/hooks/useFetchApplications";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import StatusHandler from "../UI/applications/StatusHandler";
import DeleteButton from "./DeleteButton";

const ApplicationSubmissions = () => {
  const { applications, loading, error } = useFetchApplications();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const goToApplication = useCallback(
    (id) => {
      router.push(`/admin/applications/${id}`);
    },
    [router],
  );

  const handleDelete = async (id) => {
    const response = await fetch(`/api/application/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete application");
    }

    router.refresh();
  };

  if (loading || error)
    return <StatusHandler loading={loading} error={error} />;

  const filteredApplications = applications.filter((app) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      app.id?.toLowerCase().includes(searchLower) ||
      app.name?.toLowerCase().includes(searchLower) ||
      app.email?.toLowerCase().includes(searchLower) ||
      app.formType?.toLowerCase().includes(searchLower) ||
      app.status?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search applications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border p-2"
        />
      </div>
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
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredApplications.map((app) => (
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
                <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                  <DeleteButton
                    onDelete={() => handleDelete(app.id)}
                    message="Are you sure you want to delete this application? This action cannot be undone."
                    title="Delete Application"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApplicationSubmissions;
