const RESIDENCE_STATUS_OPTIONS = ["Homeowner", "Tenant"];
const createFinancialDetailsConfig = (prefix) => [
  {
    type: "select",
    label: "Residence Status",
    id: `${prefix}.ResidenceStatus`,
    autoComplete: "",
    registerOptions: { required: "Residence status is required" },
    classes: "sm:col-span-4",
    options: RESIDENCE_STATUS_OPTIONS,
    watch: true,
  },
  {
    type: "text",
    label: "Homeowner: Value of Property, Lender & Interest Rate",
    id: `${prefix}.HomeownerDetails`,
    autoComplete: "",
    registerOptions: { required: "Homeowner details are required" },
    classes: "sm:col-span-8",
    dependent: `${prefix}.ResidenceStatus`,
    conditional: "Homeowner",
  },
  {
    type: "text",
    label: "Tenant: Rent Payment, Name & Address of Landlord",
    id: `${prefix}.TenantDetails`,
    autoComplete: "",
    registerOptions: { required: "Tenant details are required" },
    classes: "sm:col-span-8",
    dependent: `${prefix}.ResidenceStatus`,
    conditional: "Tenant",
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
    label: "Director/Shareholder",
    id: `${prefix}.DirectorShareholder`,
    autoComplete: "",
    registerOptions: { required: "Director/Shareholder status is required" },
    classes: "sm:col-span-4",
  },
];

export default createFinancialDetailsConfig;
