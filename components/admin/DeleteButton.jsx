"use client";

import { useState } from "react";
import ConfirmationModal from "../UI/ConfirmationModal";

const DeleteButton = ({ onDelete, message, title = "Delete Item" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await onDelete();
    } catch (error) {
      console.error("Error during deletion:", error);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
        }}
        className="text-red-600 hover:text-red-900"
        disabled={loading}
      >
        Delete
      </button>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        message={message}
        title={title}
        confirmText="Delete"
        isLoading={loading}
      />
    </>
  );
};

export default DeleteButton;
