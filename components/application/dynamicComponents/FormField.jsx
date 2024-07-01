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
          key={field.id}
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
          key={field.id}
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
          key={field.id}
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
          key={field.id}
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
          key={field.id}
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
