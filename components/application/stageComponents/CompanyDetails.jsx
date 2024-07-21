"use client";

import createCompanyDetailsConfig from "@/js/config/companyDetailsConfig";
// components
import DynamicForm from "../DynamicForm";

function CompanyDetails() {
  return (
    <section>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Company Details
      </h2>
      <div>
        <DynamicForm configType={createCompanyDetailsConfig} />
      </div>
    </section>
  );
}

export default CompanyDetails;
