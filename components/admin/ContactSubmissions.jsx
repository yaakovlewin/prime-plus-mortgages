"use client";

import { useRouter } from "next/navigation";
import { useFetchContacts } from "../../hooks/useFetchContacts";
import StatusHandler from "../UI/applications/StatusHandler";
import DeleteButton from "./DeleteButton";

const ContactSubmissions = () => {
  const { contacts, loading, error, mutate } = useFetchContacts();
  const router = useRouter();

  if (loading || error)
    return <StatusHandler loading={loading} error={error} />;

  const handleDelete = async (contact) => {
    const response = await fetch(`/api/contact/${contact.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete contact");
    }

    // Refresh the contacts list
    mutate();
  };

  const goToContact = (id) => {
    router.push(`/admin/contacts/${id}`);
  };

  return (
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
            <tr
              key={contact.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => goToContact(contact.id)}
            >
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
              <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                <DeleteButton
                  onDelete={() => handleDelete(contact)}
                  message={`Are you sure you want to delete the contact submission from ${contact.name}?`}
                  title="Delete Contact"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactSubmissions;
