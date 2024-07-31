const ADDRESS_FIELD_TYPES = [
  "street",
  "locality",
  "townCity",
  "county",
  "postcode",
];

const addressFieldProperties = {
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

const createAddressFieldConfig = (prefix, field, leadLabel) => ({
  type: "text",
  id: `${prefix}.${leadLabel}${field.charAt(0).toUpperCase() + field.slice(1)}`,
  defaultValue: "",
  cssClasses: addressFieldProperties[field].cssClasses,
  label: `${leadLabel} ${addressFieldProperties[field].label}`,
  autoComplete: addressFieldProperties[field].autoComplete,
  registerOptions: {
    required: `${addressFieldProperties[field].label} is required`,
  },
});

const generateAddressFieldsConfig = (prefix, leadLabel = "") => {
  return ADDRESS_FIELD_TYPES.map((field) =>
    createAddressFieldConfig(prefix, field, leadLabel),
  );
};

export default generateAddressFieldsConfig;
