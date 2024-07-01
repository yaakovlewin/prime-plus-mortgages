import createAddressConfig from "./addressFieldsConfig";

const createCompanyDetailsConfig = (prefix) => [
  {
    type: "text",
    label: "Company Name",
    id: `${prefix}CompanyName`,
    autoComplete: "organization",
    registerOptions: { required: "Company name is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Company Registration Number",
    id: `${prefix}RegistrationNumber`,
    registerOptions: { required: "Registration number is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "date",
    label: "Date of Incorporation",
    id: `${prefix}IncorporationDate`,
    registerOptions: { required: "Incorporation date is required" },
    classes: "sm:col-span-4",
  },
  ...createAddressConfig(`${prefix}CompanyAddress`),
  {
    type: "checkbox",
    label: "Correspondence address different to company address?",
    id: `${prefix}AddCorrespondenceAddress`,
    registerOptions: {},
    classes: "sm:col-span-8",
    watch: true,
  },
  ...createAddressConfig(`${prefix}CorrespondenceAddress`).map((field) => ({
    ...field,
    dependent: `${prefix}AddCorrespondenceAddress`,
    conditional: true,
  })),
];

export default createCompanyDetailsConfig;
