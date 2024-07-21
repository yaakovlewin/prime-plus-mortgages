"use client";
import createFinancialDetailsConfig from "@/js/config/financialFieldsConfig";
import DynamicForm from "../DynamicForm";

export default function FinancialDetailsStage() {
  return (
    <section>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Financial Details Applicant 1:
      </h2>
      <DynamicForm
        configType={createFinancialDetailsConfig}
        hasApplicants={true}
      />
    </section>
  );
}
