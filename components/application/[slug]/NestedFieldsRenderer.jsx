import RenderField from "./FieldRenderer";

const RenderNestedFields = (data, prefix = "") => {
  return Object.entries(data).map(([key, value]) => {
    const fieldId = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      return (
        <div key={fieldId} className="mb-2 ml-4">
          <h4 className="mb-1 mt-2 font-semibold text-gray-700">{key}</h4>
          {RenderNestedFields(value, fieldId)}
        </div>
      );
    }
    return (
      <RenderField key={fieldId} label={key} value={value} field={fieldId} />
    );
  });
};

export default RenderNestedFields;
