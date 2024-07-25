const ADDRESS_FIELDS = ["street", "locality", "townCity", "county", "postcode"];

const fieldProperties = {
  street: {
    label: "Street",
    autoComplete: "street-address",
    cssClasses: "sm:col-span-8",
  },
  locality: {
    label: "Locality",
    autoComplete: "address-line2",
    cssClasses: "sm:col-span-4",
  },
  townCity: {
    label: "Town/City",
    autoComplete: "address-level2",
    cssClasses: "sm:col-span-4",
  },
  county: {
    label: "County",
    autoComplete: "address-level1",
    cssClasses: "sm:col-span-4",
  },
  postcode: {
    label: "Postcode",
    autoComplete: "postal-code",
    cssClasses: "sm:col-span-4",
  },
};

const generateFieldConfig = (prefix, field, leadLabel) => ({
  type: "text",
  id: `${prefix}.${leadLabel}${field.charAt(0).toUpperCase() + field.slice(1)}`,
  defaultValue: "",
  cssClasses: fieldProperties[field].cssClasses,
  label: `${leadLabel} ${fieldProperties[field].label}`,
  autoComplete: fieldProperties[field].autoComplete,
  registerOptions: { required: `${fieldProperties[field].label} is required` },
});

const createAddressConfig = (prefix, leadLabel = "") => {
  return ADDRESS_FIELDS.map((field) =>
    generateFieldConfig(prefix, field, leadLabel),
  );
};

export default createAddressConfig;
