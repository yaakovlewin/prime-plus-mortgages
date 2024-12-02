"use client";

import ContactSubmissions from "@/components/admin/ContactSubmissions";
import SearchBar from "@/components/admin/SerachBar";
import StatusHandler from "@/components/UI/applications/StatusHandler";
import { useFetchApplications } from "@/hooks/useFetchApplications";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const AdminPage = () => {
  const { applications, loading, error } = useFetchApplications();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("applications");

  const router = useRouter();

  const goToApplication = useCallback(
    (id) => {
      router.push(`/admin/applications/${id}`);
    },
    [router],
  );

  if (loading || error)
    return <StatusHandler loading={loading} error={error} />;

  const TabButton = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 font-semibold ${
        activeTab === tab
          ? "border-b-2 border-cyan-600 text-cyan-600"
          : "text-gray-600 hover:text-cyan-600"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Admin Dashboard
      </h1>

      <div className="mb-6 flex justify-center space-x-4 border-b">
        <TabButton tab="applications" label="Applications" />
        <TabButton tab="contacts" label="Contact Submissions" />
      </div>

      {activeTab === "applications" ? (
        <>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
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
        </>
      ) : (
        <ContactSubmissions />
      )}
    </div>
  );
};

export default AdminPage;
