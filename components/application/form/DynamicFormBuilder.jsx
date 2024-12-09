"use client";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import RenderDynamicFields from "./RenderDynamicFields";

const DynamicFormBuilder = ({ configs }) => {
  const { control } = useFormContext();

  return (
    <div>
      {configs.sections.map((section) => (
        <Section key={section.id} section={section} control={control} />
      ))}
    </div>
  );
};

const Section = ({ section, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "applicants",
    rules: { minLength: section.minInstances || 0 },
  });

  const addApplicant = () => {
    append({});
  };

  const removeItem = (index) => {
    if (fields.length > (section.minInstances || 0)) {
      remove(index);
    }
  };

  return (
    <div key={section.id}>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        {section.title}
      </h2>
      {section.hasApplicants ? (
        fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <h3 className="mt-5 text-sm font-semibold leading-6 text-gray-900">
              Applicant {index + 1}
            </h3>
            <RenderDynamicFields
              configType={section.fields}
              prefix={`applicants.${index}.${section.id}`}
              index={index}
              remove={
                section.canRemove
                  ? index >= (section.minInstances || 0)
                    ? () => removeItem(index)
                    : undefined
                  : undefined
              }
            />
          </React.Fragment>
        ))
      ) : (
        <RenderDynamicFields configType={section.fields} prefix={section.id} />
      )}
      {section.canAdd && (
        <button type="button" onClick={addApplicant}>
          Add Applicant
        </button>
      )}
    </div>
  );
};

export default DynamicFormBuilder;
