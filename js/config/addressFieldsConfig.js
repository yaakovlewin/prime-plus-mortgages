const ADDRESS_FIELDS = ["street", "locality", "townCity", "county", "postcode"];

const fieldProperties = {
  street: {
    label: "Street",
    autoComplete: "street-address",
    classes: "sm:col-span-8",
  },
  locality: {
    label: "Locality",
    autoComplete: "address-line2",
    classes: "sm:col-span-4",
  },
  townCity: {
    label: "Town/City",
    autoComplete: "address-level2",
    classes: "sm:col-span-4",
  },
  county: {
    label: "County",
    autoComplete: "address-level1",
    classes: "sm:col-span-4",
  },
  postcode: {
    label: "Postcode",
    autoComplete: "postal-code",
    classes: "sm:col-span-4",
  },
};

const generateFieldConfig = (prefix, field) => ({
  type: "text",
  id: `${prefix}${field.charAt(0).toUpperCase() + field.slice(1)}`,
  defaultValue: "",
  classes: fieldProperties[field].classes,
  label: fieldProperties[field].label,
  autoComplete: fieldProperties[field].autoComplete,
  registerOptions: { required: `${fieldProperties[field].label} is required` },
});

const createAddressConfig = (prefix) => {
  return ADDRESS_FIELDS.map((field) => generateFieldConfig(prefix, field));
};

export default createAddressConfig;
