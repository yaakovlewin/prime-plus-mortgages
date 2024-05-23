const TextInput = function TextInputGenerature({
  label,
  id,
  autoComplete = "off",
  placeholder = "",
  register,
  registerOptions,
  errors,
  span = 6,
  ...inputProps // all other props
}) {
  return (
    <div className={`sm:col-span-${span}`}>
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
        {errors && id && (
          <p className="text-xs italic text-red-500">
            {id.includes(".")
              ? errors[id.split(".")[0]]?.[id.split(".")[1]]?.message
              : errors[id]?.message}
          </p>
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
  span = 3,
  ...inputProps // all other props
}) {
  return (
    <div className={`sm:col-span-${span}`}>
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
        {errors && id && (
          <p className="text-xs italic text-red-500">
            {id.includes(".")
              ? errors[id.split(".")[0]]?.[id.split(".")[1]]?.message
              : errors[id]?.message}
          </p>
        )}
      </div>
    </div>
  );
};

const Checkbox = function CheckboxGenerature({
  label,
  id,
  onChange,
  checked,
  register,
  registerOptions,
  errors,
  span = 3,
  ...inputProps // all other props
}) {
  return (
    <div className={`flex items-center space-x-3 sm:col-span-${span}`}>
      <label className="rounded-lg p-2">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            onChange(e);
            register(id, registerOptions).onChange(e); // Call the register onChange
          }}
          className="form-checkbox mr-2 h-5 w-5 text-gray-600"
          {...inputProps} // spread all remaining props
        />
        <span className="text-sm text-gray-700">{label}</span>
      </label>
      {errors && id && (
        <p className="text-xs italic text-red-500">
          {id.includes(".")
            ? errors[id.split(".")[0]]?.[id.split(".")[1]]?.message
            : errors[id]?.message}
        </p>
      )}
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
  span = 3,
  ...inputProps // all other props
}) {
  return (
    <div className={`sm:col-span-${span}`}>
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
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
        {errors && id && (
          <p className="text-xs italic text-red-500">
            {id.includes(".")
              ? errors[id.split(".")[0]]?.[id.split(".")[1]]?.message
              : errors[id]?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export { Checkbox, DateInput, Select, TextInput };
