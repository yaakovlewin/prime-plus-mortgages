"use client";

import StatusHandler from "@/components/UI/applications/StatusHandler";
import { useEffect, useState } from "react";

const ContactDetailsPage = ({ params: { slug } }) => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`/api/contact/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch contact");
        }
        const data = await response.json();
        setContact(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [slug]);

  if (loading || error)
    return <StatusHandler loading={loading} error={error} />;

  return (
    <div className="container mx-auto min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Contact Details</h1>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="grid gap-4">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Contact Information
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <p className="mt-1 text-gray-900">{contact.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <p className="mt-1 text-gray-900">{contact.email}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <p className="mt-1 whitespace-pre-wrap text-gray-900">
              {contact.message}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Submitted At
            </label>
            <p className="mt-1 text-gray-900">
              {contact.timestamp
                ? new Date(contact.timestamp.seconds * 1000).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsPage;
