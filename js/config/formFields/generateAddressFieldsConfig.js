const ADDRESS_FIELD_TYPES = [
  "addressLine1",
  "addressLine2",
  "locality",
  "townCity",
  "county",
  "postcode",
];

const addressFieldProperties = {
  addressLine1: {
    label: "Address Line 1",
    autoComplete: "address-line1",
    cssClasses: "sm:col-span-8",
    required: true,
  },
  addressLine2: {
    label: "Address Line 2 (optional)",
    autoComplete: "address-line2",
    cssClasses: "sm:col-span-8",
    required: false,
  },
  locality: {
    label: "Locality",
    autoComplete: "address-line2",
    cssClasses: "sm:col-span-4",
    required: false,
  },
  townCity: {
    label: "Town/City",
    autoComplete: "address-level2",
    cssClasses: "sm:col-span-4",
    required: true,
  },
  county: {
    label: "County",
    autoComplete: "address-level1",
    cssClasses: "sm:col-span-4",
    required: false,
  },
  postcode: {
    label: "Postcode",
    autoComplete: "postal-code",
    cssClasses: "sm:col-span-4",
    required: true,
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
    required: addressFieldProperties[field].required
      ? `${addressFieldProperties[field].label} is required`
      : false,
  },
});

const generateAddressFieldsConfig = (prefix, leadLabel = "") => {
  return ADDRESS_FIELD_TYPES.map((field) =>
    createAddressFieldConfig(prefix, field, leadLabel),
  );
};

export default generateAddressFieldsConfig;
