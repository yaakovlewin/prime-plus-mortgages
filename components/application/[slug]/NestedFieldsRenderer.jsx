import { ChevronDown } from "lucide-react";
import RenderField from "./FieldRenderer";

const NestedFieldRenderer = ({ data, parentKey = "" }) => {
  return Object.entries(data).map(([key, value]) => {
    const currentKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      return (
        <div key={currentKey} className="mb-4 rounded-lg border p-3 ">
          <div className="mb-2 flex items-center">
            <ChevronDown className="h-6 w-6 text-gray-500" />
            <h4 className="ml-3 font-semibold text-gray-700">{key}</h4>
          </div>
          <NestedFieldRenderer data={value} parentKey={currentKey} />
        </div>
      );
    }
    return (
      <RenderField
        key={currentKey}
        label={key}
        value={value}
        fieldId={currentKey}
      />
    );
  });
};

export default NestedFieldRenderer;
