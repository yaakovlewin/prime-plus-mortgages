import createEmploymentConfig from "@/js/config/employmentFeildsConfig";
import createFinancialDetailsConfig from "@/js/config/financialFieldsConfig";
import createPersonalDetailsConfig from "@/js/config/personalDetailsConfig";
import createPropertyDetailsConfig from "@/js/config/propertyFieldsConfig";
import createCompanyDetailsConfig from "./companyDetailsConfig";

export const buyToLetConfig = {
  steps: [
    {
      id: 1,
      name: "Company Details",
      status: "current",
      sections: ["companyDetails"],
    },
    {
      id: 2,
      name: "Personal Details",
      status: "",
      sections: ["personalDetails"],
    },
    {
      id: 3,
      name: "Property Details",
      status: "",
      sections: ["propertyDetails"],
    },
    {
      id: 4,
      name: "Financial Details",
      status: "",
      sections: ["financialDetails"],
    },
  ],
  sections: [
    {
      id: "companyDetails",
      title: "Company Details",
      fields: createCompanyDetailsConfig(),
    },
    {
      id: "personalDetails",
      title: "Personal Details",
      canAdd: true,
      canRemove: true,
      hasApplicants: true,
      fields: createPersonalDetailsConfig("applicants"),
    },
    {
      id: "propertyDetails",
      title: "Property Details",
      fields: createPropertyDetailsConfig(),
    },
    {
      id: "financialDetails",
      title: "Financial Details",
      fields: createFinancialDetailsConfig("financial"),
    },
  ],
};

export const firstTimeBuyerConfig = {
  steps: [
    {
      id: 1,
      name: "Personal Details",
      status: "current",
      sections: ["personalDetails"],
    },
    {
      id: 2,
      name: "Employment Details",
      status: "",
      sections: ["employmentDetails"],
    },
    {
      id: 3,
      name: "Financial Details",
      status: "",
      sections: ["financialDetails"],
    },
  ],
  sections: [
    {
      id: "personalDetails",
      title: "Personal Details",
      canAdd: true,
      canRemove: true,
      hasApplicants: true,
      minInstances: 1,
      fields: createPersonalDetailsConfig(`applicants`),
    },
    {
      id: "employmentDetails",
      title: "Employment Details",
      canAdd: true,
      canRemove: true,
      hasApplicants: true,
      fields: createEmploymentConfig("applicants"),
    },
    {
      id: "financialDetails",
      title: "Financial Details",
      fields: createFinancialDetailsConfig("financial"),
    },
  ],
};
