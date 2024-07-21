import createAddressConfig from "./addressFieldsConfig";

const TITLE_OPTIONS = ["Mr", "Mrs", "Miss", "Ms", "Dr"];
const GENDER_OPTIONS = ["Male", "Female", "Other"];
const MARITAL_STATUS_OPTIONS = ["Single", "Married", "Divorced", "Widowed"];

const createPersonalDetailsConfig = (prefix) => [
  {
    type: "select",
    label: "Title",
    id: `${prefix}.Title`,
    autoComplete: "honorific-prefix",
    registerOptions: { required: "Title is required" },
    classes: "sm:col-span-4",
    options: TITLE_OPTIONS,
  },
  {
    type: "select",
    label: "Gender",
    id: `${prefix}.Gender`,
    autoComplete: "sex",
    registerOptions: { required: "Gender is required" },
    classes: "sm:col-span-4",
    options: GENDER_OPTIONS,
  },
  {
    type: "text",
    label: "First Name",
    id: `${prefix}.FirstName`,
    autoComplete: "given-name",
    registerOptions: { required: "First name is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Last Name",
    id: `${prefix}.LastName`,
    autoComplete: "family-name",
    registerOptions: { required: "Last name is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "select",
    label: "Marital Status",
    id: `${prefix}.MaritalStatus`,
    autoComplete: "",
    registerOptions: { required: "Marital status is required" },
    classes: "sm:col-span-4",
    options: MARITAL_STATUS_OPTIONS,
  },
  {
    type: "date",
    label: "Date of Birth",
    id: `${prefix}.DateOfBirth`,
    autoComplete: "bday",
    registerOptions: { required: "Date of birth is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Nationality",
    id: `${prefix}.Nationality`,
    autoComplete: "nationality",
    registerOptions: { required: "Nationality is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Place of Birth",
    id: `${prefix}.PlaceOfBirth`,
    autoComplete: "",
    registerOptions: { required: "Place of birth is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Contact Number",
    id: `${prefix}.ContactNumber`,
    autoComplete: "tel",
    registerOptions: { required: "Contact number is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Email Address",
    id: `${prefix}.Email`,
    autoComplete: "email",
    registerOptions: { required: "Email address is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "National Insurance Number",
    id: `${prefix}.NationalInsuranceNumber`,
    autoComplete: "",
    registerOptions: { required: "National insurance number is required" },
    classes: "sm:col-span-4",
  },
  ...createAddressConfig(`${prefix}.CurrentAddress`), // Current address fields
  {
    type: "number",
    id: `${prefix}.YearsAtAddress`,
    label: "Years at Current Address",
    autoComplete: "",
    defaultValue: "",
    classes: "sm:col-span-3",
    registerOptions: { required: "Years at current address is required" },
    watch: true,
  },
  ...createAddressConfig(`${prefix}.PreviousAddress`).map((field) => ({
    ...field,
    dependent: `${prefix}.YearsAtAddress`,
    conditional: (data) => {
      const yearsAtAddress = parseFloat(data);
      return !isNaN(yearsAtAddress) && yearsAtAddress < 3;
    },
  })),
];

export default createPersonalDetailsConfig;
