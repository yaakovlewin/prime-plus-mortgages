"use client";

// components
import createPropertyDetailsConfig from "@/js/config/propertyFieldsConfig";
import DynamicForm from "../DynamicForm";

export default function EmploymentDetails() {
  return (
    <section>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Property Details
      </h2>
      <DynamicForm configType={createPropertyDetailsConfig} />
    </section>
  );
}
