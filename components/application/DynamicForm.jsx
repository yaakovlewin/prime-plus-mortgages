import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import RenderDynamicFields from "./DynamicFields";

const DynamicForm = ({
  configType,
  hasApplicants = false,
  needsAddButton = false,
}) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "applicants",
  });

  const addApplicant = () => {
    append({});
  };

  return (
    <div>
      {hasApplicants ? (
        fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <h1 className="mt-10 text-base font-semibold leading-7 text-gray-900">
              Applicant {index + 1}
            </h1>
            <RenderDynamicFields
              configType={configType}
              prefix={`applicants.${index}`}
              index={index}
              remove={remove}
            />
          </React.Fragment>
        ))
      ) : (
        <RenderDynamicFields configType={configType} prefix="" />
      )}
      {needsAddButton && (
        <button type="button" onClick={addApplicant}>
          Add Applicant
        </button>
      )}
    </div>
  );
};

export default DynamicForm;
