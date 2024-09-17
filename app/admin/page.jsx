"use client";
import { db } from "@/js/services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApplications() {
      try {
        const applicationCollection = collection(db, "applicationForms1");
        const snapShot = await getDocs(applicationCollection);
        const applications = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(applications);
        setLoading(false);
      } catch (error) {
        setError("Error fetching applications: " + error.message);
        setLoading(false);
      }
    }
    fetchApplications();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">
        Admin Dashboard - Applications
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="bg-gray-100 px-4 py-2">ID</th>
              <th className="bg-gray-100 px-4 py-2">Name</th>
              <th className="bg-gray-100 px-4 py-2">Email</th>
              <th className="bg-gray-100 px-4 py-2">Application Type</th>
              <th className="bg-gray-100 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td className="border px-4 py-2">{app.id}</td>
                <td className="border px-4 py-2">{app.name || "N/A"}</td>
                <td className="border px-4 py-2">{app.email || "N/A"}</td>
                <td className="border px-4 py-2">
                  {app.applicationType || "N/A"}
                </td>
                <td className="border px-4 py-2">{app.status || "Pending"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mb-2 text-xl font-bold">Application Forms</h3>
      {applications.map((app) => (
        <div key={app.id} className="mb-4 rounded border p-4">
          <h4 className="mb-2 font-bold">
            {app.name || "Unnamed Application"}
          </h4>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(app, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
