import { get } from "lodash";

const FormTextInput = ({
  label,
  id,
  autoComplete = "off",
  placeholder = "",
  register,
  registerOptions,
  errors,
  classes,
  ...props
}) => {
  const error = get(errors, id);
  return (
    <div className={classes}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        {...register(id, registerOptions)}
        placeholder={placeholder}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
          error ? "border-red-500" : ""
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

const FormNumberInput = ({
  label,
  id,
  register,
  registerOptions,
  errors,
  classes,
  ...props
}) => {
  const error = get(errors, id);
  return (
    <div className={classes}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="number"
        id={id}
        {...register(id, { ...registerOptions, valueAsNumber: true })}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
          error ? "border-red-500" : ""
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

const FormDateInput = ({
  label,
  id,
  register,
  registerOptions,
  errors,
  classes,
  ...props
}) => {
  const error = get(errors, id);
  return (
    <div className={classes}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="date"
        id={id}
        {...register(id, { ...registerOptions, valueAsDate: true })}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
          error ? "border-red-500" : ""
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

const FormCheckbox = ({
  label,
  id,
  register,
  registerOptions,
  errors,
  classes,
  ...props
}) => {
  const error = get(errors, id);
  return (
    <div className={classes}>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          {...register(id, registerOptions)}
          className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${
            error ? "border-red-500" : ""
          }`}
          {...props}
        />
        {label && (
          <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
            {label}
          </label>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

const FormSelect = ({
  label,
  id,
  options,
  register,
  registerOptions,
  errors,
  classes,
  ...props
}) => {
  const error = get(errors, id);
  return (
    <div className={classes}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={id}
        {...register(id, registerOptions)}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
          error ? "border-red-500" : ""
        }`}
        {...props}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export {
  FormCheckbox,
  FormDateInput,
  FormNumberInput,
  FormSelect,
  FormTextInput,
};
