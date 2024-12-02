"use client";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  title = "Confirm Action",
  confirmText = "Confirm",
  isLoading = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      ></div>
      <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mb-6 text-sm text-gray-500">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onConfirm();
            }}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:bg-red-400"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
