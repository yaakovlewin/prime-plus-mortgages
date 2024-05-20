const companyDetailsConfig = [
    {
        type: "text",
        label: "Company Name",
        id: "companyName",
        registerOptions: { required: "Company name is required" },
        span: 3,
    },
    {
        type: "text",
        label: "Company Registration Number",
        id: "registrationNumber",
        registerOptions: { required: "Registration number is required" },
        span: 3,
    },
    {
        type: "date",
        label: "Date of Incorporation",
        id: "incorporationDate",
        registerOptions: { required: "Incorporation date is required" },
        span: 3,
    }
];

export default companyDetailsConfig;
