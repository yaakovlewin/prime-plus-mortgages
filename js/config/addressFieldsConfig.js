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

const generateFieldConfig = (prefix, isVisible, field) => ({
  type: "text",
  id: `${prefix}${field.charAt(0).toUpperCase() + field.slice(1)}`,
  defaultValue: "",
  classes: fieldProperties[field].classes,
  label: fieldProperties[field].label,
  autoComplete: fieldProperties[field].autoComplete,
  registerOptions: {
    required: isVisible ? `${fieldProperties[field].label} is required` : false,
  },
});

const generatePreviousAddressFields = (prefix) =>
  ADDRESS_FIELDS.map((field) => ({
    type: "text",
    id: `${prefix}Previous${field.charAt(0).toUpperCase() + field.slice(1)}`,
    defaultValue: "",
    classes: fieldProperties[field].classes,
    label: `Previous ${fieldProperties[field].label}`,
    autoComplete: fieldProperties[field].autoComplete,
    registerOptions: {
      required: {
        value: (data) => {
          const yearsAtAddress = parseFloat(data[`${prefix}YearsAtAddress`]);
          return !isNaN(yearsAtAddress) && yearsAtAddress < 3;
        },
        message: `${fieldProperties[field].label} is required if less than 3 years at current address`,
      },
    },
    dependent: `${prefix}YearsAtAddress`,
    conditional: (data) => {
      const yearsAtAddress = parseFloat(data);
      return !isNaN(yearsAtAddress) && yearsAtAddress < 3;
    },
  }));

const createAddressConfig = (
  prefix,
  isVisible,
  includePreviousAddress = false,
) => {
  const currentAddressConfig = ADDRESS_FIELDS.map((field) =>
    generateFieldConfig(prefix, isVisible, field),
  );

  if (includePreviousAddress) {
    return [
      ...currentAddressConfig,
      {
        type: "number",
        id: `${prefix}YearsAtAddress`,
        label: "Years at Current Address",
        autoComplete: "",
        defaultValue: "",
        classes: "sm:col-span-3",
        registerOptions: { required: "Years at current address is required" },
        watch: true,
      },
      ...generatePreviousAddressFields(prefix),
    ];
  }

  return currentAddressConfig;
};

export default createAddressConfig;
