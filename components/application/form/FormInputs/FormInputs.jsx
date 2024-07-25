const getNestedError = (errors, id) => {
  if (!id || !errors) return undefined;
  const keys = id.split(".");
  let error = errors;
  for (const key of keys) {
    error = error[key];
    if (!error) break;
  }
  return error;
};

const TextInput = function TextInputGenerature({
  label,
  id,
  autoComplete = "off",
  placeholder = "",
  register,
  registerOptions,
  errors,
  classes = 6,
  ...inputProps // all other props
}) {
  const error = getNestedError(errors, id);
  return (
    <div className={`${classes}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type="text"
          id={id}
          name={id}
          {...register(id, registerOptions)}
          placeholder={label ? `Enter ${label}` : placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...inputProps} // spread all remaining props
        />
        {error && (
          <p className="text-xs italic text-red-500">{error.message}</p>
        )}
      </div>
    </div>
  );
};

const NumberInput = function NumberInputGenerature({
  label,
  id,
  autoComplete = "off",
  placeholder = "",
  register,
  registerOptions,
  errors,
  classes = 6,
  ...inputProps // all other props
}) {
  const error = getNestedError(errors, id);
  return (
    <div className={`${classes}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type="number"
          id={id}
          name={id}
          {...register(id, registerOptions)}
          placeholder={label ? `Enter ${label}` : placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...inputProps} // spread all remaining props
        />
        {error && (
          <p className="text-xs italic text-red-500">{error.message}</p>
        )}
      </div>
    </div>
  );
};

const DateInput = function DateInputGenerature({
  label,
  id,
  register,
  registerOptions,
  errors,
  classes = 3,
  ...inputProps // all other props
}) {
  const error = getNestedError(errors, id);
  return (
    <div className={`${classes}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type="date"
          id={id}
          name={id}
          {...register(id, registerOptions)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...inputProps} // spread all remaining props
        />
        {error && (
          <p className="text-xs italic text-red-500">{error.message}</p>
        )}
      </div>
    </div>
  );
};

const Checkbox = function CheckboxGenerature({
  label,
  id,
  register,
  registerOptions,
  value,
  errors,
  classes = 3,
  ...inputProps // all other props
}) {
  const error = getNestedError(errors, id);
  return (
    <div className={`flex items-center space-x-3 ${classes}`}>
      <label className="rounded-lg p-2">
        <input
          id={id}
          name={id}
          type="checkbox"
          {...register(id, registerOptions)}
          className="form-checkbox mr-2 h-5 w-5 text-gray-600"
          {...inputProps} // spread all remaining props
        />
        <p className="text-sm text-gray-700">{label}</p>
      </label>
      {error && <p className="text-xs italic text-red-500">{error.message}</p>}
    </div>
  );
};

const Select = function SelectGenerature({
  label,
  id,
  options,
  register,
  registerOptions,
  errors,
  classes = 3,
  ...inputProps // all other props
}) {
  const error = getNestedError(errors, id);
  return (
    <div className={`${classes}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <select
          id={id}
          name={id}
          {...register(id, registerOptions)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
          {...inputProps} // spread all remaining props
        >
          <option value="" className="text-neutral-400">
            Select
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-xs italic text-red-500">{error.message}</p>
        )}
      </div>
    </div>
  );
};

export { Checkbox, DateInput, NumberInput, Select, TextInput };
