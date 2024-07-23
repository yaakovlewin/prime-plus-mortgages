const prefix = "portfolio";

export const createPortfolioConfig = (prefix) => [
  {
    type: "number",
    id: `${prefix}.NumberOfPropertiesOwned`,
    label: "Number of Properties Owned",
    autoComplete: "",
    registerOptions: { required: "Number of properties owned is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "number",
    id: `${prefix}.TotalValueOfProperties`,
    label: "Total Value of Properties £",
    autoComplete: "",
    registerOptions: { required: "Total value of properties is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "number",
    id: `${prefix}.TotalMortgageOutstanding`,
    label: "Total Mortgage Outstanding £",
    autoComplete: "",
    registerOptions: { required: "Total mortgage outstanding is required" },
    classes: "sm:col-span-4",
  },
  {
    type: "number",
    id: `${prefix}.TotalMonthlyMortgagePayments`,
    label: "Total Monthly Mortgage Payments £",
    autoComplete: "",
    registerOptions: {
      required: "Total monthly mortgage payments are required",
    },
    classes: "sm:col-span-4",
  },
  {
    type: "number",
    id: `${prefix}.TotalMonthlyRentalIncome`,
    label: "Total Monthly Rental Income £",
    autoComplete: "",
    registerOptions: { required: "Total monthly rental income is required" },
    classes: "sm:col-span-4",
  },
];

export default createPortfolioConfig;
