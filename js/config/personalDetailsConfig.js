const createPersonalAndFinancialDetailsConfig = (prefix) => [
  {
    type: "select",
    label: "Title",
    id: `${prefix}.title`,
    autoComplete: "honorific-prefix",
    registerOptions: { required: "Title is required" },
    classes: "sm:col-span-4",
    options: ["Mr", "Mrs", "Miss", "Ms", "Dr"],
  },
  {
    type: "select",
    label: "Gender",
    id: `${prefix}.gender`,
    autoComplete: "sex",
    registerOptions: { required: "Gender is required" },
    classes: "sm:col-span-4",
    options: ["Male", "Female", "Other"],
  },
  {
    type: "text",
    label: "First Name",
    id: `${prefix}.firstName`,
    autoComplete: "given-name",
    registerOptions: { required: "First name is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Last Name",
    id: `${prefix}.lastName`,
    autoComplete: "family-name",
    registerOptions: { required: "Last name is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "select",
    label: "Marital Status",
    id: `${prefix}.maritalStatus`,
    autoComplete: "",
    registerOptions: { required: "Marital status is required" },
    classes: "sm:col-span-4",
    options: ["Single", "Married", "Divorced", "Widowed"],
  },
  {
    type: "date",
    label: "Date of Birth",
    id: `${prefix}.dateOfBirth`,
    autoComplete: "bday",
    registerOptions: { required: "Date of birth is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Nationality",
    id: `${prefix}.nationality`,
    autoComplete: "nationality",
    registerOptions: { required: "Nationality is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Place of Birth",
    id: `${prefix}.placeOfBirth`,
    autoComplete: "",
    registerOptions: { required: "Place of birth is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "date",
    label: "Date Moved In",
    id: `${prefix}.dateMovedIn`,
    autoComplete: "",
    registerOptions: { required: "Date moved in is required" },
    classes: "sm:col-span-8",
  },
  {
    type: "text",
    label: "Previous Address",
    id: `${prefix}.previousAddress`,
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
    id: `${prefix}.previousDateMovedIn`,
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
    id: `${prefix}.homeownerDetails`,
    autoComplete: "",
    registerOptions: { required: "Homeowner details are required" },
    classes: "sm:col-span-8",
  },
  {
    type: "text",
    label: "Tenant: Rent Payment, Name & Address of Landlord",
    id: `${prefix}.tenantDetails`,
    autoComplete: "",
    registerOptions: { required: "Tenant details are required" },
    classes: "sm:col-span-8",
  },
  {
    type: "tel",
    label: "Contact Number",
    id: `${prefix}.contactNumber`,
    autoComplete: "tel",
    registerOptions: { required: "Contact number is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "email",
    label: "Email Address",
    id: `${prefix}.email`,
    autoComplete: "email",
    registerOptions: { required: "Email address is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "National Insurance Number",
    id: `${prefix}.nationalInsuranceNumber`,
    autoComplete: "",
    registerOptions: { required: "National insurance number is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    label: "Director/Shareholder",
    id: `${prefix}.directorShareholder`,
    autoComplete: "",
    registerOptions: { required: "Director/Shareholder status is required" },
    classes: "sm:col-span-4",
  },
];

export default createPersonalAndFinancialDetailsConfig;
