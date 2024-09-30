import { Check, ChevronRight, Clipboard } from "lucide-react";
import { useState } from "react";

const camelToTitle = (camelCase) => {
  if (typeof camelCase !== "string") return camelCase;
  return camelCase
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between lowercase and uppercase letters
    .replace(/([A-Z])/g, " $1") // Add space before each uppercase letter
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter of the string
    .replace(/\b\w/g, (str) => str.toUpperCase()) // Capitalize the first letter of each word
    .replace(/Id/g, "ID"); // Replace 'Id' with 'ID'
};

const RenderField = ({ label, value, field }) => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <div
      className="mb-2 flex items-center space-x-2 rounded p-2 transition-colors duration-150 hover:bg-gray-50"
      key={field}
    >
      <ChevronRight className="text-cyan-500" />
      <span className="font-semibold text-gray-700">
        {camelToTitle(label)}:
      </span>
      <span className="text-gray-600">{value}</span>
      <button
        onClick={() => copyToClipboard(value, field)}
        className="ml-auto rounded p-1 transition-colors duration-150 hover:bg-gray-200"
        title="Copy to clipboard"
      >
        {copiedField === field ? (
          <Check size={16} className="text-green-500" />
        ) : (
          <Clipboard size={16} />
        )}
      </button>
    </div>
  );
};

export default RenderField;
