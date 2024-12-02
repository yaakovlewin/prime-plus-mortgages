"use client";

import StatusHandler from "@/components/UI/applications/StatusHandler";
import ConfirmationModal from "@/components/UI/ConfirmationModal";
import { useFetchContacts } from "@/hooks/useFetchContacts";
import { useState } from "react";

const ContactSubmissions = () => {
  const { contacts, loading, error, mutate } = useFetchContacts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  if (loading || error)
    return <StatusHandler loading={loading} error={error} />;

  const handleDelete = async () => {
    if (!selectedContact) return;

    setDeleteLoading(true);
    try {
      const response = await fetch(`/api/contact/${selectedContact.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }

      // Refresh the contacts list
      mutate();
    } catch (error) {
      console.error("Error deleting contact:", error);
    } finally {
      setDeleteLoading(false);
      setIsModalOpen(false);
      setSelectedContact(null);
    }
  };

  const openDeleteModal = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-100">
                <td className="px-6 py-4">{contact.name}</td>
                <td className="px-6 py-4">{contact.email}</td>
                <td className="px-6 py-4">
                  <div className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                    {contact.message}
                  </div>
                </td>
                <td className="px-6 py-4">
                  {contact.timestamp
                    ? new Date(contact.timestamp).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openDeleteModal(contact)}
                    disabled={deleteLoading}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedContact(null);
        }}
        onConfirm={handleDelete}
        message={`Are you sure you want to delete the contact submission from ${selectedContact?.name}?`}
      />
    </>
  );
};

export default ContactSubmissions;
