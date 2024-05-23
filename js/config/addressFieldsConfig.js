export const CORRESPONDENT_FIELDS = [
  "street",
  "locality",
  "townCity",
  "county",
  "postcode",
];

const fieldProperties = {
  street: { label: "Street", autoComplete: "street-address", span: 6 },
  locality: { label: "Locality", autoComplete: "country-name", span: 3 },
  townCity: { label: "Town/City", autoComplete: "address-level2", span: 3 },
  county: { label: "County", autoComplete: "address-level1", span: 3 },
  postcode: { label: "Postcode", autoComplete: "postal-code", span: 3 },
};

export const createAddressConfig = (prefix, isVisible) =>
  CORRESPONDENT_FIELDS.map((field) => ({
    type: "text",
    id: `${prefix}.${field}`,
    defaultValue: "",
    span: fieldProperties[field].span.toString(),
    label: fieldProperties[field].label,
    autoComplete: fieldProperties[field].autoComplete,
    registerOptions: {
      required: isVisible
        ? `${fieldProperties[field].label} is required`
        : false,
    },
  }));

export default createAddressConfig;
