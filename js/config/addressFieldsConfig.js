export const CORRESPONDENT_FIELDS = ["street", "locality", "townCity", "county", "postcode"];

const fieldProperties = {
    street: { label: "Street", span: 6 },
    locality: { label: "Locality", span: 3 },
    townCity: { label: "Town/City", span: 3 },
    county: { label: "County", span: 3 },
    postcode: { label: "Postcode", span: 3 },
};

export const createAddressConfig = (prefix, isVisible) =>
    CORRESPONDENT_FIELDS.map(field => ({
        type: "text",
        id: `${prefix}.${field}`,
        defaultValue: "",
        span: fieldProperties[field].span,
        label: fieldProperties[field].label,
        registerOptions: { required: isVisible ? `${fieldProperties[field].label} is required` : false },
    }));

export default createAddressConfig;

