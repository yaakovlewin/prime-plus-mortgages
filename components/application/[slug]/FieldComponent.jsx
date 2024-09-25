import { Clipboard } from "lucide-react";

const FieldComponent = ({
  label,
  value,
  icon,
  field,
  copiedField,
  copyToClipboard,
}) => {
  const isDateString = (value) => {
    return (
      typeof value === "string" &&
      !isNaN(Date.parse(value)) &&
      /^\d{4}-\d{2}-\d{2}([T\s]\d{2}:\d{2}:\d{2}(.\d+)?(Z|((\+|-)\d{2}:\d{2}))?)?$/.test(
        value,
      )
    );
  };

  return (
    <div className="mb-2 flex items-center space-x-2" key={field}>
      {icon}
      <span className="font-semibold">{label}:</span>
      <span>
        {isDateString(value) ? new Date(value).toLocaleDateString() : value}
      </span>
      {copyToClipboard && (
        <button
          onClick={() =>
            copyToClipboard(
              isDateString(value)
                ? new Date(value).toLocaleDateString()
                : value,
              field,
            )
          }
          className="ml-2 rounded p-1 hover:bg-gray-200"
        >
          <Clipboard size={16} />
        </button>
      )}
      {copiedField === field && (
        <span className="text-sm text-green-500">Copied!</span>
      )}
    </div>
  );
};

export default FieldComponent;
