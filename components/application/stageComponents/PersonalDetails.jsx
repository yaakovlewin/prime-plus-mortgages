"use client";

import createPersonalDetailsConfig from "@/js/config/personalDetailsConfig";
// components
import DynamicForm from "../DynamicForm";

export default function PersonalDetails() {
  return (
    <section>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        Personal Details
      </h2>
      <DynamicForm
        configType={createPersonalDetailsConfig}
        needsAddButton={true}
        hasApplicants={true}
      />
    </section>
  );
}
