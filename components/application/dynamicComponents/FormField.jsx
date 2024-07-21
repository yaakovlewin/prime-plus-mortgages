import {
  Checkbox,
  DateInput,
  NumberInput,
  Select,
  TextInput,
} from "./FormInputs";

const FormField = ({ field, register, errors }) => {
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
          classes={field.classes}
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
          classes={field.classes}
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
          classes={field.classes}
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
          classes={field.classes}
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
          classes={field.classes}
        />
      );
    default:
      return null;
  }
};

export default FormField;
