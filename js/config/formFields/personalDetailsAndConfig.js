const createPersonalAndFinancialDetailsConfig = (prefix) => [
  {
    type: "select",
    label: "Title",
    id: `${prefix}.Title`,
    autoComplete: "honorific-prefix",
    registerOptions: { required: "Title is required" },
    classes: "sm:col-span-4",
    options: ["Mr", "Mrs", "Miss", "Ms", "Dr"],
  },
  {
    type: "select",
    label: "Gender",
    id: `${prefix}.Gender`,
    autoComplete: "sex",
    registerOptions: { required: "Gender is required" },
    classes: "sm:col-span-4",
    options: ["Male", "Female", "Other"],
  },
  {
    type: "text",
    label: "First Name",
    id: `${prefix}.FirstName`,
    autoComplete: "given-name",
    placeholder: "First Name",
    registerOptions: { required: "First name is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Last Name",
    id: `${prefix}.LastName`,
    autoComplete: "family-name",
    placeholder: "Last Name",
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
    options: ["Single", "Married", "Divorced", "Widowed"],
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
    placeholder: "British",
    registerOptions: { required: "Nationality is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Place of Birth",
    id: `${prefix}.PlaceOfBirth`,
    autoComplete: "",
    placeholder: "London",
    registerOptions: { required: "Place of birth is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "date",
    label: "Date Moved In",
    id: `${prefix}.DateMovedIn`,
    autoComplete: "",
    registerOptions: { required: "Date moved in is required" },
    classes: "sm:col-span-8",
  },
  {
    type: "text",
    label: "Previous Address",
    id: `${prefix}.PreviousAddress`,
    autoComplete: "",
    registerOptions: {
      required:
        "Previous address is required if less than 3 years at current address",
    },
    classes: "sm:col-span-4",
  },
  {
    type: "date",
    label: "Date Moved In (Previous Address)",
    id: `${prefix}.PreviousDateMovedIn`,
    autoComplete: "",
    registerOptions: {
      required:
        "Date moved in is required if less than 3 years at current address",
    },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Homeowner: Value of Property, Lender & Interest Rate",
    id: `${prefix}.HomeownerDetails`,
    autoComplete: "",
    registerOptions: { required: "Homeowner details are required" },
    classes: "sm:col-span-8",
  },
  {
    type: "text",
    label: "Tenant: Rent Payment, Name & Address of Landlord",
    id: `${prefix}.TenantDetails`,
    autoComplete: "",
    registerOptions: { required: "Tenant details are required" },
    classes: "sm:col-span-8",
  },
  {
    type: "tel",
    label: "Contact Number",
    id: `${prefix}.ContactNumber`,
    autoComplete: "tel",
    registerOptions: { required: "Contact number is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "email",
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
  {
    type: "text",
    label: "Director/Shareholder",
    id: `${prefix}.DirectorShareholder`,
    autoComplete: "",
    registerOptions: { required: "Director/Shareholder status is required" },
    classes: "sm:col-span-4",
  },
];

export default createPersonalAndFinancialDetailsConfig;
