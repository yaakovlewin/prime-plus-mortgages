import {
  FormCheckbox,
  FormDateInput,
  FormNumberInput,
  FormSelect,
  FormTextInput,
} from "./FormInputs";

const DynamicFormField = ({ field, register, errors }) => {
  switch (field.type) {
    case "text":
      return (
        <FormTextInput
          label={field.label}
          placeholder={field.placeholder}
          id={field.id}
          register={register}
          registerOptions={field.registerOptions}
          errors={errors}
          classes={field.cssClasses}
        />
      );
    case "number":
      return (
        <FormNumberInput
          label={field.label}
          placeholder={field.placeholder}
          id={field.id}
          register={register}
          registerOptions={field.registerOptions}
          errors={errors}
          classes={field.cssClasses}
        />
      );
    case "date":
      return (
        <FormDateInput
          label={field.label}
          id={field.id}
          register={register}
          registerOptions={field.registerOptions}
          errors={errors}
          classes={field.cssClasses}
        />
      );
    case "checkbox":
      return (
        <FormCheckbox
          label={field.label}
          id={field.id}
          register={register}
          registerOptions={field.registerOptions}
          errors={errors}
          classes={field.cssClasses}
        />
      );
    case "select":
      return (
        <FormSelect
          label={field.label}
          id={field.id}
          options={field.options}
          register={register}
          registerOptions={field.registerOptions}
          errors={errors}
          classes={field.cssClasses}
        />
      );
    default:
      return null;
  }
};

export default DynamicFormField;
