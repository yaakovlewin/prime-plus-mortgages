export const ADDRESS_FIELDS = [
  "street",
  "locality",
  "townCity",
  "county",
  "postcode",
];

const fieldProperties = {
  street: {
    label: "Street",
    autoComplete: "street-address",
    classes: "sm:col-span-6",
  },
  locality: {
    label: "Locality",
    autoComplete: "country-name",
    classes: "sm:col-span-3",
  },
  townCity: {
    label: "Town/City",
    autoComplete: "address-level2",
    classes: "sm:col-span-3",
  },
  county: {
    label: "County",
    autoComplete: "address-level1",
    classes: "sm:col-span-3",
  },
  postcode: {
    label: "Postcode",
    autoComplete: "postal-code",
    classes: "sm:col-span-3",
  },
};

export const createAddressConfig = (prefix, isVisible) =>
  ADDRESS_FIELDS.map((field) => ({
    type: "text",
    id: `${prefix}.${field}`,
    defaultValue: "",
    classes: fieldProperties[field].classes,
    label: fieldProperties[field].label,
    autoComplete: fieldProperties[field].autoComplete,
    registerOptions: {
      required: isVisible
        ? `${fieldProperties[field].label} is required`
        : false,
    },
  }));

export default createAddressConfig;
