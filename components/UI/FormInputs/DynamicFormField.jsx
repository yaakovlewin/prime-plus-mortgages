import { useFormContext } from "react-hook-form";
import {
  FormCheckbox,
  FormDateInput,
  FormNumberInput,
  FormSelect,
  FormTextInput,
} from "./FormInputs";

const DynamicFormField = ({ field }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const commonProps = {
    label: field.label,
    id: field.id,
    placeholder: field.placeholder,
    register: register,
    registerOptions: field.registerOptions || {},
    errors: errors,
    classes: field.cssClasses,
  };

  switch (field.type) {
    case "text":
      return <FormTextInput {...commonProps} />;
    case "number":
      return (
        <FormNumberInput
          {...commonProps}
          registerOptions={{
            ...commonProps.registerOptions,
            valueAsNumber: true,
          }}
        />
      );
    case "date":
      return (
        <FormDateInput
          {...commonProps}
          registerOptions={{
            ...commonProps.registerOptions,
            valueAsDate: true,
          }}
        />
      );
    case "checkbox":
      return <FormCheckbox {...commonProps} />;
    case "select":
      return <FormSelect {...commonProps} options={field.options} />;
    default:
      return null;
  }
};

export default DynamicFormField;
