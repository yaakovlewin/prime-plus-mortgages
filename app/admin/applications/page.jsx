"use client";

import ApplicationSubmissions from "@/components/admin/ApplicationSubmissions";
import ContactSubmissions from "@/components/admin/ContactSubmissions";
import { useState } from "react";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("applications");

  const TabButton = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 font-semibold ${
        activeTab === tab
          ? "border-b-2 border-cyan-600 text-cyan-600"
          : "text-gray-100 hover:text-cyan-600"
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
        <ApplicationSubmissions />
      ) : (
        <ContactSubmissions />
      )}
    </div>
  );
};

export default AdminPage;
