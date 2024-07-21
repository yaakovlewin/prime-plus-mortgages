// DynamicForm.jsx
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import RenderDynamicFields from "./DynamicFields";

const DynamicForm = ({ config }) => {
  const { control } = useFormContext();

  return (
    <div>
      {config.sections.map((section) => (
        <Section key={section.id} section={section} control={control} />
      ))}
    </div>
  );
};

const Section = ({ section, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "applicants",
  });

  const addItem = () => {
    append({});
  };

  console.log(section);

  return (
    <div key={section.id}>
      <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
        {section.title}
      </h2>
      {section.hasApplicants ? (
        fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <h3 className="mt-5 text-sm font-semibold leading-6 text-gray-900">
              {section.title} {index + 1}
            </h3>
            <RenderDynamicFields
              fields={section.fields}
              prefix={`${section.id}.${index}`}
              index={index}
              remove={section.canRemove ? remove : undefined}
            />
          </React.Fragment>
        ))
      ) : (
        <RenderDynamicFields fields={section.fields} prefix={section.id} />
      )}
      {section.canAdd && (
        <button type="button" onClick={addItem}>
          Add {section.title}
        </button>
      )}
    </div>
  );
};

export default DynamicForm;
