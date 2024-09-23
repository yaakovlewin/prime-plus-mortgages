import generateCompanyDetailsConfig from "@/js/config/formFields/generateCompanyDetailsConfig";
import generateEmploymentFieldsConfig from "@/js/config/formFields/generateEmploymentFieldsConfig";
import generateFinancialFieldsConfig from "@/js/config/formFields/generateFinancialFieldsConfig";
import generatePersonalDetailsConfig from "@/js/config/formFields/generatePersonalDetailsConfig";
import generatePropertyDetailsConfig from "@/js/config/formFields/generatePropertyDetailsConfig";
import generatePortfolioFieldsConfig from "./formFields/generatePortfolioFieldsConfig";

export const buyToLetConfig = {
  formType: "Buy To Let",
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
    {
      id: 5,
      name: "Protflio Details",
      status: "",
      sections: ["portfolioDetails"],
    },
  ],
  sections: [
    {
      id: "companyDetails",
      title: "Company Details",
      fields: generateCompanyDetailsConfig,
    },
    {
      id: "personalDetails",
      title: "Personal Details",
      canAdd: true,
      canRemove: true,
      hasApplicants: true,
      minInstances: 1,
      fields: generatePersonalDetailsConfig,
    },
    {
      id: "propertyDetails",
      title: "Property Details",
      fields: generatePropertyDetailsConfig,
    },
    {
      id: "financialDetails",
      title: "Financial Details",
      hasApplicants: true,
      minInstances: 1,
      fields: generateFinancialFieldsConfig,
    },
    {
      id: "portfolioDetails",
      title: "Portfolio Details",
      fields: generatePortfolioFieldsConfig,
    },
  ],
};

export const remortgageConfig = {
  formType: "Remortgage",
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
      fields: generatePersonalDetailsConfig,
    },
    {
      id: "employmentDetails",
      title: "Employment Details",
      hasApplicants: true,
      minInstances: 1,
      fields: generateEmploymentFieldsConfig,
    },
    {
      id: "financialDetails",
      title: "Financial Details",
      hasApplicants: true,
      minInstances: 1,
      fields: generateFinancialFieldsConfig,
    },
  ],
};

export const firstTimeBuyerConfig = {
  formType: "First Time Buyer",
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
      fields: generatePersonalDetailsConfig,
    },
    {
      id: "employmentDetails",
      title: "Employment Details",
      hasApplicants: true,
      minInstances: 1,
      fields: generateEmploymentFieldsConfig,
    },
    {
      id: "financialDetails",
      title: "Financial Details",
      fields: generateFinancialFieldsConfig,
    },
  ],
};
