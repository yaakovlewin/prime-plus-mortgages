const personalAndFinancialDetailsConfig = [
  {
    type: "text",
    label: "Title & Full Name",
    id: "fullName",
    autoComplete: "name",
    registerOptions: { required: "Full name is required" },
    span: 6,
  },
  {
    type: "text",
    label: "Gender & Marital Status",
    id: "genderMaritalStatus",
    autoComplete: "",
    registerOptions: { required: "Gender and marital status are required" },
    span: 6,
  },
  {
    type: "date",
    label: "Date of Birth",
    id: "dateOfBirth",
    autoComplete: "bday",
    registerOptions: { required: "Date of birth is required" },
    span: 6,
  },
  {
    type: "text",
    label: "Nationality",
    id: "nationality",
    autoComplete: "nationality",
    registerOptions: { required: "Nationality is required" },
    span: 6,
  },
  {
    type: "text",
    label: "Place of Birth",
    id: "placeOfBirth",
    autoComplete: "",
    registerOptions: { required: "Place of birth is required" },
    span: 6,
  },
  {
    type: "date",
    label: "Date Moved In",
    id: "dateMovedIn",
    autoComplete: "",
    registerOptions: { required: "Date moved in is required" },
    span: 6,
  },
  {
    type: "text",
    label: "Previous Address & Date Moved In",
    id: "previousAddressDateMovedIn",
    autoComplete: "",
    registerOptions: {
      required:
        "Previous address and date moved in are required if less than 3 years at current address",
    },
    span: 6,
  },
  {
    type: "text",
    label: "Homeowner: Value of Property, Lender & Interest Rate",
    id: "homeownerDetails",
    autoComplete: "",
    registerOptions: { required: "Homeowner details are required" },
    span: 6,
  },
  {
    type: "text",
    label: "Tenant: Rent Payment, Name & Address of Landlord",
    id: "tenantDetails",
    autoComplete: "",
    registerOptions: { required: "Tenant details are required" },
    span: 6,
  },
  {
    type: "tel",
    label: "Contact Number",
    id: "contactNumber",
    autoComplete: "tel",
    registerOptions: { required: "Contact number is required" },
    span: 6,
  },
  {
    type: "email",
    label: "Email Address",
    id: "email",
    autoComplete: "email",
    registerOptions: { required: "Email address is required" },
    span: 6,
  },
  {
    type: "text",
    label: "National Insurance Number",
    id: "nationalInsuranceNumber",
    autoComplete: "",
    registerOptions: { required: "National insurance number is required" },
    span: 6,
  },
  {
    type: "text",
    label: "Director/Shareholder",
    id: "directorShareholder",
    autoComplete: "",
    registerOptions: { required: "Director/Shareholder status is required" },
    span: 6,
  },
];

export default personalAndFinancialDetailsConfig;