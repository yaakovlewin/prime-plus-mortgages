import generateAddressFieldsConfig from "./generateAddressFieldsConfig";

const generateCompanyDetailsConfig = (prefix) => [
  {
    type: "text",
    label: "Company Name",
    id: `${prefix}.CompanyName`,
    autoComplete: "organization",
    registerOptions: { required: "Company name is required" },
    cssClasses: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Company Registration Number",
    id: `${prefix}.RegistrationNumber`,
    registerOptions: { required: "Registration number is required" },
    cssClasses: "sm:col-span-4",
  },
  {
    type: "date",
    label: "Date of Incorporation",
    id: `${prefix}.IncorporationDate`,
    registerOptions: { required: "Incorporation date is required" },
    cssClasses: "sm:col-span-4",
  },
  ...generateAddressFieldsConfig(`${prefix}.address`),
  {
    type: "checkbox",
    label: "Correspondence address different to company address?",
    id: `${prefix}.AddCorrespondenceAddress`,
    registerOptions: {},
    cssClasses: "sm:col-span-4",
    watch: true,
  },
  ...generateAddressFieldsConfig(`${prefix}.address`, "Correspondent").map(
    (field) => ({
      ...field,
      dependent: `${prefix}.AddCorrespondenceAddress`,
      conditional: true,
    }),
  ),
];

export default generateCompanyDetailsConfig;
