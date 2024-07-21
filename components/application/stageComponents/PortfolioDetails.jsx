"use client";
import createPortfolioConfig from "@/js/config/portfolioFieldsConfig";

// components
import DynamicForm from "../DynamicForm";

export default function EmploymentDetails() {
  return (
    <section>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Portfolio Details
      </h2>
      <DynamicForm configType={createPortfolioConfig} />
    </section>
  );
}
