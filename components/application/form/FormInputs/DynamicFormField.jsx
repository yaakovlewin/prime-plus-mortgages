import {
  Checkbox,
  DateInput,
  NumberInput,
  Select,
  TextInput,
} from "./FormInputs";

const DynamicFormField = ({ field, register, errors }) => {
  switch (field.type) {
    case "text":
      return (
        <TextInput
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
        <NumberInput
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
        <DateInput
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
        <Checkbox
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
        <Select
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
