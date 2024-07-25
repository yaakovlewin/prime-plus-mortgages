export const EMPLOYMENT_STATUS_OPTIONS = ["Employed", "Self-Employed"];

export const createEmploymentConfig = (prefix) => [
  {
    type: "select",
    id: `${prefix}.EmploymentStatus`,
    label: "Employment Status",
    autoComplete: "",
    options: EMPLOYMENT_STATUS_OPTIONS,
    registerOptions: { required: "Employment status is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "text",
    id: `${prefix}.JobTitle`,
    label: "Job Title & Description",
    autoComplete: "",
    registerOptions: { required: "Job title & description are required" },
    classes: "sm:col-span-8",
  },
  {
    type: "text",
    id: `${prefix}.EmployerName`,
    label: "Employer’s Name",
    autoComplete: "",
    registerOptions: { required: "Employer’s name is required" },
    classes: "sm:col-span-8",
  },
  {
    type: "text",
    id: `${prefix}.EmployerAddress`,
    label: "Employer’s Address",
    autoComplete: "",
    registerOptions: { required: "Employer’s address is required" },
    classes: "sm:col-span-8",
  },
  {
    type: "text",
    id: `${prefix}.EmployerContactNumber`,
    label: "Employer’s Contact Number",
    autoComplete: "",
    registerOptions: { required: "Employer’s contact number is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "number",
    id: `${prefix}.AnnualGrossIncome`,
    label: "Annual Gross Income (If employed) £",
    autoComplete: "",
    registerOptions: { required: "Annual gross income is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "date",
    id: `${prefix}.StartDateOfEmployment`,
    label: "Start Date of Employment",
    autoComplete: "",
    registerOptions: { required: "Start date of employment is required" },
    classes: "sm:col-span-4",
    watch: true, // This makes it a field to watch
  },
  {
    type: "text",
    id: `${prefix}.PreviousEmployerName`,
    label: "Previous Employer’s Name",
    autoComplete: "",
    registerOptions: {
      required: {
        value: (data) => {
          const startDate = new Date(data[`${prefix}.StartDateOfEmployment`]);
          const currentDate = new Date();
          const employmentDuration =
            (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365);
          return employmentDuration < 1;
        },
        message:
          "Previous employer’s name is required if less than 1 year at current employment",
      },
    },
    dependent: `${prefix}.StartDateOfEmployment`,
    conditional: (value) => {
      const startDate = new Date(value);
      const currentDate = new Date();
      const employmentDuration =
        (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365);
      return employmentDuration < 1;
    },
    classes: "sm:col-span-8",
  },
  {
    type: "text",
    id: `${prefix}.OutstandingLoans`,
    label: "Outstanding Loans (incl. Hire Purchase) or Credit Cards",
    autoComplete: "",
    registerOptions: {
      required: "Outstanding loans or credit cards are required",
    },
    classes: "sm:col-span-8",
  },
];

export default createEmploymentConfig;
