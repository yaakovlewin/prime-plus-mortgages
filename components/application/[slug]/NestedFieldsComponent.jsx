import { ChevronRight } from "lucide-react";
import FieldComponent from "./FieldComponent";

const NestedFieldsComponent = ({
  data,
  prefix = "",
  copiedField,
  copyToClipboard,
}) => {
  const camelToTitle = (camelCase) => {
    if (typeof camelCase !== "string") return camelCase;
    return camelCase
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between lowercase and uppercase letters
      .replace(/([A-Z])/g, " $1") // Add space before each uppercase letter
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter of the string
      .replace(/\b\w/g, (str) => str.toUpperCase()) // Capitalize the first letter of each word
      .replace(/Id/g, "ID"); // Replace 'Id' with 'ID'
  };

  const renderNestedFields = (data, prefix) => {
    return Object.entries(data).map(([key, value]) => {
      const fieldId = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "object" && value !== null) {
        return (
          <div key={fieldId} className="mb-2 ml-4">
            <h4 className="font-semibold">{camelToTitle(key)}</h4>
            {renderNestedFields(value, fieldId)}
          </div>
        );
      }
      return (
        <FieldComponent
          key={fieldId}
          label={camelToTitle(key)}
          value={value}
          icon={<ChevronRight />}
          field={fieldId}
          copiedField={copiedField}
          copyToClipboard={copyToClipboard}
        />
      );
    });
  };

  return <>{renderNestedFields(data, prefix)}</>;
};

export default NestedFieldsComponent;
